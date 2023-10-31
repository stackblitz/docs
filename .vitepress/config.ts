import dotenv from 'dotenv';
/* @ts-expect-error */
import mdFootnote from 'markdown-it-footnote';
import { defineConfig, type HeadConfig } from 'vitepress';
import { defaultGroupLink, sidebarLinks } from '../docs/links';

dotenv.config();

const BASE = '/';

export default defineConfig({
  srcDir: './docs',
  outDir: `./build${BASE}`,
  assetsDir: 'assets',
  base: BASE,

  // Generate files as `/path/to/page.html` and URLs as `/path/to/page`
  cleanUrls: true,

  // Prevent builds when content has dead links
  ignoreDeadLinks: false,

  // Metadata
  lang: 'en-US',
  title: 'StackBlitz Docs',
  description:
    'Discover how to use StackBlitz, an online development environment for frontend, Node.js and the JavaScript ecosystem.',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: `${BASE}img/theme/favicon.png` }],
    ...getAnalyticsTags(process.env),
  ],

  // Sitemap
  lastUpdated: true,
  sitemap: {
    hostname: `https://developer.stackblitz.com${BASE}`,
  },

  /**
   * Generate social media metadata tags at build time.
   * Note: this does not run when using the development server,
   * so it must be tested by doing a full build with `npm run build`.
   */
  transformHead({ head, pageData, page }) {
    // Get the raw title and description from frontmatter,
    // rather than the title which has the site suffix
    const { title, description, og_image } = pageData.frontmatter;
    const isHome = page === 'index.md';

    // Check what meta tags we already have, so we don't override them
    const metas: Record<string, string> = {};
    for (const [tag, attrs] of head) {
      if (tag === 'meta') {
        metas[attrs.name ?? attrs.property] = metas.content;
      }
    }

    // New meta tags to add to the <head>
    const tags: HeadConfig[] = [];

    // Add opengraph tags
    tags.push(['meta', { property: 'og:type', content: isHome ? 'website' : 'article' }]);
    if (title && !metas['og:title']) {
      tags.push(['meta', { property: 'og:title', content: title }]);
    }
    if (og_image && !metas['og:image']) {
      const url = `https://developer.stackblitz.com/img/og/${og_image}`;
      tags.push(['meta', { property: 'og:image', content: url }]);
    }

    // Add twitter tags
    tags.push(['meta', { name: 'twitter:site', content: '@StackBlitz' }]);
    tags.push(['meta', { name: 'twitter:card', content: 'summary_large_image' }]);
    if (title && !metas['twitter:title']) {
      tags.push(['meta', { name: 'twitter:title', content: title }]);
    }
    if (description && !metas['twitter:description']) {
      tags.push(['meta', { name: 'twitter:description', content: description }]);
    }

    return tags;
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

function getAnalyticsTags(env: NodeJS.ProcessEnv): HeadConfig[] {
  if (!env.VITE_GTM_ID) {
    return [];
  }
  return [
    [
      'script',
      { src: `https://www.googletagmanager.com/gtag/js?id=${env.VITE_GTM_ID}`, async: '' },
    ],
    [
      'script',
      {},
      `function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag('js',new Date),gtag('config','${env.VITE_GTM_ID}',{anonymize_ip:true})`,
    ],
  ];
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
