---
title: Integrating Codeflow IDE
---

# {{ $frontmatter.title }}

This page covers integrating Codeflow IDE into your project - either by adding a button that opens the repository or by installing CodeflowApp staging bot.

## What is Codeflow IDE?

<!--@include: ./parts/codeflow.md-->

## "Open in Codeflow" button

To help your users quickly spin up the entire environment with your project, you can add a CTA (call-to-action) button on your website or in the README file. 

| Button preview | Direct URL |
| --- | --- |
| <img alt="Open in StackBlitz" src="/img/open_in_stackblitz.svg" /> | <a href="/img/open_in_stackblitz.svg" target="_blank">open_in_stackblitz.svg</a> |
| <img alt="Open in StackBlitz" src="/img/open_in_stackblitz_small.svg" /> | <a href="/img/open_in_stackblitz_small.svg" target="_blank">open_in_stackblitz_small.svg</a> |

::: tip
You can either host the images on your servers or directly use our image URLs.
:::

In order to display the button in a **Markdown file**, use the following code - remember to update the last URL with the project repository path:

```md
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https:///___GH_ACCOUNT__/___GH_REPOSITORY___)
```

Or, in HTML:

```html
<a href="https:///___GH_ACCOUNT__/___GH_REPOSITORY___">
  <img
    alt="Open in StackBlitz"
    src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"
  />
</a>
```

If the user is logged in at GitHub and StackBlitz (in beta), Codeflow IDE will open up. No further configuration is needed. 

## CodeflowApp staging bot

<!--@include: ./parts/codeflowapp-bot.md-->

To integrate the bot, please follow the instructions on [Integrating CodeflowApp bot](./integrating-codeflowapp-bot.md).

