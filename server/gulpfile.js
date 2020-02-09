var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  livereload = require('gulp-livereload'),
  ts = require('gulp-typescript');


var tsProject = ts.createProject("tsconfig.json");

gulp.task("build", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("./dist"));
});

gulp.task('default', gulp.series('build'))


gulp.task('serve', function() {
  gulp.watch('./**/*.ts');

  livereload.listen();
  // make sure you have installed ts-node via npm i ts-node
  nodemon({
    exec: 'ts-node ./src/index.ts',
    ext: 'ts'
  }).on('restart', function() {
    setTimeout(function() {
      console.log('reload!');
      livereload.reload();
    }, 500);
  });
});

gulp.task('watch', gulp.series('build', 'serve'))