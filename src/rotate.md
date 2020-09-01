---
id: rotate
title: Rotate
description: Utilities for rotates an element that has transform applied.
layout: default
---

> Transforms

# Rotate

Utilities for rotates an element that has transform applied.

---

## Class

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> |
|:--|:--|
| rotate-0 | --transform-rotate: 0 |
| rotate-45 | --transform-rotate: 45deg |
| rotate-90 | --transform-rotate: 90deg |
| rotate-180 | --transform-rotate: 180deg |
| -rotate-180 | --transform-rotate: -180deg |
| -rotate-90 | --transform-rotate: -90deg |
| -rotate-45 | --transform-rotate: -45deg |

---

## Usage

Set basic [Transform Origin](/transform-origin/) with [Rotate](/rotate/) utility. (See [Skew](/skew/), [Scale](/scale/)).

Set the element rotation to `0` degree.

<y class="my-6 mx-auto w-32">
  <y class="h-24 w-24 bg-red-300 flex justify-center items-center">
    <img class="h-20 w-20 transform rotate-0 rounded shadow"
       src="https://picsum.photos/80?=1">
  </y>
</y>

```html
<!-- Example -->
<img class="transform rotate-0 ... h-32 w-24"
     src="...">

<y class="transform rotate-0 ... h-32 w-24"
   style="background-image:utl(...)">
```

Set the element rotation to `45` degree.

<y class="my-6 mx-auto w-32">
  <y class="h-24 w-24 bg-red-300 flex justify-center items-center">
    <img class="h-20 w-20 transform rotate-45 rounded shadow"
       src="https://picsum.photos/80?=1">
  </y>
</y>

```html
<!-- Example -->
<img class="transform rotate-45 ... h-32 w-24"
     src="...">

<y class="transform rotate-45 ... h-32 w-24"
   style="background-image:utl(...)">
```

Set the element rotation to `90` degree.

<y class="my-6 mx-auto w-32">
  <y class="h-24 w-24 bg-red-300 flex justify-center items-center">
    <img class="h-20 w-20 transform rotate-90 rounded shadow"
       src="https://picsum.photos/80?=1">
  </y>
</y>

```html
<!-- Example -->
<img class="transform rotate-90 ... h-32 w-24"
     src="...">

<y class="transform rotate-90 ... h-32 w-24"
   style="background-image:utl(...)">
```

Set the element rotation to `180` degree.

<y class="my-6 mx-auto w-32">
  <y class="h-24 w-24 bg-red-300 flex justify-center items-center">
    <img class="h-20 w-20 transform rotate-180 rounded shadow"
       src="https://picsum.photos/80?=1">
  </y>
</y>

```html
<!-- Example -->
<img class="transform rotate-180 ... h-32 w-24"
     src="...">

<y class="transform rotate-180 ... h-32 w-24"
   style="background-image:utl(...)">
```

Set the element rotation to `-180` degree.

<y class="my-6 mx-auto w-32">
  <y class="h-24 w-24 bg-red-300 flex justify-center items-center">
    <img class="h-20 w-20 transform -rotate-180 rounded shadow"
       src="https://picsum.photos/80?=1">
  </y>
</y>

```html
<!-- Example -->
<img class="transform -rotate-180 ... h-32 w-24"
     src="...">

<y class="transform -rotate-180 ... h-32 w-24"
   style="background-image:utl(...)">
```

Set the element rotation to `-90` degree.

<y class="my-6 mx-auto w-32">
  <y class="h-24 w-24 bg-red-300 flex justify-center items-center">
    <img class="h-20 w-20 transform -rotate-90 rounded shadow"
       src="https://picsum.photos/80?=1">
  </y>
</y>

```html
<!-- Example -->
<img class="transform -rotate-90 ... h-32 w-24"
     src="...">

<y class="transform -rotate-90 ... h-32 w-24"
   style="background-image:utl(...)">
```

Set the element rotation to `-45` degree.

<y class="my-6 mx-auto w-32">
  <y class="h-24 w-24 bg-red-300 flex justify-center items-center">
    <img class="h-20 w-20 transform -rotate-45 rounded shadow"
       src="https://picsum.photos/80?=1">
  </y>
</y>

```html
<!-- Example -->
<img class="transform -rotate-45 ... h-32 w-24"
     src="...">

<y class="transform -rotate-45 ... h-32 w-24"
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