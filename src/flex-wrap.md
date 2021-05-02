---
id: flex-wrap
title: Flex Wrap
description: Utilities for creates how flex items wrap.
layout: default
---

> Flexbox

# Flex Wrap

Utilities for creates how flex items wrap.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| flex-no-wrap | flex-wrap: nowrap |
| flex-wrap | flex-wrap: wrap |
| flex-wrap-reverse | flex-wrap: wrap-reverse  |

---

## Usage

```html
<!-- Example -->
<y class="flex flex-wrap">
  <y> ... </y>
  <y> ... </y>
</y>
```

---

## Usage

```html
<!-- Example -->
<y class="flex flex-wrap">
  ...
</y>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for flexwrap in variants.flexwrap %}{% for item in flexwrap.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

