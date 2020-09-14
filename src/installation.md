---
id: installation
title: Installation
description: Ways to install Yogurt CSS framework for your project.
layout: default
---

> Getting Started

## Using Yogurt via CDN

```html
<link defer href="https://unpkg.com/yogurt-css@{{ site.version.core }}/dist/yogurt-{{ site.version.core }}_solidcore.min.css"
      rel="stylesheet"
      rel="preload"
      as="style"
      media="all">
```

<y class="mt-4 mx-4 p-3 border-l-8 border-gray-600 text-sm text-gray-600 bg-gray-200 dark:bg-gray-800">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  The
  <strong>
    CDN
  </strong>
  build is a published version and always behind the latest update at the Github repository. (See
  <a href="/utility-map/">
    Utility Map
  </a> for new changes.)
</y>

<y class="my-2 mx-4 p-3 border-l-8 border-gray-600 text-sm text-gray-600 bg-gray-200 dark:bg-gray-800">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  The
  <strong>
    CDN
  </strong>
  build file size is huge, ideal for prototyping. Unrecommended to use in production. Learn more about how to reduce the framework size efficiently. (See
  <a href="/import-framework/#create-empty-project-manually">
    Import Framework
  </a>,
  <a href="/file-size-control/">
    File Size Control
  </a>)
</y>

<y class="mb-4 mx-4 p-3 border-l-8 border-orange-600 text-sm text-orange-600 dark:text-orange-500 bg-orange-200 dark:bg-orange-900">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  Using
  <strong>
  CDN
  </strong>
  does not have the benefit to use the
  <strong>
    @extend
  </strong>
  directive. (See
  <a href="/extract-utility-classes/">
    Extract Utility Classes
  </a>)
</y>

## Using Yogurt via Package Manager <span class="ml-1 px-2 py-1 text-sm text-gray-600 dark:text-charcoal-100 bg-gray-300 dark:bg-gray-600">v1.0.9</span>

```bash
# YARN
$ yarn add yogurt-css
# NPM
$ npm i yogurt-css
````

You can include the Yogurt CSS file from the `node_modules` directory with an HTML `<link>` tag or import the `yogurt.scss` into `.scss` file with `@import` directive.

```scss
// with JS (v1.1.0)
import 'yogurt-css'

// with SCSS/SASS
@import 'node_modules/yogurt-css/yogurt';

// with <link> tag in HTML
<link href="node_modules/yogurt-css/dist/yogurt-{{ site.version.core }}_solidcore.css">
<link href="node_modules/yogurt-css/dist/yogurt-{{ site.version.core }}_solidcore.min.css">
```

<y class="mt-4 mx-4 p-3 border-l-8 border-gray-600 text-sm text-gray-600 bg-gray-200 dark:bg-gray-800">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  The
  <strong>
    node_modules
  </strong>
  is a published version and always behind the latest update at the Github repository.
</y>

<y class="mt-2 mx-4 p-3 border-l-8 border-gray-600 text-sm text-gray-600 bg-gray-200 dark:bg-gray-800">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  The
  <strong>
    CDN
  </strong>
  build file size is huge, ideal for prototyping. Unrecommended to use in production. Learn more about how to reduce the framework size efficiently. (See
  <a href="/import-framework/#create-empty-project-manually">
    Import Framework
  </a>,
  <a href="/file-size-control/">
    File Size Control
  </a>)
</y>

## Using Yogurt via CLI

To create a new project, run:

```bash
# YARN
$ yarn create create-yogurt-app my-new-project
# NPM
$ npx create-yogurt-app my-new-project
```

The CLI gives you an optional tool to quickly installs and sets up a new frontend project with essential build tools such as preprocessors, postprocessors, etc. Use the tool for the production-ready build.

If you install the `create-yogurt-app` package to run locally, simply run `yogurt <project_name>`,

```bash
# YARN
$ yarn global add create-yogurt-app
# NPM
$ npm i -g create-yogurt-app
# USAGE
$ yogurt my-new-project
```

<y class="my-4 mx-4 p-3 border-l-8 border-gray-600 text-sm text-gray-600 bg-gray-200 dark:bg-gray-800">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  The
  <strong>
    CLI
  </strong>
  always comes with the latest build, including the unpublished changes.
</y>

<y class="mx-4 py-4">
  <img theme=""
       class="filter saturate-5 w-full h-full object-fit object-center rounded-lg"
       src="/images/content/yogurt_cli_screenshot_01.png">
</y>

## Using Yogurt via Playground

[Yogurt Playground](https://github.com/yogurt-foundation/playground) is a developer tool also an HTML/CSS IDE for testing and prototyping with the Yogurt framework. If you have an idea and want to draft something small without setting up a new project, then Yogurt Playground is a tool for you.

```bash
$ git clone https://github.com/yogurt-foundation/playground.git
$ cd playground
# YARN
$ yarn && yarn start
# NPM
$ npm i && npm start
```

<y class="my-4 mx-4 p-3 border-l-8 border-gray-600 text-sm text-gray-600 bg-gray-200 dark:bg-gray-800">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  The
  <strong>
    playground
  </strong>
  always comes with the latest build, including the unpublished changes.
</y>

Download the precompiled desktop apps without going through the building process,

- [Linux](https://github.com/yogurt-foundation/playground/releases/download/0.1.2-beta/yogurt-playground-0.1.2-linux-x64.tar.gz)
- [Mac](https://github.com/yogurt-foundation/playground/releases/download/0.1.2-beta/yogurt-playground-0.1.2-mac-x64.zip)
- [Windows](https://github.com/yogurt-foundation/playground/releases/download/0.1.2-beta/yogurt-playground-0.1.2-win-x64.tar.gz)

<y class="mx-4 py-4">
  <img theme=""
       class="filter saturate-5 w-full h-full object-fit object-center rounded-lg"
       src="/images/content/yogurt_playground_screenshot_01.png">
</y>
