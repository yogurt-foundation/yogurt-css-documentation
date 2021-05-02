---
id: min-width
title: Min Width
description: Utilities for sets the minimum width of an element.
layout: default
---

> Sizing

# Min Width

Utilities for sets the minimum width of an element.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| min-w-0 | min-width: 0 |
| min-w-full | min-width: 100% |

---

## Usage

```html
<!-- Example -->
<y class="min-w-full">
  ...
</y>
```

---

## Customize <a class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600" href="/plugin-api/">More</a>

```scss
// @file: `src/_plugins.scss`
@include plugin(
  (
    utility: 'min-w',
    //variant: 'responsive',
    property: 'min-width',
    modifier: (
      '...': '...',
      '...': '...'
      ...
    )
  )
)
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for minwidth in variants.minwidth %}{% for item in minwidth.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Default enabled variants. Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

