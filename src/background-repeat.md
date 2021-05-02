---
id: background-repeat
title: Background Repeat
description: Utilities for sets repetition of a background image.
layout: default
---

> Backgrounds

# Background Repeat

Utilities for sets repetition of a background image.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| bg-repeat | background-repeat: repeat |
| bg-no-repeat | background-repeat: no-repeat |
| bg-repeat-x | background-repeat: repeat-x |
| bg-repeat-y | background-repeat: repeat-y |
| bg-repeat-round | background-repeat: round |
| bg-repeat-space | background-repeat: space |

---

## Usage

Set repeating background image with HTML inline attribute `style="..."` and a CSS property `background-image: url(...)` to an element.

<y class="my-2 mx-auto w-64 bg-red-200">
  <y class="h-48 w-64 bg-repeat" style="background-image:url(https://picsum.photos/80?=1)"></y>
</y>

```html
<!-- Example -->
<y class="bg-repeat ... h-48 w-64"
   style="background-image:url(...)"></y>
```

Set no-repeating background image.

<y class="my-2 mx-auto w-64 bg-red-200">
  <y class="h-48 w-64 bg-no-repeat" style="background-image:url(https://picsum.photos/80?=1)"></y>
</y>

```html
<!-- Example -->
<y class="bg-no-repeat ... h-48 w-64"
   style="background-image:url(...)"></y>
```

Set repeating background image horizontally.

<y class="my-2 mx-auto w-64 bg-red-200">
  <y class="h-48 w-64 bg-repeat-x" style="background-image:url(https://picsum.photos/80?=1)"></y>
</y>

```html
<!-- Example -->
<y class="bg-repeat-x ... h-48 w-64"
   style="background-image:url(...)"></y>
```

Set repeating background image vertically.

<y class="my-2 mx-auto w-64 bg-red-200">
  <y class="h-48 w-64 bg-repeat-y" style="background-image:url(https://picsum.photos/80?=1)"></y>
</y>

```html
<!-- Example -->
<y class="bg-repeat-y ... h-48 w-64"
   style="background-image:url(...)"></y>
```

Set repeating resized background image horizontally and vertically.

<y class="my-2 mx-auto w-64 bg-red-200">
  <y class="h-48 w-64 bg-repeat-round" style="background-image:url(https://picsum.photos/80?=1)"></y>
</y>

```html
<!-- Example -->
<y class="bg-repeat-round ... h-48 w-64"
   style="background-image:url(...)"></y>
```

Set repeating no-resized background image horizontally and vertically.

<y class="my-2 mx-auto w-64 bg-red-200">
  <y class="h-48 w-64 bg-repeat-space" style="background-image:url(https://picsum.photos/80?=1)"></y>
</y>

```html
<!-- Example -->
<y class="bg-repeat-space ... h-48 w-64"
   style="background-image:url(...)"></y>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for backgroundrepeat in variants.backgroundrepeat %}{% for item in backgroundrepeat.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

