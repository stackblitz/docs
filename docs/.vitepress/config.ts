import { defineConfig } from 'vitepress';

import * as links from './links';

export default defineConfig({
  lang: 'en-US',
  title: 'StackBlitz Docs',
  description: 'Docs | Guides | Tutorials',
  ignoreDeadLinks: true,
  outDir: '../build',
  cleanUrls: 'with-subfolders',
  themeConfig: {
    siteTitle: 'StackBlitz Docs',
    logo: 'img/sb-dev-logo.svg',
    editLink: {
      pattern: 'https://stackblitz.com/code/github/stackblitz/docs/edit/main/:path',
      text: 'Edit this page on StackBlitz',
    },
    nav: [
      { text: 'User Guide', link: links.userGuide[0].link },
      { text: 'Open in StackBlitz', link: links.developerGuide[0].link },
      { text: 'Runtime Environments', link: links.environment[0].link },
      { text: 'JavaScript SDK', link: links.api[0].link },
      { text: 'Enterprise Edition', link: links.enterprise[0].link! },
    ],
    sidebar: [
      {
        text: 'User Guide',
        collapsible: true,
        items: links.userGuide,
      },
      {
        text: 'Open in StackBlitz',
        collapsible: true,
        collapsed: true,
        items: links.developerGuide,
      },
      {
        text: 'Runtime Environments',
        collapsible: true,
        collapsed: true,
        items: links.environment,
      },
      {
        text: 'StackBlitz API',
        collapsible: true,
        collapsed: true,
        items: links.api,
      },
      {
        text: 'Enterprise Edition',
        collapsible: true,
        collapsed: true,
        items: links.enterprise,
      },
    ],
  },
});
