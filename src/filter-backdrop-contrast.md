---
id: filter-backdrop-contrast
title: Filter Backdrop Contrast
description: Utilities for sets filter backdrop contrast effect to an element.
layout: default
---

> Filters

# Backdrop Contrast <span class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300">v1.1.0</span>

Utilities for sets filter backdrop contrast effect to an element.

---

## Class

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> |
|:--|:--|
| backdrop-filter `{contrast}` | backdrop-filter: brightness(var(--brightness)) contrast(var(--contrast)) saturate(var(--saturate)) blur(var(--blur)) |

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> |
|:--|:--|
| contrast-0 | --contrast: 0 |
| contrast-1 | --contrast: 1 |
| contrast-2 | --contrast: 1.10 |
| contrast-3 | --contrast: 1.20 |
| contrast-4 | --contrast: 1.30 |
| contrast-5 | --contrast: 1.40 |
| contrast-6 | --contrast: 1.50 |
| contrast-7 | --contrast: 1.60 |
| contrast-8 | --contrast: 1.70 |
| contrast-9 | --contrast: 1.80 |
| contrast-10 | --contrast: 1.90 |

<y class="m-4 p-3 border-l-8 border-orange-600 text-sm text-orange-600 bg-orange-200">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  Only supported web browsers can benefit from this utility.
</y>

---

## Usage

<y class="mx-2 my-2 mx-auto flex">
  <y class="p-2 w-1/2">
    <y class="flex justify-center items-center w-full h-48 bg-auto bg-center bg-no-repeat rounded-lg"
       style="background-image:url('https://picsum.photos/500?=4')">
      <y class="w-32 h-32 bg-gray-100 bg-opacity-50"></y>
    </y>
    <y class="pt-2 text-sm text-center">
      Filter: OFF
    </y>
  </y>
  <y class="m-2 w-1/2">
    <y class="flex justify-center items-center w-full h-48 bg-auto bg-center bg-no-repeat rounded-lg"
       style="background-image:url('https://picsum.photos/500?=4')">
      <y class="backdrop-filter contrast-10 w-32 h-32 bg-gray-100 bg-opacity-50"></y>
    </y>
    <y class="pt-2 text-sm text-center">
      Filter: ON
    </y>
  </y>
</y>

Apply the `backdrop-filter` class first, and then set the filter in any order when with other filters.

```html
<!-- Example -->
<y style="background-image:url(...)">
  <y class="backdrop-filter contrast-10 ... bg-gray-100 bg-opacity-50">
    ...
  </y>
</y>

<y class="relative ...">
  <img src="...">
  <y class="absolute top-0 left-0">
    <y class="backdrop-filter contrast-10 ... bg-gray-100 bg-opacity-50">
      ...
    </y>
  </y>
</y>
```

Mix with other filters, such as [Backdrop Brightness](/filter-backdrop-brightness/), [Backdrop Saturate](/filter-backdrop-saturate/), and [Backdrop Blur](/filter-backdrop-blur).

```html
<!-- Example -->
<y style="background-image:url(...)">
  <y class="backdrop-filter contrast-10 brightness-1 saturate-1 blur-2 ... bg-gray-100 bg-opacity-50">
    ...
  </y>
</y>

<y class="relative ...">
  <img src="...">
  <y class="absolute top-0 left-0">
    <y class="backdrop-filter contrast-10 brightness-1 saturate-1 blur-2 ... bg-gray-100 bg-opacity-50">
      ...
    </y>
  </y>
</y>
```

---

## Customize <a class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300" href="/plugin-api/">More</a>

```scss
// @file: `src/_plugins.scss`
@include plugin(
  (
    utility: 'backdrop.contrast',
    //variant: 'responsive',
    property: 'filter',
    modifier: (
      'contrast-11': '...',
      'contrast-12': '...'
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
| Theme | | |
| hover| | |
| group-hover | | |
| focus | | |
| active | | |
| visited | | |
| disabled | | |
