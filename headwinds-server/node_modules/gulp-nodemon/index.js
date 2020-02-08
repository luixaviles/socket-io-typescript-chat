'use strict'

var nodemon
  , colors  = require('colors')
  , gulp    = require('gulp')
  , cp      = require('child_process')
  , bus     = require('nodemon/lib/utils/bus')
  , path    = require('path')

module.exports = function (options) {
  options = options || {};

  // plug nodemon
  if (options.nodemon && typeof options.nodemon === 'function') {
    nodemon = options.nodemon
    delete options.nodemon
  } else {
    nodemon = require('nodemon')
  }

  // Our script
  var script            = nodemon(options)
    , originalOn        = script.on
    , originalListeners = bus.listeners('restart')

  // Allow for injection of tasks on file change
  if (options.tasks) {
    // Remove all 'restart' listeners
    bus.removeAllListeners('restart')

    // Place our listener in first position
    bus.on('restart', function (files){
      if (!options.quiet) nodemonLog('running tasks...')

      if (typeof options.tasks === 'function') run(options.tasks(files))
      else run(options.tasks)
    })

    // Re-add all other listeners
    for (var i = 0; i < originalListeners.length; i++) {
      bus.on('restart', originalListeners[i])
    }
  }

  // Capture ^C
  process.once('SIGINT', function () {
    script.emit('quit')
    script.quitEmitted = true
  })
  script.on('exit', function () {
    // Ignore exit event during restart
    if (script.quitEmitted) {
      // Properly signal async completion by calling the callback provided by gulp
      if (typeof options.done === "function") {
        options.done()
      }

      process.exit(0)
    }
  })

  // Forward log messages and stdin
  script.on('log', function (log){
    nodemonLog(log.colour)
  })

  // Shim 'on' for use with gulp tasks
  script.on = function (event, tasks){
    var tasks = Array.prototype.slice.call(arguments)
      , event = tasks.shift()

    if (event === 'change') {
      script.changeTasks = tasks
    } else {
      for (var i = 0; i < tasks.length; i++) {
        void function (tasks){
          if (tasks instanceof Function) {
            originalOn(event, tasks)
          } else {
            originalOn(event, function (){
              if (Array.isArray(tasks)) {
                tasks.forEach(function (task){
                  run(task)
                })
              } else run(tasks)
            })
          }
        }(tasks[i])
      }
    }

    return script
  }

  return script

  // Synchronous alternative to gulp.run()
  function run(tasks) {
    if (typeof tasks === 'string') tasks = [tasks]
    if (tasks.length === 0) return
    if (!(tasks instanceof Array)) throw new Error('Expected task name or array but found: ' + tasks)
    var gulpPath = path.join(process.cwd(), 'node_modules/.bin/')
    var gulpCmd = path.join(gulpPath, process.platform === 'win32' ? 'gulp.cmd' : 'gulp')
    var options = { stdio: [0, 1, 2] }
    if (process.platform === 'win32') options.shell = true
    cp.spawnSync(gulpCmd, tasks, options)
  }
}

function nodemonLog(message){
  console.log('[' + new Date().toString().split(' ')[4].gray + '] ' + message)
}
