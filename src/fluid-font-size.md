---
id: fluid-font-size
title: Fluid Font Size
description: Utilities for sets min and max font sizes for screen size without breakpoints.
layout: default
---

> Effects

# Fluid Font Size <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.0.8</span>

Utilities for sets min and max font sizes for screen size without breakpoints.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| fluid <br> text-min-`{value}` <br> text-max-`{value}` | @media screen and (min-width: 20rem) { .fluid.text-min-`{modifier}`.text-max-`{modifier}` { font-size: calc(`{min}` + 0 * ((100vw - 20rem) / 30)) } } @media screen and (min-width: 50rem) {  .fluid.text-min-`{modifier}`.text-max-`{modifier}` { font-size: `{max}` } } |

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> | |
|:--|:--|:-:|
| xs | font-size: .75rem | <span class="text-xs">Text</span> |
| sm | font-size: .875rem | <span class="text-sm">Text</span> |
| md | font-size: 1rem | <span class="text-md">Text</span> |
| lg | font-size: 1.125rem | <span class="text-lg">Text</span> |
| xl | font-size: 1.25rem | <span class="text-xl">Text</span> |
| 2xl | font-size: 1.5rem | <span class="text-2xl">Text</span> |
| 3xl | font-size: 1.875rem | <span class="text-3xl">Text</span> |
| 4xl | font-size: 2.25rem | <span class="text-4xl">Text</span> |
| 5xl | font-size: 3rem | <span class="text-5xl">Text</span> |
| 6xl | font-size: 4rem | <span class="text-6xl">Text</span> |
| 7xl | font-size: 5rem | <span class="text-7xl">Text</span> |
| 8xl | font-size: 6rem | <span class="text-8xl">Text</span> |

<y class="m-4 p-3 border-l-8 border-gray-600 text-sm text-gray-600 bg-gray-200 (dark)bg-gray-800">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  Utility customizing is unavailable.
</y>

---

## Usage

Set font size adaptively to the width of the screen size. When the smaller screen size, the text size is `text-lg` max. Meanwhile, when the screen size is getting bigger, the text size is `text-md` max.

```html
<!-- Example -->
<y class="fluid text-min-lg text-max-md">
  ...
</y>
```

Mix with other fluid utilities, such as [Fluid Margin](/fluid-margin/), [Fluid Padding](/fluid-padding/).

```html
<!-- Example -->
<y class="fluid m-min-4 m-max-2 p-min-8 p-max-4 text-min-lg text-max-md">
  ...
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
| active | | |
| visited | | |
| checked | | |
| disabled | | |