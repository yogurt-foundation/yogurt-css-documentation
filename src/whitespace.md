---
id: whitespace
title: Whitespace
description: Utilities for sets the whitespace of an element.
category: Typography
variant: responsive
layout: default
---

> Typography

# Whitespace

Utilities for sets the whitespace of an element.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| whitespace-normal | white-space: normal |
| whitespace-no-wrap | white-space: nowrap |
| whitespace-pre | white-space: pre |
| whitespace-pre-line | white-space: pre-line |
| whitespace-pre-wrap | white-space: pre-wrap |

---

## Usage

Set text paragraph whitespace to `normal`.

<y class="my-2 mx-auto max-w-lg">
  <y class="p-4 bg-gray-300 whitespace-normal">
   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quidem itaque beatae, rem tenetur quia iure, eum natus enim maxime laudantium quibusdam illo nihil, reprehenderit saepe quam aliquid odio accusamus.
 </y>
</y>

```html
<!-- Example -->
<y class="whitespace-normal ...">
  ...
</y>
```

Set scrollable text paragraph whitespace to `no-wrap`.

<y class="my-2 mx-auto max-w-lg">
  <y class="p-4 bg-gray-300 whitespace-no-wrap overflow-x-scroll">
   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis quidem itaque beatae, rem tenetur quia iure, eum natus enim maxime laudantium quibusdam illo nihil, reprehenderit saepe quam aliquid odio accusamus.
 </y>
</y>

```html
<!-- Example -->
<y class="whitespace-no-wrap ... overflow-x-scroll">
  ...
</y>
```

Set text paragraph preserved new line whitespaces.

<y class="my-2 mx-auto max-w-lg">
  <y class="p-4 bg-gray-300 whitespace-pre">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.

      Omnis quidem itaque beatae,
      rem tenetur quia iure,

    reprehenderit saepe quam aliquid odio accusamus.
  </y>
</y>

```html
<!-- Example -->
<y class="whitespace-pre ...">
  ...
</y>
```

Set text paragraph without preserved new line whitespaces.

<y class="my-2 mx-auto max-w-lg">
  <y class="p-4 bg-gray-300 whitespace-pre-line">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Omnis quidem itaque beatae,
    rem tenetur quia iure,

    reprehenderit saepe quam aliquid odio accusamus.
  </y>
</y>

```html
<!-- Example -->
<y class="whitespace-pre-line ...">
  ...
</y>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for whitespace in variants.whitespace %}{% for item in whitespace.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).
