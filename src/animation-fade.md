---
id: animation-fade
title: Fade Animation
description: Utilities for sets the fading animation to an element.
layout: default
---

> Animations

# Fade <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.0.9</span>

Utilities for sets the fading animation to an element.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> | |
|:--|:--|:-:|
| fade-in | @keyframes fade-in { from { opacity: 0 } to { opacity: 1 }} | <y class="text-lg animation fade-in duration-800 delay-2 loop-infinite">Text</y> |
| fade-in-bottom-left | @keyframes fade-in-bottom-left { from { opacity: 0; transform: translate3d(-100%, 100%, 0) } to { opacity: 1; transform: translate3d(0, 0, 0) }} | <y class="text-lg animation fade-in-bottom-left duration-800 delay-2 loop-infinite">Text</y> |
| fade-in-bottom-right | @keyframes fade-in-bottom-right { from { opacity: 0; transform: translate3d(100%, 100%, 0) } to { opacity: 1; transform: translate3d(0, 0, 0) }} | <y class="text-lg animation fade-in-bottom-right duration-800 delay-2 loop-infinite">Text</y> |
| fade-in-up | @keyframes fade-in-up { from { opacity: 0; transform: translate3d(0, 100%, 0) } to { opacity: 1; transform: translate3d(0, 0, 0) }} | <y class="text-lg animation fade-in-up duration-800 delay-2 loop-infinite">Text</y> |
| fade-in-down | @keyframes fade-in-down { from { opacity: 0; transform: translate3d(0, -100%, 0) } to { opacity: 1; transform: translate3d(0, 0, 0) }} | <y class="text-lg animation fade-in-down duration-800 delay-2 loop-infinite">Text</y> |
| fade-in-left | @keyframes fade-in-left { from { opacity: 0; transform: translate3d(-100%, 0, 0) } to { opacity: 1; transform: translate3d(0, 0, 0) }} | <y class="text-lg animation fade-in-left duration-800 delay-2 loop-infinite">Text</y> |
| fade-in-right | @keyframes fade-in-right { from { opacity: 0; transform: translate3d(100%, 0, 0) } to { opacity: 1; transform: translate3d(0, 0, 0) }} | <y class="text-lg animation fade-in-right duration-800 delay-2 loop-infinite">Text</y> |
| fade-in-top-left | @keyframes fade-in-top-left { from { opacity: 0; transform: translate3d(-100%, -100%, 0) } to { opacity: 1; transform: translate3d(0, 0, 0) }} | <y class="text-lg animation fade-in-top-left duration-800 delay-2 loop-infinite">Text</y> |
| fade-in-top-right | @keyframes fade-in-top-right { from { opacity: 0; transform: translate3d(100%, -100%, 0) } to { opacity: 1; transform: translate3d(0, 0, 0) }} | <y class="text-lg animation fade-in-top-right duration-800 delay-2 loop-infinite">Text</y> |
| fade-out | @keyframes fade-in-down { from { opacity: 1 } to { opacity: 0 }} | <y class="text-lg animation fade-out duration-800 delay-2 loop-infinite">Text</y> |
| fade-out-bottom-left | @keyframes fade-out-bottom-left { from { opacity: 1; transform: translate3d(0, 0, 0) } to { opacity: 1; transform: translate3d(-100%, 100%, 0) }} | <y class="text-lg animation fade-out-bottom-left duration-800 delay-2 loop-infinite">Text</y> |
| fade-out-bottom-right | @keyframes fade-out-bottom-right { from { opacity: 1; transform: translate3d(0, 0, 0) } to { opacity: 1; transform: translate3d(100%, 100%, 0) }} | <y class="text-lg animation fade-out-bottom-right duration-800 delay-2 loop-infinite">Text</y> |
| fade-out-down | @keyframes fade-out-down { from { opacity: 1; transform: translate3d(0, 0, 0) } to { opacity: 1; transform: translate3d(0, 100%, 0) }} | <y class="text-lg animation fade-out-down duration-800 delay-2 loop-infinite">Text</y> |
| fade-out-left | @keyframes fade-out-left { from { opacity: 1; transform: translate3d(0, 0, 0) } to { opacity: 0; transform: translate3d(-100%, 0, 0) }} | <y class="text-lg animation fade-out-left duration-800 delay-2 loop-infinite">Text</y> |
| fade-out-right | @keyframes fade-out-right { from { opacity: 1; transform: translate3d(0, 0, 0) } to { opacity: 0; transform: translate3d(100%, 0, 0) }} | <y class="text-lg animation fade-out-right duration-800 delay-2 loop-infinite">Text</y> |
| fade-out-top-left | @keyframes fade-out-top-left { from { opacity: 1; transform: translate3d(0, 0, 0) } to { opacity: 0; transform: translate3d(-100%, -100%, 0) }} | <y class="text-lg animation fade-out-top-left duration-800 delay-2 loop-infinite">Text</y> |
| fade-out-top-right | @keyframes fade-out-top-right { from { opacity: 1; transform: translate3d(0, 0, 0) } to { opacity: 0; transform: translate3d(100%, -100%, 0) }} | <y class="text-lg animation fade-out-top-right duration-800 delay-2 loop-infinite">Text</y> |
| fade-out-top-up | @keyframes fade-out-top-up { from { opacity: 1; transform: translate3d(0, 0, 0) } to { opacity: 0; transform: translate3d(0, -100%, 0) }} | <y class="text-lg animation fade-out-top-up duration-800 delay-2 loop-infinite">Text</y> |

---

## Usage

Set basic fade animation.

```html
<!-- Example -->
<y class="animation fade-in">
  ...
</y>
```

Mix with duration.

```html
<!-- Example -->
<y class="animation fade-in duration-2000">
  ...
</y>
```

Mix with duration and delay.

```html
<!-- Example -->
<y class="animation fade-in duration-2000 delay-2">
  ...
</y>
```

Mix with duration, delay and infinite looping.

```html
<!-- Example -->
<y class="animation fade-in duration-2000 delay-2 infinite">
  ...
</y>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for animationfade in variants.animationfade %}{% for item in animationfade.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

