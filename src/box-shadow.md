---
id: box-shadow
title: Box Shadow
description: Utilities for sets the box-shadow property attaches one or more shadows to an element.
layout: default
---

> Effects

## Box Shadow

Utilities for sets the box-shadow property attaches one or more shadows to an element.

### Class

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> | |
|:--|:--|:-:|
| shadow-xs | box-shadow: <br> 0 0 0 1px rgba(0, 0, 0, 0.05) | <y class="w-16 h-6 rounded bg-white shadow-xs"></y> |
| shadow-sm | box-shadow: <br> 0 1px 2px 0 rgba(0, 0, 0, 0.05) | <y class="w-16 h-6 rounded bg-white shadow-sm"></y> |
| shadow | box-shadow: <br> 0 1px 3px 0 rgba(0, 0, 0, 0.1), <br> 0 1px 2px 0 rgba(0, 0, 0, 0.06) | <y class="w-16 h-6 rounded bg-white shadow"></y> |
| shadow-md | box-shadow: <br> 0 4px 6px -1px rgba(0, 0, 0, 0.1), <br> 0 2px 4px -1px rgba(0, 0, 0, 0.06) | <y class="w-16 h-6 rounded bg-white shadow-md"></y> |
| shadow-lg | box-shadow: <br> 0 10px 15px -3px rgba(0, 0, 0, 0.1), <br> 0 4px 6px -2px rgba(0, 0, 0, 0.05) | <y class="w-16 h-6 rounded bg-white shadow-lg"></y> |
| shadow-xl | box-shadow: <br> 0 20px 25px -5px rgba(0, 0, 0, 0.1), <br> 0 10px 10px -5px rgba(0, 0, 0, 0.04) | <y class="w-16 h-6 rounded bg-white shadow-xl"></y> |
| shadow-2xl | box-shadow: <br> 0 25px 50px -12px rgba(0, 0, 0, 0.25) | <y class="w-16 h-6 rounded bg-white shadow-2xl"></y> |
| shadow-inner | box-shadow: <br> inset 0 2px 4px 0 rgba(0, 0, 0, 0.06) | <y class="w-16 h-6 rounded bg-white shadow-inner"></y> |
| shadow-outline | box-shadow: <br> 0 0 0 3px rgba(66, 153, 225, 0.5) | <y class="w-16 h-6 rounded bg-white shadow-outline"></y> |
| shadow-none | box-shadow: none | <y class="w-16 h-6 rounded bg-white shadow-none"></y> |

### Customize <a class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300" href="/plugin-api/">More</a>

```scss
// @file: `src/_plugins.scss`
@include plugin(
  $utility: 'shadow',
  //$variant: 'responsive',
  $property: 'box-shadow',
  $modifier: (
    '3xl': '...',
    '4xl': '...'
    ...
  )
)
```

### Variant

| <span class="font-semibold underline">Variant</span> | <span class="font-semibold underline">Enabled</span> | <span class="font-semibold underline">Responsive</span> |
|:-:|:-:|:-:|
| Default | Yes | |
| hover| Yes | |
| group-hover | | |
| focus | Yes | |
| active | | |
| visited | | |
| disabled | | |