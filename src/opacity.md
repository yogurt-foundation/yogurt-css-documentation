---
id: opacity
title: Opacity
description: Utilities for sets the transparency of an element.
layout: default
---

> Effects

# Opacity

Utilities for sets the transparency of an element.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> | |
|:--|:--|:-:|
| opacity-100 | opacity: 1 | <y class="w-16 h-8 p-1 inline-block text-white bg-charcoal-100 rounded opacity-100">Text</y> |
| opacity-75 | opacity: .75 | <y class="w-16 h-8 p-1 inline-block text-white bg-charcoal-100 rounded opacity-75">Text</y> |
| opacity-50 | opacity: .5 | <y class="w-16 h-8 p-1 inline-block text-white bg-charcoal-100 rounded opacity-50">Text</y> |
| opacity-25 | opacity: .25 | <y class="w-16 h-8 p-1 inline-block text-white bg-charcoal-100 rounded opacity-25">Text</y> |
| opacity-0 | opacity: 0 | <y class="w-16 h-8 p-1 inline-block text-white bg-charcoal-100 rounded opacity-0">Text</y> |

---

## Usage

```html
<!-- Example -->
<y class="opacity-50 ... bg-white h-32 w-32"></y>
```
---

## Customize <a class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600" href="/plugin-api/">More</a>

```scss
// @file: `src/_plugins.scss`
@include plugin(
  (
    utility: 'opacity',
    //variant: 'responsive',
    property: 'opacity',
    modifier: (
      '85': '.85',
      '45': '.45'
      ...
    )
  )
)
```

---

## Variant

| <span class="font-semibold underline">Variant</span> | <span class="font-semibold underline">Enabled</span> | <span class="font-semibold underline">Responsive</span> |
|:-:|:-:|:-:|
| Default | Yes | Yes |
| Dark Theme | | |
| hover| Yes | |
| group-hover | | |
| focus | Yes | |
| focus-visible | Yes | |
| focus-within | Yes | |
| active | | |
| visited | | |
| checked | | |
| disabled | | |