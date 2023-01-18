---
title: &title Controlling embeds with the SDK’s VM interface
description: &description All of the embed methods of the StackBlitz JS SDK automatically connect to the embedded StackBlitz VM, giving you programmatic access to the embedded project.
head:
  - ['meta', {property: 'og:title', content: *title}] 
  - ['meta', {property: 'og:image', content: 'https://developer.stackblitz.com/img/og/sdk-controlling-embeds.png'}]
  - ['meta', {name: 'twitter:title', content: *title}]
  - ['meta', {name: 'twitter:description', content: *description}]
---

# {{ $frontmatter.title }}

:::info
These methods only apply to projects embedded on a page.
:::

All of the embed methods of the [StackBlitz JS SDK][sdk_docs] automatically connect to the embedded StackBlitz <abbr title="Virtual Machine">VM</abbr>, giving you programmatic access to the embedded project.

Use the VM to:

- control the UI of an embedded StackBlitz project;
- change the currently open file(s);
- read and write files from the project’s virtual filesystem.

## Getting access to the VM

:::tip DEMO
Check this demo of using the VM:

- [TypeScript demo](https://stackblitz.com/edit/sdk-vm)
- [JavaScript demo](https://stackblitz.com/edit/sdk-vm-js)
:::

### With <var>embed</var> methods

The `embedProject`, `embedProjectId`, and `embedGithubProject` methods of the SDK return a Promise resolving to an instance of the SDK’s `VM` class. We recommend using `await` in an `async` function to keep track of the VM instance. For example:

```js
import sdk from '@stackblitz/sdk';

async function start() {
  // Embeds a project and keeps track of the VM
  const vm = await sdk.embedProjectId('embed', 'react-ts');

  // Performs an action with VM
  const deps = await vm.getDependencies();
  await vm.applyFsDiff({
    create: {
      'hello.txt': 'Hello, this is a new file!',
      'deps.txt': JSON.stringify(deps, null, 2),
    },
    destroy: [],
  });
}

start();
```

### With <var>connect<small>(iframe)</small></var> {#connect}

The SDK’s `connect` method can be used to retrieve the `VM` instance for an existing StackBlitz iframe.

| Argument | Required | Type              | Description                               |
| -------- | -------- | ----------------- | ----------------------------------------- |
| `iframe` | Yes      | HTMLIframeElement | An iframe embedding a StackBlitz project. |

Example:

```js
import sdk from '@stackblitz/sdk';

const EMBED_ID = 'embed';

// Embeds iframe
sdk.embedProjectId(EMBED_ID, 'react-ts');

// Retrieves and uses the VM when clicking a button
document.getElementById('test-button').addEventListener('click', async () => {
  const iframe = document.getElementById(EMBED_ID);
  const vm = await sdk.connect(iframe);
  const deps = await vm.getDependencies();
  console.log(deps);
});
```

## VM properties and methods

### <var>applyFsDiff<small>(diff)</small></var> {#applyfsdiff}

Updates project files. Returns a promise resolving to `null`.

| Argument       | Required | Type   | Description                                           |
| -------------- | -------- | ------ | ----------------------------------------------------- |
| `diff`         | Yes      | Object | Specifies files to create or delete                   |
| `diff.create`  | Yes      | Object | Object with file paths as keys and contents as values |
| `diff.destroy` | Yes      | Array  | File paths of the files to delete                     |

:::info
When modifying existing files, the new content of the modified files must be provided in full.
:::

Example:

```js
await vm.applyFsDiff({
  create: {
    'index.js': `console.log('Hello World!')`,
    'package.json': `{ "scripts": { "start": "node index.js" } }`,
  },
  destroy: ['test.js', 'error.log'],
});
```

### <var>getDependencies<small>()</small></var> {#getdependencies}

Gets the project’s defined dependencies. Returns a promise resolving to a [ProjectDependencies][] object.

In [EngineBlock][env_docs] projects, it returns the dependencies as resolved by the built-in package manager, with exact versions as values. For example: `{ 'react': '18.2.0' }`.

_Since 1.7.0:_ in project running on [WebContainers][env_docs], it reads the contents of the top-level `package.json` file and returns an object merging `dependencies` and `devDependencies`, with the original version specifiers as values. For example, `{ 'react': '^18.0.0' }`.

Example:

```js
const deps = await vm.getDependencies();

if (typeof deps['vue'] === 'string') {
  console.log('Looks like a Vue.js project');
}
```

### <var>getFsSnapshot<small>()</small></var> {#getfssnapshot}

Gets a snapshot of the project files and their content. Returns a promise resolving to a [ProjectFiles][] object.

Example:

```js
const files = await vm.getFsSnapshot();
console.log(files); // { 'index.js': '…', 'package.json': '…', … }
```

### <var>editor.openFile<small>(path)</small></var> {#editoropenfile}

Opens one or several files in tabs and/or split panes. Returns a promise resolving to `null`.

| Argument | Required | Type                                            | Description                |
| -------- | -------- | ----------------------------------------------- | -------------------------- |
| `path`   | Yes      | [OpenFileOption][] (String or array of strings) | Path(s) of file(s) to open |

Example:

```js
// opens a single file
await vm.editor.openFile('src/App.css');

// opens two editor panes
await vm.editor.openFile(['README.md', 'index.js']);
```

### <var>editor.setCurrentFile<small>(path)</small></var> {#editorsetcurrentfile}

_Since 1.7.0. Experimental: exact behavior may change._

Sets a project file as the currently selected file. Returns a promise resolving to `null`.

| Argument | Required | Type   | Description                        |
| -------- | -------- | ------ | ---------------------------------- |
| `path`   | Yes      | String | Path of the file to set as current |

- This may update the highlighted file in the file explorer, and the currently open and/or focused editor tab.
- If the provided path does not match a currently open tab, a new editor tab will _not_ open. See [`vm.editor.openFile`](#editoropenfile) to open files.

Example:

```js
await vm.editor.setCurrentFile('src/App.css');
```

### <var>editor.setTheme<small>(theme)</small></var>

_Since 1.7.0._

Changes the editor’s color theme. Returns a promise resolving to `null`.

| Argument | Required | Type                       | Description           |
| -------- | -------- | -------------------------- | --------------------- |
| `theme`  | Yes      | [UiThemeOption][] (String) | The color theme name. |

```js
await vm.editor.setTheme('light');
```

### <var>editor.setView<small>(view)</small></var>

_Since 1.7.0._

Changes the display mode of the project. Returns a promise resolving to `null`.

| Argument | Required | Type                      | Description            |
| -------- | -------- | ------------------------- | ---------------------- |
| `view`   | Yes      | [UiViewOption][] (String) | The display mode name. |

```js
await vm.editor.setView('preview');
```

### <var>editor.showSidebar<small>(visible)</small></var>

_Since 1.7.0._

Changes the display mode of the sidebar. Returns a promise resolving to `null`.

| Argument  | Required | Type    | Description                                                |
| --------- | -------- | ------- | ---------------------------------------------------------- |
| `visible` | No       | Boolean | Use `true` (default) to show the sidebar, `false` to hide. |

```js
await vm.editor.showSidebar(true);
```

### <var>preview.origin</var> {#previeworigin}

A string with the origin (protocol and domain) of the preview iframe. Every project created with the `embedProject` method gets a unique preview URL.

Because it is unknown ahead of time if the project will run a web server (and if so, on which port), `vm.preview.origin` will always be `null` in projects running on [WebContainers][env_docs]. You can use [`vm.preview.getUrl`](#previewgeturl) instead.

Example:

```js
if (vm.preview.origin) {
  console.log('Preview is running at ' + vm.preview.origin);
}
```

### <var>preview.getUrl<small>()</small></var> {#previewgeturl}

_Since 1.7.0. Experimental: exact behavior may change._

Gets the current preview URL. Returns a promise resolving to a string or to `null`.

The preview URL may not reflect the exact path of the current page if the user or page code has triggered a navigation within the preview iframe.

In WebContainers projects, the preview URL will be `null` initially, and until the project starts a web server.

Example:

```js
const url = await vm.preview.getUrl();

if (url != null && url.startsWith('/about')) {
  console.log('Looks like the About page!');
}
```

### <var>preview.setUrl<small>(path)</small></var> {#previewseturl}

_Since 1.7.0. Experimental: exact behavior may change._

Changes the path of the preview URL. Returns a promise resolving to `null`.

| Argument | Required | Type   | Description                   |
| -------- | -------- | ------ | ----------------------------- |
| `path`   | Yes      | String | A URL path starting with `/`. |

The provided path must start with `/` and cannot change the origin of the preview URL.

In WebContainers projects, calls to `vm.preview.setUrl` will be ignored if there is no web server running currently.

Example:

```js
// Navigates to the About page
await vm.preview.setUrl('/about');
```

[env_docs]: /guides/user-guide/available-environments
[openfileoption]: /platform/api/javascript-sdk-options#openfileoption
[projectdependencies]: /platform/api/javascript-sdk-options#projectdependencies
[projectfiles]: /platform/api/javascript-sdk-options#projectfiles
[sdk_docs]: /platform/api/javascript-sdk
[uithemeoption]: /platform/api/javascript-sdk-options#uithemeoption
[uiviewoption]: /platform/api/javascript-sdk-options#uiviewoption
