---
id: background-position
title: Background Position
description: Utilities for sets position of a background image.
topic: Backgrounds
relate: background-attachment, background-blend, background-border, background-color, background-gradient, background-opacity, background-repeat, background-size
layout: default
---

> Backgrounds

# Background Position

Utilities for sets position of a background image.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| bg-top | background-position: top |
| bg-bottom | background-position: bottom |
| bg-center | background-position: center |
| bg-left | background-position: left |
| bg-left-bottom | background-position: left bottom |
| bg-left-top | background-position: left top |
| bg-right | background-position: right |
| bg-right-bottom | background-position: right bottom |
| bg-right-top | background-position: right top |

---

## Usage

Set `left-top` position background image with HTML inline attribute `style="..."` and a CSS property `background-image: url(...)` to an element.

<y class="my-2 mx-auto w-64 bg-red-200 border-2 border-dashed border-red-300">
  <y class="h-32 w-64 bg-left-top bg-no-repeat"
     style="background-image:url(https://picsum.photos/90?=1)"></y>
</y>

```html
<!-- Example -->
<y
  class="bg-left-top ... bg-no-repeat ... h-32 w-64"
  style="background-image:url(...)">
</y>
```

Set `top` position background image.

<y class="my-2 mx-auto w-64 bg-red-200 border-2 border-dashed border-red-300">
  <y class="h-32 w-64 bg-top bg-no-repeat"
     style="background-image:url(https://picsum.photos/90?=1)"></y>
</y>

```html
<!-- Example -->
<y
  class="bg-top ... bg-no-repeat ... h-32 w-64"
  style="background-image:url(...)">
</y>
```

Set `right-top` position background image.

<y class="my-2 mx-auto w-64 bg-red-200 border-2 border-dashed border-red-300">
  <y class="h-32 w-64 bg-right-top bg-no-repeat"
     style="background-image:url(https://picsum.photos/90?=1)"></y>
</y>

```html
<!-- Example -->
<y
  class="bg-right-top ... bg-no-repeat ... h-32 w-64"
  style="background-image:url(...)">
</y>
```

Set `right` position background image.

<y class="my-2 mx-auto w-64 bg-red-200 border-2 border-dashed border-red-300">
  <y class="h-32 w-64 bg-right bg-no-repeat"
     style="background-image:url(https://picsum.photos/90?=1)"></y>
</y>

```html
<!-- Example -->
<y
  class="bg-right ... bg-no-repeat ... h-32 w-64"
  style="background-image:url(...)">
</y>
```

Set `right bottom` position background image.

<y class="my-2 mx-auto w-64 bg-red-200 border-2 border-dashed border-red-300">
  <y class="h-32 w-64 bg-right-bottom bg-no-repeat"
     style="background-image:url(https://picsum.photos/90?=1)"></y>
</y>

```html
<!-- Example -->
<y
  class="bg-right-bottom ... bg-no-repeat ... h-32 w-64"
  style="background-image:url(...)">
</y>
```

Set `bottom` position background image.

<y class="my-2 mx-auto w-64 bg-red-200 border-2 border-dashed border-red-300">
  <y class="h-32 w-64 bg-bottom bg-no-repeat"
     style="background-image:url(https://picsum.photos/90?=1)"></y>
</y>

```html
<!-- Example -->
<y
  class="bg-bottom ... bg-no-repeat ... h-32 w-64"
  style="background-image:url(...)">
</y>
```

Set `left-bottom` position background image.

<y class="my-2 mx-auto w-64 bg-red-200 border-2 border-dashed border-red-300">
  <y class="h-32 w-64 bg-left-bottom bg-no-repeat"
     style="background-image:url(https://picsum.photos/90?=1)"></y>
</y>

```html
<!-- Example -->
<y
  class="bg-left-bottom ... bg-no-repeat ... h-32 w-64"
  style="background-image:url(...)">
</y>
```

Set `left` position background image.

<y class="my-2 mx-auto w-64 bg-red-200 border-2 border-dashed border-red-300">
  <y class="h-32 w-64 bg-left bg-no-repeat"
     style="background-image:url(https://picsum.photos/90?=1)"></y>
</y>

```html
<!-- Example -->
<y
  class="bg-left ... bg-no-repeat ... h-32 w-64"
  style="background-image:url(...)">
</y>
```

Set `center` position background image.

<y class="my-2 mx-auto w-64 bg-red-200 border-2 border-dashed border-red-300">
  <y class="h-32 w-64 bg-center bg-no-repeat"
     style="background-image:url(https://picsum.photos/90?=1)"></y>
</y>

```html
<!-- Example -->
<y
  class="bg-center ... bg-no-repeat ... h-32 w-64"
  style="background-image:url(...)">
</y>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for backgroundposition in variants.backgroundposition %}{% for item in backgroundposition.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).
