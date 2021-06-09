---
id: glyphs
title: Glyphs
description: Utilities for sets alternate glyphs for numbers, fractions, and ordinal markers to an element.
topic: Typography
variant: responsive
layout: default
---

> Typography

# Glyphs <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.6</span>

Utilities for sets alternate glyphs for numbers, fractions, and ordinal markers to an element.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-charcoal-100 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| glyphs-normal | font-variant-numeric: normal |
| glyphs-ordinal | font-variant-numeric: ordinal |
| glyphs-slashed-zero | font-variant-numeric: slashed-zero |
| glyphs-lining-nums | font-variant-numeric: lining-nums |
| glyphs-oldstyle-nums | font-variant-numeric: oldstyle-nums |
| glyphs-proportional-nums | font-variant-numeric: proportional-nums |
| glyphs-tabular-nums | font-variant-numberic: tabular-nums |
| glyphs-diagonal-fractions | font-variant-numeric: diagonal-fractions |
| glyphs-stacked-fractions | font-variant-numeric: stacked-fractions |

---

## Usage

<y class="px-4 my-2 mx-auto w-full">
	<y class="flex (xs)flex-gap-8 (sm)flex-gap-24 flex-wrap justify-center items-center">
		<y class="flex flex-col justify-center items-center">
			<y class="p-6 bg-gray-200 rounded-lg">
				<y class="glyphs-normal text-3xl font-semibold text-gray-600">
  	  		2/4 4/5 3/6 4/8
  			</y>
			</y>
			<y class="py-4">
				Glyphs: OFF
			</y>
		</y>
		<y class="flex flex-col justify-center items-center">
			<y class="p-6 bg-gray-200 rounded-lg">
				<y class="glyphs-diagonal-fractions text-3xl font-semibold text-gray-600">
  	  		2/4 4/5 3/6 4/8
  			</y>
			</y>
			<y class="py-4">
				Glyphs: ON
			</y>
		</y>
	</y>
</y>

```html
<!-- Example -->
<y class="glyphs-diagonal-fractions">
  ...
</y>
```

---

## Customization

Read more information about using the [Plugin API](/plugin-api/), and  [Responsive](/responsive) or [Pseudo-Class Variants](/pseudo-class-variants/) configuration with the Plugin API.

```scss
// Add Values
@include yogurt(
  $class: 'glyphs',
  $property: font-variant-numeric,
  $modifier: (
    normal: normal,
    ordinal: ordinal
    //...
  )
);

// Add Variants
@include yogurt(
  $class: 'glyphs',
  $property: font-variant-numeric,
  $modifier: (
    normal: normal,
    ordinal: ordinal
    //...
  )
  $variant: (
    'responsive',
    //...
  )
);
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for glyphs in variants.glyphs %}{% for item in glyphs.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).


