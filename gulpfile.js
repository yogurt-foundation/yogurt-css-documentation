const path = require('path')
const autoPrefixer = require('autoprefixer')
const gulp = require('gulp')
const concat = require('gulp-concat')
const clean = require('gulp-clean')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const postcss = require('gulp-postcss')
const webpack = require('webpack-stream')
const purgeCss = require('gulp-purgecss')

const pkg = require('./package.json')


gulp.task('js', () => gulp.src(['js/main.js'])
  .pipe(webpack({
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    performance: {
      hints: false
    },
    resolve: {
      modules: [
        'js',
        'node_modules'
      ]
    },
    module: {
      rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      }]
    }
  }))
  .pipe(rename('pre.js'))
  .pipe(gulp.dest('./dist'))
)

gulp.task('js-bundle', () => {
  return gulp.src([
      'pwa/krugurt+cache.min.js',
      'pwa/krugurt+utility.js',
      'dist/pre.js'
    ])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('css', () => gulp.src(['css/main.scss'])
  .pipe(sass())
  .pipe(postcss([autoPrefixer()]))
  .pipe(rename('pre.css'))
  .pipe(gulp.dest('./dist'))
)
// (development)
gulp.task('move-css', () => {
  return gulp.src('./dist/pre.css')
    .pipe(rename('main.css'))
    .pipe(gulp.dest('./dist'))
})
// (production)
gulp.task('purge-css', () => {
  return gulp.src('./dist/pre.css')
    .pipe(purgeCss({
        content: [
          'dist/**/*.html',
          'dist/*.js'
        ],
        // make compatible for `Yogurt CSS framework`
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        whitelistPatterns: [/-webkit-scrollbar-thumb$/],
        keyframes: true
    }))
    .pipe(rename('main.css'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('service-worker', () => {
  return gulp.src([
      'pwa/krugurt+init.min.js',
      'pwa/krugurt+sw.min.js'
    ])
    .pipe(gulp.dest('./dist'))
})

gulp.task('codemirror', () => {
  return gulp.src([
      'cm/bright.css',
      'cm/codemirror.css',
      'cm/codemirror.js',
      'cm/css.js',
      'cm/dark.css',
      'cm/default.css',
      'cm/foldcode.js',
      'cm/htmlmixed.js',
      'cm/javascript.js',
      'cm/jslint.js',
      'cm/settings.js',
      'cm/template.js',
      'cm/xml.js'
    ])
    .pipe(gulp.dest('./dist/codemirror'))
})

gulp.task('app-manifest', () => {
  return gulp.src([
      'pwa/manifest.json'
    ])
    .pipe(gulp.dest('./dist'))
})

gulp.task('remove-residual-files', () => {
  return gulp.src([
      'dist/pre.css',
      'dist/pre.js'
    ], {
      read: false,
      allowEmpty: true
    })
    .pipe(clean())
})

gulp.task('build',
  gulp.series(
    'js',
    'js-bundle',
    'css',
    'service-worker',
    'app-manifest',
    'codemirror'
  )
)

gulp.task('default', () => {

  gulp.watch([
    'js/**.*',
    'js/*/**.*'
  ], gulp.series('js'))

  gulp.watch([
    'css/**.*'
  ], gulp.series('css'))

  gulp.series(
    'js',
    'js-bundle',
    'css',
    'service-worker',
    'app-manifest'
  )()
})
