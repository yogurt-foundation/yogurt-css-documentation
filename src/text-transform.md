---
id: text-transform
title: Text Transform
description: Utilities for sets the capitalization of text.
layout: default
---

> Typography

# Text Transform

Utilities for sets the capitalization of text.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> | |
|:--|:--|:-:|
| uppercase | text-transform: uppercase | <y class="text-lg uppercase">text</y> |
| lowercase | text-transform: lowercase | <y class="text-lg lowercase">TEXT</y> |
| capitalize | text-transform: capitalize | <y class="text-lg capitalize">text</y> |
| normal-case | text-transform: none | <y class="text-lg none">text</y> |

---

## Usage

```html
<!-- Example -->
<y class="uppercase">
  ...
</y>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for texttransform in variants.texttransform %}{% for item in texttransform.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).