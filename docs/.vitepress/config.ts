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
    sidebar: {
      // Custom sidebar for Enterprise pages
      '/docs/enterprise/': [
        {
          text: 'Enterprise Edition',
          collapsible: false,
          collapsed: false,
          items: links.enterprise,
        },
      ],
      // Other sections all use the same sidebar
      '/docs/': [
        {
          text: 'User Guide',
          collapsible: true,
          collapsed: false,
          items: links.userGuide,
        },
        {
          text: 'Open in StackBlitz',
          collapsible: true,
          collapsed: false,
          items: links.developerGuide,
        },
        {
          text: 'Runtime Environments',
          collapsible: true,
          collapsed: false,
          items: links.environment,
        },
        {
          text: 'StackBlitz API',
          collapsible: true,
          collapsed: false,
          items: links.api,
        },
      ],
    },
  },
});
