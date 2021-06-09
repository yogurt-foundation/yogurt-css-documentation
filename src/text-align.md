---
id: text-align
title: Text Align
description: Utilities for sets the alignment of text.
topic: Typography
variant: responsive
layout: default
---

> Typography

# Text Align

Utilities for sets the alignment of text.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| text-left | text-align: left |
| text-center | text-align: center |
| text-right | text-align: right |
| text-justify | text-align: justify |

---

## Usage

Set text align to `left`.

<y class="my-2 mx-auto w-64">
  <y class="w-56 h-32 p-4 bg-gray-300">
    <y class="text-4xl text-left">
      Text
    </y>
  </y>
</y>

```html
<!-- Example -->
<y class="text-left">
  ...
</y>
```

Set text align to `right`.

<y class="my-2 mx-auto w-64">
  <y class="w-56 h-32 p-4 bg-gray-300">
    <y class="text-4xl text-right">
      Text
    </y>
  </y>
</y>

```html
<!-- Example -->
<y class="text-right">
  ...
</y>
```

Set text align to `center`.

<y class="my-2 mx-auto w-64">
  <y class="w-56 h-32 p-4 bg-gray-300">
    <y class="text-4xl text-center">
    Text
    </y>
  </y>
</y>

```html
<!-- Example -->
<y class="text-center">
  ...
</y>
```

Set text align to `justify`.

<y class="my-2 mx-auto w-64">
  <y class="w-56 h-32 p-4 bg-gray-300">
    <y class="text-2xl text-justify">
      Text Text Text Text Text Text Text
    </y>
  </y>
</y>

```html
<!-- Example -->
<y class="text-justify">
  ...
</y>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for textalign in variants.textalign %}{% for item in textalign.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).