---
id: dissect-opacity
title: Dissect Opacity
description: Utilities for sets opacity to bottom border on each child elements of its parent.
topic: Borders
relate: dissect, dissect-color
layout: default
---

> Borders

# Dissect Opacity <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.0.8</span>

Utilities for sets opacity to bottom border on each child elements of its parent.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
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
  <y>...</y>
  <y>...</y>
  <y>...</y>
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
  <y>...</y>
  <y>...</y>
  <y>...</y>
</y>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for dissectopacity in variants.dissectopacity %}{% for item in dissectopacity.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

