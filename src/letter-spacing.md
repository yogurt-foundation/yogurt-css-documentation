---
id: letter-spacing
title: Letter Spacing
description: Utilities for sets the spacing between letters.
category: Typography
variant: responsive
layout: default
---

> Typography

# Letter Spacing

Utilities for sets the spacing between letters.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> | |
|:--|:--|:-:|
| gap-tighter | letter-spacing: -0.05em | <y class="text-lg gap-tighter">Text</y> |
| gap-tight | letter-spacing: -0.025em | <y class="text-lg gap-tight">Text</y> |
| gap-normal | letter-spacing: 0 | <y class="text-lg gap-normal">Text</y> |
| gap-wide | letter-spacing: 0.025em | <y class="text-lg gap-wide">Text</y> |
| gap-wider | letter-spacing: 0.05em | <y class="text-lg gap-wider">Text</y> |
| gap-widest | letter-spacing: 0.1em | <y class="text-lg gap-widest">Text</y> |

---

## Usage

```html
<!-- Example -->
<y class="gap-tight">
  ...
</y>
```

---

## Customization

Read more information about using the [Plugin API](/plugin-api/), and  [Responsive](/responsive) or [Pseudo-Class Variants](/pseudo-class-variants/) configuration with the Plugin API.

```scss
// Add Values
@include yogurt(
  $class: 'gap',
  $property: letter-spacing,
  $modifier: (
    super: .5em,
    ultra: 1em
    //...
  )
);

// Add Variants
@include yogurt(
  $class: 'gap',
  $property: letter-spacing,
  $modifier: (
    super: .5em,
    ultra: 1em
    //...
  ),
  $variant: (
    'responsive'
  )
);
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for letterspacing in variants.letterspacing %}{% for item in letterspacing.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).