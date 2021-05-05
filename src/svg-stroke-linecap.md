---
id: stroke-linecap
title: Stroke LineCap
description: Utilities for sets the outline shape of an SVG.
category: SVG
layout: default
---

> SVG

# Stroke Line Cap <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.1</span>

Utilities for sets the outline shape of an SVG.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| stroke-butt | stroke-linecap: butt |
| stroke-round | stroke-linecap: round |
| stroke-square | stroke-linecap: square |

---

## Usage

Set a SVG image with stroke linecap property.

<style>
  .stroke-width-mockup {
    stroke-width: 30
  }
</style>

`stroke-butt` ends the stroke with a sharp 90-degree angle.

<y class="px-4 my-2 mx-auto flex justify-center items-center">
  <svg class="my-4 h-10"
       xmlns="http://www.w3.org/2000/svg"
       version="1.1">
    <line class="fill-current text-amber-400 stroke-current stroke-width-mockup stroke-butt"
          x1="40" x2="250"
          y1="20" y2="20" />
  </svg>
</y>

```html
<!-- Example -->
<svg class="stroke-butt ... stroke-current stroke-2 ... text-amber-400">
  ...
</svg>
```

`stroke-round` adds a radius that smooths out the start and end points.

<y class="px-4 my-2 mx-auto flex justify-center items-center">
  <svg class="my-4 h-10"
       xmlns="http://www.w3.org/2000/svg"
       version="1.1">
    <line class="fill-current text-amber-400 stroke-current stroke-width-mockup stroke-round"
          x1="40" x2="250"
          y1="20" y2="20" />
  </svg>
</y>

```html
<!-- Example -->
<svg class="stroke-round ... stroke-current stroke-2 ... text-amber-400">
  ...
</svg>
```

`stroke-square` similar to butt except that it extends the stroke beyond the length of the path.

<y class="px-4 my-2 mx-auto flex justify-center items-center">
  <svg class="my-4 h-10"
       xmlns="http://www.w3.org/2000/svg"
       version="1.1">
    <line class="fill-current text-amber-400 stroke-current stroke-width-mockup stroke-square"
          x1="40" x2="250"
          y1="20" y2="20" />
  </svg>
</y>

```html
<!-- Example -->
<svg class="stroke-square ... stroke-current stroke-2 ... text-amber-400">
  ...
</svg>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for svgstrokelinecap in variants.svgstrokelinecap %}{% for item in svgstrokewidth.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

