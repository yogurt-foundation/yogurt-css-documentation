---
id: align-self
title: Align Self
description: Utilities for controls how an individual flex item is positioned along container's cross axis.
topic: Flexbox
relate: flex, flex-gap, flex-direction, flex-grow, flex-shrink, flex-wrap, align-content, align-items
variant: responsive
layout: default
---

> Flexbox

# Align Self

Utilities for controls how an individual flex item is positioned along container's cross axis.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| self-auto | align-self: auto |
| self-baseline <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.1</span> | align-self: baseline |
| self-start | align-self: flex-start |
| self-center | align-self: center |
| self-end | align-self: flex-end |
| self-stretch | align-self: stretch |

---

## Usage

```html
<!-- Example -->
<y class="flex self-center">
  ...
</y>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for alignself in variants.alignself %}{% for item in alignself.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

