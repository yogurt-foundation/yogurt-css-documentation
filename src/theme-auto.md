---
id: theme-auto
title: Theme Auto
description: Utilities for sets page theme either dark or light based on web browser or app settings.
category: Theme
layout: default
---

> Theme

# Theme Auto <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.0.9</span>

Utilities for sets page theme either dark or light based on web browser or app settings with color correction.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">attribute</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| theme="auto" | @media(prefers-color-scheme: dark) { html[theme="auto"], img[theme="auto"], [theme="auto"] { filter: invert(1) hue-rotate(180deg) }} |

---

## Usage

The basic set up for `theme="auto"` attribute is with the `<html>` tag. This allows the utility to attenuate colors of the page theme but not changing any color of it.

```html
<html theme="auto">
  ...
</html>
```

But, the images and some other elements will look inverted. To compensate that, apply the same `theme="auto"` attribute to all affected elements, like in the example.

```html
<html theme="auto">
  ...
    <!-- e.g. To compensate inverted image -->
    <img theme="auto">
    <!-- e.g. To compensate other inverted elements -->
    <y theme="auto"></y>
    <span theme="auto"></span>
  ...
</html>
```

---

### Simulate

To simulate `theme="auto"` on a Chrome-based web browser at the developer tools, by pressing `CTRL+SHIFT+I` and find your way to enable the `Rendering` options in the picture below. You 'll find the `Emulate CSS media feature prefers-color-scheme` menu.

<y class="mx-4 py-4">
  <img theme="auto"
       class="w-full h-full object-fit object-center rounded-lg"
       src="/images/content/simulate_theme.jpg"
       loading="lazy"
       alt="Chrome prefers-color-scheme simulator">
</y>

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for themeauto in variants.themeauto %}{% for item in themeauto.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

