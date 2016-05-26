// FOUNDATION FOR APPS TEMPLATE GULPFILE
// -------------------------------------
// This file processes all of the assets in the "client" folder, combines them with the Foundation for Apps assets, and outputs the finished files in the "build" folder as a finished app.

// 1. LIBRARIES
// - - - - - - - - - - - - - - -


var $        = require('gulp-load-plugins')();
var argv     = require('yargs').argv;
var gulp     = require('gulp');
var rimraf   = require('rimraf');
var router   = require('front-router');
var sequence = require('run-sequence');

// Check for --production flag
var isProduction = !!(argv.production),
    isDevelopment = !!(argv.development);

// 2. FILE PATHS
// - - - - - - - - - - - - - - -

var paths = {
  assets: [
    './client/**/*.*',
    '!./client/templates/**/*.*',
    '!./client/assets/{scss,js}/**/*.*'
  ],
  // Sass will check these folders for files when you use @import.
  sass: [
    'client/assets/scss',
    'bower_components/foundation-apps/scss'
  ],
  // These files include Foundation for Apps and its dependencies
  foundationJS: [
    'bower_components/fastclick/lib/fastclick.js',
    'bower_components/viewport-units-buggyfill/viewport-units-buggyfill.js',
    'bower_components/tether/tether.js',
    'bower_components/hammerjs/hammer.js',
    'bower_components/angular/angular.js',
    'bower_components/angular-animate/angular-animate.js',
    'bower_components/angular-ui-router/release/angular-ui-router.js',
    'bower_components/angular-touch/angular-touch.js',
    'bower_components/angular-carousel/dist/angular-carousel.js',
    // 'bower_components/foundation-apps/js/vendor/**/*.js',
    // 'bower_components/foundation-apps/js/angular/**/*.js',
    // 'bower_components/foundation-apps/js/angular/components/**/*.js',
    'bower_components/foundation-apps/js/angular/services/**/*.js',
    'client/assets/js/app.foundation.js',
    // 'bower_components/foundation-apps/js/angular/*.js',
    // '!bower_components/foundation-apps/js/angular/foundation.js',
    // '!bower_components/foundation-apps/js/angular/app.js'
  ],
  // These files are for your app's JavaScript
  appJS: [
    'client/assets/js/app.module.js',
    'client/assets/js/**/*.module.js',
    'client/assets/js/**/*.directive.js',
    'client/assets/js/**/*.service.js',
    'client/assets/js/**/*.factorie.js',
    'client/assets/js/**/*.controller.js'
  ]
}

// 3. TASKS
// - - - - - - - - - - - - - - -

// Cleans the build directory
gulp.task('clean', function(cb) {
  rimraf('./build', cb);
  // rimraf('./build', function (){
  //   rimraf('./client/assets/js/_tmp', cb);
  // });
});

// Copies everything in the client folder except templates, Sass, and JS
gulp.task('copy', function() {
  gulp.src('client/assets/js/defer.js')
    .pipe(gulp.dest('./blog/content/themes/panda/assets/js'))
    .pipe(gulp.dest('./build/assets/js'));

  return gulp.src(paths.assets, {
    base: './client/'
  })
    .pipe($.imagemin())
    .pipe(gulp.dest('./build'))
  ;
});

// Copies your app's page templates and generates URLs for them
gulp.task('copy:templates', function() {
  return gulp.src('./client/templates/**/*.html')
    .pipe(router({
      path: 'client/assets/js/_tmp/routes.js',
      root: 'client'
    }))
    .pipe(gulp.dest('./build/templates'))
  ;
});

// Compiles the Foundation for Apps directive partials into a single JavaScript file
gulp.task('copy:foundation', function(cb) {
  // gulp.src('bower_components/foundation-apps/js/angular/components/**/*.html')
  //   .pipe($.ngHtml2js({
  //     prefix: 'components/',
  //     moduleName: 'foundation',
  //     declareModule: false
  //   }))
  //   .pipe($.uglify())
  //   .pipe($.concat('templates.js'))
  //   //.pipe(gulp.dest('./build/assets/js'))
  //   .pipe(gulp.dest('./client/assets/js/_tmp/'))
  // ;

  // Iconic SVG icons
  // gulp.src('./bower_components/foundation-apps/iconic/**/*')
  //   .pipe(gulp.dest('./build/assets/img/iconic/'))
  // ;

  cb();
});


