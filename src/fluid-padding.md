---
id: fluid-padding
title: Fluid Padding
description: Utilities for sets min and max paddings for screen size without breakpoints.
topic: Effects
relate: fluid-font-size, fluid-margin, margin, padding
layout: default
---

> Effects

# Fluid Padding <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.0.8</span>

Utilities for sets min and max paddings for screen size without breakpoints.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| fluid p-min-`{value}` <br> p-max-`{value}` | @media screen and (min-width: 20rem) { .fluid.p-min-{modifier}.p-max-{modifier} { padding: calc({min} + 0 * ((100vw - 20rem) / 30)) } } @media screen and (min-width: 50rem) {  .fluid.p-min-{modifier}.p-max-{modifier} { padding: {max} } } |

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

Set padding spacing adaptively to the width of the screen size. When the smaller screen size, the padding is `p-10` max. Meanwhile, when the screen size is getting bigger, the padding is `p-4` max.

```html
<!-- Example -->
<y class="fluid p-min-10 p-max-4">
  ...
</y>
```

Mix with other fluid utilities, such as [Fluid Margin](/fluid-margin/), [Fluid Font Size](/fluid-font-size/).

```html
<!-- Example -->
<y class="fluid p-min-8 p-max-4 m-min-4 m-max-2 text-min-lg text-max-md">
  ...
</y>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for fluidpadding in variants.fluidpadding %}{% for item in fluidpadding.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

