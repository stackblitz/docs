---
title: Using pr.new
---

# {{ $frontmatter.title }}

Open Source contributions have never been easier 🥰 

This page covers using pr.new to open, view, and contribute to any project through our Codeflow IDE or Web Publisher.

## What is pr.new?

<!--@include: ./parts/pr-new.md-->

## How does pr.new work?

This short URL enables magical experiences by choosing just the right tools for the job.

Below you will learn what to expect in different scenarios.

<!-- TODO: graph -->

### Opening a GitHub repository

To open a GitHub repository with pr.new, visit it on GitHub and in the browser's address tab, add `pr.new` to the beginning of the URL, for example:

> <a href="https://pr.new/github.com/stackblitz/docs" target="_blank" rel="noopener noreferrer"><b>pr.new/</b>github.com/stackblitz/docs</a>

You will be redirected to [Codeflow IDE](./working-in-codeflow-ide) where you can work to [submit a PR](./working-in-codeflow-ide#submitting-a-pr) or just explore the codebase.

### Opening a specific branch 

To inspect a branch with pr.new, visit it on GitHub and in the browser's address tab, add `pr.new` to the beginning of the URL, for example:

> <b>pr.new/</b>github.com/stackblitz/docs/tree/BRANCH-NAME

You will be redirected to [Codeflow IDE](./working-in-codeflow-ide) where you can explore the code, continue the work, or investigate the issue.

### Reviewing a PR

To review a PR with pr.new, visit the submitted pull request on GitHub and in the browser's address tab, add `pr.new` to the beginning of the URL, for example:

> <a href="https://pr.new/github.com/stackblitz/docs/pull/33" target="_blank" rel="noopener noreferrer"><b>pr.new/</b>github.com/stackblitz/docs/pull/33</a>

You will be redirected to [Codeflow IDE](./working-in-codeflow-ide) in the ["PR review mode"](./working-in-codeflow-ide#reviewing-a-pr-with-codeflow-ide) where you will see diffs. You can switch to the standard file view by choosing the "file" icon in the left vertical nav bar.

## "Open in Codeflow" button

To help your users quickly spin up the entire environment with your project, you can add a CTA (call-to-action) button on your website or in the README file with any of the above pr.new links. 

| Button preview | Direct URL |
| --- | --- |
| <img alt="Open in Codeflow" src="/img/button-open-in-codeflow-medium.svg" /> | <a href="/img/button-open-in-codeflow-medium.svg" target="_blank">button-open-in-codeflow-medium.svg</a> |
| <img alt="Open in Codeflow" src="/img/button-open-in-codeflow-small.svg" /> | <a href="/img/button-open-in-codeflow-small.svg" target="_blank">button-open-in-codeflow-small.svg</a> |

::: tip
You can either host the images on your servers or directly use our image URLs.
:::

In order to display the button in a **Markdown file**, use the following code - remember to update the last URL with the project repository path:

```md
[![Open in Codeflow](https://developer.stackblitz.com/codeflow/assets/button-open-in-codeflow-medium.svg)](https:///pr.new/___GH_ACCOUNT__/___GH_REPOSITORY___)
```

Or, in HTML:

```html
<a href="https:///pr.new/___GH_ACCOUNT__/___GH_REPOSITORY___">
  <img
    alt="Open in Codeflow"
    src="https://developer.stackblitz.com/codeflow/assets/button-open-in-codeflow-medium.svg"
  />
</a>
```

If the user is logged in at GitHub and StackBlitz (in beta), Codeflow IDE will open up. No further configuration is needed. 

## Opening a single file

To edit a single file with pr.new, visit it in the GitHub repository and click the "Edit" icon (a pencil). Now, in the browser's address tab, add `pr.new` to the beginning of the URL, for example:

> <a href="https://pr.new/github.com/stackblitz/docs/edit/main/docs/guides/user-guide/what-is-stackblitz.md" target="_blank" rel="noopener noreferrer"><b>pr.new/</b>github.com/stackblitz/docs/edit/main/docs/guides/user-guide/what-is-stackblitz.md</a>

You will be redirected to [Web Publisher](./content-updates-with-web-publisher) for a more pleasant editing experience. If you prefer to work in a full environment, click on the "Open in IDE" button and you will be redirected to [Codeflow IDE](./working-in-codeflow-ide).