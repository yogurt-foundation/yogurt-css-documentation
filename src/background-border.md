---
id: background-border
title: Background Border
description: Utilities for sets background border to an element with flexible control over the border spacing, size, angle and length.
layout: default
---

> Background

# Background Border <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.0.9</span>

Utilities for sets background border to an element with flexible control over the border spacing, size, angle and length.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| bg-border `{length}` `{size}` `{space}` `{angle}` | background-image: repeating-linear-gradient(var(--bg-border-angle-left), currentColor, currentColor var(--bg-border-length), transparent var(--bg-border-length), transparent var(--bg-border-space), currentColor var(--bg-border-space)), repeating-linear-gradient(var(--bg-border-angle-top), currentColor, currentColor var(--bg-border-length), transparent var(--bg-border-length), transparent var(--bg-border-space), currentColor var(--bg-border-space)), repeating-linear-gradient(var(--bg-border-angle-right), currentColor, currentColor var(--bg-border-length), transparent var(--bg-border-length), transparent var(--bg-border-space), currentColor var(--bg-border-space)), repeating-linear-gradient(var(--bg-border-angle-bottom), currentColor, currentColor var(--bg-border-length), transparent var(--bg-border-length), transparent var(--bg-border-space), currentColor var(--bg-border-space)); <br><br> background-size: var(--bg-border-width) 100%, 100% var(--bg-border-width), var(--bg-border-width) 100%, 100% var(--bg-border-width); <br><br> background-position: 0 0, 0 0, 100% 0, 0 100%; <br> background-repeat: no-repeat |

<style>
.supports {
  display: block
}
@supports (background: repeating-linear-gradient(#e66465, #e66465 20px, #9198e5 20px, #9198e5 25px)) {
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
| length-10 | --bg-border-length: 10 |
| length-20 | --bg-border-length: 20 |
| length-30 | --bg-border-length: 30 |
| length-40 | --bg-border-length: 40 |
| length-50 | --bg-border-length: 50 |
| length-60 | --bg-border-length: 60 |
| length-70 | --bg-border-length: 70 |
| length-80 | --bg-border-length: 80 |

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| size-6 | --bg-border-size: 6px |
| size-9 | --bg-border-size: 9px |
| size-12 | --bg-border-size: 12px |
| size-14 | --bg-border-size: 14px |
| size-18 | --bg-border-size: 18px |
| size-24 | --bg-border-size: 24px |
| size-32 | --bg-border-size: 32px |

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| space-10 | --bg-border-space: 10px |
| space-20 | --bg-border-space: 20px |
| space-30 | --bg-border-space: 30px |
| space-40 | --bg-border-space: 40px |
| space-50 | --bg-border-space: 50px |
| space-60 | --bg-border-space: 60px |
| space-70 | --bg-border-space: 70px |
| space-80 | --bg-border-space: 80px |

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| angle-45 | --bg-border-angle: 45deg |
| -angle-45 | --bg-border-angle: -45deg |
| angle-60 | --bg-border-angle: 60deg |
| -angle-60 | --bg-border-angle: -60deg |

---

## Usage

Set basic background border to an element.

<y class="px-4 my-2 mx-auto w-56">
  <y class="h-32 w-56 bg-border length-20 size-9 space-30 angle-45"></y>
</y>

```html
<!-- Example -->
<y class="bg-border length-20 size-9 space-30 angle-45 ... h-32 w-56">
  ...
</y>
```

Set background border with color by using `text-{color}` utility (See [Text Color](/text-color/)).

<y class="px-4 my-2 mx-auto w-56">
  <y class="h-32 w-56 bg-border length-20 size-9 space-30 angle-45 text-amber-400"></y>
</y>

```html
<!-- Example -->
<y class="bg-border length-20 size-9 space-30 angle-45 text-amber-400 ... h-32 w-56">
  ...
</y>
```

Set background border solid.

<y class="px-4 my-2 mx-auto w-56">
  <y class="h-32 w-56 bg-border length-10 size-6 space-10 angle-45"></y>
</y>

```html
<!-- Example -->
<y class="bg-border length-10 size-6 space-10 angle-45 ... h-32 w-56">
  ...
</y>
```

Set background border solid and thicker.

<y class="px-4 my-2 mx-auto w-56">
  <y class="h-32 w-56 bg-border length-10 size-32 space-10 angle-45"></y>
</y>

```html
<!-- Example -->
<y class="bg-border length-10 size-32 space-10 angle-45 ... h-32 w-56">
  ...
</y>
```

---

## Customization

Read more information about using the [Plugin API](/plugin-api/), and  [Responsive](/responsive) or [Pseudo-Class Variants](/pseudo-class-variants/) configuration with the Plugin API.

```scss
// Add Values
@include yogurt(
  $class: 'bg-border.length',
  $property: --bg-border-length,
  $modifier: (
    90: 90,
    100: 100
    //...
  )
);

@include yogurt(
  $class: 'bg-border.size',
  $property: --bg-border-size,
  $modifier: (
    64: 64px,
    72: 72px
    //...
  )
);

@include yogurt(
  $class: 'bg-border.space',
  $property: --bg-border-space,
  $modifier: (
    90: 90px,
    100: 100px
    //...
  )
);

@include yogurt(
  $class: 'bg-border.angle',
  $property: --bg-border-angle,
  $modifier: (
    80: 90deg,
    90: 90deg
    //...
  )
);
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for backgroundborder in variants.backgroundborder %}{% for item in backgroundborder.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

