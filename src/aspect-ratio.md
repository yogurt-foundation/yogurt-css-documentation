---
id: aspect-ratio
title: Aspect Ratio
description: Utilities for set dimension of aspect ratio to an element.
topic: Layouts
relate: width
variant: responsive
layout: default
---

<style>
  .supports { display: block }
  @supports (aspect-ratio: 1/1) { .supports { display: none } }
</style>

<y class="supports my-4 p-3 border-l-8 border-orange-600 text-sm text-orange-600 (dark)text-orange-500 bg-orange-200 (dark)bg-orange-900">
  <span class="pr-1 font-semibold">Note:</span>
  This web browser does not currently support the utilities.
</y>

> Layouts

# Aspect Ratio <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.7</span>

Utilities for set dimension of aspect ratio to an element.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| aspect-ratio-1/1 | aspect-ratio: 1/1 |
| aspect-ratio-1/2 | aspect-ratio: 1/2 |
| aspect-ratio-2/1 | aspect-ratio: 2/1 |
| aspect-ratio-4/3 | aspect-ratio: auto 4/3 |
| aspect-ratio-16/9 | aspect-ratio: 16/9 |
| aspect-ratio-21/9 | aspect-ratio: 21/9 |

## Usage

<y class="px-4 my-2 mx-auto flex flex-wrap flex-gap-4 justify-start items-start">
  <y class="aspect-ratio-1/1 w-32 flex justify-center items-center bg-gray-400 border border-gray-500">
    Ratio 1:1
  </y>
  <y class="aspect-ratio-1/2 w-32 flex justify-center items-center bg-gray-400 border border-gray-500">
    Ratio 1:2
  </y>
  <y class="aspect-ratio-2/1 w-32 flex justify-center items-center bg-gray-400 border border-gray-500">
    Ratio 2:1
  </y>
  <y class="aspect-ratio-4/3 w-32 flex justify-center items-center bg-gray-400 border border-gray-500">
    Ratio 4:3
  </y>
  <y class="aspect-ratio-16/9 w-32 flex justify-center items-center bg-gray-400 border border-gray-500">
    Ratio 16:9
  </y>
  <y class="aspect-ratio-21/9 w-32 flex justify-center items-center bg-gray-400 border border-gray-500">
    Ratio 21:9
  </y>
</y>

```html
<!-- Example -->
<y class="aspect-ratio-21/9 ... w-32 ... bg-gray-400">
  ...
</y>
```

<y class="px-4 my-2 mx-auto flex flex-wrap flex-gap-4 justify-start items-start">
  <img class="aspect-ratio-1/1 object-cover object-center w-32 flex justify-center items-center bg-gray-400 border border-gray-500" src="https://picsum.photos/400?=1">
  <img class="aspect-ratio-1/2 object-cover object-center w-32 flex justify-center items-center bg-gray-400 border border-gray-500" src="https://picsum.photos/400?=1">
  <img class="aspect-ratio-2/1 object-cover object-center w-32 flex justify-center items-center bg-gray-400 border border-gray-500" src="https://picsum.photos/400?=1">
  <img class="aspect-ratio-4/3 object-cover object-center w-32 flex justify-center items-center bg-gray-400 border border-gray-500" src="https://picsum.photos/400?=1">
  <img class="aspect-ratio-16/9 object-cover object-center w-32 flex justify-center items-center bg-gray-400 border border-gray-500" src="https://picsum.photos/400?=1">
  <img class="aspect-ratio-21/9 object-cover object-center w-32 flex justify-center items-center bg-gray-400 border border-gray-500" src="https://picsum.photos/400?=1">
</y>

```html
<!-- Example -->
<img
  class="aspect-ratio-21/9 ... w-32 ... object-cover object-center ... flex justify-center items-center ... bg-gray-400 ... border border-gray-500"
  src="..."
>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for aspectratio in variants.aspectratio %}{% for item in aspectratio.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).