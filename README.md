# handlebars template

Using webpack with handlebars-loader

## Intro
### tsconfig.json is only for src/helpers/*.ts
- Handlebars helpers can only refer to .js files, so its .ts files should be compile before using. In this project, we use tsc command to compile ts files to js files in src/helpers/dist.
- Make sure to set "composite": false in tsconfig.json, or linter will show error
- The other ts files will be handle by webpack