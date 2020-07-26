---
id: fluid-font-size
title: Fluid Font Size
description: Utilities for sets min and max font sizes for screen size without breakpoints.
layout: default
---

> Effects

## Fluid Font Size <span class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300">v1.0.8</span>

Utilities for sets min and max font sizes for screen size without breakpoints.

## Class

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> |
|:--|:--|
| fluid <br> text-min-`{value}` <br> text-max-`{value}` | @media screen and (min-width: 20rem) { .fluid.text-min-`{modifier}`.text-max-`{modifier}` { font-size: calc(`{min}` + 0 * ((100vw - 20rem) / 30)) } } <br><br> @media screen and (min-width: 50rem) {  .fluid.text-min-`{modifier}`.text-max-`{modifier}` { font-size: `{max}` } } |

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> | |
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