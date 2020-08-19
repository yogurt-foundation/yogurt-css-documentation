---
id: transition-duration
title: Transition Duration
description: Utilities for sets the length of time for a transition animations to complete.
layout: default
---

> Transitions

# Transition Duration

Utilities for sets the length of time for a transition animations to complete.

---

## Class

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> |
|:--|:--|
| duration-75 | transition-duration: 75ms |
| duration-100 | transition-duration: 100ms |
| duration-150 | transition-duration: 150ms |
| duration-200 | transition-duration: 200ms |
| duration-300 | transition-duration: 300ms |
| duration-500 | transition-duration: 500ms |
| duration-700 | transition-duration: 700ms |
| duration-1000 | transition-duration: 1000ms |

---

## Usage

Set basic transition with [Duration](/transition-duration/) and [Timing](/transition-timing/), apply with pseudo class variants `hover`, `focus`, `active`.

Set transition duration `75ms` to an element.

<y class="my-2 mx-auto w-64">
  <y class="p-4 w-56 text-center text-gray-600 bg-gray-400 transition duration-75 ease-in-out hover:shadow-lg cursor-pointer">
  	Hover duration-75
  </y>
</y>

```html
<!-- Example -->
<y class="transition duration-75 ease-in-out ... hover:shadow-lg ... w-32 h-24">
  ...
</y>
```

Set transition duration `100ms`.

<y class="my-2 mx-auto w-64">
  <y class="p-4 w-56 text-center text-gray-600 bg-gray-400 transition duration-100 ease-in-out hover:shadow-lg cursor-pointer">
  	Hover duration-100
  </y>
</y>

```html
<!-- Example -->
<y class="transition duration-100 ease-in-out ... hover:shadow-lg ... w-32 h-24">
  ...
</y>
```
Set transition duration `150ms`.

<y class="my-2 mx-auto w-64">
  <y class="p-4 w-56 text-center text-gray-600 bg-gray-400 transition duration-150 ease-in-out hover:shadow-lg cursor-pointer">
  	Hover duration-150
  </y>
</y>

```html
<!-- Example -->
<y class="transition duration-150 ease-in-out ... hover:shadow-lg ... w-32 h-24">
  ...
</y>
```

Set transition duration `200ms`.

<y class="my-2 mx-auto w-64">
  <y class="p-4 w-56 text-center text-gray-600 bg-gray-400 transition duration-200 ease-in-out hover:shadow-lg cursor-pointer">
  	Hover duration-200
  </y>
</y>

```html
<!-- Example -->
<y class="transition duration-200 ease-in-out ... hover:shadow-lg ... w-32 h-24">
  ...
</y>
```

Set transition duration `300ms`.

<y class="my-2 mx-auto w-64">
  <y class="p-4 w-56 text-center text-gray-600 bg-gray-400 transition duration-300 ease-in-out hover:shadow-lg cursor-pointer">
  	Hover duration-300
  </y>
</y>

```html
<!-- Example -->
<y class="transition duration-300 ease-in-out ... hover:shadow-lg ... w-32 h-24">
  ...
</y>
```

Set transition duration `500ms`.

<y class="my-2 mx-auto w-64">
  <y class="p-4 w-56 text-center text-gray-600 bg-gray-400 transition duration-500 ease-in-out hover:shadow-lg cursor-pointer">
  	Hover duration-500
  </y>
</y>

```html
<!-- Example -->
<y class="transition duration-500 ease-in-out ... hover:shadow-lg ... w-32 h-24">
  ...
</y>
```

Set transition duration `1000ms`.

<y class="my-2 mx-auto w-64">
  <y class="p-4 w-56 text-center text-gray-600 bg-gray-400 transition duration-1000 ease-in-out hover:shadow-lg cursor-pointer">
  	Hover duration-1000
  </y>
</y>

```html
<!-- Example -->
<y class="transition duration-1000 ease-in-out ... hover:shadow-lg ... w-32 h-24">
  ...
</y>
```

---

## Customize <a class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300" href="/plugin-api/">More</a>

```scss
// @file: `src/_plugins.scss`
@include plugin(
  utility: 'duration',
  //variant: 'responsive',
  property: 'transition-duration',
  modifier: (
    '600': '...ms',
    '800': '...ms'
    ...
  )
)
```

---

## Variant

| <span class="font-semibold underline">Variant</span> | <span class="font-semibold underline">Enabled</span> | <span class="font-semibold underline">Responsive</span> |
|:-:|:-:|:-:|
| Default | Yes | |
| hover| | |
| group-hover | | |
| focus | | |
| active | | |
| visited | | |
| disabled | | |