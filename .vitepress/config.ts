import dotenv from 'dotenv';
/* @ts-expect-error */
import mdFootnote from 'markdown-it-footnote';
import { defineConfig, type HeadConfig } from 'vitepress';
import * as data from '../docs/data';

dotenv.config();

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
  head: getHeadTags(process.env),

  // Theme
  themeConfig: {
    siteTitle: 'StackBlitz Docs',
    logo: '/img/theme/docs-logo.svg',
    algolia: getAlgoliaConfig(process.env),
    editLink: {
      pattern: 'https://pr.new/stackblitz/docs/edit/main/docs/:path',
      text: 'Edit this page',
    },
    nav: [
      { text: 'Guides', link: data.userGuideLinks[0].link },
      { text: 'Codeflow', link: data.codeflow[0].link },
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
      '/codeflow/': [
        {
          text: 'Codeflow',
          collapsible: false,
          collapsed: false,
          items: data.codeflow,
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

  markdown: {
    config: (md) => {
      md.use(mdFootnote);
    },
  },
});

function getHeadTags(env: NodeJS.ProcessEnv): HeadConfig[] {
  const tags: HeadConfig[] = [
    ['link', { rel: 'icon', type: 'image/png', href: '/img/theme/favicon.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'StackBlitz Docs' }],
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://developer.stackblitz.com/img/theme/docs-social.png',
      },
    ],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'StackBlitz Docs' }],
    ['meta', { name: 'twitter:site', content: '@StackBlitz' }],
    [
      'meta',
      {
        name: 'twitter:image',
        content: 'https://developer.stackblitz.com/img/theme/docs-social.png',
      },
    ],
  ];

  if (env.VITE_GTM_ID) {
    tags.push([
      'script',
      { src: `https://www.googletagmanager.com/gtag/js?id=${env.VITE_GTM_ID}`, async: '' },
    ]);
    tags.push([
      'script',
      {},
      `function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag('js',new Date),gtag('config','${env.VITE_GTM_ID}',{anonymize_ip:true})`,
    ]);
  }

  return tags;
}

function getAlgoliaConfig(env: NodeJS.ProcessEnv) {
  if (env.VITE_ALGOLIA_ID && env.VITE_ALGOLIA_KEY) {
    return {
      indexName: 'stackblitz',
      appId: env.VITE_ALGOLIA_ID,
      apiKey: env.VITE_ALGOLIA_KEY,
    };
  }
}
