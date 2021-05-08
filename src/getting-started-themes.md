---
id: themesoverview
title: Introduction of Dark or Light Mode
description: Utilities to sets `dark` or `light` theme to an element.
topic: Getting Started > Features
relate: theme-auto, theme-invert, pseudo-class-variants
layout: default
---

> Getting Started

<y class="-mt-4 pt-4 (xs)text-3xl (lg)text-5xl font-semibold gap-tight">
  Themes
</y>

Utilities to sets `dark` or `light` theme to an element.

# Dark

<y class="px-4 py-2 w-full">
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

Add the `(dark)` prefix to an utility when dark theme settings enabled. Find out more about the usage [Pseudo Class Variants](/pseudo-class-variants/#dark-mode-v1.1.0).

```html
<!-- Example -->
<y class="px-4 py-2 w-full">
  <y class="relative flex justify-center items-center (dark)bg-gray-800 (light)bg-gray-400 border (dark)border-gray-800 (light)border-gray-400 h-48 w-full pattern ripple-lg (light)text-gray-100 rounded-lg overflow-hidden">
    <y class="absolute top-1 right-1">
      <y class="flex flex-gap-1">
        <y class="h-4 w-4 (dark)bg-gray-500 rounded-full"></y>
        <y class="h-4 w-4 (dark)bg-gray-500 rounded-full"></y>
        <y class="h-4 w-4 (dark)bg-gray-100 (light)bg-gray-700 rounded-full"></y>
      </y>
    </y>
    <y class="flex flex-col justify-center items-center">
      <y class="text-3xl font-semibold (dark)text-gray-200 (light)text-gray-700">
        Dark
      </y>
    </y>
  </y>
</y>
```

# Light

Add the `(light)` prefix to an utility when light theme settings enabled. Find out more about the usage at [Pseudo Class Variants](/pseudo-class-variants/#light-mode-v1.1.5).

<y class="px-4 py-2 w-full">
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

```html
<!-- Example -->
<y class="px-4 py-2 w-full">
  <y class="relative flex justify-center items-center (light)bg-gray-400 (dark)bg-gray-800 border (light)border-gray-400 (dark)border-gray-800 h-48 w-full pattern ripple-lg (light)text-gray-100 rounded-lg overflow-hidden">
    <y class="absolute top-1 right-1">
      <y class="flex flex-gap-1">
        <y class="h-4 w-4 (dark)bg-gray-500 rounded-full"></y>
        <y class="h-4 w-4 (dark)bg-gray-500 rounded-full"></y>
        <y class="h-4 w-4 (light)bg-gray-700 (dark)bg-gray-100 rounded-full"></y>
      </y>
    </y>
    <y class="flex flex-col justify-center items-center">
      <y class="text-3xl font-semibold (light)text-gray-700 (dark)text-gray-200">
        Dark
      </y>
    </y>
  </y>
</y>
```

## Override Options

To override theme invert to an element. Find out more about the usage [`theme-auto`](/theme-auto/) and [`theme-invert`](/theme-invert/) utilities.

```html
<!-- Example -->
<html theme="auto|invert">
  ...
    <!-- e.g. To compensate inverted image -->
    <img theme="auto|invert">
    <!-- e.g. To compensate other inverted elements -->
    <y theme="auto|invert"></y>
    <span theme="auto|invert"></span>
  ...
</html>
```

## Simulate

To simulate [`(dark)`](/pseudo-class-variants/#dark-mode-v1.1.0), [`(light)`](/pseudo-class-variants/#light-mode-v1.1.5), [`theme="auto"`](/theme-auto/), [`theme="invert"`](/theme-invert/) on a Chrome-based web browser, open the developer tools, by pressing `CTRL+SHIFT+I` and find your way to enable the `Rendering` options in the picture below. You 'll find the `Emulate CSS media feature prefers-color-scheme` menu.

<y class="mx-4 py-4">
  <img theme="auto"
       class="w-full h-full object-fit object-center rounded-lg"
       src="/images/content/simulate_theme.jpg"
       loading="lazy"
       alt="Chrome prefers-color-scheme simulator">
</y>

<y class="mt-16 mx-auto max-w-sm">
  <a class="px-10 py-3 appearance-none (focus)outline-none text-md text-gray-800 (hover)text-gray-100 bg-gray-200 (hover)bg-gray-800 border-4 border-gray-300 (hover)border-gray-800 (focus)border-gray-800 rounded-lg transition duration-300 ease-in-out"
     href="/getting-started/"
     target="_self"
     rel="noopener">
    Back to
    <span class="font-semibold">
      Gettings Started
    </span>
  </a>
</y>