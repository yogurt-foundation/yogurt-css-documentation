---
id: import-framework
title: Import Framework
description:
layout: default
---

> Core Concept

## Import Framework <span class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300">v1.0.9</span>

...

<y class="my-4 p-3 border-l-8 border-orange-600 text-sm text-orange-600 bg-orange-200">
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
  </a>.)
</y>

```bash
# YARN
$ yarn add yogurt-css
# NPM
$ npm i yogurt-css
```

### Using on Base Styles

```scss
// Example
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
    .hover\:text-orange-600,
    .hover\:underline;
}

h1 {
  @extend
    .text-2xl,
    .font-semibold;
}
```

