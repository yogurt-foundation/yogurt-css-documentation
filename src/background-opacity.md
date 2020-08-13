---
id: background-opacity
title: Background Opacity
description: Utilities for sets opacity of background color.
layout: default
---

> Backgrounds

## Background Opacity <span class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300">v1.0.8</span>

Utilities for sets opacity of background color.

### Class

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> |
|:--|:--|
| bg-opacity-0 | --bg-opacity: 0 |
| bg-opacity-25 | --bg-opacity: .25 |
| bg-opacity-50 | --bg-opacity: .5 |
| bg-opacity-75 | --bg-opacity: .75 |
| bg-opacity-100 | --bg-opacity: 1 |

### Customize <a class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300" href="/plugin-api/">More</a>

```scss
// @file: `src/_plugins.scss`
@include plugin(
  $utility: 'bg-opacity',
  //$variant: 'responsive',
  $property: '--bg-opacity',
  $modifier: (
    '30': '.3',
    '40': '.4'
    //...
  )
)
```

### Variant

| <span class="font-semibold underline">Variant</span> | <span class="font-semibold underline">Enabled</span> | <span class="font-semibold underline">Responsive</span> |
|:-:|:-:|:-:|
| Default | Yes | |
| hover| | |
| group-hover | | |
| focus | | |
| active | | |
| visited | | |
| disabled | | |