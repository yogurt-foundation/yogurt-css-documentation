---
id: installation
title: Installation
description: Ways to install Yogurt CSS framework for your project.
topic: Installation
layout: default
---

> Getting Started

# via CDN

```html
<!-- HTML -->
<link
  href="https://unpkg.com/yogurt-css@{{ site.version.framework }}/dist/yogurt-{{ site.version.framework }}_solidcore.min.css"
  rel="stylesheet"
  rel="preload"
  as="style"
  media="all"
  defer
>

<!-- CSS -->
@import "https://unpkg.com/yogurt-css@{{ site.version.framework }}/dist/yogurt-{{ site.version.framework }}_solidcore.min.css";
```

<y class="mt-4 mx-4 p-3 border-l-8 border-gray-600 text-sm text-gray-600 bg-gray-200 (dark)bg-gray-800">
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

<y class="my-2 mx-4 p-3 border-l-8 border-gray-600 text-sm text-gray-600 bg-gray-200 (dark)bg-gray-800">
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

<y class="mb-4 mx-4 p-3 border-l-8 border-orange-600 text-sm text-orange-600 (dark)text-orange-500 bg-orange-200 (dark)bg-orange-900">
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

# via Package Manager <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.0.9</span>

```bash
# YARN
$ yarn add yogurt-css
# NPM
$ npm i yogurt-css
````

You can include the Yogurt CSS file from the `node_modules` directory with an HTML `<link>` tag or import the `yogurt.scss` into `.scss` file with `@import` directive.

```bash
# JS
import 'yogurt-css'

# SCSS/SASS
@import 'node_modules/yogurt-css/yogurt';

# HTML
<link
  href="node_modules/yogurt-css/dist/yogurt-{{ site.version.framework }}_solidcore.min.css"
  rel="stylesheet"
  rel="preload"
  as="style"
  media="all"
  defer
>
```

<y class="mt-4 mx-4 p-3 border-l-8 border-gray-600 text-sm text-gray-600 bg-gray-200 (dark)bg-gray-800">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  The
  <strong>
    node_modules
  </strong>
  is a published version and always behind the latest update at the Github repository.
</y>

<y class="mt-2 mx-4 p-3 border-l-8 border-gray-600 text-sm text-gray-600 bg-gray-200 (dark)bg-gray-800">
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

# via CLI

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

<y class="my-4 mx-4 p-3 border-l-8 border-gray-600 text-sm text-gray-600 bg-gray-200 (dark)bg-gray-800">
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
  <img
    class="filter saturate-5 w-full h-full object-fit object-center rounded-lg"
    src="/images/content/yogurt_cli_screenshot_01.png"
    loading="lazy"
    alt="Yogurt CLI"
  >
</y>
