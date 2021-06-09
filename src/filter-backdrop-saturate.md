---
id: filter-backdrop-saturate
title: Filter Backdrop Saturate
description: Utilities for sets filter backdrop saturate effect to an element.
topic: Filters
relate: filter-backdrop-blur, filter-backdrop-brightness, filter-backdrop-contrast
layout: default
---

> Filters

# Backdrop Saturate <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.0</span>

Utilities for sets filter backdrop saturate effect to an element.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| backdrop-filter `{saturate}` | backdrop-filter: brightness(var(--brightness)) contrast(var(--contrast)) saturate(var(--saturate)) blur(var(--blur)) |

<style>
.supports {
  display: block
}
@supports (backdrop-filter: saturate(1)) {
  .supports {
    display: none
  }
}
</style>

<y class="supports m-4 p-3 border-l-8 border-orange-600 text-sm text-orange-600 (dark)text-orange-500 bg-orange-200 (dark)bg-orange-900">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  Your browser does not currently support the utilities.
</y>

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| saturate-0 | --backdrop-saturate: 0 |
| saturate-1 | --backdrop-saturate: 1 |
| saturate-2 | --backdrop-saturate: 1.10 |
| saturate-3 | --backdrop-saturate: 1.20 |
| saturate-4 | --backdrop-saturate: 1.30 |
| saturate-5 | --backdrop-saturate: 1.40 |
| saturate-6 | --backdrop-saturate: 1.50 |
| saturate-7 | --backdrop-saturate: 1.60 |
| saturate-8 | --backdrop-saturate: 1.70 |
| saturate-9 | --backdrop-saturate: 1.80 |
| saturate-10 | --backdrop-saturate: 1.90 |

---

## Usage

<y class="mx-2 my-2 mx-auto flex">
  <y class="p-2 w-1/2">
    <y class="flex justify-center items-center w-full h-48 bg-auto bg-center bg-no-repeat rounded-lg"
       style="background-image:url('https://picsum.photos/500?=4')">
      <y class="w-32 h-32 bg-gray-100 bg-opacity-50"></y>
    </y>
    <y class="pt-2 text-sm text-center">
      Filter: OFF
    </y>
  </y>
  <y class="m-2 w-1/2">
    <y class="flex justify-center items-center w-full h-48 bg-auto bg-center bg-no-repeat rounded-lg"
       style="background-image:url('https://picsum.photos/500?=4')">
      <y class="backdrop-filter saturate-10 w-32 h-32 bg-gray-100 bg-opacity-50"></y>
    </y>
    <y class="pt-2 text-sm text-center">
      Filter: ON
    </y>
  </y>
</y>

Apply the `backdrop-filter` class first, and then set the filter in any order when with other filters.

```html
<!-- Example -->
<y style="background-image:url(...)">
  <y class="backdrop-filter saturate-10 ... bg-gray-100 bg-opacity-50">
    ...
  </y>
</y>

<y class="relative ...">
  <img src="...">
  <y class="absolute top-0 left-0">
    <y class="backdrop-filter saturate-10 ... bg-gray-100 bg-opacity-50">
      ...
    </y>
  </y>
</y>
```

Mix with other filters, such as [Backdrop Brightness](/filter-backdrop-brightness/), [Backdrop Contrast](/filter-backdrop-contrast/), and [Backdrop Blur](/filter-backdrop-blur).

```html
<!-- Example -->
<y style="background-image:url(...)">
  <y class="backdrop-filter saturate-10 brightness-1 saturate-1 blur-2 ... bg-gray-100 bg-opacity-50">
    ...
  </y>
</y>

<y class="relative ...">
  <img src="...">
  <y class="absolute top-0 left-0">
    <y class="backdrop-filter saturate-10 brightness-1 saturate-1 blur-2 ... bg-gray-100 bg-opacity-50">
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
  $class: 'backdrop.saturate',
  $property: --backdrop-saturate,
  $modifier: (
    1: 1.10,
    2: 2.20
    //...
  )
);
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for filterbackdropsaturate in variants.filterbackdropsaturate %}{% for item in filterbackdropsaturate.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).


