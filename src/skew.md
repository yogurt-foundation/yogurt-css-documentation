---
id: skew
title: Skew
description: Utilities for skews an element that has transform applied.
topic: Transforms
relate: translate, transform, rotate, scale
variant: hover, group-hover, focus, focus-visible
layout: default
---

> Transforms

# Skew

Utilities for skews an element that has transform applied.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| skew-x-0 | --transform-skew-x: 0 |
| skew-x-3 | --transform-skew-x: 3deg |
| skew-x-6 | --transform-skew-x: 6deg |
| skew-x-12 | --transform-skew-x: 12deg |
| -skew-x-12 | --transform-skew-x: -12deg |
| -skew-x-6 | --transform-skew-x: -6deg |
| -skew-x-3 | --transform-skew-x: -3deg |

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| skew-y-0 | --transform-skew-y: 0 |
| skew-y-3 | --transform-skew-y: 3deg |
| skew-y-6 | --transform-skew-y: 6deg |
| skew-y-12 | --transform-skew-y: 12deg |
| -skew-y-12 | --transform-skew-y: -12deg |
| -skew-y-6 | --transform-skew-y: -6deg |
| -skew-y-3 | --transform-skew-y: -3deg |

---

## Usage

Set basic [Transform Origin](/transform-origin/) with [Skew](/skew/) utility. (See [Scale](/scale/), [Rotate](/rotate/)).

Set the element skew `horizontal`.

<y class="my-6 mx-auto w-32">
  <y class="h-24 w-24 bg-red-300 flex justify-center items-center">
    <img
      class="h-20 w-20 transform skew-x-12 rounded shadow"
      src="https://picsum.photos/80?=1"
    >
  </y>
</y>

```html
<!-- Example -->
<img
  class="transform skew-x-12 ... h-32 w-24"
  src="..."
>

<y
  class="transform skew-x-12 ... h-32 w-24"
  style="background-image:utl(...)">
</y>
```

Set the element skew `vertical`.

<y class="my-6 mx-auto w-32">
  <y class="h-24 w-24 bg-red-300 flex justify-center items-center">
    <img
      class="h-20 w-20 transform skew-y-12 rounded shadow"
      src="https://picsum.photos/80?=1"
    >
  </y>
</y>

```html
<!-- Example -->
<img
  class="transform skew-y-12 ... h-32 w-24"
  src="..."
>

<y
  class="transform skew-y-12 ... h-32 w-24"
  style="background-image:utl(...)">
</y>
```

Set the element skew reverse `horizontal`.

<y class="my-6 mx-auto w-32">
  <y class="h-24 w-24 bg-red-300 flex justify-center items-center">
    <img class="h-20 w-20 transform -skew-x-12 rounded shadow"
       src="https://picsum.photos/80?=1">
  </y>
</y>

```html
<!-- Example -->
<img
  class="transform -skew-x-12 ... h-32 w-24"
  src="..."
>

<y
  class="transform -skew-x-12 ... h-32 w-24"
  style="background-image:utl(...)">
</y>
```

Set the element skew reverse `vertical`.

<y class="my-6 mx-auto w-32">
  <y class="h-24 w-24 bg-red-300 flex justify-center items-center">
    <img
      class="h-20 w-20 transform -skew-y-12 rounded shadow"
      src="https://picsum.photos/80?=1"
    >
  </y>
</y>

```html
<!-- Example -->
<img
  class="transform -skew-y-12 ... h-32 w-24"
  src="..."
>

<y
  class="transform -skew-y-12 ... h-32 w-24"
  style="background-image:utl(...)">
</y>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for skew in variants.skew %}{% for item in skew.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

