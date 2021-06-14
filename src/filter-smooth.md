---
id: filter-smooth
title: Filter Smooth
description: Utilities for sets filter utilities on-hover animation speed when selection-hover variant applied.
topic: Filters
relate: filter-brightness, filter-contrast, filter-saturate, filter-blur
layout: default
---

> Filters

# Smooth <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.6</span>

Utilities for sets filter utilities on-hover animation speed when selection-hover variant applied.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| smooth `{duration}` | filter: brightness(var(--brightness)) contrast(var(--contrast)) saturate(var(--saturate)) blur(var(--blur)) drop-shadow(var(--drop-shadow)); transition: filter `{duration}` linear, transform `{duration}` linear; |

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| smooth-75 | transition: filter 75ms linear, transform 75ms linear; |
| smooth-100 | transition: filter 100ms linear, transform 100ms linear; |
| smooth-150 | transition: filter 150ms linear, transform 150ms linear; |
| smooth-200 | transition: filter 200ms linear, transform 200ms linear; |
| smooth-300 | transition: filter 300ms linear, transform 300ms linear; |
| smooth-500 | transition: filter 500ms linear, transform 500ms linear; |
| smooth-700 | transition: filter 700ms linear, transform 700ms linear; |
| smooth-1000 | transition: filter 1000ms linear, transform 1000ms linear; |

---

## Usage


```html
<!-- Example -->
<!-- parent -->
<y class="(selection-hover)filter saturate-0 blur-10 ... smooth-200">
  <!-- child -->
  <y>
    <y>
      ...
    </y>
  </y>
  <!-- child -->
  <y>
    <y>
      ...
    </y>
  </y>
</y>
```

---

## Customization

Read more information about using the [Plugin API](/plugin-api/), and  [Responsive](/responsive) or [Pseudo-Class Variants](/pseudo-class-variants/) configuration with the Plugin API.

```scss
// Add Values
@include yogurt(
  $class: 'filter.smooth',
  $property: --extra-smooth,
  $modifier: (
    800: 800ms,
    2000: 2000ms
    //...
  )
);
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for filtersmooth in variants.filtersmooth %}{% for item in filtersmooth.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

