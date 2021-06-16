---
id: scale
title: Scale
description: Utilities for scales an element that has transform applied.
topic: Transforms
relate: translate, transform, rotate, skew
variant: hover, group-hover, focus, focus-visible
layout: default
---

> Transforms

# Scale

Utilities for scales an element that has transform applied.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| scale-0 | --transform-scale-x: 0; <br> --transform-scale-y: 0 |
| scale-50 | --transform-scale-x: .5; <br> --transform-scale-y: .5 |
| scale-75 | --transform-scale-x: .75; <br> --transform-scale-y: .75 |
| scale-90 | --transform-scale-x: .9; <br> --transform-scale-y: .9 |
| scale-95 | --transform-scale-x: .95; <br> --transform-scale-y: .95 |
| scale-100 | --transform-scale-x: 1; <br> --transform-scale-y: 1 |
| scale-105 | --transform-scale-x: 1.05; <br> --transform-scale-y: 1.05 |
| scale-110 | --transform-scale-x: 1.1; <br> --transform-scale-y: 1.1|
| scale-125 | --transform-scale-x: 1.25; <br> --transform-scale-y: 1.25 |
| scale-150 | --transform-scale-x: 1.5; <br> --transform-scale-y: 1.5 |

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| scale-x-0 | --transform-scale-x: 0 |
| scale-x-50 | --transform-scale-x: .5 |
| scale-x-75 | --transform-scale-x: .75 |
| scale-x-90 | --transform-scale-x: .9 |
| scale-x-95 | --transform-scale-x: .95 |
| scale-x-100 | --transform-scale-x: 1 |
| scale-x-105 | --transform-scale-x: 1.05 |
| scale-x-110 | --transform-scale-x: 1.1 |
| scale-x-125 | --transform-scale-x: 1.25 |
| scale-x-150 | --transform-scale-x: 1.5 |

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| scale-y-0 | --transform-scale-y: 0 |
| scale-y-50 | --transform-scale-y: .5 |
| scale-y-75 | --transform-scale-y: .75 |
| scale-y-90 | --transform-scale-y: .9 |
| scale-y-95 | --transform-scale-y: .95 |
| scale-y-100 | --transform-scale-y: 1 |
| scale-y-105 | --transform-scale-y: 1.05 |
| scale-y-110 | --transform-scale-y: 1.1 |
| scale-y-125 | --transform-scale-y: 1.25 |
| scale-y-150 | --transform-scale-y: 1.5 |

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| scale-z-0 | --transform-scale-z: 0 |
| scale-z-50 | --transform-scale-z: .5 |
| scale-z-75 | --transform-scale-z: .75 |
| scale-z-90 | --transform-scale-z: .9 |
| scale-z-95 | --transform-scale-z: .95 |
| scale-z-100 | --transform-scale-z: 1 |
| scale-z-105 | --transform-scale-z: 1.05 |
| scale-z-110 | --transform-scale-z: 1.1 |
| scale-z-125 | --transform-scale-z: 1.25 |
| scale-z-150 | --transform-scale-z: 1.5 |

---

## Usage

Set basic [Transform Origin](/transform-origin/) with [Scale](/scale/) utility. (See [Skew](/skew/), [Rotate](/rotate/)).

Set the element scale to `50` times smaller.

<y class="my-6 mx-auto w-32">
  <y class="h-24 w-24 bg-red-300 flex justify-center items-center">
    <img
      class="h-20 w-20 transform scale-50 rounded shadow"
      src="https://picsum.photos/80?=1"
    >
  </y>
</y>

```html
<!-- Example -->
<img
  class="transform scale-50 ... h-32 w-24"
  src="..."
>

<y
  class="transform scale-50 ... h-32 w-24"
  style="background-image:utl(...)">
</y>
```

Set the element scale to `150` times larger.

<y class="my-6 mx-auto w-32">
  <y class="h-24 w-24 bg-red-300 flex justify-center items-center">
    <img
      class="h-20 w-20 transform scale-150 rounded shadow"
      src="https://picsum.photos/80?=1"
    >
  </y>
</y>

```html
<!-- Example -->
<img
  class="transform scale-150 ... h-32 w-24"
  src="..."
>

<y
  class="transform scale-150 ... h-32 w-24"
  style="background-image:utl(...)">
</y>
```

Set the element scale `horizontal` to `50` times smaller.

<y class="my-6 mx-auto w-32">
  <y class="h-24 w-24 bg-red-300 flex justify-center items-center">
    <img
      class="h-20 w-20 transform scale-x-50 rounded shadow"
      src="https://picsum.photos/80?=1"
    >
  </y>
</y>

```html
<!-- Example -->
<img
  class="transform scale-x-50 ... h-32 w-24"
  src="..."
>

<y
  class="transform scale-x-50 ... h-32 w-24"
  style="background-image:utl(...)">
</y>
```

Set the element scale `vertical` to `50` times smaller.

<y class="my-6 mx-auto w-32">
  <y class="h-24 w-24 bg-red-300 flex justify-center items-center">
    <img
      class="h-20 w-20 transform scale-y-50 rounded shadow"
      src="https://picsum.photos/80?=1"
    >
  </y>
</y>

```html
<!-- Example -->
<img
  class="transform scale-y-50 ... h-32 w-24"
  src="..."
>

<y
  class="transform scale-y-50 ... h-32 w-24"
  style="background-image:utl(...)">
</y>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for scale in variants.scale %}{% for item in scale.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

