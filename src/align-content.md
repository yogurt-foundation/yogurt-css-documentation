---
id: align-content
title: Align Content
description: Utilities for controls how lines are positioned in multi-line flex containers.
topic: Flexbox
relate: flex, flex-gap, flex-direction, flex-grow, flex-shrink, flex-wrap, align-items, align-self
variant: responsive
layout: default
---

> Flexbox

# Align Content

Utilities for controls how lines are positioned in multi-line flex containers.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| content-start | align-content: flex-start |
| content-center | align-content: center |
| content-end | align-content: flex-end |
| content-between | align-content: space-between |
| content-around | align-content: space-around |
| content-stretch <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.1</span> | align-content: stretch |

---

## Usage

```html
<!-- Example -->
<y class="flex content-around">
  ...
</y>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for aligncontent in variants.aligncontent %}{% for item in aligncontent.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).



