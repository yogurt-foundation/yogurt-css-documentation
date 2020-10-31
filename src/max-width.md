---
id: max-width
title: Max Width
description: Utilities for sets the maximum width of an element.
layout: default
---

> Sizing

# Max Width

Utilities for sets the maximum width of an element.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| max-w-xs | max-width: 20rem |
| max-w-sm | max-width: 24rem |
| max-w-md | max-width: 28rem |
| max-w-lg | max-width: 32rem |
| max-w-xl | max-width: 36rem |
| max-w-2xl | max-width: 42rem |
| max-w-3xl | max-width: 48rem |
| max-w-4xl | max-width: 56rem |
| max-w-5xl | 	max-width: 64rem |
| max-w-6xl | max-width: 72rem |
| max-w-full | max-width: 100% |
| max-w-screen-sm | max-width: 640px |
| max-w-screen-md | max-width: 768px |
| max-w-screen-lg | max-width: 1024px |
| max-w-screen-xl | max-width: 1280px |
| max-w-none | max-width: none |

---

## Usage

```html
<!-- Example -->
<y class="max-w-md">
  ...
</y>
```
---

## Customize <a class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600" href="/plugin-api/">More</a>

```scss
// @file: `src/_plugins.scss`
@include plugin(
  (
    utility: 'max-w',
    //variant: 'responsive',
    property: 'max-width',
    modifier: (
      '...': '...',
      '...': '...'
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
| hover| | |
| group-hover | | |
| focus | | |
| active | | |
| visited | | |
| checked | | |
| disabled | | |