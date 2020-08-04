---
id: theme-auto
title: Theme Auto
description: Utilities for sets page theme either dark or light based on device or app settings.
layout: default
---

> Theme

## Theme Auto <span class="ml-1 px-2 py-1 text-sm text-gray-600 bg-gray-300">v1.0.9</span>

Utilities for sets page theme either dark or light based on device or app settings.

### Class

| <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">attribute</span> | <span class="px-3 py-1 text-white bg-charcoal-100 rounded-full">css</span> |
|:--|:--|
| theme="auto" | @media(prefers-color-scheme: dark) { html[theme="auto"], img[theme="auto"], [theme="auto"] { filter: invert(1) hue-rotate(180deg) }} |

<y class="mt-4 p-3 border-l-8 border-gray-600 text-sm text-gray-600 bg-gray-200">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  Utility customizing is unavailable.
</y>

<y class="mt-2 p-3 border-l-8 border-orange-600 text-sm text-orange-600 bg-orange-200">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  Auto theme supported. Desktop device will not affected.
</y>

### Usage

The basic set up for `theme="auto"` attribute is at the `<html>` tag. This allows `theme="auto"` to attenuate colors of the page theme but not changing any color of the application.

```html
<html theme="auto">
  ...
</html>
```

But, the images and some other elements will be look inverted. To compensate that, apply the same `theme="auto"` attribute to all affected elments, like in the example.

```html
<html theme="auto">
  ...
    <!-- e.g. To compensate inverted image -->
    <img theme="auto">
    <!-- e.g. To compensate any inverted elements -->
    <y theme="auto"></y>
    <span theme="auto"></span>
  ...
</html>
```

### Variant

| <span class="font-semibold underline">Variant</span> | <span class="font-semibold underline">Enabled</span> | <span class="font-semibold underline">Responsive</span> |
|:-:|:-:|:-:|
| Default | Yes | |
| hover| | |
| group-hover | | |
| focus | | |
| active | | |
| visited | | |
| disabled | | |