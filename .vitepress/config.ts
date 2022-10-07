import { defineConfig } from 'vitepress';

import * as data from '../docs/data';
import { GTAG_INIT, GTAG_URL } from './analytics';

export default defineConfig({
  srcDir: 'docs',
  outDir: 'build',

  // Generate files as `/path/to/page.html` and URLs as `/path/to/page`
  cleanUrls: 'without-subfolders',

  // Prevent builds when content has dead links
  ignoreDeadLinks: false,

  // Metadata
  lang: 'en-US',
  title: 'StackBlitz Docs',
  description:
    'Discover how to use StackBlitz, an online development environment for frontend, Node.js and the JavaScript ecosystem.',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/img/favicon.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'StackBlitz Docs' }],
    ['meta', { property: 'og:image', content: 'https://developer.stackblitz.com/img/stackblitz-docs-social.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'StackBlitz Docs' }],
    ['meta', { name: 'twitter:site', content: '@StackBlitz' }],
    ['meta', { name: 'twitter:image', content: 'https://developer.stackblitz.com/img/stackblitz-docs-social.png' }],
    ['script', { src: GTAG_URL, async: '' }],
    ['script', {}, GTAG_INIT],
  ],

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
      { text: 'Guides', link: data.userGuideLinks[0].link },
      { text: 'API', link: data.apiLinks[0].link },
      { text: 'WebContainers', link: data.webcontainersLinks[0].link },
      { text: 'Enterprise', link: data.enterpriseLinks[0].link! },
    ],
    sidebar: {
      '/guides/': [
        {
          text: 'User Guide',
          collapsible: true,
          collapsed: false,
          items: data.userGuideLinks,
        },
        {
          text: 'Integration Guide',
          collapsible: true,
          collapsed: false,
          items: data.integrationGuideLinks,
        },
      ],
      '/platform/api/': [
        {
          text: 'StackBlitz API',
          collapsible: true,
          collapsed: false,
          items: data.apiLinks,
        },
      ],
      '/platform/webcontainers/': [
        {
          text: 'WebContainers',
          collapsible: true,
          collapsed: false,
          items: data.webcontainersLinks,
        },
      ],
      '/enterprise/': [
        {
          text: 'Enterprise Edition',
          collapsible: false,
          collapsed: false,
          items: data.enterpriseLinks,
        },
      ],
    },
  },
});
