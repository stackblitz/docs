import { defineConfig } from 'vitepress';

import * as links from './links';

export default defineConfig({
  // Metadata
  lang: 'en-US',
  title: 'StackBlitz Documentation',
  description:
    'Discover how to use of StackBlitz, an online development environment for frontend, Node.js and the JavaScript ecosystem.',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/img/favicon.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'StackBlitz Documentation' }],
    ['meta', { property: 'og:image', content: '/img/stackblitz-docs-social.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@stackblitz' }],
    /*
    ['meta', { property: 'og:url', content: '' }],
    ['meta', { property: 'og:description', content: '' }],
    */
    // TODO: remove before making public
    ['meta', { name: 'robots', content: 'noindex,nofollow,noarchive' }],
  ],

  // Build
  cleanUrls: 'without-subfolders',
  outDir: '../build',
  // Prevent builds when content has dead links
  ignoreDeadLinks: false,

  // Theme
  themeConfig: {
    siteTitle: 'StackBlitz Docs',
    logo: '/img/stackblitz-docs-logo.svg',
    algolia: {
      appId: 'YCVDUYWLVC',
      apiKey: '8fe79cd865807082f50083ddd5647b0b',
      indexName: 'stackblitz',
    },
    editLink: {
      pattern: 'https://github.com/stackblitz/docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    nav: [
      { text: 'Guides', link: links.userGuide[0].link },
      { text: 'API', link: links.api[0].link },
      { text: 'WebContainers', link: links.webcontainers[0].link },
      { text: 'Enterprise', link: links.enterprise[0].link! },
    ],
    sidebar: {
      '/guides/': [
        {
          text: 'User Guide',
          collapsible: true,
          collapsed: false,
          items: links.userGuide,
        },
        {
          text: 'Open Source Guide',
          collapsible: true,
          collapsed: false,
          items: links.openSourceGuide,
        },
      ],
      '/platform/api/': [
        {
          text: 'StackBlitz API',
          collapsible: true,
          collapsed: false,
          items: links.api,
        },
      ],
      '/platform/webcontainers/': [
        {
          text: 'WebContainers',
          collapsible: true,
          collapsed: false,
          items: links.webcontainers,
        },
      ],
      '/enterprise/': [
        {
          text: 'Enterprise Edition',
          collapsible: false,
          collapsed: false,
          items: links.enterprise,
        },
      ],
    },
  },
});
