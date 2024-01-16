---
title: Using pr.new
description: This page covers using pr.new to open, view, and contribute to any project through our Codeflow IDE or Web Publisher.
og_image: using-pr-new.png
---

# {{ $frontmatter.title }}

This page covers using pr.new to open, view, and contribute to any project through our Codeflow IDE or Web Publisher.

Built to make open source contributions as easy as possible. 🥰

## What is pr.new?

**pr.new** is a short URL that can be used on any repository to explore code, a branch or an issue, to review a PR, or even to edit a file, all in a live environment with a realtime preview.

## How does pr.new work?

Behind the scenes, this short URL will choose different tools in different scenarios:

<!-- TODO: graph -->

### Opening a GitHub repository

To open a GitHub repository with pr.new, visit it on GitHub and in the browser's address tab, add `pr.new` to the beginning of the URL, for example:

> <a href="https://pr.new/github.com/stackblitz/docs" target="_blank" rel="noopener noreferrer"><b>pr.new/</b>github.com/stackblitz/docs</a>

You will be redirected to [Stackblitz editor](/guides/user-guide/working-in-stackblitz-editor) where you can work to [submit a PR](/guides/user-guide/working-in-stackblitz-editor#submitting-a-pr) or just explore the codebase.

### Opening a specific branch 

To inspect a branch with pr.new, visit it on GitHub and in the browser's address tab, add `pr.new` to the beginning of the URL, for example:

> <b>pr.new/</b>github.com/stackblitz/docs/tree/BRANCH-NAME

You will be redirected to [Stackblitz editor](/guides/user-guide/working-in-stackblitz-editor) where you can explore the code, continue the work, or investigate the issue.

### Reviewing a PR

To review a PR with pr.new, visit the submitted pull request on GitHub and in the browser's address tab, add `pr.new` to the beginning of the URL, for example:

> <a href="https://pr.new/github.com/stackblitz/docs/pull/33" target="_blank" rel="noopener noreferrer"><b>pr.new/</b>github.com/stackblitz/docs/pull/33</a>

You will be redirected to [Stackblitz editor](/guides/user-guide/working-in-stackblitz-editor) in the ["PR review mode"](/guides/user-guide/working-in-stackblitz-editor#reviewing-a-pr-with-codeflow-ide) where you will see diffs. You can switch to the standard file view by choosing the "file" icon in the left vertical nav bar.

## "Open in Codeflow" button

To help your users quickly spin up the entire environment with your project, you can add a CTA (call-to-action) button on your website or in the README file with any of the above pr.new links. 

| Button preview | Direct URL |
| --- | --- |
| <img alt="Open in Codeflow" src="https://developer.stackblitz.com/img/open_in_codeflow.svg" /> | <a href="https://developer.stackblitz.com/img/open_in_codeflow.svg" target="_blank">open_in_codeflow.svg</a> |
| <img alt="Open in Codeflow" src="https://developer.stackblitz.com/img/open_in_codeflow_small.svg" /> | <a href="https://developer.stackblitz.com/img/open_in_codeflow_small.svg" target="_blank">open_in_codeflow_small.svg</a> |

::: tip
You can either host the images on your servers or directly use our image URLs.
:::

In order to display the button in a **Markdown file**, use the following code - remember to update the last URL with the project repository path:

```md
[![Open in Codeflow](https://developer.stackblitz.com/img/open_in_codeflow.svg)](https:///pr.new/___GH_ACCOUNT__/___GH_REPOSITORY___)
```

Or, in HTML:

```html
<a href="https:///pr.new/___GH_ACCOUNT__/___GH_REPOSITORY___">
  <img
    alt="Open in Codeflow"
    src="https://developer.stackblitz.com/img/open_in_codeflow.svg"
  />
</a>
```

If the user is logged in at GitHub and StackBlitz (in beta), Codeflow IDE will open up. No further configuration is needed. 

## Opening a single file

To edit a single file with pr.new, visit it in the GitHub repository and click the "Edit" icon (a pencil). Now, in the browser's address tab, add `pr.new` to the beginning of the URL, for example:

> <a href="https://pr.new/github.com/stackblitz/docs/edit/main/docs/guides/user-guide/what-is-stackblitz.md" target="_blank" rel="noopener noreferrer"><b>pr.new/</b>github.com/stackblitz/docs/edit/main/docs/guides/user-guide/what-is-stackblitz.md</a>

You will be redirected to [Web Publisher](/guides/user-guide/content-updates-with-web-publisher) for a more pleasant editing experience. If you prefer to work in a full environment, click on the "Open in IDE" button and you will be redirected to [Stackblitz editor](/guides/user-guide/working-in-stackblitz-editor).