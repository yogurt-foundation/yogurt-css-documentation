---
id: background-opacity
title: Background Opacity
description: Utilities for sets opacity of background color.
layout: default
---

> Backgrounds

# Background Opacity <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.0.8</span>

Utilities for sets opacity of background color.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| bg-opacity-0 | --bg-opacity: 0 |
| bg-opacity-25 | --bg-opacity: .25 |
| bg-opacity-50 | --bg-opacity: .5 |
| bg-opacity-75 | --bg-opacity: .75 |
| bg-opacity-100 | --bg-opacity: 1 |

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

## Customize <a class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600" href="/plugin-api/">More</a>

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
| Dark Theme | | |
| hover| | |
| group-hover | | |
| focus | | |
| active | | |
| visited | | |
| checked | | |
| disabled | | |