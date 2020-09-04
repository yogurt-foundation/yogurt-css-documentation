---
id: scroll-snap
title: Scroll Snap
description: Utilities for sets viewport lock to certain elements or locations after finished scrolling.
layout: default
---

> Layout

# Scroll Snap <span class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300">v1.1.0</span>

Utilities for sets viewport lock to certain elements or locations after finished scrolling.

---

## Class

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> |
|:--|:--|
| scroll-snap `{type}` `{align}` | scroll-snap-type: `{type}`; <br> scroll-snap-align: `{align}` |

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> |
|:--|:--|
| x-mandatory | scroll-snap-type: x mandatory |
| y-mandatory | scroll-snap-type: y mandatory |
| x-proximity | scroll-snap-type: x proximity |
| y-proximity | scroll-snap-type: y proximity |
| block-mandatory | scroll-snap-type: block mandatory |
| block-proximity | scroll-snap-type: block proximity |
| inline-mandatory | scroll-snap-type: inline mandatory |
| inline-proximity | scroll-snap-type: inline proximity |
| both-mandatory | scroll-snap-type: both mandatory |
| both-proximity | scroll-snap-type: both proximity |

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> |
|:--|:--|
| align-none | scroll-snap-align: none |
| align-start | scroll-snap-align: start |
| align-center | scroll-snap-align: center |
| align-end | scroll-snap-align: end |

<y class="mt-4 mx-4 p-3 border-l-8 border-gray-600 text-sm text-gray-600 bg-gray-200">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  Utility customizing is unavailable.
</y>

<y class="mt-2 mb-4 mx-4 p-3 border-l-8 border-orange-600 text-sm text-orange-600 bg-orange-200">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  Only supported web browsers can benefit from this utility.
</y>

---

## Usage

Set the `horizontal` scroll image gallery. The image snaps to the `left` container after scrolling.

<y class="my-2 mx-auto xs:max-w-full sm:max-w-full md:max-w-md lg:max-w-md scroll-snap x-mandatory align-start flex h-48 overflow-x-scroll">
  <y class="m-1">
    <img class="max-w-xxs h-40"
         src="https://picsum.photos/300?=1">
  </y>
  <y class="m-1">
    <img class="max-w-xxs h-40"
         src="https://picsum.photos/300?=2">
  </y>
  <y class="m-1">
    <img class="max-w-xxs h-40"
         src="https://picsum.photos/300?=3">
  </y>
  <y class="m-1">
    <img class="max-w-xxs h-40"
         src="https://picsum.photos/300?=4">
  </y>
  <y class="m-1">
    <img class="max-w-xxs h-40"
         src="https://picsum.photos/300?=5">
  </y>
  <y class="m-1">
    <img class="max-w-xxs h-40"
         src="https://picsum.photos/300?=6">
  </y>
</y>

```html
<!-- Example -->
<y class="scroll-snap x-mandatory align-start ... flex overflow-x-scroll">
  <img src="...">
  <img src="...">
  ...
</y>
```

Set the `vertical` scroll image gallery. The image snaps to the `left` container after scrolling.

<y class="my-2 mx-auto max-w-xs scroll-snap y-mandatory align-start h-64 overflow-y-scroll">
  <y class="m-1">
    <img class="max-w-xxs h-40"
         src="https://picsum.photos/300?=1">
  </y>
  <y class="m-1">
    <img class="max-w-xxs h-40"
         src="https://picsum.photos/300?=2">
  </y>
  <y class="m-1">
    <img class="max-w-xxs h-40"
         src="https://picsum.photos/300?=3">
  </y>
  <y class="m-1">
    <img class="max-w-xxs h-40"
         src="https://picsum.photos/300?=4">
  </y>
  <y class="m-1">
    <img class="max-w-xxs h-40"
         src="https://picsum.photos/300?=5">
  </y>
  <y class="m-1">
    <img class="max-w-xxs h-40"
         src="https://picsum.photos/300?=6">
  </y>
</y>

```html
<!-- Example -->
<y class="scroll-snap y-mandatory align-start ... overflow-y-scroll">
  <img src="...">
  <img src="...">
  ...
</y>
```

Set the `horizontal` and `vertical` scroll image gallery. The image snaps to the `center` container after scrolling.

```html
<!-- Example -->
<y class="scroll-snap x-mandatory y-mandatory align-center ... flex flex-wrap overflow-scroll">
  <img src="...">
  <img src="...">
  ...
</y>
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
| disabled | | |