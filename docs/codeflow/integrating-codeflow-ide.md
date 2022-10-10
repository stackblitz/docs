---
title: Integrating Codeflow IDE
---

# {{ $frontmatter.title }}

This page covers integrating Codeflow IDE into your project - either by [adding a button that opens the repository](#open-in-codeflow-button) or by [installing CodeflowApp bot](#codeflowapp-bot). It also covers the [package manager configuration](#package-managers-supported-in-codeflow-ide), including pnpm overrides.

## What is Codeflow IDE?

<!--@include: ./parts/codeflow.md-->

## "Open in Codeflow" button

To help your users quickly spin up the entire environment with your project, you can add a CTA (call-to-action) button on your website or in the README file. 

| Button preview | Direct URL |
| --- | --- |
| <img alt="Edit in Web Publisher" src="./assets/button-edit-in-web-publisher-icon-medium.svg" /> | <a href="./assets/button-edit-in-web-publisher-icon-medium.svg" target="_blank">button-edit-in-web-publisher-icon-medium.svg</a> |
| <img alt="Edit in Web Publisher" src="./assets/button-edit-in-web-publisher-icon-small.svg" /> | <a href="./assets/button-edit-in-web-publisher-icon-small.svg" target="_blank">button-edit-in-web-publisher-icon-small.svg</a> |
| <img alt="Open in Codeflow" src="./assets/button-open-in-codeflow-medium.svg" /> | <a href="./assets/button-open-in-codeflow-medium.svg" target="_blank">button-open-in-codeflow-medium.svg</a> |
| <img alt="Open in Codeflow" src="./assets/button-open-in-codeflow-small.svg" /> | <a href="./assets/button-open-in-codeflow-small.svg" target="_blank">button-open-in-codeflow-small.svg</a> |

::: tip
You can either host the images on your servers or directly use our image URLs.
:::

In order to display the button in a **Markdown file**, use the following code - remember to update the last URL with the project repository path:

```md
[![Open in Codeflow](https://developer.stackblitz.com/codeflow/assets/button-open-in-codeflow-medium.svg)](https:///___GH_ACCOUNT__/___GH_REPOSITORY___)
```

Or, in HTML:

```html
<a href="https:///___GH_ACCOUNT__/___GH_REPOSITORY___">
  <img
    alt="Open in Codeflow"
    src="https://developer.stackblitz.com/codeflow/assets/button-open-in-codeflow-medium.svg"
  />
</a>
```

If the user is logged in at GitHub and StackBlitz (in beta), Codeflow IDE will open up. No further configuration is needed. 

## Package Managers supported in Codeflow IDE

<!--@include: ./parts/supported-packages.md-->

### pnpm overrides

Codeflow IDE allows users to specify which packages they want to override in `package.json` and where the packages are located. A pnpm override is what is going to be installed when you run pnpm i instead of what is defined in a package.json file.

:::info pnpm override
A [pnpm override](https://pnpm.io/package_json#pnpmoverrides) "instructs pnpm to override a dependency in the dependency graph. This is useful to enforce all your packages to use a single version of a dependency, backport a fix, or replace a dependency with a fork."
:::

### pnpm override use case scenario

For example, an issue is submitted to Vite with a StackBlitz reproduction.
1. A maintainer opens the issue in Codeflow IDE. Codeflow IDE pulls the reproduction that is defined in the issue, puts it in a reproduction folder, and
reads the `codeflow.json` file. 
2. If that file defines an override, Codeflow adds them to the repro’s `package.json` file. So, for example, instead of pulling Vite from npm, it will link the local vite project into that reproduction instead.
3. The maintainer can then run `pnpm i` in the repro and pnpm will install the dependencies defined in the override.

:::info TL;DR
Using pnpm override, you can fix a bug and immediately try it out in the reproduction the user provided.
:::

### Enabling pnpm overrides

To set up pnpm overrides, follow these steps:

1. In the project's root directory, create `.stackblitz` directory.

2. Inside it, create a file called `codeflow.json`.

3. In the file, specify the overrides by providing a key-vaue pair of the dependency to override and the folder where it is located. Please note that the location is relative to the root of the project.

```json
// .stackblitz/codeflow.json

{
    "pnpm": {
        "overrides": {
            "vite": "./packages/vite"
        }
    }
}
```

## CodeflowApp bot

<!--@include: ./parts/codeflowapp-bot.md-->

<img lang="en" src="./assets/codeflowapp-pr.png" alt="CodeflowApp bot in action" style="width: 400px"/>

To integrate the bot, please follow the instructions on [Integrating CodeflowApp bot](./integrating-codeflowapp-bot.md).

