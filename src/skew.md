---
id: skew
title: Skew
description: Utilities for skews an element that has transform applied.
layout: default
---

> Transforms

# Skew

Utilities for skews an element that has transform applied.

---

## Class

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> |
|:--|:--|
| skew-x-0 | --transform-skew-x: 0 |
| skew-x-3 | --transform-skew-x: 3deg |
| skew-x-6 | --transform-skew-x: 6deg |
| skew-x-12 | --transform-skew-x: 12deg |
| -skew-x-12 | --transform-skew-x: -12deg |
| -skew-x-6 | --transform-skew-x: -6deg |
| -skew-x-3 | --transform-skew-x: -3deg |
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
    <img class="h-20 w-20 transform skew-x-12 rounded shadow"
       src="https://picsum.photos/80?=1">
  </y>
</y>

```html
<!-- Example -->
<img class="transform skew-x-12 ... h-32 w-24"
     src="...">

<y class="transform skew-x-12 ... h-32 w-24"
   style="background-image:utl(...)">
```

Set the element skew `vertical`.

<y class="my-6 mx-auto w-32">
  <y class="h-24 w-24 bg-red-300 flex justify-center items-center">
    <img class="h-20 w-20 transform skew-y-12 rounded shadow"
       src="https://picsum.photos/80?=1">
  </y>
</y>

```html
<!-- Example -->
<img class="transform skew-y-12 ... h-32 w-24"
     src="...">

<y class="transform skew-y-12 ... h-32 w-24"
   style="background-image:utl(...)">
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
<img class="transform -skew-x-12 ... h-32 w-24"
     src="...">

<y class="transform -skew-x-12 ... h-32 w-24"
   style="background-image:utl(...)">
```

Set the element skew reverse `vertical`.

<y class="my-6 mx-auto w-32">
  <y class="h-24 w-24 bg-red-300 flex justify-center items-center">
    <img class="h-20 w-20 transform -skew-y-12 rounded shadow"
       src="https://picsum.photos/80?=1">
  </y>
</y>

```html
<!-- Example -->
<img class="transform -skew-y-12 ... h-32 w-24"
     src="...">

<y class="transform -skew-y-12 ... h-32 w-24"
   style="background-image:utl(...)">
```

---

## Variant

| <span class="font-semibold underline">Variant</span> | <span class="font-semibold underline">Enabled</span> | <span class="font-semibold underline">Responsive</span> |
|:-:|:-:|:-:|
| Default | Yes | |
| Theme | | |
| hover| Yes | |
| group-hover | | |
| focus | | |
| active | | |
| visited | | |
| disabled | | |