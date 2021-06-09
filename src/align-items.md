---
id: align-item
title: Align Items
description: Utilities for sets flex items position along a container's cross axis.
topic: Flexbox
relate: flex, flex-gap, flex-direction, flex-grow, flex-shrink, flex-wrap, align-content, align-self
variant: responsive
layout: default
---

> Flexbox

# Align Items

Utilities for sets flex items position along a container's cross axis.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| items-baseline <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.1</span> | align-items: baseline |
| items-start | align-items: flex-start |
| items-center | align-items: center |
| items-end | align-items: flex-end |
| items-stretch | align-items: stretch |

---

## Usage

```html
<!-- Example -->
<y class="flex items-center">
  ...
</y>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for alignitems in variants.alignitems %}{% for item in alignitems.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

