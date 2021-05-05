---
id: border-width
title: Border Width
description: Utilities for sets border width in increments of 1px.
category: Borders
layout: default
---

> Borders

# Border Width

Utilities for sets border width in increments of 1px.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> | |
|:--|:--|:-:|
| border | border-width: 1px | <y class="w-16 h-8 bg-gray-300 border border-gray-900"></y> |
| border-0 | border-width: 0 | <y class="w-16 h-8 bg-gray-300 border-0 border-gray-900"></y> |
| border-2 | border-width: 2px | <y class="w-16 h-8 bg-gray-300 border-2 border-gray-900"></y> |
| border-4 | border-width: 4px | <y class="w-16 h-8 bg-gray-300 border-4 border-gray-900"></y> |
| border-8 | border-width: 8px | <y class="w-16 h-8 bg-gray-300 border-8 border-gray-900"></y> |
| border-t-0 | border-top-width: 0 | <y class="w-16 h-8 bg-gray-300 border border-t-0 border-gray-900"></y> |
| border-r-0 | border-right-width: 0 | <y class="w-16 h-8 bg-gray-300 border border-r-0 border-gray-900"></y> |
| border-b-0 | border-bottom-width: 0 | <y class="w-16 h-8 bg-gray-300 border border-b-0 border-gray-900"></y> |
| border-l-0 | border-left-width: 0 | <y class="w-16 h-8 bg-gray-300 border border-l-0 border-gray-900"></y> |
| border-t-2 | border-top-width: 2px | <y class="w-16 h-8 bg-gray-300 border border-t-2 border-gray-900"></y> |
| border-r-2 | border-right-width: 2px | <y class="w-16 h-8 bg-gray-300 border border-r-2 border-gray-900"></y> |
| border-b-2 | border-bottom-width: 2px | <y class="w-16 h-8 bg-gray-300 border border-b-2 border-gray-900"></y> |
| border-l-2 | border-left-width: 2px | <y class="w-16 h-8 bg-gray-300 border border-l-2 border-gray-900"></y> |
| border-t-4 | border-top-width: 4px | <y class="w-16 h-8 bg-gray-300 border border-t-4 border-gray-900"></y> |
| border-r-4 | border-right-width: 4px | <y class="w-16 h-8 bg-gray-300 border border-r-4 border-gray-900"></y> |
| border-b-4 | border-bottom-width: 4px | <y class="w-16 h-8 bg-gray-300 border border-b-4 border-gray-900"></y> |
| border-l-4 | border-left-width: 4px | <y class="w-16 h-8 bg-gray-300 border border-l-4 border-gray-900"></y> |
| border-t-8 | border-top-width: 8px | <y class="w-16 h-8 bg-gray-300 border border-t-8 border-gray-900"></y> |
| border-r-8 | border-right-width: 8px | <y class="w-16 h-8 bg-gray-300 border border-r-8 border-gray-900"></y> |
| border-b-8 | border-bottom-width: 8px | <y class="w-16 h-8 bg-gray-300 border border-b-8 border-gray-900"></y> |
| border-l-8 | border-left-width: 8px | <y class="w-16 h-8 bg-gray-300 border border-l-8 border-gray-900"></y> |

---

## Usage

<y class="px-4 my-2 mx-auto w-56">
  <y class="p-4 bg-gray-400 border-8">
    <y class="w-full h-24 bg-gray-500"></y>
  </y>
</y>

```html
<!-- Example -->
<y class="border-8">
  ...
</y>
```

---

## Customization

Read more information about using the [Plugin API](/plugin-api/), and  [Responsive](/responsive) or [Pseudo-Class Variants](/pseudo-class-variants/) configuration with the Plugin API.

```scss
// Add Values
@include yogurt(
  $class: 'border',
  $property: border,
  $modifier: (
    1: 3px,
    2: 6px
    //...
  )
);

// Add Variants
@include yogurt(
  $class: 'border',
  $property: border,
  $modifier: (
    1: 3px,
    2: 6px
    //...
  ),
  $variant: (
    'focus'
    //...
  )
);
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for borderwidth in variants.borderwidth %}{% for item in borderwidth.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

