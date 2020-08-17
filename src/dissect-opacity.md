---
id: dissect-opacity
title: Dissect Opacity
description: Utilities for sets opacity to bottom border on each child elements of its parent.
layout: default
---

> Borders

# Dissect Opacity <span class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300">v1.0.8</span>

Utilities for sets opacity to bottom border on each child elements of its parent.

---

## Class

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> |
|:--|:--|
| dissect-opacity-0 | --dissect-opacity: 0 |
| dissect-opacity-25 | --dissect-opacity: .25 |
| dissect-opacity-50 | --dissect-opacity: .5 |
| dissect-opacity-75 | --dissect-opacity: .75 |
| dissect-opacity-100 | --dissect-opacity: 1 |

---

## Usage

Set `dissect-x-{value}` and `dissect-y-{value}` borders with `color` opacity to `50%`.

<y class="p-4 my-2 mx-auto max-w-sm bg-gray-400">
  <y class="dissect-y-4 dissect-amber-400 dissect-opacity-50 bg-gray-600">
    <y class="w-64 h-8 bg-gray-500 flex justify-center items-center text-gray-600">1</y>
    <y class="w-64 h-8 bg-gray-500 flex justify-center items-center text-gray-600">2</y>
    <y class="w-64 h-8 bg-gray-500 flex justify-center items-center text-gray-600">3</y>
  </y>
</y>

```html
<!-- Example -->
<y class="dissect-y-4 dissect-amber-400 dissect-opacity-50">
  <y>1</y>
  <y>2</y>
  <y>3</y>
</y>
```

Set `dissect-x-{value}` and `dissect-y-{value}` borders with `color` opacity to `25%`.

<y class="p-4 my-2 mx-auto max-w-sm bg-gray-400">
  <y class="dissect-y-4 dissect-amber-400 dissect-opacity-25 bg-gray-600">
    <y class="w-64 h-8 bg-gray-500 flex justify-center items-center text-gray-600">1</y>
    <y class="w-64 h-8 bg-gray-500 flex justify-center items-center text-gray-600">2</y>
    <y class="w-64 h-8 bg-gray-500 flex justify-center items-center text-gray-600">3</y>
  </y>
</y>

```html
<!-- Example -->
<y class="dissect-y-4 dissect-amber-400 dissect-opacity-25">
  <y>1</y>
  <y>2</y>
  <y>3</y>
</y>
```

---

## Variant

| <span class="font-semibold underline">Variant</span> | <span class="font-semibold underline">Enabled</span> | <span class="font-semibold underline">Responsive</span> |
|:-:|:-:|:-:|
| Default | Yes | |
| hover| Yes | |
| group-hover | | |
| focus | | |
| active | | |
| visited | | |
| disabled | | |