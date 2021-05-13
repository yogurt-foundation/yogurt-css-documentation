---
id: animation-slide
title: Slide Animation
description: Utilities for sets the sliding animation to an element.
topic: Animations
relate: animation, animation-blur, animation-delay, animation-duration, animation-fade, animation-loop, animation-roll
variant: hover
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

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for animationslide in variants.animationslide %}{% for item in animationslide.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

