---
id: top-bottom-left-right
title: Top / Right / Bottom / Left
description: Utilities for sets the placement of a positioned element.
layout: default
---

> Layouts

## Top / Right / Bottom / Left

Utilities for sets the placement of a positioned element.

### Class

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> |
|:--|:--|
| inset-0 | top: 0; <br> right: 0; <br> bottom: 0; <br> left: 0 |
| inset-y-0 | top: 0; <br> bottom: 0 |
| inset-x-0 | right: 0; <br> left: 0 |
| top-0 | top: 0 |
| right-0 | right: 0 |
| bottom-0 | bottom: 0 |
| left-0 | left: 0 |
| inset-auto | top: auto; <br> right: auto; <br> bottom: auto; <br> left: auto |
| inset-y-auto | top: auto; <br> bottom: auto |
| inset-x-auto | left: auto; <br> right: auto |
| top-auto | top: auto |
| bottom-auto | bottom: auto |
| left-auto | left: auto |
| right-auto | right: auto |

### Customizing <span class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300">v1.0.9</span>

```scss
// @file: `src/_plugins.scss`
@include plugin(
  $utility: 'top',
  //$variant: 'responsive',
  $property: 'top',
  $modifier: (
    '1': '1rem',
    '2': '2rem'
    //...
  )
)
```

### Variant

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">variant</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">enabled</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">responsive</span> |
|:--|:--|:--|
| Default | Yes | Yes |
| hover| | |
| group-hover | | |
| focus | | |
| active | | |
| visited | | |
| disabled | | |