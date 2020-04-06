> Core Concepts

## Pseudo-Class Variants

Using utilities to style and add effects to elements when on hover, group-hover, focus, active, disabled or visited.

### Hover

Add the `hover:` prefix to an utility to enable on-hover.

```html
<!-- Example -->
<y class="text-charcoal-100 hover:text-white bg-white hover:bg-charcoal-100">
  Hover me!
</y>
```
### Group-Hover

Add `group` class to the parent element and add the `group-hover:` prefix to an utility on the child element to enable group-hover.

```html
<!-- Example -->
<y class="group bg-charcoal-100 hover:bg-orange-400">
  <y class="group-hover:text-white">
    This is a text!
  </y>
</y>
```

### Focus

Add the `focus:` prefix to an utility to enable on-focus.

```html
<!-- Example -->
<input class="bg-gray-100 focus:bg-charcoal-100 border-transparent focus:border-gray-200" 
       placeholder="Focus me!">

```

### Active

Add the `active:` prefix to an utility to enable on-active.

```html
<!-- Example -->
<button class="bg-charcoal-100 active:bg-red-400 text-white">
  Click me!
</button>
```

### Create Custom Variants

Not all utilities are having all sorts of pseudo-class variants enabled by default, this is to control the default package file size from getting larger. But, you can create your own variants for pseudo-classes.

For example, each utility module file has a variant section that consists of `hover`, `focus`, `active` and so on. You need to add `@include()` function to a specific placeholder following by the `UTILITY_NAME` (e.g. fontSize), last add the arguments `"", "", ""` to look like below to enable the variant you need.

```scss
// @file `utilities/typography/_fontSize.scss`

// hover
@include UTILITY_NAME(".hover\\:", ":hover", "");

// focus
@include UTILITY_NAME(".focus\\:", ":focus", "");

// active
@include UTILITY_NAME(".active\\:", ":active", "");

// visited
@include UTILITY_NAME(".visited\\:", ":visited", "");

// disabled
@include UTILITY_NAME(".disabled\\:", ":disabled", "");

```

Learn more in the [customizing variants](../customization/variants.md) page.
