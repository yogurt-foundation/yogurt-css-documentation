---
id: filter-saturate
title: Filter Saturate
description: Utilities for sets saturate filter to an element.
layout: default
---

> Filters

# Saturate <span class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300">v1.0.9</span>

Utilities for sets saturate filter to an element.

---

## Class

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> |
|:--|:--|
| filter `{saturate}` | filter: brightness(var(--brightness)) contrast(var(--contrast)) saturate(var(--saturate)) blur(var(--blur)) drop-shadow(var(--drop-shadow)) |

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> |
|:--|:--|
| saturate-0 | --saturate: 0 |
| saturate-1 | --saturate: 1 |
| saturate-2 | --saturate: 1.10 |
| saturate-3 | --saturate: 1.20 |
| saturate-4 | --saturate: 1.30 |
| saturate-5 | --saturate: 1.40 |
| saturate-6 | --saturate: 1.50 |
| saturate-7 | --saturate: 1.60 |
| saturate-8 | --saturate: 1.70 |
| saturate-9 | --saturate: 1.80 |
| saturate-10 | --saturate: 1.90 |

<y class="m-4 p-3 border-l-8 border-orange-600 text-sm text-orange-600 bg-orange-200">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  Only supported web browsers can benefit from this utility.
</y>

---

## Usage

<y class="mx-2 my-2 mx-auto flex">
  <y class="p-2 max-w-sm">
    <img class="w-full h-48 object-cover object-center overflow-hidden rounded-lg shadow"
         src="https://picsum.photos/500?=3">
    <y class="pt-2 text-sm text-center">
      Filter: OFF
    </y>
  </y>
  <y class="p-2 max-w-sm">
    <img class="filter saturate-10 w-full h-48 object-cover object-center overflow-hidden rounded-lg shadow"
         src="https://picsum.photos/500?=3">
    <y class="pt-2 text-sm text-center">
      Filter: ON
    </y>
  </y>
</y>

Apply the `filter` class first, and then set the filter in any order when with other filters.

```html
<!-- Example -->
<img class="filter saturate-10 ..."
     src="...">

<y class="filter saturate-10 ..."
   style="background-image:url(...)"></y>
```

Mix with other filters, such as [Brightness](/filter-brightness/), [Contrast](/filter-contrast/), [Blur](/filter-blur/) and [Drop Shadow](/filter-drop-shadow/).

```html
<!-- Example -->
<img class="filter saturate-10 brightness-10 contrast-5 blur-5 drop-shadow-md ..."
     src="...">

<y class="filter saturate-10 brightness-10 contrast-5 blur-5 ..."
   style="background-image:url(...)"></y>
```

---

## Customize <a class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300" href="/plugin-api/">More</a>

```scss
// @file: `src/_plugins.scss`
@include plugin(
  (
    utility: 'filter.saturate',
    //variant: 'responsive',
    property: '--saturate',
    modifier: (
      'saturate-11': '...',
      'saturate-12': '...'
      //...
    )
  )
)
```

---

## Variant

| <span class="font-semibold underline">Variant</span> | <span class="font-semibold underline">Enabled</span> | <span class="font-semibold underline">Responsive</span> |
|:-:|:-:|:-:|
| Default | Yes | |
| Theme | | |
| hover| | |
| group-hover | | |
| focus | | |
| active | | |
| visited | | |
| disabled | | |
