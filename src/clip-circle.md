---
id: clip-circle
title: Clip Circle
description: Utilities for sets outside clipping circle path of image or element invisible, inside the clipping path are visible by moving plot x or y and focus area.
topic: Clipping
relate: clip-polygon, clip-ellipse
layout: default
---

> Clipping

# Clip Circle <span class="ml-1 px-2 py-1 text-sm text-gray-600 (dark)text-charcoal-100 bg-gray-300 (dark)bg-gray-600">v1.1.6</span>

Utilities for sets outside clipping circle path of image or element invisible, inside the clipping path are visible by moving plot x or y and focus area.

---

## Class

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| clip-circle `{focus}` `{plot-x}` `{plot-y}` | clip-path: circle(var(--clip-circle-focus) at var(--clip-circle-plot-x) var(--clip-circle-plot-y)); |

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| focus-0 | --clip-circle-focus: 0% |
| focus-10 | --clip-circle-focus: 10% |
| focus-20 | --clip-circle-focus: 20% |
| focus-30 | --clip-circle-focus: 30% |
| focus-40 | --clip-circle-focus: 40% |
| focus-50 | --clip-circle-focus: 50% |
| focus-60 | --clip-circle-focus: 60% |
| focus-70 | --clip-circle-focus: 70% |
| focus-80 | --clip-circle-focus: 80% |
| focus-90 | --clip-circle-focus: 90% |
| focus-100 | --clip-circle-focus: 100% |

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| plot-x-0 | --clip-circle-plot-x: 0% |
| plot-x-10 | --clip-circle-plot-x: 10% |
| plot-x-20 | --clip-circle-plot-x: 20% |
| plot-x-30 | --clip-circle-plot-x: 30% |
| plot-x-40 | --clip-circle-plot-x: 40% |
| plot-x-50 | --clip-circle-plot-x: 50% |
| plot-x-60 | --clip-circle-plot-x: 60% |
| plot-x-70 | --clip-circle-plot-x: 70% |
| plot-x-80 | --clip-circle-plot-x: 80% |
| plot-x-90 | --clip-circle-plot-x: 90% |
| plot-x-100 | --clip-circle-plot-x: 100% |
| -plot-x-10 | --clip-circle-plot-x: -10% |
| -plot-x-20 | --clip-circle-plot-x: -20% |
| -plot-x-30 | --clip-circle-plot-x: -30% |
| -plot-x-40 | --clip-circle-plot-x: -40% |
| -plot-x-50 | --clip-circle-plot-x: -50% |
| -plot-x-60 | --clip-circle-plot-x: -60% |
| -plot-x-70 | --clip-circle-plot-x: -70% |
| -plot-x-80 | --clip-circle-plot-x: -80% |
| -plot-x-90 | --clip-circle-plot-x: -90% |
| -plot-x-100 | --clip-circle-plot-x: -100% |

| <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">class</span> | <span class="px-3 py-1 text-white (dark)text-charcoal-100 bg-gray-700 (dark)bg-gray-600 rounded-full">css</span> |
|:--|:--|
| plot-y-0 | --clip-circle-plot-y: 0% |
| plot-y-10 | --clip-circle-plot-y: 10% |
| plot-y-20 | --clip-circle-plot-y: 20% |
| plot-y-30 | --clip-circle-plot-y: 30% |
| plot-y-40 | --clip-circle-plot-y: 40% |
| plot-y-50 | --clip-circle-plot-y: 50% |
| plot-y-60 | --clip-circle-plot-y: 60% |
| plot-y-70 | --clip-circle-plot-y: 70% |
| plot-y-80 | --clip-circle-plot-y: 80% |
| plot-y-90 | --clip-circle-plot-y: 90% |
| plot-y-100 | --clip-circle-plot-y: 100% |
| -plot-y-10 | --clip-circle-plot-y: -10% |
| -plot-y-20 | --clip-circle-plot-y: -20% |
| -plot-y-30 | --clip-circle-plot-y: -30% |
| -plot-y-40 | --clip-circle-plot-y: -40% |
| -plot-y-50 | --clip-circle-plot-y: -50% |
| -plot-y-60 | --clip-circle-plot-y: -60% |
| -plot-y-70 | --clip-circle-plot-y: -70% |
| -plot-y-80 | --clip-circle-plot-y: -80% |
| -plot-y-90 | --clip-circle-plot-y: -90% |
| -plot-y-100 | --clip-circle-plot-y: -100% |

---

## Usage

### Clipping Image

<y class="px-4 my-2 mx-auto w-full">
	<y class="flex flex-gap-10 flex-row flex-wrap justify-center items-center">
  	<y class="h-48 w-48 bg-orange-200">
    	<y>
      	<img class="h-48 w-48 object-cover object-center overflow-hidden rounded-lg shadow"
        	   src="https://i.pravatar.cc/500?=1">
    	</y>
		</y>
	  <y class="h-48 w-48 bg-orange-200 border-2 border-dashed border-orange-300 rounded-lg">
  	  <y class="clip-circle focus-30 plot-x-10 plot-y-40">
    	  <img class="h-48 w-48 object-cover object-center"
      	     src="https://i.pravatar.cc/500?=1">
  	  </y>
	  </y>
    <y class="h-48 w-48 bg-orange-200 border-2 border-dashed border-orange-300 rounded-lg">
      <y class="clip-circle focus-30 plot-x-60 plot-y-70">
        <img class="h-48 w-48 object-cover object-center"
             src="https://i.pravatar.cc/500?=1">
      </y>
    </y>
  </y>
</y>

```html
<!-- Example -->
<y class="clip-circle focus-30 plot-x-60 plot-y-70">
  <img
    class="h-64 w-64 .. object-cover object-center"
    src="..."
  >
</y>
```

