---
id: filter-brightness
title: Filter Brightness
description: Utilities for sets brightness filter to an element.
topic: Filters
relate: filter-blur, filter-contrast, filter-saturate, filter-invert, filter-drop-shadow, filter-smooth
layout: default
---

> Filters

# Brightness <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.0.9</span>

Utilities for sets brightness filter to an element.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| filter `{brightness}` | filter: brightness(var(--brightness)) contrast(var(--contrast)) saturate(var(--saturate)) blur(var(--blur)) drop-shadow(var(--drop-shadow)); transition: filter var(--extra-smooth) linear, transform var(--extra-smooth) linear; |

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| brightness-0 | --brightness: 0 |
| brightness-1 | --brightness: 1 |
| brightness-2 | --brightness: 1.10 |
| brightness-3 | --brightness: 1.20 |
| brightness-4 | --brightness: 1.30 |
| brightness-5 | --brightness: 1.40 |
| brightness-6 | --brightness: 1.50 |
| brightness-7 | --brightness: 1.60 |
| brightness-8 | --brightness: 1.70 |
| brightness-9 | --brightness: 1.80 |
| brightness-10 | --brightness: 1.90 |

---

## Usage

<y class="mx-2 my-2 mx-auto flex">
  <y class="p-2 max-w-sm">
    <img class="w-full h-48 object-cover object-center overflow-hidden rounded-lg shadow"
         src="https://picsum.photos/500?=1">
    <y class="pt-2 text-sm text-center">
      Filter: OFF
    </y>
  </y>
  <y class="p-2 max-w-sm">
    <img class="filter brightness-10 w-full h-48 object-cover object-center overflow-hidden rounded-lg shadow"
         src="https://picsum.photos/500?=1">
    <y class="pt-2 text-sm text-center">
      Filter: ON
    </y>
  </y>
</y>

Apply the `filter` class first, and then set the filter in any order when with other filters.

```html
<!-- Example -->
<img
  class="filter brightness-10 ..."
  src="..."
>

<y
  class="filter brightness-10 ..."
  style="background-image:url(...)">
</y>
```

Mix with other filters, such as [Contrast](/filter-contrast/), [Saturate](/filter-saturate/), [Blur](/filter-blur/) and [Drop Shadow](/filter-drop-shadow/).

```html
<!-- Example -->
<img
  class="filter brightness-10 contrast-5 saturate-5 blur-5 ..."
  src="..."
>

<y
  class="filter brightness-10 contrast-5 saturate-5 blur-5 ..."
  style="background-image:url(...)">
</y>
```

## Customization

Read more information about using the [Plugin API](/plugin-api/), and  [Responsive](/responsive) or [Pseudo-Class Variants](/pseudo-class-variants/) configuration with the Plugin API.

```scss
// Add Values
@include yogurt(
  $class: 'filter.brightness',
  $property: --brightness,
  $modifier: (
    1: 1.10,
    2: 2.20
    //...
  )
);
```

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for filterbrightness in variants.filterbrightness %}{% for item in filterbrightness.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).


