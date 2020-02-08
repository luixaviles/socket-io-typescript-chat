var gulp    = require('gulp')
  , jshint  = require('gulp-jshint')
  , nodemon = require('./index')
//  , path = require('path')

gulp.task('lint', function (){
  return gulp.src('./*/**.js')
    .pipe(jshint())
})

gulp.task('cssmin', function (done){
  done();
})

gulp.task('afterstart', function (done){
  console.log('proc has finished restarting!');
  done();
})

gulp.task('test', gulp.series('lint', function (done){
  var stream = nodemon({
      nodemon: require('nodemon')
    , script: './server.js'
    , verbose: true
    , env: {
        'NODE_ENV': 'development'
      }
    , watch: './'
    , ext: 'js coffee'
    , done: done
  })

  stream
    .on('restart', 'cssmin')
    .on('crash', function (){
      console.error('\nApplication has crashed!\n')
      console.error('Restarting in 2 seconds...\n')
      setTimeout(function () {
        stream.emit('restart')
      }, 2000)
    })
}))
