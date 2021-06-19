---
id: height
title: Height
description: Utilities for sets the height of an element.
topic: Sizing
relate: width, min-width, max-width, min-height, max-height
variant: responsive, hover
layout: default
---

> Sizing

# Height

Utilities for sets the height of an element.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| h-auto | height: auto |
| h-full | height: 100% |
| h-screen | height: 100vh |

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| h-px | height: 1px |
| h-0 | height: 0 |
| h-1 | height: 0.25rem |
| h-2 | height: 0.5rem |
| h-3 | height: 0.75rem |
| h-4 | height: 1rem |
| h-5 | height: 1.25rem |
| h-6 | height: 1.5rem |
| h-8 | height: 2rem |
| h-10 | height: 2.5rem |
| h-12 | height: 3rem |
| h-16 | height: 4rem |
| h-20 | height: 5rem |
| h-24 | height: 6rem |
| h-32 | height: 8rem |
| h-40 | height: 10rem |
| h-48 | height: 12rem |
| h-56 | height: 14rem |
| h-64 | height: 16rem |
| h-72 <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.3</span> | height: 18rem |
| h-80 <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.3</span> | height: 20rem |
| h-88 <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.3</span> | height: 22rem |
| h-96 <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.3</span> | height: 24rem |
| h-104 <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.3</span> | height: 26rem |
| h-112 <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.3</span> | height: 28rem |

---

## Usage

Set basic height to an element.

```html
<!-- Example -->
<y class="h-4">
  ...
</y>
```

Set full height to an element.

```html
<!-- Example -->
<y class="h-full">
  ...
</y>
```

Set full height in viewport screen to an element.

```html
<!-- Example -->
<y class="h-screen">
  ...
</y>
```

Use `(expand)` variant to apply height to all child elements.

<y class="my-2 mx-auto flex justify-center items-center">
  <y class="inline-block">
    <y class="flex justify-center items-center (expand)m-4 (expand)h-32 (expand)w-24">
      <y class="bg-gray-400"></y>
      <y class="bg-gray-500"></y>
      <y class="bg-gray-400"></y>
    </y>
  </y>
</y>

```html
<!-- Example -->
<!-- Parent -->
<y class="(expand)h-24">
  <!-- Child -->
  <y>...</y>
  <y>...</y>
  <y>...</y>
</y>
```

---

## Customization

Read more information about using the [Plugin API](/plugin-api/), and  [Responsive](/responsive) or [Pseudo-Class Variants](/pseudo-class-variants/) configuration with the Plugin API.

```scss
// Add Values
@include yogurt(
  $class: 'h',
  $property: height,
  $modifier: (
    1: 1rem,
    2: 2rem
    //...
  )
);

// Add Variants
@include yogurt(
  $class: 'h',
  $property: height,
  $modifier: (
    1: 1rem,
    2: 2rem
    //...
  ),
  $variant: (
    'responsive',
    'hover',
    'expand'
    //...
  )
);
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for height in variants.height %}{% for item in height.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

