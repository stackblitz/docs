import { defineConfig } from 'vitepress';

import * as links from './links';

export default defineConfig({
  // Metadata
  lang: 'en-US',
  title: 'StackBlitz Docs',
  description: 'Docs | Guides | Tutorials',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/img/sb-dev-logo.svg' }],
    // TODO: remove before making public
    ['meta', { name: 'robots', content: 'noindex,nofollow,noarchive' }],
    /*
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: ogTitle }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: ogDescription }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@vite_js' }],
    ['meta', { name: 'theme-color', content: '#646cff' }]
    */
  ],

  // Build
  cleanUrls: 'with-subfolders',
  outDir: '../build',
  ignoreDeadLinks: true,

  // Theme
  themeConfig: {
    siteTitle: 'StackBlitz Docs',
    logo: '/img/sb-dev-logo.svg',
    algolia: {
      appId: 'YCVDUYWLVC',
      apiKey: '8fe79cd865807082f50083ddd5647b0b',
      indexName: 'stackblitz',
    },
    editLink: {
      pattern: 'https://stackblitz.com/code/github/stackblitz/docs/edit/main/:path',
      text: 'Edit this page on StackBlitz',
    },
    nav: [
      { text: 'Guides', link: links.userGuide[0].link },
      { text: 'API', link: links.api[0].link },
      { text: 'Enterprise', link: links.enterprise[0].link! },
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
          text: 'Open Source Guide',
          collapsible: true,
          collapsed: false,
          items: links.openSourceGuide,
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
