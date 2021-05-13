---
id: filter-backdrop-brightness
title: Filter Backdrop Brightness
description: Utilities for sets filter backdrop brightness effect to an element.
topic: Filters
relate: filter-backdrop-blur, filter-backdrop-contrast, filter-backdrop-saturate
layout: default
---

> Filters

# Backdrop Brightness <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.0</span>

Utilities for sets filter backdrop brightness effect to an element.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| backdrop-filter `{brightness}` | backdrop-filter: brightness(var(--brightness)) contrast(var(--contrast)) saturate(var(--saturate)) blur(var(--blur)) |

<style>
.supports {
  display: block
}
@supports (backdrop-filter: brightness(1)) {
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
| brightness-0 | --backdrop-brightness: 0 |
| brightness-1 | --backdrop-brightness: 1 |
| brightness-2 | --backdrop-brightness: 1.10 |
| brightness-3 | --backdrop-brightness: 1.20 |
| brightness-4 | --backdrop-brightness: 1.30 |
| brightness-5 | --backdrop-brightness: 1.40 |
| brightness-6 | --backdrop-brightness: 1.50 |
| brightness-7 | --backdrop-brightness: 1.60 |
| brightness-8 | --backdrop-brightness: 1.70 |
| brightness-9 | --backdrop-brightness: 1.80 |
| brightness-10 | --backdrop-brightness: 1.90 |

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
      <y class="backdrop-filter brightness-8 w-32 h-32 bg-gray-100 bg-opacity-50"></y>
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
  <y class="backdrop-filter brightness-5 ... bg-gray-100 bg-opacity-50">
    ...
  </y>
</y>

<y class="relative ...">
  <img src="...">
  <y class="absolute top-0 left-0">
    <y class="backdrop-filter brightness-5 ... bg-gray-100 bg-opacity-50">
      ...
    </y>
  </y>
</y>
```

Mix with other filters, such as [Backdrop Contrast](/filter-backdrop-contrast/), [Backdrop Saturate](/filter-backdrop-saturate/), and [Backdrop Blur](/filter-backdrop-blur).

```html
<!-- Example -->
<y style="background-image:url(...)">
  <y class="backdrop-filter brightness-5 contrast-1 saturate-1 blur-2 ... bg-gray-100 bg-opacity-50">
    ...
  </y>
</y>

<y class="relative ...">
  <img src="...">
  <y class="absolute top-0 left-0">
    <y class="backdrop-filter brightness-5 contrast-1 saturate-1 blur-2 ... bg-gray-100 bg-opacity-50">
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
  $class: 'backdrop.brightness',
  $property: --backdrop-brightness,
  $modifier: (
    1: 1.10,
    2: 2.20
    //...
  )
);
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for filterbackdropbrightness in variants.filterbackdropbrightness %}{% for item in filterbackdropbrightness.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).


