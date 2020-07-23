---
id: extract-utility-classes
title: Extract Utility Classes
description: Exposes Yogurt utility classes to your custom CSS.
layout: default
---

> Core Concept

### Extract Utility Classes

Yogurt purely built on top of the SASS or SCSS ([Sassy CSS](Sass-lang.com)). By using the existing Sassy `@extend` function allows you to expose any Yogurt utility classes to your custom CSS.

#### Some Rules

When using the **@extend `<selector ...>`** function in your custom CSS, some unconventional rules that you need follow:

```html
.{prefix1}\:{prefix2}\:{class}-{modifier}
```

- the separator `:` is written as `\:`.
- utility class `text-khaki-100` is written as `.text-khaki-100`.
- pseudo class `hover:text-khaki-100` is written as `.hover\:text-khaki-100`.
- pseudo class with responsive `md:hover:text-khaki-100` is written as `.md\:hover\:text-khaki-100`.
- responsive `md:text-khaki-100` is written as `.md\:text-khaki-100`.

#### How To `@extend`

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

```scss
.btn-large:hover {
  @extend
    .text-white,
    .bg-khaki-400,
    .shadow;
}
```
