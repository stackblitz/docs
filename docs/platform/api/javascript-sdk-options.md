---
title: SDK Options Reference
description: Modify your StackBlitz project with SDK options.
og_image: sdk-options-reference.png
---

# {{ $frontmatter.title }}

## <var>Project</var> {#project}

An object defining the contents and settings of a StackBlitz project.

| Property | Required |  Type | Description |
| --- | --- | --- | --- |
| `title` | Yes | String | The project title. |
| `description` | Yes | String | A short description for this project. |
| `template` | Yes | [ProjectTemplate][] (String) | Determines how code compiles and runs. |
| `files` | Yes | [ProjectFiles][] (Object) | Project files and their contents. |
| `dependencies` | No | [ProjectDependencies][] (Object) | Specifies npm dependencies ([EngineBlock][available_env_docs] only). |
| `settings` | No | [ProjectSettings][] (Object) | Code compilation behavior ([EngineBlock][available_env_docs] only). |

## <var>ProjectTemplate</var> {#projecttemplate}

A string representing a supported template type.

Each template has its own rules for compiling source files, and requires specific files to be present.

| Template name | Environment | Required files |
| --- | --- | --- |
| `'angular-cli'` | [EngineBlock][available_env_docs] | `index.html` and `main.ts` |
| `'create-react-app'` | [EngineBlock][available_env_docs] | `index.html` and `index.js` |
| `'html'` | [EngineBlock][available_env_docs] | `index.html` |
| `'javascript'` | [EngineBlock][available_env_docs] | `index.html` and `index.js` |
| `'polymer'` | [EngineBlock][available_env_docs] | `index.html` |
| `'typescript'` | [EngineBlock][available_env_docs] | `index.html` and `index.ts` |
| `'vue'` | [EngineBlock][available_env_docs] | `public/index.html` and `src/main.js` |
| `'node'` | [WebContainers][available_env_docs] | _No requirements_ |

## <var>ProjectFiles</var> {#projectfiles}

A plain object representing file paths and their contents.

- Object keys: strings representing file paths (from the root of the project).
- Object values: strings representing file contents (text only).

:::warning Supported file types
Only plain text files (including code, data, and SVG images) are supported in ProjectFiles.

Binary files (such as archive formats, binaries and executables, bitmap images, audio and video files) are not supported at this time.
:::

## <var>ProjectDependencies</var> {#projectdependencies}

A plain object representing npm packages and their versions, to be installed at runtime when the project loads.

- Object keys: strings representing npm package names.
- Object values: strings representing npm package version specifiers.

:::info Environment differences
ProjectDependencies are only used in the [EngineBlock environment][available_env_docs]. For WebContainers, please provide a `package.json` file instead.

Read more about [the recommended ways to specify project dependencies](/platform/api/javascript-sdk-dependencies) for each runtime environment.
:::

## <var>ProjectSettings</var> {#projectsettings}

Compilation settings for [EngineBlock][available_env_docs] projects.

| Property | Type | Description | Default |
| --- | --- | --- | --- |
| `compile.trigger` | `'auto'`, `'save'`, or `'keystroke'` | Determines when the source changes should trigger compilation. | `'auto'` |
| `compile.action` | `'hmr'` or `'refresh'` | Determines how compiled changes should be injected. | `'hmr'` |
| `compile.clearConsole` | Boolean | Determines if the Console should be cleared after compilation. | `true` |

In projects running on [WebContainers][available_env_docs] (which use `template: 'node'`), only `compile.trigger` is used. This affects the time at which file changes in the editor are written to the virtual filesystem.

## <var>OpenOptions</var> {#openoptions}

Display options available when opening a project in a new window.

:::tip DEMO
Check this demo showcasing all available open options:

