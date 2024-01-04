---
title: How to install and use the StackBlitz addon for Storybook
description: With StackBlitz’s addon, Storybook users can open stories in StackBlitz directly from Storybook.
og_image: bug-reproductions.png
---

# {{ $frontmatter.title }}

[Storybook](https://storybook.js.org/) is a widely used open-source tool for building UI components in isolation. It allows developers to create and test UI components interactively, separate from the main application, facilitating easier documentation, debugging, and visual testing of different states and edge cases.

Storybook supports a number of [addons](https://storybook.js.org/docs/addons) that extend the functionality and integrate additional tools.

::: tip Available with all StackBlitz plans including **Personal**, **Personal+**, **Teams**, and **Enterprise**.

The addon is compatible with all Storybook deployments including for Chromatic customers.
:::

## About the StackBlitz addon for Storybook

With StackBlitz’s addon, Storybook users can open stories in StackBlitz directly from Storybook.

After installation, you will be able to:

- Open an instant, browser-based development environment directly from Storybook
- View and modify the relevant component in StackBlitz without a local development environment
- Preview any changes live within StackBlitz
- Commit edits back to the repository or open a pull request

## **Installing the addon**

First, install the addon by running the following command:

::: code-group

```bash [yarn]
yarn add --dev @stackblitz/storybook-addon-stackblitz
```

```bash [npm]
npm install @stackblitz/storybook-addon-stackblitz --save-dev
```

```bash [pnpm]
pnpm add --save-dev @stackblitz/storybook-addon-stackblitz
```
:::

Then, add the addon to `.storybook/main.ts|js`:


```tsx
export default {
  addons: ['@stackblitz/storybook-addon-stackblitz'],
};

```

Configure the repository URL in `.storybook/preview.ts|js`:

```tsx
export default {
  parameters: {
    repositoryUrl: 'https://github.com/[username]/[reponame]'
  },
};
```

In your story files, set the file path for the specific story, for instance:

```tsx
export const Primary: Story = {
  args: {/* ... */},
  parameters: {
    filePath: 'src/stories/Button.tsx'
  }
};
```

If your components are placed in multiple repositories, you can also define the repository URL for each specific story:

```tsx
export const Primary: Story = {
  args: {/* ... */},
  parameters: {
    filePath: 'src/stories/Button.tsx',
    repositoryUrl: 'https://github.com/[username]/[reponame]'
  }
};
```

## Using the addon

After successful installation, you will see a new “Open in StackBlitz” button in the navigation. When clicked, this will open the current story in StackBlitz in a new tab.

![Screenshot 2024-01-02 at 1.40.05 PM.png]()

For more information, [view the StackBlitz addon on Storybook’s integrations page](https://storybook.js.org/addons/@stackblitz/storybook-addon-stackblitz/) and refer to the [Storybook documentation](https://storybook.js.org/docs/).


:::info How can we improve this guide?
Haven't found an answer to your question? [Let us know!](mailto:devrel@stackblitz.com)
:::
