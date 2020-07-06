> Installation

### Using Yogurt via Build Tool

```bash
$ git clone https://github.com/yogurt-foundation/yogurt-css.git
$ cd yogurt-css
$ yarn && yarn build
```

In this document is recommended `yarn`, you can choose to `npm` that came with the NodeJS installation.

```bash
$ git clone https://github.com/yogurt-foundation/yogurt-css.git
$ cd yogurt-css
$ npm i && npm run build
```

Once the build process is done. You can extract the  minified `yogurt.css` from `dist/` directory to use in your project. (See [Customization](../customization/configuration.md)).

### Using Yogurt via Playground

```bash
$ git clone https://github.com/yogurt-foundation/playground.git
$ cd playground
$ yarn && yarn start
```

[Download the precompiled desktop app here](https://github.com/yogurt-foundation/playground/releases/tag/0.1.2-beta) without going through the building process.

[Yogurt Playground](https://github.com/yogurt-foundation/playground) is a developer tool also an HTML/CSS/JS IDE for testing and prototyping with all the Yogurt foundation frameworks and libraries, including [Yogurt CSS](https://github.com/yogurt-foundation/yogurt-css), [FX-Filter](https://github.com/yogurt-foundation/fx-filter), [FX-Gradient](https://github.com/yogurt-foundation/fx-gradient), [FX-Motion](https://github.com/yogurt-foundation/fx-motion). If you have an idea and want to draft something small without setting up a new project, then Yogurt Playground is for you.

<y>
  <img class="w-full h-full rounded-lg"
       src="https://yogurt-css-documentation.netlify.com/assets/yogurt_playground_screenshot_01.png">
</y>

### Using Yogurt via CDN

```html
<link defer href="https://unpkg.com/yogurt-css@1.0.7/dist/yogurt-1.0.7_solidcore.min.css" 
      rel="stylesheet"
      rel="preload"
      as="style"
      media="all">
```

**Note:** The CDN builds is large (585kb compressed, 99kb gzipped), the sizes will be different when you are customizing with the build tool. Using the build tool to exclude utilities or exclude variants from utilities that you don't need to reduce file size. (See [File Size Control](../getting-started/file-size-control.md) and [Customization](../customization/configuration.md)).

### What's next?

Get to know the framework by understanding below 3 core concepts:

- [Utility](../core-concepts/utility.md)
- [Responsive](../core-concepts/responsive.md)
- [Pseudo-Class Variant](../core-concepts/pseudo-class-variants.md)

Get to know how to tuning the framework that suit to your project:

- [Configuration](../customization/configuration.md)
- [Breakpoints](../customization/breakpoints.md)
- [Colors](../customization/colors.md)
- [Spacing](../customization/spacing.md)
- [Variants](../customization/variants.md)

Start learning these utilities better to use the framework:

- [Backgrounds](../backgrounds/background-attachment.md)
- [Borders](../borders/border-color.md)
- [Effects](../effects/background-blend.md)
- [Filters](../filters/filter-blur.md)
- [Flexbox](../flexbox/align-content.md)
- [Interactivity](../interactivity/appearance.md)
- [Layouts](../layouts/box-sizing.md)
- [Sizing](../sizing/height.md)
- [Spacing](../spacing/margin.md)
- [SVG](../svg/fill.md)
- [Tables](../tables/border-collapse.md)
- [Transforms](../transforms/rotate.md)
- [Transitions](../transitions/transition-duration.md)
- [Typography](../typography/font-family.md)
- [Accessibility](../accessibility/screen-reader.md)

