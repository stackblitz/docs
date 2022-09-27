---
title: JavaScript SDK
---

# JavaScript SDK

The StackBlitz JavaScript <abbr title="Software Development Kit">SDK</abbr> lets you programmatically create StackBlitz projects, which can be opened in a new window or embedded in your docs, example pages, or blog posts. The embedded projects can be controlled by using [the SDK’s VM interface][sdk_vm_docs].

## Install the SDK

The SDK is _3kB gzipped_ and can be installed from npm:

```sh
npm install @stackblitz/sdk
```

If you’re using a JavaScript bundler (for instance Webpack or Vite), you should be able to import the SDK in your JavaScript modules:

```js
import sdk from '@stackblitz/sdk';
sdk.embedProject(/* … */);
```

You can also import the SDK from jsDeliver or UNPKG directly in an HTML page:

```html
<script type="module">
  import sdk from 'https://unpkg.com/@stackblitz/sdk@1/bundles/sdk.m.js';
  sdk.embedProject(/* … */);
</script>
```

or load the <abbr title="Universal Module Definition">UMD</abbr> bundle, which will add a global `window.StackBlitzSDK` object:

```html
<script src="https://unpkg.com/@stackblitz/sdk@1/bundles/sdk.umd.js"></script>
<script>
  StackBlitzSDK.embedProject(/* … */);
</script>
```

## Open and embed StackBlitz projects

