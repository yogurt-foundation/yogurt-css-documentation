---
id: dissect
title: Dissect
description: Utilities for sets bottom border on each child elements of its parent.
layout: default
---

> Borders

# Dissect <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.0.8</span>

Utilities for sets bottom border on each child elements of its parent.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| dissect-x-0 | --dissect-x-reverse: 0; <br> border-right-width: calc(0 * var(--dissect-x-reverse)); <br> border-left-width: calc(0 * calc(1 - var(--dissect-x-reverse))) |
| dissect-x-2 | --dissect-x-reverse: 0; <br> border-right-width: calc(2px * var(--dissect-x-reverse)); <br> border-left-width: calc(2px * calc(1 - var(--dissect-x-reverse))) |
| dissect-x-4 | --dissect-x-reverse: 0; <br> border-right-width: calc(4px * var(--dissect-x-reverse)); <br> border-left-width: calc(4px * calc(1 - var(--dissect-x-reverse))) |
| dissect-x-8 | --dissect-x-reverse: 0; <br> border-right-width: calc(8px * var(--dissect-x-reverse)); <br> border-left-width: calc(8px * calc(1 - var(--dissect-x-reverse))) |
| dissect-y-0 | --dissect-y-reverse: 0; <br> border-top-width: calc(0 * calc(1 - var(--dissect-y-reverse))); <br> border-bottom-width: calc(0 * var(--dissect-y-reverse)) |
| dissect-y-2 | --dissect-y-reverse: 0; <br> border-top-width: calc(2px * calc(1 - var(--dissect-y-reverse))); <br> border-bottom-width: calc(2px * var(--dissect-y-reverse)) |
| dissect-y-4 | --dissect-y-reverse: 0; <br> border-top-width: calc(4px * calc(1 - var(--dissect-y-reverse))); <br> border-bottom-width: calc(4px * var(--dissect-y-reverse)) |
| dissect-y-8 | --dissect-y-reverse: 0; <br> border-top-width: calc(8px * calc(1 - var(--dissect-y-reverse))); <br> border-bottom-width: calc(8px * var(--dissect-y-reverse)) |
| dissect-x | --dissect-x-reverse: 0; <br> border-right-width: calc(1px * var(--divide-x-reverse)); <br> border-left-width: calc(1px * calc(1 - var(--divide-x-reverse))) |
| dissect-y | --dissect-y-reverse: 0; <br> border-top-width: calc(1px * calc(1 - var(--divide-y-reverse))); <br> border-bottom-width: calc(1px * var(--divide-y-reverse)) |
| dissect-x-reverse | --dissect-x-reverse: 1 |
| dissect-y-reverse | --dissect-y-reverse: 1 |

<y class="m-4 p-3 border-l-8 border-gray-600 text-sm text-gray-600 bg-gray-200 (dark)bg-gray-800">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  Utility customizing is unavailable.
</y>

---

## Usage

Set borders in between the elements horizontally, must companion with [flex](/flex/) utility.

<y class="p-4 my-2 mx-auto max-w-sm bg-gray-400">
  <y class="flex dissect-x-4 bg-gray-600">
    <y class="w-64 h-8 bg-gray-500 flex justify-center items-center text-gray-600">1</y>
    <y class="w-64 h-8 bg-gray-500 flex justify-center items-center text-gray-600">2</y>
    <y class="w-64 h-8 bg-gray-500 flex justify-center items-center text-gray-600">3</y>
  </y>
</y>

```html
<!-- Example -->
<y class="flex dissect-x-4">
  <y>1</y>
  <y>2</y>
  <y>3</y>
</y>
```

Set borders in between the elements vertically.

<y class="p-4 my-2 mx-auto max-w-sm bg-gray-400">
  <y class="dissect-y-4 bg-gray-600">
    <y class="w-64 h-8 bg-gray-500 flex justify-center items-center text-gray-600">1</y>
    <y class="w-64 h-8 bg-gray-500 flex justify-center items-center text-gray-600">2</y>
    <y class="w-64 h-8 bg-gray-500 flex justify-center items-center text-gray-600">3</y>
  </y>
</y>

```html
<!-- Example -->
<y class="dissect-y-4">
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
| Dark Theme | | |
| hover| | |
| group-hover | | |
| focus | | |
| focus-visible | | |
| focus-within | | |
| active | | |
| visited | | |
| checked | | |
| disabled | | |