### Clipping Background

<y class="px-4 my-2 mx-auto w-full">
	<y class="flex flex-gap-10 flex-row flex-wrap justify-center items-center">
  	<y class="h-48 w-48">
    	<y>
      	<y class="h-48 w-48 gradient-true-sunset rounded-lg"></y>
    	</y>
		</y>
	  <y class="h-48 w-48 bg-orange-200 border-2 border-dashed border-orange-300 rounded-lg">
  	  <y class="clip-circle focus-30 plot-x-10 plot-y-40">
    	  <y class="h-48 w-48 gradient-true-sunset rounded-lg"></y>
  	  </y>
	  </y>
    <y class="h-48 w-48 bg-orange-200 border-2 border-dashed border-orange-300 rounded-lg">
      <y class="clip-circle focus-30 plot-x-60 plot-y-70">
        <y class="h-48 w-48 gradient-true-sunset rounded-lg"></y>
      </y>
    </y>
  </y>
</y>

```html
<!-- Example -->
<y class="clip-circle focus-30 plot-x-60 plot-y-70">
  <y class="h-48 w-48 ... gradient-true-sunset"></y>
</y>
```

### Clipping text

<y class="px-4 my-2 mx-auto w-full">
	<y class="flex flex-gap-10 flex-row flex-wrap justify-center items-center">
  	<y class="h-48 w-48">
    	<y>
      	<y class="h-48 w-48 text-xs overflow-hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at nunc scelerisque, pretium arcu nec, convallis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec fermentum magna turpis, nec facilisis justo dapibus volutpat. Mauris sagittis pretium sem et consequat. Curabitur a tellus sem. Morbi non auctor elit. Donec tortor nunc, auctor vel sem ac, aliquam cursus nisi. Praesent lobortis urna ex, ut iaculis nulla porttitor in. Curabitur orci augue, pellentesque sed orci et, ultrices tempor dolor. Aenean tincidunt posuere lobortis. In ac tortor quis lorem lacinia gravida quis tincidunt lorem. Nunc ac ultrices leo. Ut sodales, nibh ut consequat fermentum, mi justo cursus quam, eget sodales dui risus ac odio. Proin efficitur lacinia lobortis. Integer efficitur ligula non ultricies sollicitudin. Praesent efficitur augue justo, sit amet dignissim nunc mollis vel.
        </y>
    	</y>
		</y>
	  <y class="h-48 w-48 bg-orange-200 border-2 border-dashed border-orange-300 rounded-lg">
  	  <y class="clip-circle focus-30 plot-x-10 plot-y-40">
    	  <y class="h-48 w-48 text-xs overflow-hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at nunc scelerisque, pretium arcu nec, convallis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec fermentum magna turpis, nec facilisis justo dapibus volutpat. Mauris sagittis pretium sem et consequat. Curabitur a tellus sem. Morbi non auctor elit. Donec tortor nunc, auctor vel sem ac, aliquam cursus nisi. Praesent lobortis urna ex, ut iaculis nulla porttitor in. Curabitur orci augue, pellentesque sed orci et, ultrices tempor dolor. Aenean tincidunt posuere lobortis. In ac tortor quis lorem lacinia gravida quis tincidunt lorem. Nunc ac ultrices leo. Ut sodales, nibh ut consequat fermentum, mi justo cursus quam, eget sodales dui risus ac odio. Proin efficitur lacinia lobortis. Integer efficitur ligula non ultricies sollicitudin. Praesent efficitur augue justo, sit amet dignissim nunc mollis vel.
        </y>
  	  </y>
	  </y>
    <y class="h-48 w-48 bg-orange-200 border-2 border-dashed border-orange-300 rounded-lg">
      <y class="clip-circle focus-30 plot-x-70 plot-y-60">
        <y class="h-48 w-48 text-xs overflow-hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at nunc scelerisque, pretium arcu nec, convallis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec fermentum magna turpis, nec facilisis justo dapibus volutpat. Mauris sagittis pretium sem et consequat. Curabitur a tellus sem. Morbi non auctor elit. Donec tortor nunc, auctor vel sem ac, aliquam cursus nisi. Praesent lobortis urna ex, ut iaculis nulla porttitor in. Curabitur orci augue, pellentesque sed orci et, ultrices tempor dolor. Aenean tincidunt posuere lobortis. In ac tortor quis lorem lacinia gravida quis tincidunt lorem. Nunc ac ultrices leo. Ut sodales, nibh ut consequat fermentum, mi justo cursus quam, eget sodales dui risus ac odio. Proin efficitur lacinia lobortis. Integer efficitur ligula non ultricies sollicitudin. Praesent efficitur augue justo, sit amet dignissim nunc mollis vel.
        </y>
      </y>
    </y>
  </y>
</y>

```html
<!-- Example -->
<y class="clip-circle focus-30 plot-x-60 plot-y-70">
  <y class="h-64 w-64 text-xs">
    ...
  </y>
</y>
```

---

## Customization

Read more information about using the [Plugin API](/plugin-api/), and  [Responsive](/responsive) or [Pseudo-Class Variants](/pseudo-class-variants/) configuration with the Plugin API.

```scss
// Add Values
@include yogurt(
  $class: 'clip-circle',
  $property: clip-path,
  $modifier: (
    shape-a: circle(40% at 50% 50%),
    shape-b: circle(30% at 60% 80%)
    //...
  )
);
```

---

## Variant

<y class="flex flex-gap-2 flex-wrap justify-start items-center">{% for clipcircle in variants.clipcircle %}{% for item in clipcircle.pseudo %}{% include "variants.njk" %}{% endfor %}{% endfor %}</y>

Read more information about the [Responsive](/responsive) and [Pseudo-Class Variants](/pseudo-class-variants/).

