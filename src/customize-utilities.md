---
id: customize-utilities
title: Customize Utilities
description: Include or exclude the utility modules in the framework.
layout: default
---

> Customization

### Utility Modules

You can manually `exclude` or `include` the utility modules by `comment out` the lines in the `.scss` utility module files, separate by the variants. The final build file size will be smaller or bigger depends on how much utility you need.

For the most recommended and effective way to strip down unused CSS classes is using [PurgeCSS](https://purgecss.com/), (See, [File Size Control](/file-size-control)).

```bash
./src/
└── utilities
    ├── non-responsive
    │   ├── default
    │   └── variants
    └── responsive
        ├── default
        └── variants
```

#### Example

```sass
/**
 * @module: utilities/default/
 * @file: _default.scss
 */

/* accessibility */

@include screenReader($class: $default)

/* backgrounds */

@include backgroundColorAmber($class: $default)
...
```