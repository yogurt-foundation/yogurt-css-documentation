---
id: max-height
title: Max Height
description: Utilities for sets the maximum height of an element.
layout: default
---

> Sizing

# Max Height

Utilities for sets the maximum height of an element.

---

## Class

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> |
|:--|:--|
| max-h-full | max-height: 100% |
| max-h-screen | max-height: 100vh |

---

## Usage

```html
<!-- Example -->
<y class="max-h-full">
  ...
</y>
```
---

## Customize <a class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300" href="/plugin-api/">More</a>

```scss
// @file: `src/_plugins.scss`
@include plugin(
  utility: 'max-h',
  //variant: 'responsive',
  property: 'max-height',
  modifier: (
    '...': '...',
    '...': '...'
    ...
  )
)
```

---

## Variant

| <span class="font-semibold underline">Variant</span> | <span class="font-semibold underline">Enabled</span> | <span class="font-semibold underline">Responsive</span> |
|:-:|:-:|:-:|
| Default | Yes | Yes |
| hover| | |
| group-hover | | |
| focus | | |
| active | | |
| visited | | |
| disabled | | |