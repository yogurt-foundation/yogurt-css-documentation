---
id: themesoverview
title: Themes Overview
description: Themes Overview
layout: default
---

<y class="-mt-4 pt-4 (xs)text-3xl (lg)text-5xl font-semibold gap-tight">
  Themes
</y>

Utilities to sets dark or light theme to an element

<y class="mt-4 flex (xs)flex-col (sm)flex-row justify-around items-stretch">
  <y class="px-4 py-2 (xs)w-full (sm)w-1/2">
    <y class="relative flex justify-center items-center bg-gray-800 border border-gray-800 h-48 w-full pattern ripple-lg rounded-lg overflow-hidden">
      <y class="absolute top-1 right-1">
        <y class="flex flex-gap-1">
          <y class="h-4 w-4 bg-gray-500 rounded-full"></y>
          <y class="h-4 w-4 bg-gray-500 rounded-full"></y>
          <y class="h-4 w-4 bg-gray-100 rounded-full"></y>
        </y>
      </y>
      <y class="flex flex-col justify-center items-center">
        <y class="text-3xl font-semibold text-gray-200">
          Dark
        </y>
      </y>
    </y>
  </y>
  <y class="px-4 py-2 (xs)w-full (sm)w-1/2">
    <y class="relative flex justify-center items-center bg-gray-400 border border-gray-400 h-48 w-full pattern ripple-lg text-gray-100 rounded-lg overflow-hidden">
      <y class="absolute top-0 left-0">
        <y class="h-48 w-full pattern ripple-lg"></y>
      </y>
      <y class="absolute top-1 right-1">
        <y class="flex flex-gap-1">
          <y class="h-4 w-4 bg-gray-500 rounded-full"></y>
          <y class="h-4 w-4 bg-gray-500 rounded-full"></y>
          <y class="h-4 w-4 bg-gray-700 rounded-full"></y>
        </y>
      </y>
      <y class="flex flex-col justify-center items-center">
        <y class="text-3xl font-semibold text-gray-700">
          Light
        </y>
      </y>
    </y>
  </y>
</y>

# Dark Mode <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.0</span>

Add the `(dark)` prefix to an utility when dark theme settings enabled.

```html
<!-- Example -->
<y class="text-charcoal-100 (dark)text-gray-100">
  ...
</y>
```

# Light Mode <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.5</span>

Add the `(light)` prefix to an utility when light theme settings enabled.

```html
<!-- Example -->
<y class="text-charcoal-100 (light)text-gray-100">
  ...
</y>
```

## Override Options

Use `theme="auto"` or `theme="invert"` to override theme invert to an element.

```html
<!-- Example -->
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

## Simulate

To simulate `(dark)`, `(light)`, `theme="auto"`, `theme="invert"` on a Chrome-based web browser, open the developer tools, by pressing `CTRL+SHIFT+I` and find your way to enable the `Rendering` options in the picture below. You 'll find the `Emulate CSS media feature prefers-color-scheme` menu.

<y class="mx-4 py-4">
  <img theme="auto"
       class="w-full h-full object-fit object-center rounded-lg"
       src="/images/content/simulate_theme.jpg"
       loading="lazy"
       alt="Chrome prefers-color-scheme simulator">
</y>