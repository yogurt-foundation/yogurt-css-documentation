---
id: transform-origin
title: Transform Origin
description: Utilities for sets the origin of an element's transforms.
layout: default
---

> Transforms

# Transform Origin

Utilities for sets the origin of an element's transforms.

---

## Class

| <span class="px-3 py-1 text-white dark:text-charcoal-100 bg-charcoal-100 dark:bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white dark:text-charcoal-100 bg-charcoal-100 dark:bg-gray-600 rounded-full">css</span> |
|:--|:--|
| origin-center | transform-origin: center |
| origin-top | transform-origin: top |
| origin-top-right | transform-origin: top right |
| origin-right | transform-origin: right |
| origin-bottom-right | transform-origin: bottom right |
| origin-bottom | transform-origin: bottom |
| origin-bottom-left | transform-origin: bottom left |
| origin-left | transform-origin: left |
| origin-top-left | transform-origin: top left |

---

## Usage

Set basic transform-origin with [Rotate](/rotate/), [Skew](/skew/), and [Scale](/scale/) utilities.

Set the element origin to `center`.

<y class="mt-2 mb-6 mx-auto w-32">
  <y class="h-20 w-20 bg-red-300">
    <img class="h-20 w-20 origin-center transform rotate-45 rounded shadow"
       src="https://picsum.photos/80?=1">
  </y>
</y>

```html
<!-- Example -->
<img class="origin-center ... transform rotate-45 ... h-32 w-24"
     src="...">
```

Set the element origin to `top-left`.

<y class="my-8 mx-auto w-32">
  <y class="h-20 w-20 bg-red-300">
    <img class="h-20 w-20 origin-top-left transform rotate-45 rounded shadow"
       src="https://picsum.photos/80?=1">
  </y>
</y>

```html
<!-- Example -->
<img class="origin-top-left ... transform rotate-45 ... h-32 w-24"
     src="...">
```

Set the element origin to `bottom-right`.

<y class="my-8 mx-auto w-32">
  <y class="h-20 w-20 bg-red-300">
    <img class="h-20 w-20 origin-bottom-right transform rotate-45 rounded shadow"
       src="https://picsum.photos/80?=1">
  </y>
</y>

```html
<!-- Example -->
<img class="origin-bottom-right ... transform rotate-45 ... h-32 w-24"
     src="...">
```

Set the element origin to `right`.

<y class="my-8 mx-auto w-32">
  <y class="h-20 w-20 bg-red-300">
    <img class="h-20 w-20 origin-right transform rotate-45 rounded shadow"
       src="https://picsum.photos/80?=1">
  </y>
</y>

```html
<!-- Example -->
<img class="origin-right ... transform rotate-45 ... h-32 w-24"
     src="...">
```

Set the element origin to `bottom-right`.

<y class="my-8 mx-auto w-32">
  <y class="h-20 w-20 bg-red-300">
    <img class="h-20 w-20 origin-bottom-right transform rotate-45 rounded shadow"
       src="https://picsum.photos/80?=1">
  </y>
</y>

```html
<!-- Example -->
<img class="origin-center ... transform rotate-45 ... h-32 w-24"
     src="...">
```

Set the element origin to `bottom-left`.

<y class="mt-6 mb-12 mx-auto w-32">
  <y class="h-20 w-20 bg-red-300">
    <img class="h-20 w-20 origin-bottom-left transform rotate-45 rounded shadow"
       src="https://picsum.photos/80?=1">
  </y>
</y>

```html
<!-- Example -->
<img class="origin-bottom-left ... transform rotate-45 ... h-32 w-24"
     src="...">
```

Set the element origin to `left`.

<y class="mt-4 mb-12 mx-auto w-32">
  <y class="h-20 w-20 bg-red-300">
    <img class="h-20 w-20 origin-left transform rotate-45 rounded shadow"
       src="https://picsum.photos/80?=1">
  </y>
</y>

```html
<!-- Example -->
<img class="origin-left ... transform rotate-45 ... h-32 w-24"
     src="...">
```

Set the element origin to `top-left`.

<y class="my-8 mx-auto w-32">
  <y class="h-20 w-20 bg-red-300">
    <img class="h-20 w-20 origin-top-left transform rotate-45 rounded shadow"
       src="https://picsum.photos/80?=1">
  </y>
</y>

```html
<!-- Example -->
<img class="origin-top-left ... transform rotate-45 ... h-32 w-24"
     src="...">
```

---

## Variant

| <span class="font-semibold underline">Variant</span> | <span class="font-semibold underline">Enabled</span> | <span class="font-semibold underline">Responsive</span> |
|:-:|:-:|:-:|
| Default | Yes | |
| Dark Theme | | |
| hover| Yes | |
| group-hover | | |
| focus | | |
| active | | |
| visited | | |
| checked | | |
| disabled | | |