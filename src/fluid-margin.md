---
id: fluid-margin
title: Fluid Margin
description: Utilities for sets min and max margins for screen size without breakpoints.
topic: Effects
relate: fluid-font-size, fluid-padding, margin, padding
layout: default
---

> Effects

# Fluid Margin <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.0.8</span>

Utilities for sets min and max margins for screen size without breakpoints.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| fluid m-min-`{value}` m-max-`{value}` | @media screen and (min-width: 20rem) { .fluid.m-min-{modifier}.m-max-{modifier} { margin: calc({min} + 0 * ((100vw - 20rem) / 30)) } } @media screen and (min-width: 50rem) {  .fluid.m-min-{modifier}.m-max-{modifier} { margin: {max} } } |

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">value</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">modifier</span> | |
|:--|:--|:-:|
| 0 | 0 |
| 1 | 0.25rem |
| 2 | 0.5rem |
| 3 | 0.75rem |
| 4 | 1rem |
| 5 | 1.25rem |
| 6 | 1.5rem |
| 8 | 2rem |
| 10 | 2.5rem |
| 12 | 3rem |
| 16 | 4rem |
| 20 | 5rem |
| 24 | 6rem |
| 32 | 8rem |
| 40 | 10rem |
| 48 | 12rem |
| 56 | 14rem |
| 64 | 16rem |
| 72 <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.3</span> | 18rem |
| 80 <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.3</span> | 20rem |
| 88 <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.3</span> | 22rem |
| 96 <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.3</span> | 24rem |
| 104 <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.3</span> | 26rem |
| 112 <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.3</span> | 28rem |

---

## Usage

Set margin spacing adaptively to the width of the screen size. When the smaller screen size, the margin is `m-10` max. Meanwhile, when the screen size is getting bigger, the margin is `m-4` max.

```html
<!-- Example -->
<y class="fluid m-min-10 m-max-4">
  ...
</y>
```

Mix with other fluid utilities, such as [Fluid Font Size](/fluid-font-size/), [Fluid Padding](/fluid-padding/).

```html
<!-- Example -->
<y class="fluid m-min-4 m-max-2 p-min-8 p-max-4 text-min-lg text-max-md">
  ...
</y>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for fluidmargin in variants.fluidmargin %}{% for item in fluidmargin.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

