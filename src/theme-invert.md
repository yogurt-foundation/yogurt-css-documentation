---
id: theme-invert
title: Theme Invert
description: Utilities for sets page theme either dark or light by applying force invert.
layout: default
---

> Theme

# Theme Invert <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.0.9</span>

Utilities for sets page theme either dark or light by applying force invert with color correction.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">attribute</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| theme="invert" | html[theme="invert"], img[theme="invert"], [theme="invert"] { filter: invert(1) hue-rotate(180deg); |

---

## Usage

The basic set up for `theme="invert"` attribute is with the `<html>` tag. This allows the utility to attenuate colors of the page theme but not changing any color of it.

```html
<html theme="invert">
  ...
</html>
```

But, the images and some other elements will look inverted. To compensate that, apply the same `theme="invert"` attribute to all affected elements, like in the example.

```html
<html theme="invert">
  ...
    <!-- e.g. To compensate inverted image -->
    <img theme="invert">
    <!-- e.g. To compensate other inverted elements -->
    <y theme="invert"></y>
    <span theme="invert"></span>
  ...
</html>
```

---

### Simulate

To simulate `theme="invert"` on a Chrome-based web browser at the developer tools, by pressing `CTRL+SHIFT+I` and find your way to enable the `Rendering` options in the picture below. You 'll find the `Emulate CSS media feature prefers-color-scheme` menu.

<y class="mx-4 py-4">
  <img theme="auto"
       class="w-full h-full object-fit object-center rounded-lg"
       src="/images/content/simulate_theme.jpg"
       loading="lazy"
       alt="Chrome prefers-color-scheme simulator">
</y>

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for themeinvert in variants.themeinvert %}{% for item in themeinvert.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

