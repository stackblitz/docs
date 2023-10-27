import dotenv from 'dotenv';
/* @ts-expect-error */
import mdFootnote from 'markdown-it-footnote';
import { defineConfig, type HeadConfig } from 'vitepress';
import { defaultGroupLink, sidebarLinks } from '../docs/links';

dotenv.config();

const BASE_URL = '/';
const SITEMAP_BASE_URL = `https://developer.stackblitz.com${BASE_URL}`;

export default defineConfig({
  srcDir: 'docs',
  outDir: 'build',
  assetsDir: 'assets',
  base: BASE_URL,

  // Generate files as `/path/to/page.html` and URLs as `/path/to/page`
  cleanUrls: true,

  // Prevent builds when content has dead links
  ignoreDeadLinks: false,

  // Metadata
  lang: 'en-US',
  title: 'StackBlitz Docs',
  description:
    'Discover how to use StackBlitz, an online development environment for frontend, Node.js and the JavaScript ecosystem.',
  head: getHeadTags(process.env),

  // Sitemap
  lastUpdated: true,
  sitemap: {
    hostname: SITEMAP_BASE_URL,
  },

  // Theme
  themeConfig: {
    siteTitle: 'StackBlitz Docs',
    logo: '/img/theme/docs-logo.svg',
    search: getSearchConfig(process.env),
    editLink: {
      pattern: 'https://pr.new/stackblitz/docs/edit/main/docs/:path',
      text: 'Edit this page',
    },
    nav: [
      { text: 'Guides', link: defaultGroupLink('userGuide') },
      { text: 'Codeflow', link: defaultGroupLink('codeflow') },
      { text: 'API', link: defaultGroupLink('api') },
      { text: 'WebContainers', link: defaultGroupLink('webcontainers') },
      { text: 'Teams', link: defaultGroupLink('teams') },
      { text: 'Enterprise', link: defaultGroupLink('enterprise') },
    ],
    sidebar: {
      '/guides/': sidebarLinks('main', ['userGuide', 'integrationGuide']),
      '/codeflow/': sidebarLinks('main', ['codeflow']),
      '/teams/': sidebarLinks('main', ['teams']),
      '/platform/api/': sidebarLinks('main', ['api']),
      '/platform/webcontainers/': sidebarLinks('main', ['webcontainers']),
      '/enterprise/': sidebarLinks('enterprise', ['enterprise']),
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
    ['link', { rel: 'icon', type: 'image/png', href: `${BASE_URL}img/theme/favicon.png` }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'StackBlitz Docs' }],
    ['meta', { name: 'twitter:site', content: '@StackBlitz' }],
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

function getSearchConfig(env: NodeJS.ProcessEnv) {
  if (env.VITE_ALGOLIA_ID && env.VITE_ALGOLIA_KEY) {
    return {
      provider: 'algolia',
      options: {
        indexName: 'stackblitz',
        appId: env.VITE_ALGOLIA_ID,
        apiKey: env.VITE_ALGOLIA_KEY,
      },
    };
  }
}
