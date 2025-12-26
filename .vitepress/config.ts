import dotenv from 'dotenv';
/* @ts-expect-error */
import mdFootnote from 'markdown-it-footnote';
import { defineConfigWithTheme, type DefaultTheme, type HeadConfig } from 'vitepress';
import { defaultGroupLink, sidebarLinks } from '../docs/links';

dotenv.config();

const BASE_PATH = '/';
const BASE_WITH_ORIGIN = `https://developer.stackblitz.com${BASE_PATH}`;

interface ThemeConfig extends DefaultTheme.Config {
  chatlio: {
    id: string | undefined;
    allowedRoutes: (RegExp | string)[];
  };
}

export default defineConfigWithTheme<ThemeConfig>({
  srcDir: './docs',
  outDir: `./build${BASE_PATH}`,
  assetsDir: 'assets',
  base: BASE_PATH,

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
    ['link', { rel: 'icon', type: 'image/png', href: `${BASE_PATH}img/theme/favicon.png` }],
    ...getAnalyticsTags(process.env),
  ],

  // Sitemap
  lastUpdated: true,
  sitemap: {
    hostname: BASE_WITH_ORIGIN,
  },

  /**
   * Generate social media metadata tags at build time.
   * Note: this does not run when using the development server,
   * so it must be tested by doing a full build with `npm run build`.
   */
  transformHead({ pageData, page }) {
    // Get the raw title and description from frontmatter,
    // rather than the title which has the site suffix
    const { title, description, og_image } = pageData.frontmatter;
    const og_type = page === 'index.md' ? 'website' : 'article';

    // New meta tags to add to the <head>
    const tags: HeadConfig[] = [];

    // Add opengraph tags
    tags.push(['meta', { property: 'og:type', content: og_type }]);
    tags.push(['meta', { property: 'og:title', content: title }]);
    if (og_image) {
      const url = `${BASE_WITH_ORIGIN}img/og/${og_image}`;
      tags.push(['meta', { property: 'og:image', content: url }]);
    }

    // Add twitter tags
    tags.push(['meta', { name: 'twitter:site', content: '@StackBlitz' }]);
    tags.push(['meta', { name: 'twitter:card', content: 'summary_large_image' }]);
    tags.push(['meta', { name: 'twitter:title', content: title }]);
    if (description) {
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
    chatlio: {
      allowedRoutes: [`^${BASE_PATH}teams/.*`, `^${BASE_PATH}enterprise/.*`],
      id: process.env.VITE_CHATLIO_ID,
    },
  },

  postRender(context) {
    context.teleports;
  },

  markdown: {
    config: (md) => {
      md.use(mdFootnote);
    },
  },

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => {
          return ['chatlio-widget'].includes(tag.toLowerCase());
        },
      },
    },
  },
});

function getAnalyticsTags({ VITE_GTM_ID = '' }: NodeJS.ProcessEnv): HeadConfig[] {
  const idPattern = /^GTM-[A-Z\d]+$/;
  const tags: HeadConfig[] = [];

  if (VITE_GTM_ID) {
    if (!idPattern.test(VITE_GTM_ID)) {
      throw new Error(`Invalid VITE_GTM_ID value: '${VITE_GTM_ID}'`);
    }
    const source = `
      (function(w, d, s, l, i){
        w[l] = w[l] || [];
        w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
        let f = d.getElementsByTagName(s)[0];
        let j = d.createElement(s);
        let dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.before(j);
      })(window, document, 'script', 'dataLayer', '${VITE_GTM_ID}');
    `;
    tags.push(['script', {}, source]);
  }

  return tags;
}

function getSearchConfig(env: NodeJS.ProcessEnv): ThemeConfig['search'] {
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
