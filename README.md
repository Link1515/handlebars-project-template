# handlebars template

Using webpack with handlebars-loader

## Instructions

### Create page
1. Register route in "pages.config.ts".
2. Create a folder in src/pages directory, naming it with the same name you register in pages.config.ts.
3. Basically, you may need index.hbs(template), index.ts(script), style.scss(style) files in your page fold
  - index.hbs: use handlebars partials and helpers to build your html template
  - index.ts: import the script using in the partials, or import some third party library plugins
  - style.scss: import the style you need for template

### Create partials (components)
1. Create a partial folder in src/partials directory
2. In your partial folder, you can also create index.hbs(template), index.ts(script), style.scss(style) file like page folders
3. To let your partial with hot reload in development mode, registering your .hbs file to src/partials/registerHotReload.ts
4. Remeber to import index.ts and style.scss in the page which is using the partial

## Others
### tsconfig.buildHelper.json is only for src/helpers/*.ts
- Handlebars helpers can only refer to .js files, so its .ts files should be compile before using. In this project, we use tsc command to compile ts files to js files in src/helpers/dist.
- The other ts files will be handle by webpack