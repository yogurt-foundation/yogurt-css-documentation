---
id: max-height
title: Max Height
description: Utilities for sets the maximum height of an element.
topic: Sizing
relate: width, min-width, max-width, height, min-height
variant: responsive
layout: default
---

> Sizing

# Max Height

Utilities for sets the maximum height of an element.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| max-h-full | max-height: 100% |
| max-h-screen | max-height: 100vh |

---

## Usage

```html
<!-- Example -->
<y class="max-h-full">
  ...
</y>
```
---

## Customization

Read more information about using the [Plugin API](/plugin-api/), and  [Responsive](/responsive) or [Pseudo-Class Variants](/pseudo-class-variants/) configuration with the Plugin API.

```scss
// Add Values
@include yogurt(
  $class: 'max-h',
  $property: max-height,
  $modifier: (
    sm: 30%,
    md: 50%
    //...
  )
);

// Add Variants
@include yogurt(
  $class: 'max-h',
  $property: max-height,
  $modifier: (
    sm: 30%,
    md: 50%
    //...
  ),
  $variant: (
    'responsive'
    //...
  )
);
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for maxheight in variants.maxheight %}{% for item in maxheight.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

