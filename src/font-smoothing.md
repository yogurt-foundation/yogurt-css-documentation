---
id: font-smoothing
title: Font Smoothing
description: Utilities for sets the antialiasing of the font.
topic: Typography
layout: default
---

> Typography

# Font Smoothing

Utilities for sets the antialiasing of the font.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| antialiased | -webkit-font-smoothing: antialiased; <br> -moz-osx-font-smoothing: grayscale |
| subpixel-antialiased | -webkit-font-smoothing: auto; <br> -moz-osx-font-smoothing: auto |

---

## Usage

Set default font-smoothing with `<body>` tag.

```html
<!-- Example -->
<body class="antialiased">
  ...
</body>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for fontsmoothing in variants.fontsmoothing %}{% for item in fontsmoothing.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).
