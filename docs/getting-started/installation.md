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

[Yogurt Playground](https://github.com/yogurt-foundation/playground) is a developer tool also an HTML/CSS/JS IDE for testing and prototyping with all the Yogurt foundation frameworks and libraries, including [Yogurt CSS](https://github.com/yogurt-foundation/yogurt-css), [FX-Filter](https://github.com/yogurt-foundation/fx-filter), [FX-Gradient](https://github.com/yogurt-foundation/fx-gradient), [FX-Motion](https://github.com/yogurt-foundation/fx-motion). If you have an idea and want to draft something small without setting up a new project. Yogurt Playground is for you.

<y>
  <img class="w-full h-full rounded-lg"
       src="https://yogurt-css-documentation.netlify.com/assets/yogurt_playground_screenshot_01.png">
</y>

### Using Yogurt via CDN

```html
<link defer href="https://unpkg.com/yogurt-css@1.0.2/dist/yogurt.css" 
      rel="stylesheet"
      rel="preload"
      as="style"
      media="all">
```

**Note:** The CDN builds is large (705kb compressed, 105kb gzipped), the sizes will be different when you are customizing with the build tool. Using the build tool to exclude utilities or exclude variants from utilities that you don't need to reduce file size. (See [Customization](../customization/configuration.md)).

**Note:** Using in-browser on-demand-cache to permanently store the Yogurt CSS with PWA (Progress Web App) feature. So that it only loads once maybe for its lifetime and also without the internet connection for the next load, this vastly improves load speed, reduce bandwidth and load time. (See examples [FX-Filter Previewer](https://fx-filter-previewer.netlify.com/), [FX-Gradient Previewer](https://fx-gradient-previewer.netlify.com/)).

### What's next?

Get to know the framework by understanding below 3 core concepts:

- [Utility Design](../core-concepts/utility-design.md)
- [Responsive Design](../core-concepts/responsive-design.md)
- [Pseudo-Class Variant](../core-concepts/pseudo-class-variants.md)

Get to know how to tuning the framework that suit to your project:

- [Configuration](../customization/configuration.md)
- [Breakpoints](../customization/breakpoints.md)
- [Colors](../customization/colors.md)
- [Spacing](../customization/spacing.md)
- [Variants](../customization/variants.md)

Start learning these utilities better to use the framework:

<y class="relative max-w-xxs mb-4 px-4 py-2 text-sm text-orange-600 bg-orange-200 border border-orange-300 rounded">
  <y class="mx-auto flex">
   <y class="flex justify-center items-center mr-2 p-1 w-5 h-5 font-semibold text-orange-200 bg-orange-500 rounded-full">
    !  
   </y>
   Navigate from left menu.
  </y>
</y>

<ul class="list-none">
  <li>Backgrounds</li>
  <li>Borders</li>
  <li>Effects</li>
  <li>Filters</li>
  <li>Flexbox</li>
  <li>Interactivity</li>
  <li>Layouts</li>
  <li>Sizing</li>
  <li>Spacing</li>
  <li>SVG</li>
  <li>Tables</li>
  <li>Transforms</li>
  <li>Transitions</li>
  <li>Typography</li>
</ul>
