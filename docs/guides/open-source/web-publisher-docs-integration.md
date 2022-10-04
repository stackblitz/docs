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

Web Publisher allows edit a single page. 

However, some edits require modifying a few files. In this case, you can switch to the Web Studio environment, which will run the whole repository.

To do so, click on the "Open in IDE" button in the top right corner of the page:

![](/public/doc_images/guide/edit-in-IDE-button.png)

You will be redirected to the Web Studio editor and you can continue your work.

## Adding Web Publisher to your docs

This section will guide you step by step through integrating Web Publisher to your docs.

### 1. Setup check

Before you begin, verify your toolchain works in WebContainers. To do this, add `pr.new` to the beginning of your docs repository GitHub URL. 

::: tip EXAMPLE
This is the GitHub address of the StackBlitz docs repo:
`https://github.com/stackblitz/docs/`

To verify if it runs in WebContainers, we'll add `pr.new` to the beginning of the URL:
`https://pr.new/github.com/stackblitz/docs/`
:::

If you see that **the preview loads correctly**, your dev server runs properly in WebContainers, which means that your repo is compatible.

<!-- add screen recording -->

### 2. Specify the Web Publisher editing link

Create a URL that will specify which file the Web Publisher should feature in the editor and which path to render in the preview. Web Publisher links follow this pattern:

```
https://pr.new/github.com/{repo owner's username}/{repo}/edit/{branch}/{repo file path}
```

:::tip
This can be a lot to take in so we prepared a **Web Publisher link generator**: 
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg)](https://stackblitz.com/edit/vue-c2wltp?file=src/App.vue)
:::

To see these URL components with examples, consult this table that dissects a link editing our docs page:

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

The final Web Publisher editing link will be as follows:

```
https://pr.new/github.com/stackblitz/docs/edit/main/docs/guides/user-guide/what-is-stackblitz.md?&view=editor
```

:::tip
Additionally, you can specify if you want the 
:::

### 3. Customize the link

Now that you have the base link, you can further customize user's experience with query parameters. 

To specify the first parameter, add `?` at the end of the base link. Connect the subsequent ones with `&`. 

### `initialPath`

<p>
    <b>Default behavior</b> the Preview window renders the homepage as not always the file path or file name is the same as the rendered route<br/>
    <b>Argument</b> A route to be rendered<br/>
    <b>Example</b> <code>`initialPath=guides/user-guide/what-is-stackblitz`</code><br/>
</p>

### `view`

<p>
    <b>Default behavior:</b> Web Publisher features the Editor and the Preview <br/>
    <b>Argument:</b> `editor` | `preview` | `default`<br/>
    <b>Example:</b> <code>`view=editor`</code><br/>
</p>


### 4. Configure "edit this page"

To enable edits on the docs sites created by generators, you will need to change the default settings. Consult the table below to find which files you need to change.

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

In some cases, you may notice "Compatibility Mode on":
<!-- screenshot -->

This mode comes on when Web Publisher is viewed on Safari.

Safari currently doesn't support WebContainers but but you can still run publisher and make commits. In this mode, we just show a rendered version of your markdown file instead of **WHAT????**.

## Planned Features

**TOMEK?**