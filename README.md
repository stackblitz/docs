# StackBlitz Documentation

Home of the StackBlitz documentation site. This is a work in progress.

## Development

Run the docs site in development mode with:

```sh
npm install
npm start
```

## Editor setup

When using VS Code, we recommend:

- Installing the [Vue Language Features extension (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar).
- Using [Volar’s Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471) (aka disabling the built-in TypeScript and JavaScript Language Features extension for the current workspace).

## Custom theme

We use Vitepress and the Vitepress default theme, with a few customizations in `docs/.vitepress/theme`:

- We override some of the `--vp-c-*` CSS variables to use StackBlitz colors.
- We may have custom components in `docs/.vitepress/components`.
