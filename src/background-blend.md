---
id: background-blend
title: Background Blend
description: Utilities for sets the blending mode of each background layer (color or image).
topic: Backgrounds
relate: background-attachment, background-border, background-color, background-gradient, background-opacity, background-position, background-repeat, background-size
variant: focus-visible, focus-within
layout: default
---

> Backgrounds

# Background Blend

Utilities for sets the blending mode of each background layer (color or image).

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| bg-blend-normal | background-blend-mode: normal |
| bg-blend-multiply | background-blend-mode: multiply |
| bg-blend-screen | background-blend-mode: screen |
| bg-blend-overlay | background-blend-mode: overlay |
| bg-blend-darken | background-blend-mode: darken |
| bg-blend-lighten | background-blend-mode: lighten |
| bg-blend-color | background-blend-mode: color |
| bg-blend-color-dodge | background-blend-mode: color-dodge |
| bg-blend-color-burn | background-blend-mode: color-burn |
| bg-blend-hard-light | background-blend-mode: hard-light |
| bg-blend-soft-light | background-blend-mode: soft-light |
| bg-blend-difference | background-blend-mode: difference |
| bg-blend-exclusion | background-blend-mode: exclusion |
| bg-blend-hue | background-blend-mode: hue |
| bg-blend-saturation | background-blend-mode: saturation |
| bg-blend-luminosity | Wbackground-blend-mode: luminosity |

---

## Usage

Set `normal` blending mode background image with HTML inline attribute `style="..."` and a CSS property `background-image: url(...)` to an element.

<y class="my-2 mx-auto w-64">
  <y class="bg-amber-600 bg-blend-normal bg-auto bg-center bg-no-repeat h-48 w-full"
     style="background-image:url(https://picsum.photos/400?=1)"></y>
</y>

```html
<!-- Example -->
<y
  class="bg-amber-600 bg-blend-normal ... bg-auto bg-center bg-no-repeat  ... h-48 w-full"
  style="background-image:url(...)">
</y>
```

Set `multiply` blending mode to background image.

<y class="my-2 mx-auto w-64">
  <y class="bg-amber-600 bg-blend-multiply bg-auto bg-center bg-no-repeat h-48 w-full"
     style="background-image:url(https://picsum.photos/400?=1)"></y>
</y>

```html
<!-- Example -->
<y
  class="bg-amber-600 bg-blend-multiply ... bg-auto bg-center bg-no-repeat  ... h-48 w-full"
  style="background-image:url(...)">
</y>
```

Set `screen` blending mode to background image.

<y class="my-2 mx-auto w-64">
  <y class="bg-amber-600 bg-blend-screen bg-auto bg-center bg-no-repeat h-48 w-full"
     style="background-image:url(https://picsum.photos/400?=1)"></y>
</y>

```html
<!-- Example -->
<y
  class="bg-amber-600 bg-blend-screen ... bg-auto bg-center bg-no-repeat  ... h-48 w-full"
  style="background-image:url(...)">
</y>
```

Set `overlay` blending mode to background image.

<y class="my-2 mx-auto w-64">
  <y class="bg-amber-600 bg-blend-overlay bg-auto bg-center bg-no-repeat h-48 w-full"
     style="background-image:url(https://picsum.photos/400?=1)"></y>
</y>

```html
<!-- Example -->
<y
  class="bg-amber-600 bg-blend-overlay ... bg-auto bg-center bg-no-repeat  ... h-48 w-full"
  style="background-image:url(...)">
</y>
```

Set `darken` blending mode to background image.

<y class="my-2 mx-auto w-64">
  <y class="bg-amber-600 bg-blend-darken bg-auto bg-center bg-no-repeat h-48 w-full"
     style="background-image:url(https://picsum.photos/400?=1)"></y>
</y>

```html
<!-- Example -->
<y
  class="bg-amber-600 bg-blend-darken ... bg-auto bg-center bg-no-repeat  ... h-48 w-full"
  style="background-image:url(...)">
</y>
```

Set `lighten` blending mode to background image.

<y class="my-2 mx-auto w-64">
  <y class="bg-amber-600 bg-blend-lighten bg-auto bg-center bg-no-repeat h-48 w-full"
     style="background-image:url(https://picsum.photos/400?=1)"></y>
</y>

```html
<!-- Example -->
<y
  class="bg-amber-600 bg-blend-lighten ... bg-auto bg-center bg-no-repeat  ... h-48 w-full"
  style="background-image:url(...)">
</y>
```

Set `color` blending mode to background image.

<y class="my-2 mx-auto w-64">
  <y class="bg-amber-600 bg-blend-color bg-auto bg-center bg-no-repeat h-48 w-full"
     style="background-image:url(https://picsum.photos/400?=1)"></y>
</y>

