---
id: filter-blur
title: Filter Blur
description: Utilities for sets filter blur effect to an element.
layout: default
---

> Filters

# Blur <span class="ml-1 px-2 py-1 text-sm text-gray-600 dark:text-charcoal-100 bg-gray-300 dark:bg-gray-600">v1.0.9</span>

Utilities for sets filter blur effect to an element.

---

## Class

| <span class="px-3 py-1 text-white dark:text-charcoal-100 bg-charcoal-100 dark:bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white dark:text-charcoal-100 bg-charcoal-100 dark:bg-gray-600 rounded-full">css</span> |
|:--|:--|
| filter `{blur}` | filter: brightness(var(--brightness)) contrast(var(--contrast)) saturate(var(--saturate)) blur(var(--blur)) drop-shadow(var(--drop-shadow)) |

| <span class="px-3 py-1 text-white dark:text-charcoal-100 bg-charcoal-100 dark:bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white dark:text-charcoal-100 bg-charcoal-100 dark:bg-gray-600 rounded-full">css</span> |
|:--|:--|
| blur-0 | --blur: 0px |
| blur-1 | --blur: 2px |
| blur-2 | --blur: 4px |
| blur-3 | --blur: 6px |
| blur-4 | --blur: 8px |
| blur-5 | --blur: 10px |
| blur-6 | --blur: 12px |
| blur-7 | --blur: 14px |
| blur-8 | --blur: 16px |
| blur-9 | --blur: 18px |
| blur-10 | --blur: 20px |

---

## Usage

<y class="mx-2 my-2 mx-auto flex">
  <y class="p-2 max-w-sm">
    <img class="w-full h-48 object-cover object-center overflow-hidden rounded-lg shadow"
         src="https://picsum.photos/500?=4">
    <y class="pt-2 text-sm text-center">
      Filter: OFF
    </y>
  </y>
  <y class="m-2 max-w-sm">
    <img class="filter blur-2 w-full h-48 object-fit object-center overflow-hidden rounded-lg"
         src="https://picsum.photos/500?=4">
    <y class="pt-2 text-sm text-center">
      Filter: ON
    </y>
  </y>
</y>

Apply the `filter` class first, and then set the filter in any order when with other filters.

```html
<!-- Example -->
<img class="filter blur-2 ..."
     src="...">

<y class="filter blur-2 ..."
   style="background-image:url(...)"></y>
```

Mix with other filters, such as [Brightness](/filter-brightness/), [Contrast](/filter-contrast/), [Saturate](/filter-saturate/) and [Drop Shadow](/filter-drop-shadow/).

```html
<!-- Example -->
<img class="filter blur-2 brightness-10 contrast-5 saturate-5 drop-shadow-md ..."
     src="...">

<y class="filter blur-2 brightness-10 contrast-5 saturate-5 ..."
   style="background-image:url(...)"></y>
```

---

## Customize <a class="ml-1 px-2 py-1 text-sm text-gray-600 dark:text-charcoal-100 bg-gray-300 dark:bg-gray-600" href="/plugin-api/">More</a>

```scss
// @file: `src/_plugins.scss`
@include plugin(
  (
    utility: 'blur',
    //variant: 'responsive',
    property: 'filter',
    modifier: (
      'blur-11': '...',
      'blur-12': '...'
      ...
    )
  )
)
```

---

## Variant

| <span class="font-semibold underline">Variant</span> | <span class="font-semibold underline">Enabled</span> | <span class="font-semibold underline">Responsive</span> |
|:-:|:-:|:-:|
| Default | Yes | |
| Dark Theme | | |
| hover| | |
| group-hover | | |
| focus | | |
| active | | |
| visited | | |
| checked | | |
| disabled | | |
