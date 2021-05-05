---
id: opacity
title: Opacity
description: Utilities for sets the transparency of an element.
category: Effects
layout: default
---

> Effects

# Opacity

Utilities for sets the transparency of an element.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> | |
|:--|:--|:-:|
| opacity-100 | opacity: 1 | <y class="w-16 h-8 p-1 inline-block text-white bg-charcoal-100 rounded opacity-100">Text</y> |
| opacity-75 | opacity: .75 | <y class="w-16 h-8 p-1 inline-block text-white bg-charcoal-100 rounded opacity-75">Text</y> |
| opacity-50 | opacity: .5 | <y class="w-16 h-8 p-1 inline-block text-white bg-charcoal-100 rounded opacity-50">Text</y> |
| opacity-25 | opacity: .25 | <y class="w-16 h-8 p-1 inline-block text-white bg-charcoal-100 rounded opacity-25">Text</y> |
| opacity-0 | opacity: 0 | <y class="w-16 h-8 p-1 inline-block text-white bg-charcoal-100 rounded opacity-0">Text</y> |

---

## Usage

```html
<!-- Example -->
<y class="opacity-50 ... bg-white h-32 w-32"></y>
```
---

## Customization

Read more information about using the [Plugin API](/plugin-api/), and  [Responsive](/responsive) or [Pseudo-Class Variants](/pseudo-class-variants/) configuration with the Plugin API.

```scss
// Add Values
@include yogurt(
  $class: 'opacity',
  $property: opacity,
  $modifier: (
    65: .65,
    85: .85
    //...
  )
);

// Add Variants
@include yogurt(
  $class: 'opacity',
  $property: opacity,
  $modifier: (
    65: .65,
    85: .85
    //...
  ),
  $variant: (
    'responsive',
    'hover',
    'focus', 'focus-within', 'focus-visible'
    //...
  )
);
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for opacity in variants.opacity %}{% for item in opacity.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).
