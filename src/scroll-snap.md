---
id: scroll-snap
title: Scroll Snap
description: Utilities for sets viewport lock to certain elements or locations after finished scrolling.
layout: default
---

> Interactivity

# Scroll Snap <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.0</span>

Utilities for sets viewport lock to certain elements or locations after finished scrolling.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| scroll-snap `{type}` `{align}` | scroll-snap-type: `{type}`; <br> scroll-snap-align: `{align}` |

<style>
.supports {
  display: block
}
@supports (scroll-snap-align: start) {
  .supports {
    display: none
  }
}
</style>

<y class="supports m-4 p-3 border-l-8 border-orange-600 text-sm text-orange-600 (dark)text-orange-500 bg-orange-200 (dark)bg-orange-900">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  Your browser does not currently support the utilities.
</y>

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
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

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| align-none | scroll-snap-align: none |
| align-start | scroll-snap-align: start |
| align-center | scroll-snap-align: center |
| align-end | scroll-snap-align: end |

---

## Usage

Set the `horizontal` scroll image gallery. The image snaps to the `left` container after scrolling.

<y class="my-2 mx-auto (xs)max-w-full (sm)max-w-full (md)max-w-md (lg)max-w-md scroll-snap x-mandatory align-start flex h-48 overflow-x-scroll">
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

Set the `vertical` scroll image gallery. The image snaps to the `top` container after scrolling.

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

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for scrollsnap in variants.scrollsnap %}{% for item in scrollsnap.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).


