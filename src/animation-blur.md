---
id: animation-blur
title: Blur Animation
description: Utilities for sets the blur animation to an element.
category: Animations
layout: default
---

> Animations

# Blur <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.0.9</span>

Utilities for sets the blur animation to an element.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> | |
|:--|:--|:-:|
| blur-in | @keyframes blur-in { from { opacity: 0; filter: blur(4px) } to { opacity: 1; filter: blur(0) }} | <y class="text-lg animation blur-in duration-800 delay-2 loop-infinite">Text</y> |
| blur-out | @keyframes blur-out { from { opacity: 1; filter: blur(0) } to { opacity: 1; filter: blur(4px) }} | <y class="text-lg animation blur-out duration-800 delay-2 loop-infinite">Text</y> |

---

## Usage

Set basic blur animation.

```html
<!-- Example -->
<y class="animation blur-in">
  ...
</y>
```

Mix with duration.

```html
<!-- Example -->
<y class="animation blur-in duration-2000">
  ...
</y>
```

Mix with duration and delay.

```html
<!-- Example -->
<y class="animation blur-in duration-2000 delay-2">
  ...
</y>
```

Mix with duration, delay and infinite looping.

```html
<!-- Example -->
<y class="animation blur-in duration-2000 delay-2 infinite">
  ...
</y>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for animationblur in variants.animationblur %}{% for item in animationblur.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