Use the [`openProjectId`](#openprojectid) and [`embedProjectId`](#embedprojectid) SDK methods to open or embed an existing StackBlitz project.

### <var>openProjectId<small>(projectId, openOptions)</small></var> {#openprojectid}

Opens an existing StackBlitz project in a new tab (or in the current window).

| Argument      | Required | Type                     | Description                                |
| ------------- | -------- | ------------------------ | ------------------------------------------ |
| `projectId`   | Yes      | String                   | The ID of the project to open.             |
| `openOptions` | No       | [OpenOptions][] (Object) | Display options for the StackBlitz editor. |

Example:

```js
// Opens https://stackblitz.com/edit/my-cool-project in the current window
// with the Preview pane hidden
sdk.openProjectId('my-cool-project', {
  newWindow: false,
  openFile: 'src/App.tsx',
  view: 'editor',
});
```

### <var>embedProjectId<small>(elementOrId, projectId, embedOptions)</small></var> {#embedprojectid}

Embeds an existing StackBlitz project in the specified HTML element on the current page. Returns a promise resolving its [VM instance][sdk_vm_docs].

| Argument       | Required | Type                      | Description                                               |
| -------------- | -------- | ------------------------- | --------------------------------------------------------- |
| `elementOrId`  | Yes      | String or HTMLElement     | Element to replace with an iframe, or its `id` attribute. |
| `projectId`    | Yes      | String                    | The ID of the project to open.                            |
| `embedOptions` | No       | [EmbedOptions][] (Object) | Display options for StackBlitz embeds.                    |

Example:

```js
// Replaces the HTML element with the id of "embed"
// with https://stackblitz.com/edit/my-cool-project embedded in an iframe,
sdk.embedProjectId('embed', 'my-cool-project', {
  openFile: 'index.ts,src/App.tsx',
});
```

## Open and embed GitHub repositories

**[SDK demo: working with GitHub projects](https://stackblitz.com/edit/sdk-github-project)**

Use the [`openGithubProject`](#opengithubproject) and [`embedGithubProject`](#embedgithubproject) SDK methods to open or embed public GitHub repositories as StackBlitz projects.

### <var>openGithubProject<small>(repoPath, openOptions)</small></var> {#opengithubproject}

Opens a project from GitHub in StackBlitz (in a new tab or in the current window).

| Argument      | Required | Type                     | Description                                                   |
| ------------- | -------- | ------------------------ | ------------------------------------------------------------- |
| `repoPath`    | Yes      | String                   | The repository path (with optional branch/tag/commit/folder). |
| `openOptions` | No       | [OpenOptions][] (Object) | Display options for the StackBlitz editor.                    |

Example:

```js
// Imports https://github.com/username/repository-name to StackBlitz,
// and opens the resulting StackBlitz project in the current tab
sdk.openGithubProject('username/repository-name', {
  newWindow: false,
});

// Imports the 'examples/getting-started' sub-folder of the 'main' branch of
// the https://github.com/username/repository-name repository to StackBlitz,
// and opens the resulting StackBlitz project in a new tab
sdk.openGithubProject('username/repository-name/tree/main/examples/getting-started');
```

### <var>embedGithubProject<small>(elementOrId, repoPath, embedOptions)</small></var> {#embedgithubproject}

Embeds a project from GitHub on the current page. Returns a promise resolving its [VM instance][sdk_vm_docs].

| Argument       | Required | Type                      | Description                                                   |
| -------------- | -------- | ------------------------- | ------------------------------------------------------------- |
| `elementOrId`  | Yes      | String or HTMLElement     | Element to replace with an iframe, or its `id` attribute.     |
| `repoPath`     | Yes      | String                    | The repository path (with optional branch/tag/commit/folder). |
| `embedOptions` | No       | [EmbedOptions][] (Object) | Display options for StackBlitz embeds.                        |

Example:

```js
// Imports https://github.com/username/repository-name to StackBlitz,
// and embeds the resulting StackBlitz project in the current page
sdk.embedGithubProject('embed', 'username/repository-name', {
  newWindow: false,
});
```

## Generate and embed new projects

**[SDK demo: creating new projects](https://stackblitz.com/edit/sdk-create-project)**

Use the [`openProject`](#openproject) and [`embedProject`](#embedproject) SDK methods to dynamically create new projects.

:::info Data persistence
New projects are not persisted on StackBlitz, and only live in the browser’s memory — unless a user forks the project to save it in their StackBlitz account.
:::

### <var>openProject<small>(project, openOptions)</small></var> {#openproject}

Creates a new project and opens it in a new tab (or in the current window).

| Argument      | Required | Type                     | Description                                |
| ------------- | -------- | ------------------------ | ------------------------------------------ |
| `project`     | Yes      | [Project][] (Object)     | Project data and settings.                 |
| `openOptions` | No       | [OpenOptions][] (Object) | Display options for the StackBlitz editor. |

Example:

```js
sdk.openProject(
  'embed',
  {
    title: 'JS Starter',
    description: 'Blank starter project for building ES6 apps.',
    template: 'javascript',
    files: {
      'index.html': `<div id="app"></div>`,
      'index.js': `import './style.css';
const appDiv = document.getElementById('app');
appDiv.innerHTML = '<h1>JS Starter</h1>';`,
      'style.css': `body { font-family: system-ui, sans-serif; }`,
    },
    settings: {
      compile: {
        trigger: 'auto',
        clearConsole: false,
      },
    },
  },
  {
    newWindow: false,
    openFile: ['index.js', 'index.html,style.css'],
  },
);
```

### <var>embedProject<small>(elementOrId, project, embedOptions)</small></var> {#embedproject}

Creates a new project and embeds it in the current page. Returns a promise resolving its [VM instance][sdk_vm_docs].

| Argument       | Required | Type                      | Description                                               |
| -------------- | -------- | ------------------------- | --------------------------------------------------------- |
| `elementOrId`  | Yes      | String or HTMLElement     | Element to replace with an iframe, or its `id` attribute. |
| `project`      | Yes      | [Project][] (Object)      | Project data and settings.                                |
| `embedOptions` | No       | [EmbedOptions][] (Object) | Display options for StackBlitz embeds.                    |

Example:

```js
sdk.embedProject(
  'embed',
  {
    title: 'Node Starter',
    description: 'A basic Node.js project',
    template: 'node',
    files: {
      'index.js': `console.log('Hello World!)';`,
      'package.json': `{
      "name": "my-project",
      "scripts": { "hello": "node index.js", "start": "serve node_modules" },
      "dependencies": { "serve": "^14.0.0" },
      "stackblitz": { "installDependencies": true, "startCommand": "npm start" },
    }`,
    },
  },
  {
    clickToLoad: true,
    openFile: 'index.js',
    terminalHeight: 50,
  },
);
```

## Options reference

### <var>Project</var> {#projectobject}

An object defining the contents and settings of a StackBlitz project.

| Property       | Required |  Type                            | Description                                                          |
| -------------- | -------- | -------------------------------- | -------------------------------------------------------------------- |
| `title`        | Yes      | String                           | The project title.                                                   |
| `description`  | Yes      | String                           | A short description for this project.                                |
| `template`     | Yes      | [ProjectTemplate][] (String)     | Determines how code compiles and runs.                               |
| `files`        | Yes      | [ProjectFiles][] (Object)        | Project files and their contents.                                    |
| `dependencies` | No       | [ProjectDependencies][] (Object) | Specifies npm dependencies ([EngineBlock][available_env_docs] only). |
| `settings`     | No       | [ProjectSettings][] (Object)     | Code compilation behavior ([EngineBlock][available_env_docs] only).  |

### <var>ProjectTemplate</var> {#projecttemplate}

A string representing a supported template type.

Each template has its own rules for compiling source files, and requires specific files to be present.

| Template name        | Environment                         | Required files                        |
| -------------------- | ----------------------------------- | ------------------------------------- |
| `'angular-cli'`      | [EngineBlock][available_env_docs]   | `index.html` and `main.ts`            |
| `'create-react-app'` | [EngineBlock][available_env_docs]   | `index.html` and `index.js`           |
| `'html'`             | [EngineBlock][available_env_docs]   | `index.html`                          |
| `'javascript'`       | [EngineBlock][available_env_docs]   | `index.html` and `index.js`           |
| `'polymer'`          | [EngineBlock][available_env_docs]   | `index.html`                          |
| `'typescript'`       | [EngineBlock][available_env_docs]   | `index.html` and `index.ts`           |
| `'vue'`              | [EngineBlock][available_env_docs]   | `public/index.html` and `src/main.js` |
| `'node'`             | [WebContainers][available_env_docs] | _No requirements_                     |

### <var>ProjectFiles</var> {#projectfiles}

A plain object representing file paths and their contents.

- Object keys: strings representing file paths (from the root of the project).
- Object values: strings representing file contents (text only).

:::warning Supported file types
Only plain text files (including code, data, and SVG images) are supported in ProjectFiles.

Binary files (such as archive formats, binaries and executables, bitmap images, audio and video files) are not supported at this time.
:::

### <var>ProjectDependencies</var> {#projectdependencies}

A plain object representing npm packages and their versions, to be installed at runtime when the project loads.

- Object keys: strings representing npm package names.
- Object values: strings representing npm package version specifiers.

:::info Environment differences
ProjectDependencies are only used in the [EngineBlock environment][available_env_docs]. For WebContainers, please provide a `package.json` file instead.

Read more about [the recommended ways to specify project dependencies](/guide/javascript-sdk-dependencies/) for each runtime environment.
:::

### <var>ProjectSettings</var> {#projectsettings}

Compilation settings for [EngineBlock][available_env_docs] projects.

| Property               | Type                                 | Description                                                    | Default  |
| ---------------------- | ------------------------------------ | -------------------------------------------------------------- | -------- |
| `compile.trigger`      | `'auto'`, `'save'`, or `'keystroke'` | Determines when the source changes should trigger compilation. | `'auto'` |
| `compile.action`       | `'hmr'` or `'refresh'`               | Determines how compiled changes should be injected.            | `'hmr'`  |
| `compile.clearConsole` | Boolean                              | Determines if the Console should be cleared after compilation. | `true`   |

In projects running on [WebContainers][available_env_docs] (which use `template: 'node'`), only `compile.trigger` is used. This affects the time at which file changes in the editor are written to the virtual filesystem.

### <var>OpenOptions</var> {#openoptions}

Display options available when opening a project in a new window.

| Property         | Type                                 | Description                                                                                        | Default Value         |
| ---------------- | ------------------------------------ | -------------------------------------------------------------------------------------------------- | --------------------- |
| `clickToLoad`    | Boolean                              | Shows a UI dialog asking users to run the project.                                                 | `false`               |
| `devToolsHeight` | Number                               | Sets the [Console][ui_docs] height (from `0` to `100`). [EngineBlock][available_env_docs] only.    | -                     |
| `hideDevTools`   | Boolean                              | Hides the [Console][ui_docs] completely. [EngineBlock][available_env_docs] only.                   | `false`               |
| `hideExplorer`   | Boolean                              | Hides the [ActivityBar][ui_docs].                                                                  | `false`               |
| `newWindow`      | Boolean                              | Opens the project in a new tab.                                                                    | `true`                |
| `openFile`       | [OpenFileOption][] (String or Array) | Specifies which file(s) to open in the editor and code lines to highlight.                         | -                     |
| `origin`         | String                               | StackBlitz Enterprise Edition: sets the origin URL of the StackBlitz EE instance.                  | -                     |
| `showSidebar`    | Boolean                              | Shows the [Sidebar][ui_docs] as open (`true`) or closed (`false`) on page load.                    | -                     |
| `terminalHeight` | Number                               | Sets the [Terminal][ui_docs] height (from `0` to `100`). [WebContainers][available_env_docs] only. | `30`                  |
| `theme`          | [UiThemeOption][] (String)           | Sets the desired color theme.                                                                      | see [UiThemeOption][] |
| `view`           | [UiViewOption][] (String)            | Sets the initial [UI view][ui_docs]: editor, preview, or both.                                     | see [UiThemeOption][] |

### <var>EmbedOptions</var> {#embedoptions}

Display options available when embedding a project in an iframe.

| Property         | Type                                 | Description                                                                                    | Default Value         |
| ---------------- | ------------------------------------ | ---------------------------------------------------------------------------------------------- | --------------------- |
| `clickToLoad`    | Boolean                              | Shows a UI dialog asking users to run the project.                                             | `false`               |
| `devToolsHeight` | Number                               | Sets [Console][ui_docs] height (from `0` to `100`). [EngineBlock][available_env_docs] only.    | -                     |
| `height`         | Number                               | Sets the height of the embed iframe.                                                           | `300`                 |
| `hideDevTools`   | Boolean                              | Hides the [Console][ui_docs] completely. [EngineBlock][available_env_docs] only.               | `false`               |
| `hideExplorer`   | Boolean                              | Hides the [ActivityBar][ui_docs].                                                              | `false`               |
| `hideNavigation` | Boolean                              | Hides the preview URL in embeds.                                                               | `false`               |
| `openFile`       | [OpenFileOption][] (String or Array) | Specifies which file(s) to open in the editor and code lines to highlight.                     | -                     |
| `origin`         | String                               | StackBlitz Enterprise Edition: sets the origin URL of the StackBlitz EE instance.              | -                     |
| `showSidebar`    | Boolean                              | Shows the [Sidebar][ui_docs] as open (`true`) or closed (`false`) on page load.                | -                     |
| `terminalHeight` | Number                               | Sets [Terminal][ui_docs] height (from `0` to `100`). [WebContainers][available_env_docs] only. | `30`                  |
| `theme`          | [UiThemeOption][] (String)           | Sets the desired color theme.                                                                  | see [UiThemeOption][] |
| `view`           | [UiViewOption][] (String)            | Sets the initial [UI view][ui_docs]: editor, preview, or both.                                 | see [UiViewOption][]  |
| `width`          | Number                               | Sets the width of the embed iframe.                                                            | `100%`                |

### <var>OpenFileOption</var> {#openfileoption}

Specifies file paths to open in the editor. It can be a single string or an array of strings, where each string is a comma-separated list of file paths.

File paths can include lines of code to be highlighted, using the format `{path}:L{start}` for a single line and `{path}:L{start}-L{end}` for a range. Any file change will remove the highlight selection.

Example with a single file:

```js
  // Opens a single file
  openFile: 'src/App.tsx',
```

Example with a single file with third line highlighted:

```js
  // Opens a single file and highlights the third line
  openFile: 'src/App.tsx:L3',
```

Example with a single file with a range (lines 5-8) highlighted:

```js
  // Opens a single file and highlights a range
  openFile: 'src/App.tsx:L5-L8',
```

Example with three editor tabs (the last file is displayed):

```js
  // Opens three editor tabs with the last file displayed
  openFile: 'index.html,package.json,src/App.tsx',
```

Example with three editor panes with one tab in each pane:

```js
  // Opens three side-by-side editor panes with one tab in each pane
  openFile: ['index.html', 'package.json', 'src/App.tsx'],
```

Example with two editor panes with two tabs in each pane:

```js
  // Opens two editor panes with two tabs in each pane
  openFile: ['index.html,package.json', 'src/App.tsx,src/App.css'],
```

### <var>UiThemeOption</var> {#uithemeoption}

The name of the color theme supported by the embedded editor.

| Value       | Description                                   |
| ----------- | --------------------------------------------- |
| `'default'` | Uses the default theme (currently: `'dark'`). |
| `'dark'`    | The built-in dark theme.                      |
| `'light'`   | The built-in light theme.                     |

### <var>UiViewOption</var> {#uiviewoption}

Controls the display mode of the project.

This only declares an _intent_, and the available values may behave differently depending on:

- the viewport width;
- whether the project is rendered in a tab (“standard layout”) or iframe (“embed layout”).

| Value       | Description                                                                 |
| ----------- | --------------------------------------------------------------------------- |
| `'default'` | Shows Preview and Editor on large viewports, Editor only in small viewports |
| `'preview'` | Shows the Preview only (embed layout only)                                  |
| `'editor'`  | Shows the Editor only (embed and standard layouts)                          |

[available_env_docs]: /guide/available-environments/
[embedoptions]: #embedoptions
[available_env_docs]: /guide/available-environments/
[openfileoption]: #openfileoption
[openoptions]: #openoptions
[project]: #projectobject
[projectdependencies]: #projectdependencies
[projectfiles]: #projectfiles
[projectsettings]: #projectsettings
[projecttemplate]: #projecttemplate
[sdk_vm_docs]: /guide/javascript-sdk-vm/
[ui_docs]: /guide/ide-whats-on-your-screen/
[uithemeoption]: #uithemeoption
[uiviewoption]: #uiviewoption
