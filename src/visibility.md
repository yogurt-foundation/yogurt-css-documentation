---
id: visibility
title: Visibility
description: Utilities for show or hide without affecting the layout of the document.
layout: default
---

> Layouts

# Visibility

Utilities for show or hide without affecting the layout of the document.

---

## Class

| <span class="px-3 py-1 text-white dark:text-charcoal-100 bg-charcoal-100 dark:bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white dark:text-charcoal-100 bg-charcoal-100 dark:bg-gray-600 rounded-full">css</span> |
|:--|:--|
| visible | visibility: visible |
| invisible | visibility: hidden |

---

## Usage

Set `visible` to an element.

<y class="my-2 mx-auto w-64">
  <y class="flex justify-center bg-red-300">
    <y class="w-32 h-24 bg-gray-300"></y>
    <y class="w-32 h-24 bg-gray-500 visible"></y>
    <y class="w-32 h-24 bg-gray-300"></y>
  </y>
</y>

```html
<!-- Example -->
<y class="visible">
  ...
</y>
```

Set `invisible` to an elment, the element property remains, but not hidden from existing.

<y class="my-2 mx-auto w-64">
  <y class="flex justify-center bg-red-300">
    <y class="w-32 h-24 bg-gray-300"></y>
    <y class="w-32 h-24 bg-gray-500 invisible"></y>
    <y class="w-32 h-24 bg-gray-300"></y>
  </y>
</y>

```html
<!-- Example -->
<y class="invisible">
  ...
</y>
```

---

## Variant

| <span class="font-semibold underline">Variant</span> | <span class="font-semibold underline">Enabled</span> | <span class="font-semibold underline">Responsive</span> |
|:-:|:-:|:-:|
| Default | Yes | Yes |
| Dark Theme | | |
| hover| Yes | |
| group-hover | Yes | |
| focus | | |
| active | | |
| visited | | |
| checked | | |
| disabled | | |