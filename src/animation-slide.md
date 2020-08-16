---
id: animation-slide
title: Slide Animation
description: Utilities for sets the sliding animation to an element.
layout: default
---

> Animations

# Sliding <span class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300">v1.0.9</span>

Utilities for sets the sliding animation to an element.

---

## Class

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">class</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> | |
|:--|:--|:-:|
| slide-in-up | @keyframes slide-in-up { from { transform: translate3d(0, 100%, 0); visibility: visible } to { transform: translate3d(0, 0, 0) }} | <y class="text-lg animation slide-in-up duration-4000 delay-2 infinite">Text</y> |
| slide-in-down | @keyframes slide-in-down { from { transform: translate3d(0, -100%, 0); visibility: visible } to { transform: translate3d(0, 0, 0) }} | <y class="text-lg animation slide-in-down duration-4000 delay-2 infinite">Text</y> |
| slide-in-left | @keyframes slide-in-left { from { transform: translate3d(-100%, 0, 0); visibility: visible } to { transform: translate3d(0, 0, 0) }} | <y class="text-lg animation slide-in-left duration-4000 delay-2 infinite">Text</y> |
| slide-in-right | @keyframes slide-in-right { from { transform: translate3d(100%, 0, 0); visibility: visible } to { transform: translate3d(0, 0, 0) }} | <y class="text-lg animation slide-in-right duration-4000 delay-2 infinite">Text</y> |
| slide-out-up | @keyframes slide-out-up { from { transform: translate3d(0, 0, 0) } to { visibility: hidden; transform: translate3d(0, -100%, 0) }} | <y class="text-lg animation slide-out-up duration-4000 delay-2 infinite">Text</y> |
| slide-out-down | @keyframes slide-out-down { from { transform: translate3d(0, 0, 0) } to { visibility: hidden; transform: translate3d(0, 100%, 0) }} | <y class="text-lg animation slide-out-down duration-4000 delay-2 infinite">Text</y> |
| slide-out-left | @keyframes slide-out-left { from { transform: translate3d(0, 0, 0) } to { visibility: hidden; transform: translate3d(-100%, 0, 0) }} | <y class="text-lg animation slide-out-left duration-4000 delay-2 infinite">Text</y> |
| slide-out-right | @keyframes slide-out-right { from { transform: translate3d(0, 0, 0) } to { visibility: hidden; transform: translate3d(100%, 0, 0) }} | <y class="text-lg animation slide-out-right duration-4000 delay-2 infinite">Text</y> |

<y class="mx-4 my-4 p-3 border-l-8 border-gray-600 text-sm text-gray-600 bg-gray-200">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  Utility customizing is unavailable.
</y>

---

## Variant

| <span class="font-semibold underline">Variant</span> | <span class="font-semibold underline">Enabled</span> | <span class="font-semibold underline">Responsive</span> |
|:-:|:-:|:-:|
| Default | Yes | |
| hover| Yes | |
| group-hover | | |
| focus | | |
| active | | |
| visited | | |
| disabled | | |