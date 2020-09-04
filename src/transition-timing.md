---
id: transition-timing
title: Transition Timing
description: Utilities for sets the easing function of transition animations.
layout: default
---

> Transitions

# Transition Timing

Utilities for sets the easing function of transition animations.

---

## Class

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> |
|:--|:--|
| ease-linear | transition-timing-function: linear |
| ease-in | transition-timing-function: cubic-bezier(0.4, 0, 1, 1) |
| ease-out | transition-timing-function: cubic-bezier(0, 0, 0.2, 1) |
| ease-in-out | transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) |

---

## Usage

Set basic [Transition](/transition-property/) with [Duration](/transition-duration/) and [Timing](/transition-timing/), apply with pseudo class variants `hover`, `focus`, `active`.

Set transition timing `ease-linear` to an element.

<y class="my-2 mx-auto w-64">
  <y class="p-4 w-56 text-center text-gray-600 bg-gray-400 transition duration-300 ease-linear hover:shadow-lg cursor-pointer">
  	Hover ease-linear
  </y>
</y>

```html
<!-- Example -->
<y class="transition ease-linear ... duration-300 ... hover:shadow-lg w-32 h-24">
  ...
</y>
```

Set transition timing `ease-in`.

<y class="my-2 mx-auto w-64">
  <y class="p-4 w-56 text-center text-gray-600 bg-gray-400 transition duration-300 ease-in hover:shadow-lg cursor-pointer">
  	Hover ease-in
  </y>
</y>

```html
<!-- Example -->
<y class="transition ease-in ... duration-300 ... hover:shadow-lg w-32 h-24">
  ...
</y>
```

Set transition timing `ease-out`.

<y class="my-2 mx-auto w-64">
  <y class="p-4 w-56 text-center text-gray-600 bg-gray-400 transition duration-300 ease-out hover:shadow-lg cursor-pointer">
  	Hover ease-out
  </y>
</y>

```html
<!-- Example -->
<y class="transition ease-out ... duration-300 ... hover:shadow-lg w-32 h-24">
  ...
</y>
```

Set transition timing `ease-in-out`.

<y class="my-2 mx-auto w-64">
  <y class="p-4 w-56 text-center text-gray-600 bg-gray-400 transition duration-300 ease-in-out hover:shadow-lg cursor-pointer">
  	Hover ease-in-out
  </y>
</y>

```html
<!-- Example -->
<y class="transition ease-in-out ... duration-300 ... hover:shadow-lg w-32 h-24">
  ...
</y>
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
| disabled | | |
