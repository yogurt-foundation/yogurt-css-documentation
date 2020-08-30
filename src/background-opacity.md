---
id: background-opacity
title: Background Opacity
description: Utilities for sets opacity of background color.
layout: default
---

> Backgrounds

# Background Opacity <span class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300">v1.0.8</span>

Utilities for sets opacity of background color.

---

## Class

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> |
|:--|:--|
| bg-opacity-0 | --bg-opacity: 0 |
| bg-opacity-25 | --bg-opacity: .25 |
| bg-opacity-50 | --bg-opacity: .5 |
| bg-opacity-75 | --bg-opacity: .75 |
| bg-opacity-100 | --bg-opacity: 1 |

<y class="my-2 mx-4 p-3 border-l-8 border-orange-600 text-sm text-orange-600 bg-orange-200">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  Only supported web browsers can benefit from this utility.
</y>

---

## Usage

Set background-color with `100%` opacity to an element.

<y class="my-2 mx-auto w-64">
 <y class="h-32 bg-amber-500 bg-opacity-100 border border-gray-300"></y>
</y>

```html
<!-- Example -->
<y class="bg-amber-500 bg-opacity-100 ... h-32 w-64"></y>
```

Set background-color with `75%` opacity to an element.

<y class="my-2 mx-auto w-64">
 <y class="h-32 bg-amber-500 bg-opacity-75 border border-gray-300"></y>
</y>

```html
<!-- Example -->
<y class="bg-amber-500 bg-opacity-75 ... h-32 w-64"></y>
```

Set background-color with `50%` opacity to an element.

<y class="my-2 mx-auto w-64">
 <y class="h-32 bg-amber-500 bg-opacity-50 border border-gray-300"></y>
</y>

```html
<!-- Example -->
<y class="bg-amber-500 bg-opacity-50 ... h-32 w-64"></y>
```

Set background-color with `25%` opacity to an element.

<y class="my-2 mx-auto w-64">
 <y class="h-32 bg-amber-500 bg-opacity-25 border border-gray-300"></y>
</y>

```html
<!-- Example -->
<y class="bg-amber-500 bg-opacity-25 ... h-32 w-64"></y>
```

Set background-color with `0%` opacity to an element.

<y class="my-2 mx-auto w-64">
 <y class="h-32 bg-amber-500 bg-opacity-0 border border-gray-300"></y>
</y>

```html
<!-- Example -->
<y class="bg-amber-500 bg-opacity-0 ... h-32 w-64"></y>
```

---

## Customize <a class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300" href="/plugin-api/">More</a>

```scss
// @file: `src/_plugins.scss`
@include plugin(
 (
   utility: 'bg-opacity',
   //variant: 'responsive',
   property: '--bg-opacity',
   modifier: (
     '30': '.3',
     '40': '.4'
     //...
   )
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