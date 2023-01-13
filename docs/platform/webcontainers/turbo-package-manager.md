---
title: &title Turbo Package Manager
description: WebContainers-based projects use Turbo as package manager. Turbo is our custom npm client and it works similarly to `npm` and `yarn`. 
head:
  - ['meta', {property: 'og:title', content: *title}] 
  - ['meta', {property: 'og:image', content: 'https://developer.stackblitz.com/img/og/webcontainer-turbo-package-manager.png'}]
---

# {{ $frontmatter.title }}

WebContainers-based projects use Turbo as package manager. Turbo is our custom npm client and it works similarly to `npm` and `yarn`. For many commands, you can invoke `npm` or `yarn` directly and they will work as usual:

```sh
# install dependencies
npm install

# add a dependency
npm install lodash

# run `start` script
npm start
```

You can check all supported options with `turbo --help`.

:::info
Turbo relies on the [package-lock.json file format](https://docs.npmjs.com/cli/v7/configuring-npm/package-lock-json) from npm to read and write lockfiles. In particular, it uses the `lockfileVersion: 2` format [introduced in v7](https://docs.npmjs.com/cli/v7/configuring-npm/package-lock-json#lockfileversion). When a valid `package-lock.json` is present, the installation process will be much faster.
:::

## Configuring Turbo

Turbo has many settings that can be configured in `.turborc.json`. Turbo reads and merges this configuration file in a cascading fashion:

- From the global config in `$HOME/.turbo/`, and
- From the current folder.

Some of the available options are:

```js
{
  // the default log level for the CLI
  "loglevel": "info",

  // whether to show progress indicators
  "progress": true,

  //detect the usage of non-supported packages at installation time and swap them
  "disablePolyfills": true
}
```

## Install Scripts

<!-- id for turbo.sh redirect -->

<span id="turbo-sh-install-scripts"></span>

Turbo **does not run install scripts** for your dependencies. This increases the security of the installation process, and prevents the spurious errors arising from the differences between the underlying platform (WebContainers) and a local environment.

One of the main use cases of install scripts is driving the compilation of native add-ons. We instead favor usage of [WebAssembly polyfills](#webassembly-polyfills).

## WebAssembly Polyfills

<!-- id for turbo.sh redirect -->

<span id="turbo-sh-polyfills"></span>

While WebContainers cannot use packages based on native add-ons, they absolutely can use packages based on WebAssembly (for instance, `esbuild-wasm` instead of `esbuild`). Using WebAssembly-based packages increases the portability and security of your code.

However, sometimes, packages using native code are deep within your dependency tree like, for instance, an image processing tool used by your bundler. Replacing those packages would not be feasible without significantly altering the configuration of your project. The Turbo registry is able to **detect the usage of non-supported packages at installation time and swap them** for you.

You can disable this behavior by setting `disablePolyfills: true` in `.turborc.json`. Note that whenever this replacement occurs, you will get an explicit log:

```
❯ turbo
┌ [1/3] 🔍  Resolving dependencies
└ Completed in 0.629s
┌ [2/3] 🚚  Fetching dependencies
└ Completed in 1.044s
┌ [3/3] 🔗  Linking dependencies
└ Completed in 0.068s
info Some packages were automatically replaced with polyfills.
For more information see https://turbo.sh/polyfills.
└─ esbuild@0.8.57 => esbuild-wasm@0.8.57

success Install finished in 2.468s
```

### Missing Versions

It is worth noting that if the requested version is missing, `turbo` will install the original package instead. It's likely that your application will not work properly because a polyfill could not be installed where it's required. In cases like this, `turbo` will report this as a warning:

```
❯ turbo
┌ [1/3] 🔍  Resolving dependencies
└ Completed in 0.629s
┌ [2/3] 🚚  Fetching dependencies
│ warn applyPolyfills esbuild requires a polyfill but no matching version was found for 0.13.8.
└ Completed in 1.044s
┌ [3/3] 🔗  Linking dependencies
└ Completed in 0.068s

success Saved lockfile "package-lock.json"
success Updated "package.json"

success Install finished in 2.132s
```

If you run into issues, please submit an issue on [GitHub](https://github.com/stackblitz/webcontainer-core/issues/new?assignees=&labels=&template=bug_report.yml).

## node-sass

<!-- id for turbo.sh redirect -->

<span id="turbo-sh-node-sass"></span>

LibSass and packages that are built on top of it, including `node-sass`, are officially deprecated. While it receives maintenance updates, there are no plans to add new CSS or SASS features. The team recommends to migrate your project to [Dart Sass](https://sass-lang.com/dart-sass). For more information check out [the SASS blog post](https://sass-lang.com/blog/libsass-is-deprecated).

For that reason, `turbo` excludes `node-sass` and its dependencies from installation, unless some are used by other dependencies in the graph.

If you're using `node-sass` you might see an output like this:

```
❯ yarn
warn preInstall No description field
warn preInstall No repository field
┌ [1/3] 🔍  Resolving dependencies
│ warn deprecation "node-sass" is deprecated and excluded from installation. It only receives maintenance
│ releases and there are no plans to add additional features or compatibility with any new CSS or SASS features.
│ It's recommended to migrate to "sass". Check out migration guide https://turbo.sh/node-sass.
└ Completed in 4.366s
┌ [2/3] 🚚  Fetching dependencies
│ info pruneDeps Excluding 1 dependency. For more information use `--verbose`.
└ Completed in 1.06s
┌ [3/3] 🔗  Linking dependencies
└ Completed in 0.066s

success Saved lockfile "package-lock.json"
success Updated "package.json"

success Install finished in 5.551s
```

The migration is straightforward for the most parts. Dart Sass exposes the same JS API but if you're using the CLI, you might need to change a few flags.

### How do I migrate to Dart Sass?

1. In your project's `package.json`, change `node-sass` to `sass`.
2. If you're using the SassC CLI in one of your npm scripts, then you might need to change `node-sass` to `sass` as well. For example:

   ```
   node-sass styles.scss -o styles.css
   ```

   becomes

   ```
   sass styles.scss styles.css
   ```

   For more information check out the [Dart Sass Command-Line Interface](https://sass-lang.com/documentation/cli/dart-sass).

3. If you're using a third-party library which depends on `node-sass`, you may want to ask the maintainer to migrate to `sass`.
4. Because LibSass is deprecated and has some behavioral variations from the Sass spec, you may need to make minor changes to your stylesheet if you migrate to Dart Sass. Here's a [list of major compatibility issues](https://github.com/sass/libsass/issues?q=is%3Aopen+is%3Aissue+label%3A%22Compatibility+-+P1+%E2%9A%A0%EF%B8%8F%22).
