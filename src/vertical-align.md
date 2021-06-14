---
id: vertical-align
title: Vertical Align
description: Utilities for sets the vertical alignment of an inline or table-cell box.
topic: Typography
variant: responsive
layout: default
---

> Typography

# Vertical Align

Utilities for sets the vertical alignment of an inline or table-cell box.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| align-top | vertical-align: top |
| align-baseline | vertical-align: baseline |
| align-middle | vertical-align: middle |
| align-bottom | vertical-align: bottom |
| align-text-top | vertical-align: text-top |
| align-text-bottom | vertical-align: text-bottom |

---

## Usage

Set element vertical alignment to `top`.

<y class="my-2 mx-auto w-64">
  <y class="h-32 p-6 text-lg bg-gray-300 flex justify-center items-center">
    <y>
      Text
      <img class="px-2 inline-block align-top"
           src="https://picsum.photos/70?=1">
      Text
    </y>
  </y>
</y>

<y class="my-2 mx-auto w-64">
  <y class="h-32 p-6 text-lg bg-gray-300 flex justify-center items-center">
    <y>
      Text
      <span class="px-3 text-5xl inline-block align-top">
        Text
      </span>
      Text
    </y>
  </y>
</y>

```html
<!-- Example -->
<y>
  ...
  <img class="align-top ... inline-block"
       src="...">
  ...
</y>

<y>
  ...
  <y class="align-top ... inline-block">
    ...
  </y>
  ...
</y>
```

Set element vertical alignment to `bottom`.

<y class="my-2 mx-auto w-64">
  <y class="h-32 p-6 text-lg bg-gray-300 flex justify-center items-center">
    <y>
      Text
      <img class="px-2 inline-block align-bottom"
           src="https://picsum.photos/70?=1">
      Text
    </y>
  </y>
</y>

<y class="my-2 mx-auto w-64">
  <y class="h-32 p-6 text-lg bg-gray-300 flex justify-center items-center">
    <y>
      Text
      <span class="text-5xl inline-block align-bottom">
        Text
      </span>
      Text
    </y>
  </y>
</y>

```html
<!-- Example -->
<y>
  ...
  <img class="align-bottom ... inline-block"
       src="...">
  ...
</y>

<y>
  ...
  <y class="align-bottom ... inline-block">
    ...
  </y>
  ...
</y>
```

Set element vertical alignment to `baseline`.

<y class="my-2 mx-auto w-64">
  <y class="h-32 p-6 text-lg bg-gray-300 flex justify-center items-center">
    <y>
      Text
      <img class="px-2 inline-block align-baseline"
           src="https://picsum.photos/70?=1">
      Text
    </y>
  </y>
</y>

<y class="my-2 mx-auto w-64">
  <y class="h-32 p-6 text-lg bg-gray-300 flex justify-center items-center">
    <y>
      Text
      <span class="text-5xl inline-block align-baseline">
        Text
      </span>
      Text
    </y>
  </y>
</y>

```html
<!-- Example -->
<y>
  ...
  <img class="align-baseline ... inline-block"
       src="...">
  ...
</y>

<y>
  ...
  <y class="align-baseline ... inline-block">
    ...
  </y>
  ...
</y>
```

Set element vertical alignment to `middle`.

<y class="my-2 mx-auto w-64">
  <y class="h-32 p-6 text-lg bg-gray-300 flex justify-center items-center">
    <y>
      Text
      <img class="px-2 inline-block align-middle"
           src="https://picsum.photos/70?=1">
      Text
    </y>
  </y>
</y>

<y class="my-2 mx-auto w-64">
  <y class="h-32 p-6 text-lg bg-gray-300 flex justify-center items-center">
    <y>
      Text
      <span class="text-5xl inline-block align-middle">
        Text
      </span>
      Text
    </y>
  </y>
</y>

```html
<!-- Example -->
<y>
  ...
  <img class="align-middle ... inline-block"
       src="...">
  ...
</y>

<y>
  ...
  <y class="align-middle ... inline-block">
    ...
  </y>
  ...
</y>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for verticalalign in variants.verticalalign %}{% for item in verticalalign.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).