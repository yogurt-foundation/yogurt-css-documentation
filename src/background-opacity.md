---
id: background-opacity
title: Background Opacity
description: Utilities for sets opacity of background color.
topic: Backgrounds
relate: background-attachment, background-blend, background-border, background-color, background-gradient, background-position, background-repeat, background-size
layout: default
---

> Backgrounds

# Background Opacity <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.0.8</span>

Utilities for sets opacity of background color.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| bg-opacity-0 | --bg-opacity: 0 |
| bg-opacity-25 | --bg-opacity: .25 |
| bg-opacity-50 | --bg-opacity: .5 |
| bg-opacity-75 | --bg-opacity: .75 |
| bg-opacity-100 | --bg-opacity: 1 |

---

## Usage

Set background-color with `100%` opacity to an element.

<y class="my-2 mx-auto w-64">
 <y class="h-32 bg-amber-500 bg-opacity-100 border border-gray-300"></y>
</y>

```html
<!-- Example -->
<y class="bg-amber-500 bg-opacity-100 ... h-32 w-64"></y>
```

Set background-color with `75%` opacity to an element.

<y class="my-2 mx-auto w-64">
 <y class="h-32 bg-amber-500 bg-opacity-75 border border-gray-300"></y>
</y>

```html
<!-- Example -->
<y class="bg-amber-500 bg-opacity-75 ... h-32 w-64"></y>
```

Set background-color with `50%` opacity to an element.

<y class="my-2 mx-auto w-64">
 <y class="h-32 bg-amber-500 bg-opacity-50 border border-gray-300"></y>
</y>

```html
<!-- Example -->
<y class="bg-amber-500 bg-opacity-50 ... h-32 w-64"></y>
```

Set background-color with `25%` opacity to an element.

<y class="my-2 mx-auto w-64">
 <y class="h-32 bg-amber-500 bg-opacity-25 border border-gray-300"></y>
</y>

```html
<!-- Example -->
<y class="bg-amber-500 bg-opacity-25 ... h-32 w-64"></y>
```

Set background-color with `0%` opacity to an element.

<y class="my-2 mx-auto w-64">
 <y class="h-32 bg-amber-500 bg-opacity-0 border border-gray-300"></y>
</y>

```html
<!-- Example -->
<y class="bg-amber-500 bg-opacity-0 ... h-32 w-64"></y>
```

---

## Customization

Read more information about using the [Plugin API](/plugin-api/), and  [Responsive](/responsive) or [Pseudo-Class Variants](/pseudo-class-variants/) configuration with the Plugin API.

```scss
// Add Values
@include yogurt(
  $class: 'bg-opacity',
  $property: --bg-opacity,
  $modifier: (
    10: .3,
    20: .2
    //...
  )
);
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for backgroundopacity in variants.backgroundopacity %}{% for item in backgroundopacity.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

