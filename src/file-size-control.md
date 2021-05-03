---
id: file-size-control
title: File Size Control
description: Ways to reduce the use of Yogurt CSS utilities.
layout: default
---

> Customization

# File Size Control

Yogurt will generate thousand of CSS classes, which leads to increasing the file size. To create a complete experience for the prototyping environment that your project is not using them all. There are ways to either reducing the Yogurt file size or permanently caching it or adopting both.

## Purge Unused Classes

Implement the Node module from [PurgeCSS](https://purgecss.com/), which is the most recommended and effective way to strip down unused CSS classes in Yogurt and vastly reducing the CSS file size. With this, you can configure Yogurt to enable all utilities possible without worrying about the file size. Below is an example setting of [PurgeCSS using Gulp](https://purgecss.com/plugins/gulp.html) in the `gulpfile.js` file.

```js
// @file: `src/plugins.scss`
const purgeCss = require('gulp-purgecss')
gulp.task('purge-css', () => {
  return gulp.src('src/assets/css/yogurt.css')
    .pipe(purgeCss({
        content: [
          'src/views/**/*.html'
        ],
        // make compatible for `Yogurt CSS`
        defaultExtractor: content => content.match(/[\w-/:()]+(?<!:)/g) || [],
        // add whitelisting e.g. '/-webkit-scrollbar-thumb$/'
        whitelistPatterns: []
    }))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('dist/assets/css'))
})
```

Optionally to use the dedicated scaffolding app to create a new project with PurgeCSS built-in on-the-go.

```bash
$ npx create-yogurt-app my-new-project
```

Read guide to [Create Empty Project](/import-framework/#create-empty-project-manually) yourself without using the [Yogurt CLI](/installation/#using-yogurt-via-cli).

