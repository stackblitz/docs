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

## Enable Algolia and Google Tag Manager

For production, the docs expect the following environment variables to be defined:

- `VITE_ALGOLIA_ID`: Algolia `appId`.
- `VITE_ALGOLIA_KEY`: Algolia `apiKey`.
- `VITE_GTM_ID`: Google Tag Manager id.

They can be defined in CI server configuration, or in a `.env` file:

```sh
# .env
VITE_ALGOLIA_ID='******'
VITE_ALGOLIA_KEY='******'
VITE_GTM_ID='******'
```
