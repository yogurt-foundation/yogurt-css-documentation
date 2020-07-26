---
id: plugin-api
title: Plugin API
description: Using plugin API to create your utility module and use it right away without modifying any of the Yogurt core files.
layout: default
---

> Customization

## Plugin API <span class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300">Beta</span>

Using plugin API to create your utility module and use it right away without modifying any of the Yogurt core files. Yogurt will generates after you run the build. All you need is write your plugins in the `src/_plugins.scss` file,

```scss
// @file: `src/_plugins.scss`

// This example is creating a new utility named `text-{modifier}`.

@include plugin(
  $utility: ('text'),
  $variant: $none, // $hover, $focus, $active, $visited, $disabled
  $property: ('font-size'),
  $modifier: (
    'xs': '0.75.rem',
    'sm': '0.875rem',
    'md': '1rem',
    'lg': '1.125rem',
    'xl': '1.25rem'
  )
)
```
After that, run one these command everytime you make changes to the Yogurt files. And pretty much it is done, you can try out your new utility module in your project.

```bash
# YARN
$ yarn build
# NPM
$ npm run build
```

<y class="my-4 p-3 border-l-8 border-orange-600 text-orange-600 bg-orange-200">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  Plugin API is on
  <strong>
    Beta
  </strong>.
  The
  <strong>
    responsive utility
  </strong>
  is not supported yet.
</y>