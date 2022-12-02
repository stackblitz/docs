---
title: Project configuration
head:
  - ['meta', {property: 'og:image', content: 'https://developer.stackblitz.com/img/og/webcontainer-project-configuration.png'}]
---

# {{ $frontmatter.title }}

Projects based on WebContainers can be configured in the following ways:

1. [with project files](#with-project-files) (`package.json` or `.stackblitzrc`),
2. [with URL parameters](#with-url-parameters).

## With project files

Projects can be configured using the `stackblitz` field in the `package.json` file at the root of the project. For example:

```json
{
  "name": "lib-example",
  "version": "1.0.0",
  "license": "MIT",
  /// ...
  "stackblitz": {
    "startCommand": "npm start"
  }
}
```

Alternatively, you can use a `.stackblitzrc` file at the root of the project. The expected format is valid JSON (without comments). This may look like:

```json
{
  "installDependencies": false,
  "startCommand": "my-custom-command",
  "env": {
    "NODE_ENV": "development"
  }
}
```

### <var>installDependencies</var>

<table>
  <tr>
    <td>Type</td>
    <td><code>boolean</code></td>
  </tr>
  <tr>
    <td>Default</td>
    <td><code>true</code></td>
  </tr>
</table>

StackBlitz automatically installs npm dependencies when opening a project.

To disable this behavior, set `installDependencies` to `false`.

### <var>startCommand</var>

<table>
  <tr>
    <td>Type</td>
    <td><code>string | boolean</code></td>
  </tr>
  <tr>
    <td>Default</td>
    <td>Based on the contents of <code>package.json</code></td>
  </tr>
</table>

A terminal command to be executed when opening the project, after installing npm dependencies.

If not specified, StackBlitz will look at the project’s root `package.json` (if present) and select a command to run using the following criteria:

1. Select a framework-specific command in some special cases;
2. Or, if `package.json` defines a `"dev"` script: execute `npm run dev`;
3. Or, if `package.json` defines a `"start"` script: execute `npm start`.

To disable this behavior, set `startCommand` to `false` (which means: "do nothing") or provide a custom command.

### <var>compileTrigger</var>

<table>
  <tr>
    <td>Type</td>
    <td><code>"auto" | "keystroke" | "save"</code></td>
  </tr>
  <tr>
    <td>Default</td>
    <td><code>"auto"</code></td>
  </tr>
</table>

The `compileTrigger` option controls how file changes in the editor are written to the WebContainers in-memory filesystem. Note that writing to this in-memory filesystem does not mean that changes are persisted on `stackblitz.com` - this requires a separate “Save” action from users.

This option can be useful if your project runs a development server (such as Vite or webpack-dev-server), which compiles user code whenever source files change.

The available settings are:

- `"auto"` (default): changes are synced automatically when modified, after a short delay;
- `"keystroke"`: changes are synced immediately, on every edit;
- `"save"`: changes are synced when users manually save the project using the “Save” button or a keyboard shortcut.

:::info When should I use “save”?
The default `"auto"` setting enables showing changes as user types, which may provide a nice reactive feel to project demos. However, this also means that the development server or compiler used in the project may receive invalid code before the user finished typing. Since not all dev servers and compilers are resilient to invalid input, you may want to set `compileTrigger` to `"save"` instead to limit errors.
:::

### <var>env</var>

<table>
  <tr>
    <td>Type</td>
    <td><code>Record&lt;string, string></code></td>
  </tr>
  <tr>
    <td>Default</td>
    <td><code>&#123;}</code></td>
  </tr>
</table>

A map of default environment variables that will be set in each top-level shell process.

## With URL parameters

### <var>terminal</var>

Use the `terminal` parameter in the project’s URL query string to select one or several scripts from `package.json` to run on project load.

This can be useful when a project doesn’t define a custom `startCommand`, or if you want to share a link that runs a different script than the one specified in `startCommand`.

For example, the following URL will run the `"test"` script, defined in `package.json`, on project load:

```
https://stackblitz.com/edit/project-id?terminal=test
```

:::warning
The `terminal` parameter only accepts existing keys from the `scripts` field in `package.json`. Projects which need more control should use [configuration in the project files](#with-project-files) directly.
:::

You can also run several scripts sequentially using comma-separated values. For instance, if a project defines a `"build"` script and a `"serve"` script, and both are needed to render a web page, you could use:

```
https://stackblitz.com/edit/project-id?terminal=build,serve
```
