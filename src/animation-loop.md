---
id: animation-loop
title: Animation Loop
description: Utilities for sets the animation control with limited loop or infinite.
layout: default
---

> Animations

# Animation Loop <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.1</span>

Utilities for sets the animation control with limited loop or infinite.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|:-:|
| loop-2 | animation-iteration-count: 2 |
| loop-3 | animation-iteration-count: 3 |
| loop-4 | animation-iteration-count: 4 |
| loop-5 | animation-iteration-count: 5|
| loop-infinite | animation-iteration-count: infinite |

---

## Usage

```html
<!-- Example -->
<y class="animation blur-in loop-infinite">
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
  $class: 'animation.loop',
  $property: animation-iteration-count,
  $modifier: (
    loop-1: 1,
    loop-2: 2
    //...
  )
);
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for animationloop in variants.animationloop %}{% for item in animationloop.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

