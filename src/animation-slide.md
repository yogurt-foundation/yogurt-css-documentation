---
id: animation-slide
title: Slide Animation
description: Utilities for sets the sliding animation to an element.
layout: default
---

> Animations

# Sliding <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.0.9</span>

Utilities for sets the sliding animation to an element.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> | |
|:--|:--|:-:|
| slide-in-up | @keyframes slide-in-up { from { transform: translate3d(0, 100%, 0); visibility: visible } to { transform: translate3d(0, 0, 0) }} | <y class="text-lg animation slide-in-up duration-800 delay-2 loop-infinite">Text</y> |
| slide-in-down | @keyframes slide-in-down { from { transform: translate3d(0, -100%, 0); visibility: visible } to { transform: translate3d(0, 0, 0) }} | <y class="text-lg animation slide-in-down duration-800 delay-2 loop-infinite">Text</y> |
| slide-in-left | @keyframes slide-in-left { from { transform: translate3d(-100%, 0, 0); visibility: visible } to { transform: translate3d(0, 0, 0) }} | <y class="text-lg animation slide-in-left duration-800 delay-2 loop-infinite">Text</y> |
| slide-in-right | @keyframes slide-in-right { from { transform: translate3d(100%, 0, 0); visibility: visible } to { transform: translate3d(0, 0, 0) }} | <y class="text-lg animation slide-in-right duration-800 delay-2 loop-infinite">Text</y> |
| slide-out-up | @keyframes slide-out-up { from { transform: translate3d(0, 0, 0) } to { visibility: hidden; transform: translate3d(0, -100%, 0) }} | <y class="text-lg animation slide-out-up duration-800 delay-2 loop-infinite">Text</y> |
| slide-out-down | @keyframes slide-out-down { from { transform: translate3d(0, 0, 0) } to { visibility: hidden; transform: translate3d(0, 100%, 0) }} | <y class="text-lg animation slide-out-down duration-800 delay-2 loop-infinite">Text</y> |
| slide-out-left | @keyframes slide-out-left { from { transform: translate3d(0, 0, 0) } to { visibility: hidden; transform: translate3d(-100%, 0, 0) }} | <y class="text-lg animation slide-out-left duration-800 delay-2 loop-infinite">Text</y> |
| slide-out-right | @keyframes slide-out-right { from { transform: translate3d(0, 0, 0) } to { visibility: hidden; transform: translate3d(100%, 0, 0) }} | <y class="text-lg animation slide-out-right duration-800 delay-2 loop-infinite">Text</y> |

<y class="m-4 p-3 border-l-8 border-gray-600 text-sm text-gray-600 bg-gray-200 (dark)bg-gray-800">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  Utility customizing is unavailable.
</y>

---

## Usage

Set basic slide animation.

```html
<!-- Example -->
<y class="animation slide-in-up">
  ...
</y>
```

Mix with duration.

```html
<!-- Example -->
<y class="animation slide-in-up duration-2000">
  ...
</y>
```

Mix with duration and delay.

```html
<!-- Example -->
<y class="animation slide-in-up duration-2000 delay-2">
  ...
</y>
```

Mix with duration, delay and infinite looping.

```html
<!-- Example -->
<y class="animation slide-in-up duration-2000 delay-2 infinite">
  ...
</y>
```

---

## Variant

| <span class="font-semibold underline">Variant</span> | <span class="font-semibold underline">Enabled</span> | <span class="font-semibold underline">Responsive</span> |
|:-:|:-:|:-:|
| Default | Yes | |
| Dark Theme | | |
| hover | Yes | |
| group-hover | | |
| focus | | |
| focus-visible | | |
| focus-within | | |
| active | | |
| visited | | |
| checked | | |
| disabled | | |