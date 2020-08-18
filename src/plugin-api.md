---
id: plugin-api
title: Plugin API
description: Using plugin API to create your utility module and use it right away without modifying any of the Yogurt core files.
layout: default
---

> Customization

## Plugin API <span class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300">v1.0.8</span>

Using plugin API to create your utility module and use it right away without modifying any of the Yogurt core files. Yogurt will generates after you run the build. All you need is write your plugins in the `src/_plugins.scss` file.

<y class="my-4 mx-4 p-3 border-l-8 border-orange-600 text-sm text-orange-600 bg-orange-200">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  Use keyword for
  <strong>
    variant
  </strong>
  to apply pseudo class variants, such as
  <strong>
    hover, focus, active, visited, disabled, responsive, responsive-hover, responsive-focus, responsive-active, responsive-visited, responsive-disabled
  </strong>.
</y>

### Example

Create basic utility.

```scss
// @file: `src/_plugins.scss`
@include plugin(
  utility: 'text',
  property: 'font-size',
  modifier: (
    'xs': '0.75rem',
    'sm': '0.875rem'
  )
)
```

Create default responsive utility.

```scss
// @file: `src/_plugins.scss`
@include plugin(
  utility: 'text',
  variant: 'responsive',
  property: 'font-size',
  modifier: (
    'xs': '0.75rem',
    'sm': '0.875rem'
  )
)
```

Create responsive utility with variants.

```scss
// @file: `src/_plugins.scss`
@include plugin(
  utility: 'text',
  variant: 'responsive-hover',
  property: 'font-size',
  modifier: (
    'xs': '0.75rem',
    'sm': '0.875rem'
  )
)
```

Create an array of utilities.

```scss
// @file: `src/_plugins.scss`
@include plugin(
  (
    utility: 'text',
    property: 'font-size',
    modifier: (
      'xs': '0.75rem',
      'sm': '0.875rem'
    )
  ),
  (
    utility: 'text',
    property: 'font-size',
    variant: 'hover',
    modifier: (
      'xs': '0.75rem',
      'sm': '0.875rem'
    )
  ),
  (
    utility: 'text',
    property: 'font-size',
    variant: 'responsive',
    modifier: (
      'xs': '0.75rem',
      'sm': '0.875rem'
    )
  ),
  (
    utility: 'text',
    property: 'font-size',
    variant: 'responsive-hover',
    modifier: (
      'xs': '0.75rem',
      'sm': '0.875rem'
    )
  ),
  // ...
)
```

After you finished editing the `_plugins.scss` file, run one of these commands every time you make changes to the Yogurt files. And pretty much it is done, you can try out your new utility module in your project.

```bash
# YARN
$ yarn build
# NPM
$ npm run build
```

