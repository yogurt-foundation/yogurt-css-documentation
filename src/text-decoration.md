---
id: text-decoration
title: Text Decoration
description: Utilities for sets the text-decoration of an element.
topic: Typography
variant: responsive, hover, group-hover, focus, focus-visible, focus-within
layout: default
---

> Typography

# Text Decoration

Utilities for sets the text-decoration of an element.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> | |
|:--|:--|:-:|
| underline | text-decoration: underline | <y class="text-lg underline">Text</y> |
| line-through | text-decoration: line-through | <y class="text-lg line-through">Text</y> |
| no-underline | text-decoration: none |  <y class="text-lg no-underline">Text</y> |

---

## Usage

```html
<!-- Example -->
<y class="underline">
  ...
</y>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for textdecoration in variants.textdecoration %}{% for item in textdecoration.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).