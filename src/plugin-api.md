---
id: plugin-api
title: Plugin API
description: Using plugin API to create your utility module and use it right away without modifying any of the Yogurt core files.
topic: Customization
layout: default
---

> Customization

# Plugin API <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.5</span>

Using plugin API to create your utility module and use it right away without modifying any of the Yogurt core files. Yogurt will generate after you run the build. All you need is to write your plugins in the `src/plugins.scss` file.

## Directive

```scss
// @param: {String}  $class
// @param: {String}  $property
// @param: {List}    $modifier [()]
// @param: {List}    $variant [()]
// @param: {Bool}    $negative [null]
// @param: {String}  $option [null]

@include yogurt(
  // Classname
  $class: 'text', // (e.g. .text-)
  // CSS Property
  $property: font-size,
  // Classname Modifier
  $modifier: (
    // (output: .text-xs { font-size: 0.75rem })
    xs: 0.75rem,
    // (output: .text-sm { font-size: 0.875rem })
    sm: 0.875rem
  ),
  // Enable Negative Value (true|false)
  $negative: true,
  // Add Operators
  $option: '',
  // Enable Variants Settings
  $variant: (
    'responsive',
    'dark-mode', 'light-mode',
    'reduce-motion',
    'selection-hover',
    'expand',
    'portrait', 'landscape',
    'hover', 'group-hover',
    'focus', 'group-focus', 'focus-visible', 'focus-within',
    'active',
    'visited',
    'checked',
    'disabled'
  )
);
```

### Examples

Create basic utility.

```scss
// @file: `src/plugins.scss`
@include yogurt(
  $class: 'text',
  $property: font-size,
  $modifier: (
    xs: 0.75rem,
    sm: 0.875rem
  )
);
```

Create responsive utility.

```scss
// @file: `src/plugins.scss`
@include yogurt(
  $class: 'text',
  $property: font-size,
  $modifier: (
    xs: 0.75rem,
    sm: 0.875rem
  ),
  $variant: (
    'responsive'
  )
);
```

Create responsive utility with variants.

```scss
// @file: `src/plugins.scss`
@include yogurt(
  $class: 'text',
  $property: font-size,
  $modifier: (
    xs: 0.75rem,
    sm: 0.875rem
  ),
  $variant: (
    'responsive',
    'hover', 'group-hover'
  )
);
```

Create utility with negative values.

```scss
// @file: `src/plugins.scss`
@include yogurt(
  $class: 'm',
  $property: margin,
  $modifier: (
    1: 1rem,
    2: 2rem
  ),
  $negative: true
);
```

## Compile

After you finished editing the `plugins.scss` file, run one of these commands every time you make changes to the Yogurt files. And pretty much it is done, you can try out your new utility modules in your project.

```bash
# YARN
$ yarn build
# NPM
$ npm run build
```

Compiled outputs are located in:

- **CSS** output directory `./dist/`.
- **SCSS** output directory (root) `./`.

```bash
(root directory)
├── dist
│   └── (CSS outputs)
└── (SCSS output)
```
