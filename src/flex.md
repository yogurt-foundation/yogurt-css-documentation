---
id: flex
title: Flex
description: Utilities for controls how flex items grow and shrink.
category: Flexbox
tags: flex-gap, flex-direction, flex-grow, flex-shrink, flex-wrap, align-content, align-items, align-self
layout: default
---

> Flexbox

# Flex

Utilities for controls how flex items grow and shrink.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| flex-initial | flex: 0 1 auto |
| flex-1 | flex: 1 1 0% |
| flex-auto | flex: 1 1 auto |
| flex-none | flex: none |

---

## Usage

```html
<!-- Example -->
<y class="flex">
  <y> ... </y>
  <y> ... </y>
</y>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for flex in variants.flex %}{% for item in flex.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

