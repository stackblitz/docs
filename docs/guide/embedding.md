---
title: Embedding projects
---

# Embedding projects

## What are StackBlitz embeds?

A StackBlitz embed allows you to display our editor with your code into sites for documentation, blog posts, and any sites that support embedded content. By using the StackBlitz SDK, you can customize your embedded StackBlitz project to display the editor, preview, file explorer, and more.

## How can I embed my project?

Create a new project and get the embed code from the “Share” dropdown link in the top navigation like so:

![Share Button in StackBlitz Editor](/doc_images/project-share-button.png)

![Embed and Preview tabs in StackBlitz Editor](/doc_images/embed-project.png)

<!-- <img src="https://i.imgur.com/a0pJ3nj.png" /> -->

Paste the embed code in any iframe:

```html
<iframe src="https://stackblitz.com/edit/angular?embed=1"></iframe>
```

## Embed URL options

Below is the list of supported query parameters you can specify in the embed URL to customize the embed's appearance and functionality:

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tr>
    <td><code>ctl</code></td>
    <td class="no-break"><code>0</code> / <code>1</code></td>
    <td>Require users to “click to load” the embed</td>
  </tr>
  <tr>
    <td><code>devToolsHeight</code></td>
    <td class="no-break"><code>0</code> &lt; height &lt; <code>100</code></td>
    <td>Set the height of the Console in the editor preview</td>
  </tr>
  <tr>
    <td><code>embed</code></td>
    <td class="no-break"><code>0</code> / <code>1</code></td>
    <td>Force embed view regardless of screen size</td>
  </tr>
  <tr>
    <td><code>file</code></td>
    <td>File path</td>
    <td>The default file to have open in the editor</td>
  </tr>
  <tr>
    <td><code>hideDevTools</code></td>
    <td class="no-break"><code>0</code> / <code>1</code></td>
    <td>Hide the Console in the editor preview</td>
  </tr>
  <tr>
    <td><code>hideExplorer</code></td>
    <td class="no-break"><code>0</code> / <code>1</code></td>
    <td>Hide file explorer pane in embed view</td>
  </tr>
  <tr>
    <td><code>hideNavigation</code></td>
    <td class="no-break"><code>0</code> / <code>1</code></td>
    <td>Hide the preview’s URL bar</td>
  </tr>
  <tr>
    <td><code>initialPath</code></td>
    <td class="no-break">URL path</td>
    <td>The initial URL path (URI encoded) the preview should open</td>
  </tr>
  <tr>
    <td><code>showSidebar</code></td>
    <td class="no-break"><code>0</code> / <code>1</code></td>
    <td>Show the sidebar in embed view (large viewports only)</td>
  </tr>
  <tr>
    <td><code>terminal</code></td>
    <td class="no-break">String</td>
    <td>The name of a npm script to run on project load (WebContainers only)</td>
  </tr>
  <tr>
    <td><code>terminalHeight</code></td>
    <td class="no-break"><code>0</code> &lt; height &lt; <code>100</code></td>
    <td>Set the height of the <a href="/guide/ide-whats-on-your-screen/#terminal">Terminal</a></td>
  </tr>
  <tr>
    <td><code>theme</code></td>
    <td class="no-break"><code>light</code> / <code>dark</code></td>
    <td>Set the color theme of the editor UI</td>
  </tr>
  <tr>
    <td><code>view</code></td>
    <td class="no-break"><code>editor</code> / <code>preview</code></td>
    <td>Which view to open by default</td>
  </tr>
</table>

Alternatively, you can use our [JavaScript SDK methods](/guide/javascript-sdk) for embedding StackBlitz projects in web pages, and avoid creating and configuring iframes.

## Embedding on blogging sites

StackBlitz embeds are supported on DEV and Medium and accept the [embed URL options](#embed-url-options).

### DEV

To embed a StackBlitz project in DEV, take your project URL and use it inside the DEV's liquid tag, like so:

```md
{% stackblitz https://stackblitz.com/edit/vitejs-vite-y8mdxg?file=index.html %}
```

### Medium

To embed a StackBlitz project in Medium, take your project URL (for instance: https://stackblitz.com/edit/angular) and paste it. After you hit enter, it should automatically become an embed.
