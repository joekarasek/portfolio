// var buildDir = 'build/';
var buildDir = 'docs/';

module.exports = {
  browserSync: {
    enabled: true,
    port: 3050,
    watchFiles: [
        'src/_patterns/**/*.twig'
    ],
    baseDir: buildDir,
    startPath: '/',
    openBrowserAtStart: false,
    // requires above to be true; allows non-default browser to open
    browser: [
      'Google Chrome',
    ],
    reloadDelay: 50,
    reloadDebounce: 750,
  },
  css: {
    enabled: true,
    source: [
      'src/scss/styles.scss',
      'src/scss/font-awesome.min.css'
    ],
    dependencies: [],
    includePaths: [
      '../_patterns',
    ],
    dest: buildDir + 'css/',
    dependenciesDest: buildDir + 'css/',
    watchPaths: [
      'src/scss/**/*.scss'
    ],
    lint: false,
    // outputStyles maybe 'expanded', 'compressed', 'nested'
    outputStyle: 'expanded',
    sourceMapEmbed: true,
    sourceComments: false,
    autoPrefixerBrowsers: [
      'last 2 versions',
      'IE >= 10',
    ],
    flattenOutput: true,
    sassdoc: {
      enabled: false,
      dest: 'sassdoc',
      verbose: false,
      exclude: [],
    },
  },
  js: {
    enabled: true,
    source: 'src/js/*.js',
    dest: buildDir + 'js/',
    destFileName: 'scripts.js',
    babel: false,
    uglify: false,
    sourceMap: false,
    includePaths: [],
    eslint: {
      enabled: false,
      sources: [
        'src/js/**/*.js',
      ],
    },
    documentationJs: {
      enabled: false,
      sources: [
        'src/js/**/*.js',
      ],
      dest: 'jsdoc',
      // Either 'html', 'md', or 'json'
      format: 'html',
    },
  },
  html: {
    enabled: true,
    sources: [
      'src/index.twig',
    ],
    dest: buildDir,
    lint: true,
    twig: {
      enabled: true,
      baseDir: 'src/_patterns',
      dataSrc: [
        'src/_data/data.json' +
        '',
      ],
    },
  },
  assets: {
    //clean pipe, no compiling
    enabled: true,
    sources: [
        'src/assets/**/*.*',
        'src/**/*.pdf',
        'src/fonts/*.*',
    ],
    dest: buildDir + 'assets/',
  }
};