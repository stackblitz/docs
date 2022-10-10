---
title: Web Publisher docs integration
---

# {{ $frontmatter.title }}

This page covers integrating Web Publisher into your docs to decrease the barrier in docs contributions.

## What is Web Publisher?

Web Publisher is a page editing tool that makes docs contribution stress-free, even for the folks who are not tech-savvy.

<!-- screenshot of Web Publisher -->

Web Publisher features a live preview that live updates as you introduce your edits and, once you are ready, creates a fork and a pull request for you. You don't need to have the local environment set up, clone the repository, install dependencies, or run the server to see the changes. 

All you need to edit the docs in Web Publisher is a GitHub account.

## Modifying multiple files

Web Publisher allows you to edit a single page. 

However, some edits require modifying a few files. In this case, you can switch to the Codeflow IDE environment, which will run the whole repository.

To do so, click on the "Open in IDE" button in the top right corner of the page:

<!-- TODO: add screenshot -->

You will be redirected to the Web Studio editor and you can continue your work.

## Adding Web Publisher to your docs

This section will guide you step by step through integrating Web Publisher to your docs.

### 1. Repo compatibility check

Before you begin, verify your toolchain works in WebContainers. To do this, add `pr.new` to the beginning of your docs repository GitHub URL. 

:::info Example
This is the GitHub address of the StackBlitz docs repo:

`https://github.com/stackblitz/docs/`

To check if this repo runs in WebContainers, we'll add `pr.new` to the beginning of the URL:

`https://pr.new/github.com/stackblitz/docs/`
:::

If you see that **the preview loads correctly**, this means that your dev server runs properly in WebContainers and your repo is compatible.

<!-- TODO: add screen recording -->

### 2. Specify the Web Publisher editing link

Let's compose a URL that will specify which file the Web Publisher should feature in the editor and which path to render in the preview. Web Publisher links follow this pattern:

```
https://pr.new/github.com/{repo owner's username}/{repo}/edit/{branch}/{repo file path}
```

:::tip
You can use the **Web Publisher URL generator** to compose your link:

<iframe src="https://stackblitz.com/edit/vue-c2wltp?embed=1&file=src/App.vue&hideExplorer=1&hideNavigation=1&view=preview" style="width:100%;height:350px;border:1px solid var(--vp-custom-block-tip-border);border-radius:10px"></iframe>
:::

The table below presents these URL components with examples dissecting a Web Publisher link to our docs page:

| Element | Example | Notes |
| ------- | ------- | ----- | 
| `https://pr.new/` | `https://pr.new/` | - |
| `github.com/` | `github.com/` | - | 
| `{repo owner's username}/` | `stackblitz/` | - |
| `{repo}/` | `docs/` | - | 
| `{branch}/` | `main/` | - | 
| `{repo file path}/` | `docs/guides/user-guide/what-is-stackblitz.md`| File path to the specific file in the repo to be edited. |
| `?initialPath=` | `?initialPath=` | Query param to specify which URL path should be rendered in the preview  |
| `{URL path}` | `guides/user-guide/what-is-stackblitz`| - |

Put together, the Web Publisher editing link is as follows:

```
https://pr.new/github.com/stackblitz/docs/edit/main/docs/guides/user-guide/what-is-stackblitz.md?&view=editor
```

### 3. Customize the link

Now that you have the base link, you can further customize user's experience with query parameters. 

To specify the first parameter, add `?` at the end of the base link. Connect the subsequent ones with `&`. 

### `initialPath`

<p>
    <b>Default behavior:</b> the Preview window renders the homepage as not always the file path or file name is the same as the rendered route.<br/>
    <b>Argument:</b> A route to be rendered.<br/>
    <b>Example:</b> <code>initialPath=guides/user-guide/what-is-stackblitz</code><br/>
</p>

### `view`

<p>
    <b>Default behavior:</b> Web Publisher features the Editor and the Preview. <br/>
    <b>Argument:</b> <code>editor</code> | <code>preview</code> | <code>default</code><br/>
    <b>Example:</b> <code>view=editor</code><br/>
</p>


### 4. Configure "edit this page"

To enable edits on the sites created via generators, you need to change the default settings. Consult the table below to find which files to change.

| Library | File to change | What to change |
| ------- | -------------- | -------------- |
| Astro | - | - |
| Docusaurus | - | - |
| Eleventy | - | - | 
| Gatsby | Doesn't work in StackBlitz - yet! | N/A |
| Hugo | - | - |
| Jekyll | - | - |
| SvelteKit | - | - |
| VitePress | - | - | 
| VuePress | - | - | 


## Compatibility Mode

<!--@include: ./parts/wp-compatibility-mode.md-->

## Planned Features

To learn about our product roadmap, check the corresponding question on our [FAQ page](./codeflow-faq).