- [TypeScript demo](https://stackblitz.com/edit/sdk-open-embed-sb-projects-with-openoptions-ts)
- [JavaScript demo](https://stackblitz.com/edit/sdk-open-embed-sb-projects-with-openoptions-js)
:::

| Property | Type | Description | Default Value |
| --- | --- | --- | --- |
| `clickToLoad` | Boolean | Shows a UI dialog asking users to run the project. | `false` |
| `devToolsHeight` | Number | Sets the [Console][ui_docs] height (from `0` to `100`). [EngineBlock][available_env_docs] only. | - |
| `forceEmbedLayout` | Boolean | Whether to use the embed layout or the full editor layout. *This option is deprecated and will be removed in a future release.* | `false` |
| `hideDevTools` | Boolean | Hides the [Console][ui_docs] completely. [EngineBlock][available_env_docs] only. | `false` |
| `hideExplorer` | Boolean | Hides the [ActivityBar][ui_docs]. | `false` |
| `newWindow` | Boolean | Opens the project in a new tab. | `true` |
| `openFile` | [OpenFileOption][] (String or Array) | Specifies which file(s) to open in the editor and code lines to highlight. | - |
| `origin` | String | StackBlitz Enterprise Edition: sets the origin URL of the StackBlitz EE instance. | - |
| `showSidebar` | Boolean | Shows the [Sidebar][ui_docs] as open (`true`) or closed (`false`) on page load. | - |
| `terminalHeight` | Number | Sets the [Terminal][ui_docs] height (from `0` to `100`). [WebContainers][available_env_docs] only. | `30` |
| `theme` | [UiThemeOption][] (String) | Sets the desired color theme. | see [UiThemeOption][] |
| `view` | [UiViewOption][] (String) | Sets the initial [UI view][ui_docs]: editor, preview, or both. | see [UiThemeOption][] |

## <var>EmbedOptions</var> {#embedoptions}

Display options available when embedding a project in an iframe.

:::tip DEMO
Check this demo showcasing all available embed options:

- [TypeScript demo](https://stackblitz.com/edit/sdk-open-embed-sb-projects-with-embedoptions-ts)
- [JavaScript demo](https://stackblitz.com/edit/sdk-open-embed-sb-projects-with-embedoptions-js)
:::

| Property | Type | Description | Default Value |
| --- | --- | --- | --- |
| `clickToLoad` | Boolean | Shows a UI dialog asking users to run the project. | `false` |
| `devToolsHeight` | Number | Sets [Console][ui_docs] height (from `0` to `100`). [EngineBlock][available_env_docs] only. | - |
| `forceEmbedLayout` | Boolean | Whether to use the embed layout or the full editor layout. *This option is deprecated and will be removed in a future release.* | `true` |
| `height` | Number | Sets the height of the embed iframe. | `300` |
| `hideDevTools` | Boolean | Hides the [Console][ui_docs] completely. [EngineBlock][available_env_docs] only. | `false` |
| `hideExplorer` | Boolean | Hides the [ActivityBar][ui_docs]. | `false` |
| `hideNavigation` | Boolean | Hides the preview URL in embeds. | `false` |
| `openFile` | [OpenFileOption][] (String or Array) | Specifies which file(s) to open in the editor and code lines to highlight. | - |
| `origin` | String | StackBlitz Enterprise Edition: sets the origin URL of the StackBlitz EE instance. | - |
| `showSidebar` | Boolean | Shows the [Sidebar][ui_docs] as open (`true`) or closed (`false`) on page load. | - |
| `terminalHeight` | Number | Sets [Terminal][ui_docs] height (from `0` to `100`). [WebContainers][available_env_docs] only. | `30` |
| `theme` | [UiThemeOption][] (String) | Sets the desired color theme. | see [UiThemeOption][] |
| `view` | [UiViewOption][] (String) | Sets the initial [UI view][ui_docs]: editor, preview, or both. | see [UiViewOption][] |
| `width` | Number | Sets the width of the embed iframe. | `100%` |

## <var>OpenFileOption</var> {#openfileoption}

Specifies file paths to open in the editor. It can be a single string or an array of strings, where each string is a comma-separated list of file paths.

:::tip DEMO
Check this demo showcasing all available open file options:

- [TypeScript demo](https://stackblitz.com/edit/sdk-openfileoption-ts)
- [JavaScript demo](https://stackblitz.com/edit/sdk-openfileoption-js)
:::

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

## <var>UiThemeOption</var> {#uithemeoption}

The name of the color theme supported by the embedded editor.

| Value | Description |
| --- | --- |
| `'default'` | Uses the default theme (currently: `'dark'`). |
| `'dark'` | The built-in dark theme. |
| `'light'` | The built-in light theme. |

## <var>UiViewOption</var> {#uiviewoption}

Controls the display mode of the project.

This only declares an _intent_, and the available values may behave differently depending on:

- the viewport width;
- whether the project is rendered in a tab (“standard layout”) or iframe (“embed layout”).

| Value | Description |
| --- | --- |
| `'default'` | Shows Preview and Editor on large viewports, Editor only in small viewports |
| `'preview'` | Shows the Preview only (embed layout only) |
| `'editor'` | Shows the Editor only (embed and standard layouts) |

[available_env_docs]: /guides/user-guide/available-environments
[ui_docs]:  /guides/user-guide/ide-whats-on-your-screen

[embedoptions]: #embedoptions
[openfileoption]: #openfileoption
[openoptions]: #openoptions
[project]: #project
[projectdependencies]: #projectdependencies
[projectfiles]: #projectfiles
[projectsettings]: #projectsettings
[projecttemplate]: #projecttemplate
[uithemeoption]: #uithemeoption
[uiviewoption]: #uiviewoption
