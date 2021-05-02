---
id: min-height
title: Min Height
description: Utilities for sets the miminum height of an element.
layout: default
---

> Sizing

# Min Height

Utilities for sets the miminum height of an element.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| min-h-0 | min-height: 0 |
| min-h-full | min-height: 100% |
| min-h-screen | min-height: 100vh |

---

## Usage

```html
<!-- Example -->
<y class="min-h-full">
  ...
</y>
```

---

## Customize <a class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600" href="/plugin-api/">More</a>

```scss
// @file: `src/_plugins.scss`
@include plugin(
  (
    utility: 'min-h',
    //variant: 'responsive',
    property: 'min-height',
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

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for minheight in variants.minheight %}{% for item in minheight.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

