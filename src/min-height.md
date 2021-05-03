---
id: min-height
title: Min Height
description: Utilities for sets the miminum height of an element.
layout: default
---

> Sizing

# Min Height

Utilities for sets the miminum height of an element.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| min-h-0 | min-height: 0 |
| min-h-full | min-height: 100% |
| min-h-screen | min-height: 100vh |

---

## Usage

```html
<!-- Example -->
<y class="min-h-full">
  ...
</y>
```

---

## Customization

Read more information about using the [Plugin API](/plugin-api/), and  [Responsive](/responsive) or [Pseudo-Class Variants](/pseudo-class-variants/) configuration with the Plugin API.

```scss
// Add Values
@include yogurt(
  $class: 'min-h',
  $property: min-height,
  $modifier: (
    sm: 30%,
    md: 50%
    //...
  )
);

// Add Variants
@include yogurt(
  $class: 'min-h',
  $property: min-height,
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

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for minheight in variants.minheight %}{% for item in minheight.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

