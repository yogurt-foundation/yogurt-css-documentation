---
id: import-framework
title: Import Framework
description: Import Yogurt into your project via, CDN, Package Manager or CLI.
layout: default
---

> Core Concepts

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

