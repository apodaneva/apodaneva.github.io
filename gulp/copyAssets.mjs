import gulp from 'gulp';

const copySvg = () =>
  gulp.src('source/img/svg/*.svg', {base: 'source'})
      .pipe(gulp.dest('build'));

const copyImages = () =>
  gulp.src('source/img/*.{png,jpg,webp}', {base: 'source'})
      .pipe(gulp.dest('build'));

const copy = () =>
  gulp.src([
    'source/**.html',
    'source/fonts/**',
    'source/favicon/**',
    'source/files/**'
  ], {
    base: 'source',
  })
      .pipe(gulp.dest('build'));

export {copy, copySvg, copyImages};
