---
id: visibility
title: Visibility
description: Utilities for show or hide without affecting the layout of the document.
topic: Layouts
relate: box-sizing, clear, container, render, display, float, object-fit, object-position, overflow, position, top/bottom/left/right, z-index
variant: hover, group-hover
layout: default
---

> Layouts

# Visibility

Utilities for show or hide without affecting the layout of the document.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
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

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for visibility in variants.visibility %}{% for item in visibility.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).