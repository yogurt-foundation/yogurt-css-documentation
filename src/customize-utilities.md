---
id: customize-utilities
title: Customize Utilities
description: Include or exclude the utility modules or components in the framework.
topic: Customization
layout: default
---

> Customization

# Utilities

You can manually `exclude` or `include` the utility modules or components by `comment out` the lines in the `.scss` files. The final build file size will be smaller or bigger depends on how much utility you need.

```scss
// EXAMPLE
// @file `src/_yogurt.scss`
...
@import "modules/utilities/flexbox";
...
```

## Components

```scss
// EXAMPLE ~ Flexbox
// @file `modules/utilities/_flexbox.scss`

// Utilities for controls how flex items grow and shrink.
@include yogurt($class: 'flex', $property: flex, $modifier: $flex,
  $variant: ('responsive'));

// Utilities for controls how lines are positioned in multi-line flex containers.
@include yogurt($class: 'content', $property: align-content, $modifier: $align-content,
  $variant: ('responsive'));

...
```

## Modifiers

You can customize the Yogurt default configuration file `./src/_config.scss` by adding or removing the `modifier` values that you don't need. If you find a utility that is not included in the build, you can create your utility using the [Plugin API](/plugin-api).

```scss
// EXAMPLE
// @file `src/_config.scss`
$screens: (
  xs: 320px,
  sm: 640px,
  md: 768px,
  lg: 1024px,
  xl: 1280px,
  2k: 1920px,
  // 3k: 2560px,
  4k: 3840px,
  // 5k: 5120px,
  // 6k: 5760px,
  // 7k: 7000px,
  8k: 7680px
);
...
```

The most recommended and effective way to strip down unused CSS classes is using [PurgeCSS](https://purgecss.com/) or using [Yogurt CLI tool](/installation/#using-yogurt-via-cli). (See also, [Purge Unused Classes](/file-size-control/#purge-unused-classes)).