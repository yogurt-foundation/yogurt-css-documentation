---
id: customize-utilities
title: Customize Utilities
description: Include or exclude the utility modules in the framework.
layout: default
---

> Customization

## Utility Modules

You can manually `exclude` or `include` the utility modules by `comment out` the lines in the `.scss` utility module files, separate by the variants. The final build file size will be smaller or bigger depends on how much utility you need.

For the most recommended and effective way to strip down unused CSS classes is using [PurgeCSS](https://purgecss.com/) or using [Yogurt CLI tool](/installation/#using-yogurt-via-cli). (See also, [Purge Unused Classes](/file-size-control/#purge-unused-classes)).


### Configuration

You can customize the Yogurt default configuration file by adding or removing the values (or `modifiers`) that you don't need. If you find a utility that is not included in the build, you can create your utility using the [Plugin API](/plugin-api).

```scss
// @file `src/_config.scss`
$screens:
  (xs, 320px), // (primitive)
  (sm, 640px),
  (md, 768px),
  (lg, 1024px),
  (xl, 1280px),
  (\32k, 1920px), // 2k
  (\33k, 2560px), // 3k
  (\34k, 3840px); // 4k
  (\35k, 5120px), // 5k
  (\36k, 5760px), // 6k
  (\37k, 7000px), // 7k
  (\38k, 7680px); // 8k
...
```

To customize the existing utility modules is located in these directories,

```bash
./src/
└── variants
    ├── non-responsive
    │   ├── default
    │   └── pseudo
    └── responsive
        ├── default
        └── pseudo
```

### Example

```sass
// @file `src/variants/non-responsive/default/_default.scss`

/* accessibility */
@include screenReader($class: $default)

/* backgrounds */
@include backgroundColorAmber($class: $default)
...
```
