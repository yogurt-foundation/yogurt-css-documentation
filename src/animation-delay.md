---
id: animation-delay
title: Animation Delay
description: Utilities for sets the animation control with delays.
topic: Animations
relate: animation, animation-blur, animation-duration, animation-fade, animation-loop, animation-roll, animation-slide
layout: default
---

> Animations

# Animation Delay <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.0.9</span>

Utilities for sets the animation control with delays.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| delay-2 | animation-delay: 2s |
| delay-3 | animation-delay: 3s |
| delay-4 | animation-delay: 4s |
| delay-5 | animation-delay: 5s |

---

## Usage

```html
<!-- Example -->
<y class="animation blur-in delay-2">
  ...
</y>
```

---

## Customization

Read more information about using the [Plugin API](/plugin-api/), and  [Responsive](/responsive) or [Pseudo-Class Variants](/pseudo-class-variants/) configuration with the Plugin API.

```scss
// @file: `src/plugins.scss`

// Add Values
@include yogurt(
  $class: 'animation.delay',
  $property: animation-delay,
  $modifier: (
    5: 5s,
    6: 6s
    //...
  )
);
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for animationdelay in variants.animationdelay %}{% for item in animationdelay.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

