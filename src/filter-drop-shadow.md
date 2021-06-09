---
id: filter-drop-shadow
title: Filter Drop Shadow
description: Utilities for sets shadow filter to transparency image (SVG, PNG).
topic: Filters
relate: filter-blur, filter-brightness, filter-contrast, filter-saturate, filter-invert
layout: default
---

> Filters

# Drop Shadow <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.0.9</span>

Utilities for sets shadow filter to transparency image (SVG, PNG).

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| filter `{drop-shadow}` | filter: brightness(var(--brightness)) contrast(var(--contrast)) saturate(var(--saturate)) blur(var(--blur)) drop-shadow(var(--drop-shadow)) |

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| drop-shadow-xs | --drop-shadow: 0px 0px 1px rgba(0, 0, 0, 0.8) |
| drop-shadow-sm | --drop-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5) |
| drop-shadow-md | --drop-shadow: 0px 4px 3px rgba(0, 0, 0, 0.5) |
| drop-shadow-lg | --drop-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5) |
| drop-shadow-xl | --drop-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5) |

<y class="mt-2 mb-4 mx-4 p-3 border-l-8 border-orange-600 text-sm text-orange-600 (dark)text-orange-500 bg-orange-200 (dark)bg-orange-900">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  This utility does not support the inline property
  <strong>
    background-image:url()
  </strong>.
</y>

---

## Usage

<y class="mx-2 my-2 mx-auto flex">
  <y class="max-w-sm">
    <img class="w-full h-48 object-contain object-center overflow-hidden"
         src="https://images.vexels.com/media/users/3/196998/isolated/preview/3421fa2cd778f85dfc33c72728b57d1e-tyrannosaurus-dino-cute-by-vexels.png">
    <y class="pt-2 text-sm text-center">
      Filter: OFF
    </y>
  </y>
  <y class="p-2 max-w-sm">
    <img class="filter drop-shadow-md w-full h-48 object-contain object-center overflow-hidden"
         src="https://images.vexels.com/media/users/3/196998/isolated/preview/3421fa2cd778f85dfc33c72728b57d1e-tyrannosaurus-dino-cute-by-vexels.png">
    <y class="pt-2 text-sm text-center">
      Filter: ON
    </y>
  </y>
</y>

Apply the `filter` class first, and then set the filter in any order when with other filters.

```html
<!-- Example -->
<img class="filter drop-shadow-md ..."
     src="...">
```

Mix with other filters, such as [Brightness](/filter-brightness/), [Contrast](/filter-contrast/), [Saturate](/filter/saturate) and [Blur](/filter-blur/).

```html
<!-- Example -->
<img class="filter drop-shadow-md brightness-10 contrast-5 saturate-4 blur-5 ..."
     src="...">
```

---

## Customization

Read more information about using the [Plugin API](/plugin-api/), and  [Responsive](/responsive) or [Pseudo-Class Variants](/pseudo-class-variants/) configuration with the Plugin API.

```scss
// Add Values
@include yogurt(
  $class: 'filter.drop-shadow',
  $property: --drop-shadow,
  $modifier: (
    2xl: 0px 10px 15px rgba(0, 0, 0, 0.5),
    3xl: 0px 10px 20px rgba(0, 0, 0, 0.5)
    //...
  )
);
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for filterdropshadow in variants.filterdropshadow %}{% for item in filterdropshadow.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).


