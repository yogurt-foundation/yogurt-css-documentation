---
id: clip-ellipse
title: Clip Ellipse
description: Utilities for sets outside clipping ellipse path of image or element invisible, inside the clipping path are visible by moving plot x or y and focus area.
topic: Clipping
relate: clip-polygon, clip-circle
layout: default
---

> Clipping

# Clip Ellipse <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.6</span>

Utilities for sets outside clipping ellipse path of image or element invisible, inside the clipping path are visible by moving plot x or y and focus area.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| clip-ellipse `{focus-x}` `{focus-y}` `{plot-x}` `{plot-y}` | clip-path: ellipse(var(--clip-ellipse-focus-x) var(--clip-ellipse-focus-y) at var(--clip-ellipse-plot-x) var(--clip-ellipse-plot-y)); |

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| focus-x-0 | --clip-ellipse-focus-x: 0% |
| focus-x-10 | --clip-ellipse-focus-x: 10% |
| focus-x-20 | --clip-ellipse-focus-x: 20% |
| focus-x-30 | --clip-ellipse-focus-x: 30% |
| focus-x-40 | --clip-ellipse-focus-x: 40% |
| focus-x-50 | --clip-ellipse-focus-x: 50% |
| focus-x-60 | --clip-ellipse-focus-x: 60% |
| focus-x-70 | --clip-ellipse-focus-x: 70% |
| focus-x-80 | --clip-ellipse-focus-x: 80% |
| focus-x-90 | --clip-ellipse-focus-x: 90% |
| focus-x-100 | --clip-ellipse-focus-x: 100% |
| focus-y-0 | --clip-ellipse-focus-y 0% |
| focus-y-10 | --clip-ellipse-focus-y: 10% |
| focus-y-20 | --clip-ellipse-focus-y: 20% |
| focus-y-30 | --clip-ellipse-focus-y: 30% |
| focus-y-40 | --clip-ellipse-focus-y: 40% |
| focus-y-50 | --clip-ellipse-focus-y: 50% |
| focus-y-60 | --clip-ellipse-focus-y: 60% |
| focus-y-70 | --clip-ellipse-focus-y: 70% |
| focus-y-80 | --clip-ellipse-focus-y: 80% |
| focus-y-90 | --clip-ellipse-focus-y: 90% |
| focus-y-100 | --clip-ellipse-focus-y 100% |
| plot-x-0 | --clip-ellipse-plot-x: 0% |
| plot-x-10 | --clip-ellipse-plot-x: 10% |
| plot-x-20 | --clip-ellipse-plot-x: 20% |
| plot-x-30 | --clip-ellipse-plot-x: 30% |
| plot-x-40 | --clip-ellipse-plot-x: 40% |
| plot-x-50 | --clip-ellipse-plot-x: 50% |
| plot-x-60 | --clip-ellipse-plot-x: 60% |
| plot-x-70 | --clip-ellipse-plot-x: 70% |
| plot-x-80 | --clip-ellipse-plot-x: 80% |
| plot-x-90 | --clip-ellipse-plot-x: 90% |
| plot-x-100 | --clip-ellipse-plot-x: 100% |
| plot-y-0 | --clip-ellipse-plot-y 0% |
| plot-y-10 | --clip-ellipse-plot-y: 10% |
| plot-y-20 | --clip-ellipse-plot-y: 20% |
| plot-y-30 | --clip-ellipse-plot-y: 30% |
| plot-y-40 | --clip-ellipse-plot-y: 40% |
| plot-y-50 | --clip-ellipse-plot-y: 50% |
| plot-y-60 | --clip-ellipse-plot-y: 60% |
| plot-y-70 | --clip-ellipse-plot-y: 70% |
| plot-y-80 | --clip-ellipse-plot-y: 80% |
| plot-y-90 | --clip-ellipse-plot-y: 90% |
| plot-y-100 | --clip-ellipse-plot-y 100% |

---

## Usage

<y class="px-4 mt-2 mb-56 mx-auto w-64">

</y>

```html
<!-- Example -->
<y class="
"></y>
```

---

## Customization

Read more information about using the [Plugin API](/plugin-api/), and  [Responsive](/responsive) or [Pseudo-Class Variants](/pseudo-class-variants/) configuration with the Plugin API.

```scss
// Add Values
@include yogurt(
  $class: 'clip-ellipse',
  $property: clip-path,
  $modifier: (
    shape-a: ellipse(20% 40% at 50% 50%),
    shape-b: ellipse(10% 30% at 60% 80%)
    //...
  )
);
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for clipellipse in variants.clipellipse %}{% for item in clipellipse.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

