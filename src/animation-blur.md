---
id: animation-blur
title: Blur Animation
description: Utilities for sets the blur animation to an element.
layout: default
---

> Animations

## Blur <span class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300">v1.0.9</span>

Utilities for sets the blur animation to an element.

### Class

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> | |
|:--|:--|:-:|
| blur-in | @keyframes blur-in { from { opacity: 0; filter: blur(4px) } to { opacity: 1; filter: blur(0) }} | <y class="text-lg animation blur-in duration-4000 delay-2 infinite">Text</y> |
| blur-out | @keyframes blur-out { from { opacity: 1; filter: blur(0) } to { opacity: 1; filter: blur(4px) }} | <y class="text-lg animation blur-out duration-4000 delay-2 infinite">Text</y> |

<y class="mx-4 my-4 p-3 border-l-8 border-gray-600 text-sm text-gray-600 bg-gray-200">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  Utility customizing is unavailable.
</y>

### Variant

| <span class="font-semibold underline">Variant</span> | <span class="font-semibold underline">Enabled</span> | <span class="font-semibold underline">Responsive</span> |
|:-:|:-:|:-:|
| Default | Yes | |
| hover| Yes | |
| group-hover | | |
| focus | | |
| active | | |
| visited | | |
| disabled | | |