---
id: screen-reader
title: Screen Reader
description: Utilities for controls whether an element is visually hidden but still accessible to screen readers.
layout: default
---

> Accessibility

# Screen Reader <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.0.7</span>

Utilities for controls whether an element is visually hidden but still accessible to screen readers.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| sr-on | position: absolute; <br> width: 1px; <br> height: 1px; <br> padding: 0; <br> margin: -1px; <br> overflow: hidden; <br> white-space: nowrap; <br> border-width: 0 |
| sr-off | position: static; <br> width: auto; <br> height: auto; <br> padding: 0; <br> margin: 0; <br> overflow: visible; <br> clip: auto; <br> white-space: normal |

---

## Usage

Set an element visible to screen reader.

```html
<!-- Example -->
<y class="sr-on">
  ...
</y>
```

Set an element hidden from screen reader.

```html
<!-- Example -->
<y class="sr-off">
  ...
</y>
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for screenreader in variants.screenreader %}{% for item in screenreader.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

