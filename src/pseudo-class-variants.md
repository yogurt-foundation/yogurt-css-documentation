---
id: pseudo-class-variant
title: Pseudo-Class Variants
description: Using utilities to style and add effects to elements when on hover, group-hover, group-focus, group-focus, focus, active, disabled, visited, checked and so on.
topic: Core Concepts
layout: default
---

> Core Concepts

# Pseudo-Class Variants

Using utilities to style and add effects to elements when on:

- [responsive](/pseudo-class-variants/#responsive)
- [dark-mode](/pseudo-class-variants/#dark-mode-v1.1.0), [light-mode](/pseudo-class-variants/#light-mode-v1.1.0)
- [reduce-motion](/pseudo-class-variants/#reduce-motion-v1.1.6)
- [selection-hover](/pseudo-class-variants/#selection-hover-v1.1.6)
- [expand](/pseudo-class-variants/#expand-v1.1.6)
- [portrait](/pseudo-class-variants/#portrait-v1.1.5), [landscape](/pseudo-class-variants/#landscape-v1.1.5)
- [hover](/pseudo-class-variants/#hover), [group-hover](/pseudo-class-variants/#group-hover)
- [focus](/pseudo-class-variants/#focus), [group-focus](/pseudo-class-variants/#group-focus), [focus-visible](/pseudo-class-variants/#focus-visible), [focus-within](/pseudo-class-variants/#focus-within)
- [active](/pseudo-class-variants/#active)
- [visited](/pseudo-class-variants/#visited)
- [checked](/pseudo-class-variants/#checked)
- [disabled](/pseudo-class-variants/#disabled)

### responsive

Add the one of these prefixes `(xs)`, `(sm)`, `(md)`, `(lg)`, `(xl)`, `(2k)`, `(3k)`, `(4k)`, `(8k)` to a utility to enable responsive response to different screen sizes.

```html
<!-- Example -->
<y class="(xs)text-lg (2k)text-4xl">
  ...
</y>
```

### Hover

Add the `(hover)` prefix to a utility to enable on-hover.

```html
<!-- Example -->
<y class="text-charcoal-100 (hover)text-white bg-white (hover)bg-charcoal-100">
  ...
</y>
```

### Focus

Add the `(focus)` prefix to a utility to enable on-focus.

```html
<!-- Example -->
<input
  class="bg-gray-100 (focus)bg-charcoal-100 border-transparent (focus)border-gray-200"
  placeholder="Focus me!"
>
```

### Focus-Within

Add the `(focus-within)` prefix to a utility to enable on-focused for child element.

```html
<!-- Example -->
<y class="(focus-within)text-red-600 (focus-within)bg-red-300">
  Title: <input placeholder="Focus me!">
</y>
```

### Focus-Visible

Add the `(focus-visible)` prefix to a utility to enable on-focused for child element.

```html
<!-- Example -->
<y class="bg-gray-400 (focus-visible)bg-gray-600">
  ...
</y>
```

### Active

Add the `(active)` prefix to a utility to enable on-active.

```html
<!-- Example -->
<button class="bg-charcoal-100 (active)bg-red-400 text-white">
  ...
</button>
```

### Visited

Add the `(visited)` prefix to a utility to enable on-visited.

```html
<!-- Example -->
<a class="text-gray-500 (visited)text-purple-500 (visited)underline"
   href="...">
  ...
</a>
```

### Checked

Add the `(checked)` prefix to a utility to enable on-checked.

```html
<!-- Example -->
<button class="(checked)text-white (checked)bg-red-400 (checked)underline">
  ...
</button>
```

### Disabled

Add the `(disabled)` prefix to a utility to enable on-disabled.

```html
<!-- Example -->
<button class="(disabled)text-gray-600 (disabled)bg-gray-400">
  ...
</button>
```

---

## Group

### Group-Hover

Add `(group)` class to the parent element and add the `(group-hover)` prefix to a utility on the child element to enable group-hover.

```html
<!-- Example -->
<y class="(group) bg-charcoal-100 (hover)bg-orange-400">
  <y class="(group-hover)text-white">
    ...
  </y>
</y>
```

### Group-Focus

Add `(group)` class to the parent element and add the `(group-focus)` prefix to a utility on the child element to enable group-focus.

```html
<!-- Example -->
<y class="(group) bg-charcoal-100 (focus)bg-orange-400">
  <y class="(group-focus)text-white">
    ...
  </y>
</y>
```

---

### Selection-Hover <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.6</span>

Add `(selection-hover)` prefix to `filter` utilities with set up parent and child elements. Deselected elements are affected by the `filter` configurations.

```html
<!-- Example -->
<!-- parent -->
<y class="(selection-hover)filter saturate-0 blur-10 ... smooth-200">
  <!-- child -->
  <y>
    <y>
      ...
    </y>
  </y>
  <!-- child -->
  <y>
    <y>
      ...
    </y>
  </y>
</y>
```

### Expand <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.6</span>

Add `(expand)` prefix to a utility in a parent element, the utility will take effect to all child elements.

```html
<!-- Example -->
<!-- parent -->
<y class="(expand)m-2 (expand)p-4">
  <!-- child -->
  <y>...</y>
  <y>...</y>
  <y>...</y>
</y>
```

---

## Theme

### Dark Mode <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.0</span>

Add the `(dark)` prefix to a utility when dark theme settings enabled.

```html
<!-- Example -->
<y class="text-charcoal-100 (dark)text-gray-100">
  ...
</y>
```

### Light Mode <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.5</span>

Add the `(light)` prefix to a utility when light theme settings enabled.

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

---

### Reduce-Motion <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.6span>

Add the `(reduce-motion)` prefix to a utility reduce animation motion for readers with vestibular motion disorders.

```html
<!-- Example -->
<y class="(reduce-motion)transition duration-300 ease-in-out border-4 border-gray-400 (hover)border-gray-500 (hover)shadow-lg ... w-32 h-24">
  ...
</y>
```

---

## Orientation

### Portrait <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.5</span>

Add the `(portrait)` prefix to a utility when portrait settings enabled.

```html
<!-- Example -->
<y class="flex (portrait)flex-col">
  ...
</y>
```

### Landscape <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.5</span>

Add the `(landscape)` prefix to a utility when landscape settings enabled.

```html
<!-- Example -->
<y class="flex (landscape)flex-col">
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

---

## Create Custom Variants

Read [Plugin API](/plugin-api/). Covering how to create:

- `Create basic utility`
- `Create responsive utility`
- `Create responsive utility with variants`
- `Create utility with negative values`