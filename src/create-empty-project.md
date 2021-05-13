---
id: create-empty-project
title: Create Empty Project
description: Get your hands dirty by creating an empty Yogurt project from scratch.
topic:  Customization
layout: default
---

> Customization

# Create Empty Project

These steps will help you understand the basic idea of how to install and configure the preprocessor and how to remove unused CSS classes from Yogurt.

<y class="mt-4 mb-2 mx-4 p-3 border-l-8 border-orange-600 text-sm text-orange-600 (dark)text-orange-500 bg-orange-200 (dark)bg-orange-900">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  Just to be sure you have
  <a href="https://nodejs.org/en/"
     target="_blank"
     rel="noopener"
     title="Download NodeJS">
    NodeJS
  </a> installed.
</y>

<y class="mt-0 mb-4 mx-4 p-3 border-l-8 border-orange-600 text-sm text-orange-600 (dark)text-orange-500 bg-orange-200 (dark)bg-orange-900">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  Require Sass/SCSS preprocessor to use the
  <strong>
    @extend
  </strong>
  directive. (See
  <a href="/installation/#using-yogurt-via-cli">
    Using Yogurt via CLI
  </a> without doing it yourself.)
</y>

## Let's Get Started

Create a new empty project directory.

```bash
$ mkdir new-project
$ cd new-project
# YARN
$ yarn init -y
# NPM
$ npm i init -y
```

Install mandatory `gulp` node modules.

```bash
# YARN
$ yarn add gulp gulp-sass gulp-sass-glob gulp-postcss gulp-purgecss gulp-rename autoprefixer --dev
# NPM
$ npm i gulp gulp-sass gulp-sass-glob gulp-postcss gulp-purgecss gulp-rename autoprefixer --save-dev
```
Create an empty `gulpfile.js` task file.

```bash
$ nano gulpfile.js
```

In the `gulpfile.js`, add these lines below to the file.

```js
const gulp = require('gulp')
const sass = require('gulp-sass')
const sassGlob = require('gulp-sass-glob')
const postCss = require('gulp-postcss')
const purgeCss = require('gulp-purgecss')
const autoPrefixer = require('autoprefixer')
const rename = require('gulp-rename')

// Sass Preprocessor
gulp.task('sass', () => {
  return gulp.src('node_modules/yogurt-css/yogurt.scss')
    .pipe(sassGlob())
    .pipe(sass({ outputStyle: 'compressed' })
      .on('error', sass.logError))
    .pipe(postCss([autoPrefixer()]))
    // export `.scss` to `.css` in directory `css/`
    .pipe(gulp.dest('css'))
})

// Remove unused CSS Classes
gulp.task('purge-css', () => {
  return gulp.src('css/yogurt.css')
    .pipe(purgeCss({
        content: [
          // target CSS class to look for...
          'index.html'
        ],
        // make compatible for `Yogurt CSS` framework
        defaultExtractor: content => content.match(/[\w-/:()]+(?<!:)/g) || [],
        // add whitelisting e.g. '/-webkit-scrollbar-thumb$/'
        whitelistPatterns: [],
        keyframes: true
    }))
    // export new CSS in directory `css/`
    .pipe(rename('style.css'))
    .pipe(gulp.dest('css'))
})
```

Install `yogurt-css` module.

```bash
# YARN
$ yarn add yogurt-css
# NPM
$ npm i yogurt-css
```

Create a new directory for exported or preprocessed CSS.

```bash
$ mkdir css
```
Create an empty `index.html` file.
```bash
$ nano index.html
```

Add the basic HTML template below to the `index.html`. And import the final build CSS file `css/styles.css` with `<link>` tag.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <link defer href="css/style.css" rel="stylesheet" rel="preload" as="style" media="all">
  </head>
  <body></body>
</html>
```

Your new project setup is now ready for `Sass` preprocessing and purging unused CSS with the `PurgeCSS`.

Run the command below and check the CSS file located in `css/style.css` has only a few CSS classes that take a few couple hundred bytes of file size. The rest has stripped down by the `PurgeCSS` that refers to the target `.html` files.

```bash
# build Yogurt CSS
$ gulp sass
# create new `style.css` and remove
# unused CSS classes from `index.html`
$ gulp purge-css
```

Try to add a new line in the `<body>` tag.

```html
<y class="text-2xl">TEXT</y>
```

Try run the build command again. This time the `css/style.css` file has added more CSS classes that `index.html` is being used.

```bash
# build Yogurt CSS
$ gulp sass
# create new `style.css` and remove
# unused CSS classes from `index.html`
$ gulp purge-css
```
