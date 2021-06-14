---
id: animation-duration
title: Animation Duration
description: Utilities for sets the animation control with durations.
topic: Animations
relate: animation, animation-blur, animation-delay, animation-fade, animation-loop, animation-roll, animation-slide
layout: default
---

> Animations

# Animation Duration <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.0.9</span>

Utilities for sets the animation control with durations.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|:-:|
| duration-300 | animation-duration: 300ms |
| duration-500 | animation-duration: 500ms |
| duration-800 | animation-duration: 800ms |
| duration-2000 | animation-duration: 2000ms |
| duration-3000 | animation-duration: 3000ms |
| duration-4000 | animation-duration: 4000ms |

---

## Usage

```html
<!-- Example -->
<y class="animation blur-in duration-2000">
  ...
</y>
```

---

## Customization

Read more information about using the [Plugin API](/plugin-api/), and  [Responsive](/responsive) or [Pseudo-Class Variants](/pseudo-class-variants/) configuration with the Plugin API.

```scss
// Add Values
@include yogurt(
  $class: 'animation.duration',
  $property: animation-duration,
  $modifier: (
    5000: 5000ms,
    6000: 6000ms
    //...
  )
);
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for animationduration in variants.animationduration %}{% for item in animationduration.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

