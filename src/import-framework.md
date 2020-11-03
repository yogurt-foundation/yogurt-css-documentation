---
id: import-framework
title: Import Framework
description:
layout: default
---

> Core Concept

## Import Framework <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.0.9</span>

The most recommended way of using Yogurt CSS is installing it with the package manager (Yarn, Npm), and importing the `.scss` file from the `node_modules` directory.

```bash
# YARN
$ yarn add yogurt-css
# NPM
$ npm i yogurt-css
```

<y class="my-4 mx-4 p-3 border-l-8 border-orange-600 text-sm text-orange-600 (dark)text-orange-500 bg-orange-200 (dark)bg-orange-900">
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

### Base Styles

You can inject the Yogurt file on your CSS base style by using the `@import` directive and expose the utility classes with `@extend` directive. (See [Extract Utility Classes](/extract-utility-classes/), [Refactoring UI](/refactoring-ui/)).

```scss
// @file: `src/_plugins.scss`
@import "node_modules/yogurt-css/yogurt";

html {
  @extend
    .font-default,
    .antialiased,
    .text-lg,
    .text-charcoal-100;
}

body {
  @extend
    .bg-gray-100;
}

p {
  @extend
    .text-md,
    .depth-relaxed;
}

a {
  @extend
    .text-orange-500,
    .\(hover\)text-orange-600,
    .\(hover\)underline;
}

h1 {
  @extend
    .text-2xl,
    .font-semibold;
}
```

### Create Empty Project Manually

<y class="my-4 mx-4 p-3 border-l-8 border-orange-600 text-sm text-orange-600 (dark)text-orange-500 bg-orange-200 (dark)bg-orange-900">
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

These steps will help you understand the basic idea of how to install and configure the preprocessor and how to remove unused CSS classes from Yogurt. Let's get started.

Just to be sure you have [NodeJS](https://nodejs.org/en/) installed.

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

