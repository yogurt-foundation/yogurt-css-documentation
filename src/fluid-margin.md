---
id: fluid-margin
title: Fluid Margin
description: Utilities for sets min and max margins for screen size without breakpoints.
layout: default
---

> Effects

## Fluid Margin <span class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300">v1.0.8</span>

Utilities for sets min and max margins for screen size without breakpoints.

## Class

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> |
|:--|:--|
| fluid <br> m-min-`{value}` <br> m-max-`{value}` | @media screen and (min-width: 20rem) { .fluid.m-min-`{modifier}`.m-max-`{modifier}` { margin: calc(`{min}` + 0 * ((100vw - 20rem) / 30)) } } <br><br> @media screen and (min-width: 50rem) {  .fluid.m-min-`{modifier}`.m-max-`{modifier}` { margin: `{max}` } } |

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