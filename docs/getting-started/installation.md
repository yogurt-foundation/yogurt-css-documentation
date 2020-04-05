## Installation

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

