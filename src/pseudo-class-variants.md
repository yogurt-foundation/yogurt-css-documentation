---
id: pseudo-class-variant
title: Pseudo-Class Variants
description: Using utilities to style and add effects to elements when on hover, group-hover, group-focus, group-focus, focus, active, disabled, visited, checked and so on.
layout: default
---

> Core Concepts

## Pseudo-Class Variants

Using utilities to style and add effects to elements when on:

- `hover`, `group-hover`
- `focus`, `group-focus`, `focus-visible`, `focus-within`
- `active`
- `visited`
- `checked`
- `disable`
- `dark-mode`, `light-mode`
- `portrait`, `landscape`
- `reduce-motion`

### Hover

Add the `(hover)` prefix to an utility to enable on-hover.

```html
<!-- Example -->
<y class="text-charcoal-100 (hover)text-white bg-white (hover)bg-charcoal-100">
  ...
</y>
```

### Group-Hover

Add `(group)` class to the parent element and add the `(group-hover)` prefix to an utility on the child element to enable group-hover.

```html
<!-- Example -->
<y class="(group) bg-charcoal-100 (hover)bg-orange-400">
  <y class="(group-hover)text-white">
    ...
  </y>
</y>
```

### Focus

Add the `(focus)` prefix to an utility to enable on-focus.

```html
<!-- Example -->
<input class="bg-gray-100 (focus)bg-charcoal-100 border-transparent (focus)border-gray-200"
       placeholder="Focus me!">
```

### Focus-Within

Add the `(focus-within)` prefix to an utility to enable on-focused for child element.

```html
<!-- Example -->
<y class="(focus-within)text-red-600 (focus-within)bg-red-300">
  Title:
  <input placeholder="Focus me!">
</y>
```

### Focus-Visible

Add the `(focus-visible)` prefix to an utility to enable on-focused for child element.

```html
<!-- Example -->
<y class="bg-gray-400 (focus-visible)bg-gray-600">
  ...
</y>
```

### Group-Focus

Add `(group)` class to the parent element and add the `(group-focus)` prefix to an utility on the child element to enable group-focus.

```html
<!-- Example -->
<y class="(group) bg-charcoal-100 (focus)bg-orange-400">
  <y class="(group-focus)text-white">
    ...
  </y>
</y>
```

### Active

Add the `(active)` prefix to an utility to enable on-active.

```html
<!-- Example -->
<button class="bg-charcoal-100 (active)bg-red-400 text-white">
  ...
</button>
```

### Visited

Add the `(visited)` prefix to an utility to enable on-visited.

```html
<!-- Example -->
<a class="text-gray-500 (visited)text-purple-500 (visited)underline"
   href="...">
  ...
</a>
```

### Checked

Add the `(checked)` prefix to an utility to enable on-checked.

```html
<!-- Example -->
<button class="(checked)text-white (checked)bg-red-400 (checked)underline">
  ...
</button>
```

### Disabled

Add the `(disabled)` prefix to an utility to enable on-disabled.

```html
<!-- Example -->
<button class="(disabled)text-gray-600 (disabled)bg-gray-400">
  ...
</button>
```

### Dark Mode <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.0</span>

Add the `(dark)` prefix to an utility when dark theme settings enabled.

```html
<!-- Example -->
<y class="text-charcoal-100 (dark)text-gray-100">
  ...
</y>
```

### Light Mode <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.5</span>

Add the `(light)` prefix to an utility when dark theme settings enabled.

```html
<!-- Example -->
<y class="text-charcoal-100 (light)text-gray-100">
  ...
</y>
```

<y class="m-4 p-3 border-l-8 border-orange-600 text-sm text-orange-600 (dark)text-orange-500 bg-orange-200 (dark)bg-orange-900">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  Default enabled utilities (
  <a href="/background-color/">
    Background Color
  </a>,
  <a href="/border-color/">
    Border Color
  </a>,
  <a href="/gradient/">
    Gradient
  </a>,
  <a href="/filter-invert/">
    Filter Invert
  </a>,
  <a href="/placeholder-color/">
    Placeholder Color
  </a>,
  <a href="/box-shadow-color/">
    Shadow Color
  </a>,
  <a href="/text-color/">
    Text Color
  </a>).
</y>

### Portrait <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.5</span>

Add the `(portrait)` prefix to an utility when dark theme settings enabled.

```html
<!-- Example -->
<y class="(portrait)flex-col">
  ...
</y>
```

### Landscape <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.5</span>

Add the `(landscape)` prefix to an utility when dark theme settings enabled.

```html
<!-- Example -->
<y class="(landscape)flex-col">
  ...
</y>
```

<y class="m-4 p-3 border-l-8 border-orange-600 text-sm text-orange-600 (dark)text-orange-500 bg-orange-200 (dark)bg-orange-900">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  Default enabled utilities (
  <a href="/flex-direction/">
    Flex Direction
  </a>).
</y>

### Create Custom Variants

Read [Plugin API](/plugin-api/). Covering how to create:

- `Create basic utility`
- `Create responsive utility`
- `Create responsive utility with variants`
- `Create utility with negative values`