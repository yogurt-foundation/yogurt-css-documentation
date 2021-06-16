---
id: fluidsoverview
title: Introduction of Fluids Utilities
description: Utilities for sets min and max values with other utilities for screen size without breakpoints.
topic: Getting Started > Features
relate: fluid-font-size, fluid-margin, fluid-padding
layout: default
---

> Getting Started

<y class="-mt-4 pt-4 (xs)text-3xl (lg)text-5xl font-semibold gap-tight">
  Fluids
</y>

Utilities for sets min and max values with other utilities for screen size without breakpoints.

# Font Size

<y class="flex (xs)flex-col (sm)flex-row">
  <y class="relative h-72 w-88 p-4 bg-gray-400 border-l-2 border-t-2 border-b-2 border-gray-400 rounded-l-lg">
    <y class="pb-4 text-lg font-mono">
      fluid-text-lg
    </y>
    <y class="text-lg">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </y>
    <y class="absolute bottom-2 left-4 text-sm font-mono font-semibold">
      Small Screen
    </y>
  </y>
  <y class="relative h-72 w-full p-4 bg-gray-300 border-r-2 border-t-2 border-b-2 border-gray-400 rounded-r-lg">
    <y class="pb-4 text-lg font-mono">
      fluid-text-sm
    </y>
    <y class="text-sm">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
    </y>
    <y class="absolute bottom-2 right-4 text-sm font-mono font-semibold">
      Large Screen
    </y>
  </y>
</y>

---

Find out more about the usage of [Fluid Font Size](/fluid-font-size/).

```html
<!-- Example -->
<y class="fluid text-min-lg text-max-sm">
  ...
</y>
```

---

# Margin

Find out more about the usage of [Fluid Margin](/fluid-margin/).

<y class="flex (xs)flex-col (sm)flex-row">
  <y class="relative h-72 w-88 p-0 bg-gray-400 border-l-2 border-t-2 border-b-2 border-gray-400 rounded-l-lg">
    <y class="p-4 text-lg font-mono">
      fluid-margin-lg
    </y>
    <y class="relative h-48 w-64 bg-gray-500 flex justify-center items-center">
			<y class="absolute top-2 left-4 text-gray-800">
				Margin
			</y>
			<y class="px-10 py-10 text-orange-600 bg-orange-400">
				Content
			</y>
    </y>
    <y class="absolute bottom-2 left-4 text-sm font-mono font-semibold">
      Small Screen
    </y>
  </y>
  <y class="relative h-72 w-full bg-gray-300 border-r-2 border-t-2 border-b-2 border-gray-400 rounded-r-lg">
    <y class="p-4 text-lg font-mono">
      fluid-margin-sm
    </y>
    <y class="relative h-48 w-full bg-gray-400 flex justify-center items-center">
			<y class="absolute top-2 left-4 text-gray-800">
				Margin
			</y>
			<y class="w-96 py-16 flex justify-center items-center text-orange-600 bg-orange-400">
				Content
			</y>
    </y>
    <y class="absolute bottom-2 right-4 text-sm font-mono font-semibold">
      Large Screen
    </y>
  </y>
</y>

---

```html
<!-- Example -->
<y class="fluid m-min-lg m-max-sm">
  ...
</y>
```

---

# Padding

<y class="flex (xs)flex-col (sm)flex-row">
  <y class="relative h-72 w-88 p-0 bg-gray-400 border-l-2 border-t-2 border-b-2 border-gray-400 rounded-l-lg">
    <y class="p-4 text-lg font-mono">
      fluid-padding-lg
    </y>
    <y class="relative h-48 w-64 bg-gray-500 flex justify-center items-center">
			<y class="absolute top-2 left-4 text-gray-800">
				Padding
			</y>
			<y class="px-10 py-10 text-orange-600 bg-orange-400">
				Content
			</y>
    </y>
    <y class="absolute bottom-2 left-4 text-sm font-mono font-semibold">
      Small Screen
    </y>
  </y>
  <y class="relative h-72 w-full bg-gray-300 border-r-2 border-t-2 border-b-2 border-gray-400 rounded-r-lg">
    <y class="p-4 text-lg font-mono">
      fluid-padding-sm
    </y>
    <y class="relative h-48 w-full bg-gray-400 flex justify-center items-center">
			<y class="absolute top-2 left-4 text-gray-800">
				Padding
			</y>
			<y class="w-96 py-16 flex justify-center items-center text-orange-600 bg-orange-400">
				Content
			</y>
    </y>
    <y class="absolute bottom-2 right-4 text-sm font-mono font-semibold">
      Large Screen
    </y>
  </y>
</y>

---

Find out more about the usage of [Fluid Padding](/fluid-padding/).

```html
<!-- Example -->
<y class="fluid p-min-lg p-max-sm">
  ...
</y>
```

---

<y class="mt-16 mx-auto max-w-sm">
  <a
    class="px-10 py-3 appearance-none (focus)outline-none text-md text-gray-800 (hover)text-gray-100 bg-gray-200 (hover)bg-gray-800 border-4 border-gray-300 (hover)border-gray-800 (focus)border-gray-800 rounded-lg transition duration-300 ease-in-out"
    href="/getting-started/"
    target="_self"
    rel="noopener"
  >
    Back to
    <span class="font-semibold">
      Gettings Started
    </span>
  </a>
</y>