gulp.task('copy:app', function(cb) {
  gulp.src('client/templates/partials/**/*.html')
    .pipe($.ngHtml2js({
      prefix: 'templates/partials/',
      moduleName: '🐼',
      declareModule: false
    }))
    .pipe($.uglify())
    .pipe($.concat('templates.app.js'))
    //.pipe(gulp.dest('./build/assets/js'))
    .pipe(gulp.dest('./client/assets/js/_tmp/'))
  ;

  cb();
});

// Compiles Sass
gulp.task('sass', function () {
  var minifyCss = $.if(isProduction, $.minifyCss());

  return gulp.src('client/assets/scss/app.scss')
    .pipe($.sass({
      includePaths: paths.sass,
      outputStyle: (isProduction ? 'compressed' : 'nested'),
      errLogToConsole: true
    }))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie 10']
    }))
    .pipe(minifyCss)
    .pipe(gulp.dest('./blog/content/themes/panda/assets/css'))
    .pipe(gulp.dest('./build/assets/css/'));
  ;
});

gulp.task('appcache', function () {
  var manifest = $.manifest({
    hash: true,
    preferOnline: true,
    network: ['*'],
    filename: 'panda.manifest',
    exclude: 'panda.manifest'
  });

  return gulp.src(['build/**/*'], { base: './' })
    .pipe(manifest)
    .pipe(gulp.dest('build'));
});

// Minify Html
gulp.task('minify:Html', function() {
  var htmlMin = $.if(!isProduction, $.htmlmin({
    collapseWhitespace: true,
    // minifyCSS: true,
    // minifyJS: true,
    // removeComments: true
  }));

  return gulp.src('build/**/*.html')
    .pipe(htmlMin)
    .pipe(gulp.dest('./build/'))
});

// Compiles and copies the Foundation for Apps JavaScript, as well as your app's custom JS
gulp.task('uglify', ['uglify:foundation', 'uglify:app', 'uglify:vendors'])

gulp.task('uglify:foundation', function(cb) {
  var uglify = $.if(isProduction, $.uglify()
    .on('error', function (e) {
      console.log(e);
    }));

  return gulp.src(paths.foundationJS)
    .pipe(uglify)
    .pipe($.concat('foundation.js'))
    // .pipe(gulp.dest('./build/assets/js/'))
    .pipe(gulp.dest('./client/assets/js/_tmp/'))
  ;
});

gulp.task('uglify:vendors', function() {
  var uglify = $.if(isProduction, $.uglify()
    .on('error', function (e) {
      console.log(e);
    }));

  return gulp.src(['client/assets/js/_tmp/*.js'])
    .pipe(uglify)
    .pipe($.concat('vendors.js'))
    .pipe(gulp.dest('./build/assets/js/'))
  ;
});

gulp.task('uglify:app', function() {
  var uglify = $.if(isProduction, $.uglify()
    .on('error', function (e) {
      console.log(e);
    }));

  return gulp.src(paths.appJS)
    .pipe(uglify)
    .pipe($.concat('app.js'))
    .pipe(gulp.dest('./build/assets/js/'))
  ;
});

// Starts a test server, which you can view at http://localhost:8079
gulp.task('server', ['build'], function() {
  var webserver = $.if(!isProduction, $.webserver({
      port: process.env.PORT || 8079,
      host: 'localhost',
      fallback: 'index.html',
      livereload: false,
      open: false
    })
  );

  gulp.src('./build')
    .pipe(webserver)
  ;
});

// Builds your entire app once, without starting a server
gulp.task('build', function(cb) {
  sequence('clean', ['copy', 'copy:foundation', 'sass', 'uglify'], 'copy:templates', 'minify:Html', 'appcache', cb);
});

gulp.task('production', ['build']);

// Default task: builds your app, starts a server, and recompiles assets when they change
gulp.task('default', ['server'], function () {

  if ( ! isDevelopment)
    return;

  gulp.watch(['./client/assets/scss/**/*', './scss/**/*'], ['sass']);
  gulp.watch(['./client/assets/js/**/*', './js/**/*'], ['uglify:app']);
  gulp.watch(['./client/**/*.*', '!./client/templates/**/*.*', '!./client/assets/{scss,js}/**/*.*'], ['copy']);
  gulp.watch(['./client/templates/**/*.html'], ['copy:templates']);
});