```html
<!-- Example -->
<y
  class="bg-amber-600 bg-blend-color ... bg-auto bg-center bg-no-repeat  ... h-48 w-full"
  style="background-image:url(...)">
</y>
```

Set `color-dodge` blending mode to background image.

<y class="my-2 mx-auto w-64">
  <y class="bg-amber-600 bg-blend-color-dodge bg-auto bg-center bg-no-repeat h-48 w-full"
     style="background-image:url(https://picsum.photos/400?=1)"></y>
</y>

```html
<!-- Example -->
<y
  class="bg-amber-600 bg-blend-color-dodge ... bg-auto bg-center bg-no-repeat  ... h-48 w-full"
  style="background-image:url(...)">
</y>
```

Set `color-burn` blending mode to background image.

<y class="my-2 mx-auto w-64">
  <y class="bg-amber-600 bg-blend-color-burn bg-auto bg-center bg-no-repeat h-48 w-full"
     style="background-image:url(https://picsum.photos/400?=1)"></y>
</y>

```html
<!-- Example -->
<y
  class="bg-amber-600 bg-blend-color-burn ... bg-auto bg-center bg-no-repeat  ... h-48 w-full"
  style="background-image:url(...)">
</y>
```

Set `hard-light` blending mode to background image.

<y class="my-2 mx-auto w-64">
  <y class="bg-amber-600 bg-blend-hard-light bg-auto bg-center bg-no-repeat h-48 w-full"
     style="background-image:url(https://picsum.photos/400?=1)"></y>
</y>

```html
<!-- Example -->
<y
  class="bg-amber-600 bg-blend-hard-light ... bg-auto bg-center bg-no-repeat  ... h-48 w-full"
  style="background-image:url(...)">
</y>
```

Set `soft-light` blending mode to background image.

<y class="my-2 mx-auto w-64">
  <y class="bg-amber-600 bg-blend-soft-light bg-auto bg-center bg-no-repeat h-48 w-full"
     style="background-image:url(https://picsum.photos/400?=1)"></y>
</y>

```html
<!-- Example -->
<y
  class="bg-amber-600 bg-blend-soft-light ... bg-auto bg-center bg-no-repeat  ... h-48 w-full"
  style="background-image:url(...)">
</y>
```

Set `different` blending mode to background image.

<y class="my-2 mx-auto w-64">
  <y class="bg-amber-600 bg-blend-different bg-auto bg-center bg-no-repeat h-48 w-full"
     style="background-image:url(https://picsum.photos/400?=1)"></y>
</y>

```html
<!-- Example -->
<y
  class="bg-amber-600 bg-blend-different ... bg-auto bg-center bg-no-repeat  ... h-48 w-full"
  style="background-image:url(...)">
</y>
```

Set `exclusion` blending mode to background image.

<y class="my-2 mx-auto w-64">
  <y class="bg-amber-600 bg-blend-exclusion bg-auto bg-center bg-no-repeat h-48 w-full"
     style="background-image:url(https://picsum.photos/400?=1)"></y>
</y>

```html
<!-- Example -->
<y
  class="bg-amber-600 bg-blend-exclusion ... bg-auto bg-center bg-no-repeat  ... h-48 w-full"
  style="background-image:url(...)">
</y>
```

Set `hue` blending mode to background image.

<y class="my-2 mx-auto w-64">
  <y class="bg-amber-600 bg-blend-hue bg-auto bg-center bg-no-repeat h-48 w-full"
     style="background-image:url(https://picsum.photos/400?=1)"></y>
</y>

```html
<!-- Example -->
<y
  class="bg-amber-600 bg-blend-hue ... bg-auto bg-center bg-no-repeat  ... h-48 w-full"
  style="background-image:url(...)">
</y>
```

Set `saturation` blending mode to background image.

<y class="my-2 mx-auto w-64">
  <y class="bg-amber-600 bg-blend-saturation bg-auto bg-center bg-no-repeat h-48 w-full"
     style="background-image:url(https://picsum.photos/400?=1)"></y>
</y>

```html
<!-- Example -->
<y
  class="bg-amber-600 bg-blend-saturation ... bg-auto bg-center bg-no-repeat  ... h-48 w-full"
  style="background-image:url(...)">
</y>
```

Set `luminosity` blending mode to background image.

<y class="my-2 mx-auto w-64">
  <y class="bg-amber-600 bg-blend-luminosity bg-auto bg-center bg-no-repeat h-48 w-full"
     style="background-image:url(https://picsum.photos/400?=1)"></y>
</y>

```html
<!-- Example -->
<y
  class="bg-amber-600 bg-blend-luminosity ... bg-auto bg-center bg-no-repeat  ... h-48 w-full"
  style="background-image:url(...)">
</y>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for backgroundblend in variants.backgroundblend %}{% for item in backgroundblend.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

