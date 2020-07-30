---
id: extract-utility-classes
title: Extract Utility Classes
description: Exposes Yogurt utility classes to your custom CSS.
layout: default
---

> Core Concept

## Extract Utility Classes

Yogurt purely built on top of the SASS or SCSS ([Sassy CSS](Sass-lang.com)). By using the existing Sassy `@extend` directive allows you to expose any Yogurt utility classes to your custom CSS.

<y class="my-4 p-3 border-l-8 border-orange-600 text-orange-600 bg-orange-200">
  <span class="pr-1 font-semibold">
    Note:
  </span>
  Require Sass/SCSS preprocessor to use the
  <strong>
    @extend
  </strong>
  directive. (See
  <a href="/installation/#using-yogurt-via-cli">
    Using Yogurt via CLI
  </a>.)
</y>

### @extend

When using the **@extend `<selector ...>`** directive in your custom CSS, some unconventional rules that you need follow:

- separator `:` is written as `\:`.
- utility class `text-khaki-100` is written as `.text-khaki-100`.
- pseudo class `hover:text-khaki-100` is written as `.hover\:text-khaki-100`.
- pseudo class with responsive `md:hover:text-khaki-100` is written as `.md\:hover\:text-khaki-100`.
- responsive `md:text-khaki-100` is written as `.md\:text-khaki-100`.

### Examples

You can create new or refactor existing CSS with Yogurt utility classes,

```scss
// Example in .scss
.btn {
  @extend
    // Yogurt utility classes
    .px-2,
    .py-1,
    .text-lg,
    .text-white,
    .font-semibold,
    .bg-khaki-500,
    .hover\:bg-khaki-700,
    .border,
    .border-khaki-600,
    .rounded,
    .shadow,
    .cursor-pointer;
}
```

You can mix `@extend` with normal CSS,

```scss
.btn-large {
  @extend
    .font-semibold,
    .text-khaki-700,
    .bg-khaki-600,
    .rounded-lg;
  // Normal CSS
  font-size: 2em;
  padding: 1rem 1rem;
}
```

You can mix `@extend` with CSS Pseudo Variants,

```scss
.btn-large:hover {
  @extend
    .text-white,
    .bg-khaki-400,
    .shadow;
}
```

You can write in full `Sassy` way, if you prefer the best practice,

```scss
.btn {
  @extend
    .bg-khaki-600;

  &:hover {
    @extend
      .bg-khaki-700,
      .shadow-lg;
  }
}
```

You can use above method for refactoring exiting style sheets or migrating to use the Yogurt. (See [Refactoring UI](/refactoring-ui/)).