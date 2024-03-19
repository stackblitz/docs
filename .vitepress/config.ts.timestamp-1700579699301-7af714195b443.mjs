// .vitepress/config.ts
import dotenv from "file:///home/stackblitz/docs/node_modules/dotenv/lib/main.js";
import mdFootnote from "file:///home/stackblitz/docs/node_modules/markdown-it-footnote/index.js";
import { defineConfig } from "file:///home/stackblitz/docs/node_modules/vitepress/dist/node/index.js";

// docs/links.ts
var groupLinks = {
  userGuide: [
    { text: "What is StackBlitz", link: "/guides/user-guide/what-is-stackblitz" },
    { text: "Getting started", link: "/guides/user-guide/getting-started" },
    { text: "Starter projects", link: "/guides/user-guide/starter-projects" },
    { text: "Available environments", link: "/guides/user-guide/available-environments" },
    { text: "Importing projects", link: "/guides/user-guide/importing-projects" },
    { text: "IDE: what\u2019s on your screen", link: "/guides/user-guide/ide-whats-on-your-screen" },
    { text: "Collections", link: "/guides/user-guide/collections" },
    { text: "Keyboard shortcuts", link: "/guides/user-guide/keyboard-shortcuts" },
    { text: "General FAQs", link: "/guides/user-guide/general-faqs" }
  ],
  integrationGuide: [
    { text: "Embedding projects", link: "/guides/integration/embedding" },
    { text: "Launching projects from GitHub", link: "/guides/integration/open-from-github" },
    { text: "Creating projects with the SDK", link: "/guides/integration/create-with-sdk" },
    { text: "Bug reproductions", link: "/guides/integration/bug-reproductions" }
  ],
  codeflow: [
    { text: "What is Codeflow?", link: "/codeflow/what-is-codeflow" },
    { text: "Using pr.new", link: "/codeflow/using-pr-new" },
    { text: "Working in Codeflow IDE", link: "/codeflow/working-in-codeflow-ide" },
    { text: "Integrating CodeflowApp bot", link: "/codeflow/integrating-codeflowapp-bot" },
    { text: "Environment Variables", link: "/codeflow/environment-variables" },
    {
      text: "Content updates with Web Publisher",
      link: "/codeflow/content-updates-with-web-publisher"
    },
    { text: "Integrating Web Publisher", link: "/codeflow/integrating-web-publisher" },
    { text: "Codeflow FAQ", link: "/codeflow/codeflow-faq" }
  ],
  teams: [
    { text: "What is StackBlitz Teams", link: "/teams/what-is-stackblitz-teams.md" },
    { text: "Setting Up Your Team", link: "/teams/setting-up-your-team" },
    { text: "Collaboration and Access Control", link: "/teams/collaboration-and-access-control" },
    { text: "Pull Request Review Integration", link: "/teams/pull-request-review-integration" },
    { text: "Environment Variables", link: "/teams/environment-variables" },
    { text: "Private NPM Registry Integration", link: "/teams/private-npm-registry-integration" }
  ],
  api: [
    {
      text: "JavaScript SDK",
      link: "/platform/api/javascript-sdk",
      items: [
        { text: "SDK overview", link: "/platform/api/javascript-sdk" },
        { text: "Options reference", link: "/platform/api/javascript-sdk-options" },
        { text: "Controlling embeds", link: "/platform/api/javascript-sdk-vm" },
        { text: "Managing dependencies", link: "/platform/api/javascript-sdk-dependencies" }
      ]
    },
    { text: "POST API", link: "/platform/api/post-api" },
    { text: "WebContainer API", link: "/platform/api/webcontainer-api" }
  ],
  webcontainers: [
    { text: "Roadmap", link: "/platform/webcontainers/roadmap" },
    { text: "Browser support", link: "/platform/webcontainers/browser-support" },
    { text: "Browser configuration", link: "/platform/webcontainers/browser-config" },
    { text: "Project configuration", link: "/platform/webcontainers/project-config" },
    { text: "Turbo package manager", link: "/platform/webcontainers/turbo-package-manager" },
    { text: "Troubleshooting", link: "/platform/webcontainers/troubleshooting-webcontainers" }
  ],
  enterprise: [
    { text: "Overview", link: "/enterprise/overview" },
    {
      text: "Installation",
      link: "/enterprise/installation/quickstart",
      items: [
        { text: "Quickstart on Bare Metal", link: "/enterprise/installation/quickstart" },
        { text: "Quickstart on GCP (Non-GKE)", link: "/enterprise/installation/quickstart-gcp" },
        {
          text: "Quickstart (Existing Cluster)",
          link: "/enterprise/installation/quickstart-existing-cluster"
        },
        { text: "Administrator Guide", link: "/enterprise/installation/administrator-guide" },
        { text: "Air Gapped Installs", link: "/enterprise/installation/air-gapped-installs" }
      ]
    },
    { text: "Configuring DNS & TLS", link: "/enterprise/configuring-dns" },
    { text: "Configuring Firewall Rules", link: "/enterprise/configuring-firewall-rules" },
    { text: "Setting up SSO", link: "/enterprise/sso" },
    { text: "Setting up SSO with Okta", link: "/enterprise/okta-sso" },
    { text: "Setting up SSO with ADFS", link: "/enterprise/adfs-sso" },
    { text: "Connect npm Registry", link: "/enterprise/npm" },
    { text: "Starter Projects", link: "/enterprise/starter-projects" },
    { text: "User Management", link: "/enterprise/user-management" },
    { text: "Aggregating Logs", link: "/enterprise/log-aggregation" },
    { text: "Data Migration", link: "/enterprise/data-migration" }
  ]
};
var linkGroups = {
  userGuide: {
    text: "User Guide",
    items: groupLinks.userGuide
  },
  integrationGuide: {
    text: "Integration Guide",
    items: groupLinks.integrationGuide
  },
  codeflow: {
    text: "Codeflow",
    items: groupLinks.codeflow
  },
  teams: {
    text: "Teams",
    items: groupLinks.teams
  },
  api: {
    text: "StackBlitz API",
    items: groupLinks.api
  },
  webcontainers: {
    text: "WebContainers",
    items: groupLinks.webcontainers
  },
  enterprise: {
    text: "Enterprise Server",
    items: groupLinks.enterprise
  }
};
var defaultGroupLink = (linkGroup) => groupLinks[linkGroup][0].link;
var sidebarLinks = (sidebar, activeLinkGroups = []) => {
  if (sidebar === "enterprise") {
    return [linkGroups.enterprise];
  }
  return Object.entries(linkGroups).filter(([key]) => key !== "enterprise").map(([key, data]) => ({
    ...data,
    collapsed: !activeLinkGroups.includes(key)
  }));
};

// .vitepress/config.ts
dotenv.config();
var BASE = "/";
var BASE_WITH_ORIGIN = `https://developer.stackblitz.com${BASE}`;
var config_default = defineConfig({
  srcDir: "./docs",
  outDir: `./build${BASE}`,
  assetsDir: "assets",
  base: BASE,
  // Generate files as `/path/to/page.html` and URLs as `/path/to/page`
  cleanUrls: true,
  // Prevent builds when content has dead links
  ignoreDeadLinks: false,
  // Metadata
  lang: "en-US",
  title: "StackBlitz Docs",
  description: "Discover how to use StackBlitz, an online development environment for frontend, Node.js and the JavaScript ecosystem.",
  head: [
    ["link", { rel: "icon", type: "image/png", href: `${BASE}img/theme/favicon.png` }],
    ...getAnalyticsTags(process.env)
  ],
  // Sitemap
  lastUpdated: true,
  sitemap: {
    hostname: BASE_WITH_ORIGIN
  },
  /**
   * Generate social media metadata tags at build time.
   * Note: this does not run when using the development server,
   * so it must be tested by doing a full build with `npm run build`.
   */
  transformHead({ pageData, page }) {
    const { title, description, og_image } = pageData.frontmatter;
    const og_type = page === "index.md" ? "website" : "article";
    const tags = [];
    tags.push(["meta", { property: "og:type", content: og_type }]);
    tags.push(["meta", { property: "og:title", content: title }]);
    if (og_image) {
      const url = `${BASE_WITH_ORIGIN}img/og/${og_image}`;
      tags.push(["meta", { property: "og:image", content: url }]);
    }
    tags.push(["meta", { name: "twitter:site", content: "@StackBlitz" }]);
    tags.push(["meta", { name: "twitter:card", content: "summary_large_image" }]);
    tags.push(["meta", { name: "twitter:title", content: title }]);
    if (description) {
      tags.push(["meta", { name: "twitter:description", content: description }]);
    }
    return tags;
  },
  // Theme
  themeConfig: {
    siteTitle: "StackBlitz Docs",
    logo: "/img/theme/docs-logo.svg",
    search: getSearchConfig(process.env),
    editLink: {
      pattern: "https://pr.new/stackblitz/docs/edit/main/docs/:path",
      text: "Edit this page"
    },
    nav: [
      { text: "Guides", link: defaultGroupLink("userGuide") },
      { text: "Codeflow", link: defaultGroupLink("codeflow") },
      { text: "API", link: defaultGroupLink("api") },
      { text: "WebContainers", link: defaultGroupLink("webcontainers") },
      { text: "Teams", link: defaultGroupLink("teams") },
      { text: "Enterprise", link: defaultGroupLink("enterprise") }
    ],
    sidebar: {
      "/guides/": sidebarLinks("main", ["userGuide", "integrationGuide"]),
      "/codeflow/": sidebarLinks("main", ["codeflow"]),
      "/teams/": sidebarLinks("main", ["teams"]),
      "/platform/api/": sidebarLinks("main", ["api"]),
      "/platform/webcontainers/": sidebarLinks("main", ["webcontainers"]),
      "/enterprise/": sidebarLinks("enterprise", ["enterprise"])
    }
  },
  postRender(context) {
    context.teleports;
  },
  markdown: {
    config: (md) => {
      md.use(mdFootnote);
    }
  }
});
function getAnalyticsTags(env) {
  if (!env.VITE_GTM_ID) {
    return [];
  }
  return [
    [
      "script",
      { src: `https://www.googletagmanager.com/gtag/js?id=${env.VITE_GTM_ID}`, async: "" }
    ],
    [
      "script",
      {},
      `function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag('js',new Date),gtag('config','${env.VITE_GTM_ID}',{anonymize_ip:true})`
    ]
  ];
}
function getSearchConfig(env) {
  if (env.VITE_ALGOLIA_ID && env.VITE_ALGOLIA_KEY) {
    return {
      provider: "algolia",
      options: {
        indexName: "stackblitz",
        appId: env.VITE_ALGOLIA_ID,
        apiKey: env.VITE_ALGOLIA_KEY
      }
    };
  }
}
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcudHMiLCAiZG9jcy9saW5rcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3N0YWNrYmxpdHovZG9jcy8udml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9zdGFja2JsaXR6L2RvY3MvLnZpdGVwcmVzcy9jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvc3RhY2tibGl0ei9kb2NzLy52aXRlcHJlc3MvY29uZmlnLnRzXCI7aW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnO1xuLyogQHRzLWV4cGVjdC1lcnJvciAqL1xuaW1wb3J0IG1kRm9vdG5vdGUgZnJvbSAnbWFya2Rvd24taXQtZm9vdG5vdGUnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCB0eXBlIEhlYWRDb25maWcgfSBmcm9tICd2aXRlcHJlc3MnO1xuaW1wb3J0IHsgZGVmYXVsdEdyb3VwTGluaywgc2lkZWJhckxpbmtzIH0gZnJvbSAnLi4vZG9jcy9saW5rcyc7XG5cbmRvdGVudi5jb25maWcoKTtcblxuY29uc3QgQkFTRSA9ICcvJztcbmNvbnN0IEJBU0VfV0lUSF9PUklHSU4gPSBgaHR0cHM6Ly9kZXZlbG9wZXIuc3RhY2tibGl0ei5jb20ke0JBU0V9YDtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgc3JjRGlyOiAnLi9kb2NzJyxcbiAgb3V0RGlyOiBgLi9idWlsZCR7QkFTRX1gLFxuICBhc3NldHNEaXI6ICdhc3NldHMnLFxuICBiYXNlOiBCQVNFLFxuXG4gIC8vIEdlbmVyYXRlIGZpbGVzIGFzIGAvcGF0aC90by9wYWdlLmh0bWxgIGFuZCBVUkxzIGFzIGAvcGF0aC90by9wYWdlYFxuICBjbGVhblVybHM6IHRydWUsXG5cbiAgLy8gUHJldmVudCBidWlsZHMgd2hlbiBjb250ZW50IGhhcyBkZWFkIGxpbmtzXG4gIGlnbm9yZURlYWRMaW5rczogZmFsc2UsXG5cbiAgLy8gTWV0YWRhdGFcbiAgbGFuZzogJ2VuLVVTJyxcbiAgdGl0bGU6ICdTdGFja0JsaXR6IERvY3MnLFxuICBkZXNjcmlwdGlvbjpcbiAgICAnRGlzY292ZXIgaG93IHRvIHVzZSBTdGFja0JsaXR6LCBhbiBvbmxpbmUgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnQgZm9yIGZyb250ZW5kLCBOb2RlLmpzIGFuZCB0aGUgSmF2YVNjcmlwdCBlY29zeXN0ZW0uJyxcbiAgaGVhZDogW1xuICAgIFsnbGluaycsIHsgcmVsOiAnaWNvbicsIHR5cGU6ICdpbWFnZS9wbmcnLCBocmVmOiBgJHtCQVNFfWltZy90aGVtZS9mYXZpY29uLnBuZ2AgfV0sXG4gICAgLi4uZ2V0QW5hbHl0aWNzVGFncyhwcm9jZXNzLmVudiksXG4gIF0sXG5cbiAgLy8gU2l0ZW1hcFxuICBsYXN0VXBkYXRlZDogdHJ1ZSxcbiAgc2l0ZW1hcDoge1xuICAgIGhvc3RuYW1lOiBCQVNFX1dJVEhfT1JJR0lOLFxuICB9LFxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBzb2NpYWwgbWVkaWEgbWV0YWRhdGEgdGFncyBhdCBidWlsZCB0aW1lLlxuICAgKiBOb3RlOiB0aGlzIGRvZXMgbm90IHJ1biB3aGVuIHVzaW5nIHRoZSBkZXZlbG9wbWVudCBzZXJ2ZXIsXG4gICAqIHNvIGl0IG11c3QgYmUgdGVzdGVkIGJ5IGRvaW5nIGEgZnVsbCBidWlsZCB3aXRoIGBucG0gcnVuIGJ1aWxkYC5cbiAgICovXG4gIHRyYW5zZm9ybUhlYWQoeyBwYWdlRGF0YSwgcGFnZSB9KSB7XG4gICAgLy8gR2V0IHRoZSByYXcgdGl0bGUgYW5kIGRlc2NyaXB0aW9uIGZyb20gZnJvbnRtYXR0ZXIsXG4gICAgLy8gcmF0aGVyIHRoYW4gdGhlIHRpdGxlIHdoaWNoIGhhcyB0aGUgc2l0ZSBzdWZmaXhcbiAgICBjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgb2dfaW1hZ2UgfSA9IHBhZ2VEYXRhLmZyb250bWF0dGVyO1xuICAgIGNvbnN0IG9nX3R5cGUgPSBwYWdlID09PSAnaW5kZXgubWQnID8gJ3dlYnNpdGUnIDogJ2FydGljbGUnO1xuXG4gICAgLy8gTmV3IG1ldGEgdGFncyB0byBhZGQgdG8gdGhlIDxoZWFkPlxuICAgIGNvbnN0IHRhZ3M6IEhlYWRDb25maWdbXSA9IFtdO1xuXG4gICAgLy8gQWRkIG9wZW5ncmFwaCB0YWdzXG4gICAgdGFncy5wdXNoKFsnbWV0YScsIHsgcHJvcGVydHk6ICdvZzp0eXBlJywgY29udGVudDogb2dfdHlwZSB9XSk7XG4gICAgdGFncy5wdXNoKFsnbWV0YScsIHsgcHJvcGVydHk6ICdvZzp0aXRsZScsIGNvbnRlbnQ6IHRpdGxlIH1dKTtcbiAgICBpZiAob2dfaW1hZ2UpIHtcbiAgICAgIGNvbnN0IHVybCA9IGAke0JBU0VfV0lUSF9PUklHSU59aW1nL29nLyR7b2dfaW1hZ2V9YDtcbiAgICAgIHRhZ3MucHVzaChbJ21ldGEnLCB7IHByb3BlcnR5OiAnb2c6aW1hZ2UnLCBjb250ZW50OiB1cmwgfV0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB0d2l0dGVyIHRhZ3NcbiAgICB0YWdzLnB1c2goWydtZXRhJywgeyBuYW1lOiAndHdpdHRlcjpzaXRlJywgY29udGVudDogJ0BTdGFja0JsaXR6JyB9XSk7XG4gICAgdGFncy5wdXNoKFsnbWV0YScsIHsgbmFtZTogJ3R3aXR0ZXI6Y2FyZCcsIGNvbnRlbnQ6ICdzdW1tYXJ5X2xhcmdlX2ltYWdlJyB9XSk7XG4gICAgdGFncy5wdXNoKFsnbWV0YScsIHsgbmFtZTogJ3R3aXR0ZXI6dGl0bGUnLCBjb250ZW50OiB0aXRsZSB9XSk7XG4gICAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgICB0YWdzLnB1c2goWydtZXRhJywgeyBuYW1lOiAndHdpdHRlcjpkZXNjcmlwdGlvbicsIGNvbnRlbnQ6IGRlc2NyaXB0aW9uIH1dKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFncztcbiAgfSxcblxuICAvLyBUaGVtZVxuICB0aGVtZUNvbmZpZzoge1xuICAgIHNpdGVUaXRsZTogJ1N0YWNrQmxpdHogRG9jcycsXG4gICAgbG9nbzogJy9pbWcvdGhlbWUvZG9jcy1sb2dvLnN2ZycsXG4gICAgc2VhcmNoOiBnZXRTZWFyY2hDb25maWcocHJvY2Vzcy5lbnYpLFxuICAgIGVkaXRMaW5rOiB7XG4gICAgICBwYXR0ZXJuOiAnaHR0cHM6Ly9wci5uZXcvc3RhY2tibGl0ei9kb2NzL2VkaXQvbWFpbi9kb2NzLzpwYXRoJyxcbiAgICAgIHRleHQ6ICdFZGl0IHRoaXMgcGFnZScsXG4gICAgfSxcbiAgICBuYXY6IFtcbiAgICAgIHsgdGV4dDogJ0d1aWRlcycsIGxpbms6IGRlZmF1bHRHcm91cExpbmsoJ3VzZXJHdWlkZScpIH0sXG4gICAgICB7IHRleHQ6ICdDb2RlZmxvdycsIGxpbms6IGRlZmF1bHRHcm91cExpbmsoJ2NvZGVmbG93JykgfSxcbiAgICAgIHsgdGV4dDogJ0FQSScsIGxpbms6IGRlZmF1bHRHcm91cExpbmsoJ2FwaScpIH0sXG4gICAgICB7IHRleHQ6ICdXZWJDb250YWluZXJzJywgbGluazogZGVmYXVsdEdyb3VwTGluaygnd2ViY29udGFpbmVycycpIH0sXG4gICAgICB7IHRleHQ6ICdUZWFtcycsIGxpbms6IGRlZmF1bHRHcm91cExpbmsoJ3RlYW1zJykgfSxcbiAgICAgIHsgdGV4dDogJ0VudGVycHJpc2UnLCBsaW5rOiBkZWZhdWx0R3JvdXBMaW5rKCdlbnRlcnByaXNlJykgfSxcbiAgICBdLFxuICAgIHNpZGViYXI6IHtcbiAgICAgICcvZ3VpZGVzLyc6IHNpZGViYXJMaW5rcygnbWFpbicsIFsndXNlckd1aWRlJywgJ2ludGVncmF0aW9uR3VpZGUnXSksXG4gICAgICAnL2NvZGVmbG93Lyc6IHNpZGViYXJMaW5rcygnbWFpbicsIFsnY29kZWZsb3cnXSksXG4gICAgICAnL3RlYW1zLyc6IHNpZGViYXJMaW5rcygnbWFpbicsIFsndGVhbXMnXSksXG4gICAgICAnL3BsYXRmb3JtL2FwaS8nOiBzaWRlYmFyTGlua3MoJ21haW4nLCBbJ2FwaSddKSxcbiAgICAgICcvcGxhdGZvcm0vd2ViY29udGFpbmVycy8nOiBzaWRlYmFyTGlua3MoJ21haW4nLCBbJ3dlYmNvbnRhaW5lcnMnXSksXG4gICAgICAnL2VudGVycHJpc2UvJzogc2lkZWJhckxpbmtzKCdlbnRlcnByaXNlJywgWydlbnRlcnByaXNlJ10pLFxuICAgIH0sXG4gIH0sXG5cbiAgcG9zdFJlbmRlcihjb250ZXh0KSB7XG4gICAgY29udGV4dC50ZWxlcG9ydHM7XG4gIH0sXG5cbiAgbWFya2Rvd246IHtcbiAgICBjb25maWc6IChtZCkgPT4ge1xuICAgICAgbWQudXNlKG1kRm9vdG5vdGUpO1xuICAgIH0sXG4gIH0sXG59KTtcblxuZnVuY3Rpb24gZ2V0QW5hbHl0aWNzVGFncyhlbnY6IE5vZGVKUy5Qcm9jZXNzRW52KTogSGVhZENvbmZpZ1tdIHtcbiAgaWYgKCFlbnYuVklURV9HVE1fSUQpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgcmV0dXJuIFtcbiAgICBbXG4gICAgICAnc2NyaXB0JyxcbiAgICAgIHsgc3JjOiBgaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD0ke2Vudi5WSVRFX0dUTV9JRH1gLCBhc3luYzogJycgfSxcbiAgICBdLFxuICAgIFtcbiAgICAgICdzY3JpcHQnLFxuICAgICAge30sXG4gICAgICBgZnVuY3Rpb24gZ3RhZygpe2RhdGFMYXllci5wdXNoKGFyZ3VtZW50cyl9d2luZG93LmRhdGFMYXllcj13aW5kb3cuZGF0YUxheWVyfHxbXSxndGFnKCdqcycsbmV3IERhdGUpLGd0YWcoJ2NvbmZpZycsJyR7ZW52LlZJVEVfR1RNX0lEfScse2Fub255bWl6ZV9pcDp0cnVlfSlgLFxuICAgIF0sXG4gIF07XG59XG5cbmZ1bmN0aW9uIGdldFNlYXJjaENvbmZpZyhlbnY6IE5vZGVKUy5Qcm9jZXNzRW52KSB7XG4gIGlmIChlbnYuVklURV9BTEdPTElBX0lEICYmIGVudi5WSVRFX0FMR09MSUFfS0VZKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3ZpZGVyOiAnYWxnb2xpYScsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGluZGV4TmFtZTogJ3N0YWNrYmxpdHonLFxuICAgICAgICBhcHBJZDogZW52LlZJVEVfQUxHT0xJQV9JRCxcbiAgICAgICAgYXBpS2V5OiBlbnYuVklURV9BTEdPTElBX0tFWSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9zdGFja2JsaXR6L2RvY3MvZG9jc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvc3RhY2tibGl0ei9kb2NzL2RvY3MvbGlua3MudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvc3RhY2tibGl0ei9kb2NzL2RvY3MvbGlua3MudHNcIjtpbXBvcnQgdHlwZSB7IENhcmRMaW5rLCBGb290ZXJTZWN0aW9uLCBNZW51TGlua0dyb3VwLCBNZW51TGlua0l0ZW0gfSBmcm9tICdAdGhlbWUvZGF0YS90eXBlcyc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBMaW5rIEdyb3VwcyAvIFNpZGViYXJcblxuY29uc3QgZ3JvdXBMaW5rczogUmVjb3JkPE1lbnVMaW5rR3JvdXAsIE1lbnVMaW5rSXRlbVtdPiA9IHtcbiAgdXNlckd1aWRlOiBbXG4gICAgeyB0ZXh0OiAnV2hhdCBpcyBTdGFja0JsaXR6JywgbGluazogJy9ndWlkZXMvdXNlci1ndWlkZS93aGF0LWlzLXN0YWNrYmxpdHonIH0sXG4gICAgeyB0ZXh0OiAnR2V0dGluZyBzdGFydGVkJywgbGluazogJy9ndWlkZXMvdXNlci1ndWlkZS9nZXR0aW5nLXN0YXJ0ZWQnIH0sXG4gICAgeyB0ZXh0OiAnU3RhcnRlciBwcm9qZWN0cycsIGxpbms6ICcvZ3VpZGVzL3VzZXItZ3VpZGUvc3RhcnRlci1wcm9qZWN0cycgfSxcbiAgICB7IHRleHQ6ICdBdmFpbGFibGUgZW52aXJvbm1lbnRzJywgbGluazogJy9ndWlkZXMvdXNlci1ndWlkZS9hdmFpbGFibGUtZW52aXJvbm1lbnRzJyB9LFxuICAgIHsgdGV4dDogJ0ltcG9ydGluZyBwcm9qZWN0cycsIGxpbms6ICcvZ3VpZGVzL3VzZXItZ3VpZGUvaW1wb3J0aW5nLXByb2plY3RzJyB9LFxuICAgIHsgdGV4dDogJ0lERTogd2hhdFx1MjAxOXMgb24geW91ciBzY3JlZW4nLCBsaW5rOiAnL2d1aWRlcy91c2VyLWd1aWRlL2lkZS13aGF0cy1vbi15b3VyLXNjcmVlbicgfSxcbiAgICB7IHRleHQ6ICdDb2xsZWN0aW9ucycsIGxpbms6ICcvZ3VpZGVzL3VzZXItZ3VpZGUvY29sbGVjdGlvbnMnIH0sXG4gICAgeyB0ZXh0OiAnS2V5Ym9hcmQgc2hvcnRjdXRzJywgbGluazogJy9ndWlkZXMvdXNlci1ndWlkZS9rZXlib2FyZC1zaG9ydGN1dHMnIH0sXG4gICAgeyB0ZXh0OiAnR2VuZXJhbCBGQVFzJywgbGluazogJy9ndWlkZXMvdXNlci1ndWlkZS9nZW5lcmFsLWZhcXMnIH0sXG4gIF0sXG4gIGludGVncmF0aW9uR3VpZGU6IFtcbiAgICB7IHRleHQ6ICdFbWJlZGRpbmcgcHJvamVjdHMnLCBsaW5rOiAnL2d1aWRlcy9pbnRlZ3JhdGlvbi9lbWJlZGRpbmcnIH0sXG4gICAgeyB0ZXh0OiAnTGF1bmNoaW5nIHByb2plY3RzIGZyb20gR2l0SHViJywgbGluazogJy9ndWlkZXMvaW50ZWdyYXRpb24vb3Blbi1mcm9tLWdpdGh1YicgfSxcbiAgICB7IHRleHQ6ICdDcmVhdGluZyBwcm9qZWN0cyB3aXRoIHRoZSBTREsnLCBsaW5rOiAnL2d1aWRlcy9pbnRlZ3JhdGlvbi9jcmVhdGUtd2l0aC1zZGsnIH0sXG4gICAgeyB0ZXh0OiAnQnVnIHJlcHJvZHVjdGlvbnMnLCBsaW5rOiAnL2d1aWRlcy9pbnRlZ3JhdGlvbi9idWctcmVwcm9kdWN0aW9ucycgfSxcbiAgXSxcbiAgY29kZWZsb3c6IFtcbiAgICB7IHRleHQ6ICdXaGF0IGlzIENvZGVmbG93PycsIGxpbms6ICcvY29kZWZsb3cvd2hhdC1pcy1jb2RlZmxvdycgfSxcbiAgICB7IHRleHQ6ICdVc2luZyBwci5uZXcnLCBsaW5rOiAnL2NvZGVmbG93L3VzaW5nLXByLW5ldycgfSxcbiAgICB7IHRleHQ6ICdXb3JraW5nIGluIENvZGVmbG93IElERScsIGxpbms6ICcvY29kZWZsb3cvd29ya2luZy1pbi1jb2RlZmxvdy1pZGUnIH0sXG4gICAgeyB0ZXh0OiAnSW50ZWdyYXRpbmcgQ29kZWZsb3dBcHAgYm90JywgbGluazogJy9jb2RlZmxvdy9pbnRlZ3JhdGluZy1jb2RlZmxvd2FwcC1ib3QnIH0sXG4gICAgeyB0ZXh0OiAnRW52aXJvbm1lbnQgVmFyaWFibGVzJywgbGluazogJy9jb2RlZmxvdy9lbnZpcm9ubWVudC12YXJpYWJsZXMnIH0sXG4gICAge1xuICAgICAgdGV4dDogJ0NvbnRlbnQgdXBkYXRlcyB3aXRoIFdlYiBQdWJsaXNoZXInLFxuICAgICAgbGluazogJy9jb2RlZmxvdy9jb250ZW50LXVwZGF0ZXMtd2l0aC13ZWItcHVibGlzaGVyJyxcbiAgICB9LFxuICAgIHsgdGV4dDogJ0ludGVncmF0aW5nIFdlYiBQdWJsaXNoZXInLCBsaW5rOiAnL2NvZGVmbG93L2ludGVncmF0aW5nLXdlYi1wdWJsaXNoZXInIH0sXG4gICAgeyB0ZXh0OiAnQ29kZWZsb3cgRkFRJywgbGluazogJy9jb2RlZmxvdy9jb2RlZmxvdy1mYXEnIH0sXG4gIF0sXG4gIHRlYW1zOiBbXG4gICAgeyB0ZXh0OiAnV2hhdCBpcyBTdGFja0JsaXR6IFRlYW1zJywgbGluazogJy90ZWFtcy93aGF0LWlzLXN0YWNrYmxpdHotdGVhbXMubWQnIH0sXG4gICAgeyB0ZXh0OiAnU2V0dGluZyBVcCBZb3VyIFRlYW0nLCBsaW5rOiAnL3RlYW1zL3NldHRpbmctdXAteW91ci10ZWFtJyB9LFxuICAgIHsgdGV4dDogJ0NvbGxhYm9yYXRpb24gYW5kIEFjY2VzcyBDb250cm9sJywgbGluazogJy90ZWFtcy9jb2xsYWJvcmF0aW9uLWFuZC1hY2Nlc3MtY29udHJvbCcgfSxcbiAgICB7IHRleHQ6ICdQdWxsIFJlcXVlc3QgUmV2aWV3IEludGVncmF0aW9uJywgbGluazogJy90ZWFtcy9wdWxsLXJlcXVlc3QtcmV2aWV3LWludGVncmF0aW9uJyB9LFxuICAgIHsgdGV4dDogJ0Vudmlyb25tZW50IFZhcmlhYmxlcycsIGxpbms6ICcvdGVhbXMvZW52aXJvbm1lbnQtdmFyaWFibGVzJyB9LFxuICAgIHsgdGV4dDogJ1ByaXZhdGUgTlBNIFJlZ2lzdHJ5IEludGVncmF0aW9uJywgbGluazogJy90ZWFtcy9wcml2YXRlLW5wbS1yZWdpc3RyeS1pbnRlZ3JhdGlvbicgfSxcbiAgXSxcbiAgYXBpOiBbXG4gICAge1xuICAgICAgdGV4dDogJ0phdmFTY3JpcHQgU0RLJyxcbiAgICAgIGxpbms6ICcvcGxhdGZvcm0vYXBpL2phdmFzY3JpcHQtc2RrJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGV4dDogJ1NESyBvdmVydmlldycsIGxpbms6ICcvcGxhdGZvcm0vYXBpL2phdmFzY3JpcHQtc2RrJyB9LFxuICAgICAgICB7IHRleHQ6ICdPcHRpb25zIHJlZmVyZW5jZScsIGxpbms6ICcvcGxhdGZvcm0vYXBpL2phdmFzY3JpcHQtc2RrLW9wdGlvbnMnIH0sXG4gICAgICAgIHsgdGV4dDogJ0NvbnRyb2xsaW5nIGVtYmVkcycsIGxpbms6ICcvcGxhdGZvcm0vYXBpL2phdmFzY3JpcHQtc2RrLXZtJyB9LFxuICAgICAgICB7IHRleHQ6ICdNYW5hZ2luZyBkZXBlbmRlbmNpZXMnLCBsaW5rOiAnL3BsYXRmb3JtL2FwaS9qYXZhc2NyaXB0LXNkay1kZXBlbmRlbmNpZXMnIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAgeyB0ZXh0OiAnUE9TVCBBUEknLCBsaW5rOiAnL3BsYXRmb3JtL2FwaS9wb3N0LWFwaScgfSxcbiAgICB7IHRleHQ6ICdXZWJDb250YWluZXIgQVBJJywgbGluazogJy9wbGF0Zm9ybS9hcGkvd2ViY29udGFpbmVyLWFwaScgfSxcbiAgXSxcbiAgd2ViY29udGFpbmVyczogW1xuICAgIHsgdGV4dDogJ1JvYWRtYXAnLCBsaW5rOiAnL3BsYXRmb3JtL3dlYmNvbnRhaW5lcnMvcm9hZG1hcCcgfSxcbiAgICB7IHRleHQ6ICdCcm93c2VyIHN1cHBvcnQnLCBsaW5rOiAnL3BsYXRmb3JtL3dlYmNvbnRhaW5lcnMvYnJvd3Nlci1zdXBwb3J0JyB9LFxuICAgIHsgdGV4dDogJ0Jyb3dzZXIgY29uZmlndXJhdGlvbicsIGxpbms6ICcvcGxhdGZvcm0vd2ViY29udGFpbmVycy9icm93c2VyLWNvbmZpZycgfSxcbiAgICB7IHRleHQ6ICdQcm9qZWN0IGNvbmZpZ3VyYXRpb24nLCBsaW5rOiAnL3BsYXRmb3JtL3dlYmNvbnRhaW5lcnMvcHJvamVjdC1jb25maWcnIH0sXG4gICAgeyB0ZXh0OiAnVHVyYm8gcGFja2FnZSBtYW5hZ2VyJywgbGluazogJy9wbGF0Zm9ybS93ZWJjb250YWluZXJzL3R1cmJvLXBhY2thZ2UtbWFuYWdlcicgfSxcbiAgICB7IHRleHQ6ICdUcm91Ymxlc2hvb3RpbmcnLCBsaW5rOiAnL3BsYXRmb3JtL3dlYmNvbnRhaW5lcnMvdHJvdWJsZXNob290aW5nLXdlYmNvbnRhaW5lcnMnIH0sXG4gIF0sXG4gIGVudGVycHJpc2U6IFtcbiAgICB7IHRleHQ6ICdPdmVydmlldycsIGxpbms6ICcvZW50ZXJwcmlzZS9vdmVydmlldycgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnSW5zdGFsbGF0aW9uJyxcbiAgICAgIGxpbms6ICcvZW50ZXJwcmlzZS9pbnN0YWxsYXRpb24vcXVpY2tzdGFydCcsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7IHRleHQ6ICdRdWlja3N0YXJ0IG9uIEJhcmUgTWV0YWwnLCBsaW5rOiAnL2VudGVycHJpc2UvaW5zdGFsbGF0aW9uL3F1aWNrc3RhcnQnIH0sXG4gICAgICAgIHsgdGV4dDogJ1F1aWNrc3RhcnQgb24gR0NQIChOb24tR0tFKScsIGxpbms6ICcvZW50ZXJwcmlzZS9pbnN0YWxsYXRpb24vcXVpY2tzdGFydC1nY3AnIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnUXVpY2tzdGFydCAoRXhpc3RpbmcgQ2x1c3RlciknLFxuICAgICAgICAgIGxpbms6ICcvZW50ZXJwcmlzZS9pbnN0YWxsYXRpb24vcXVpY2tzdGFydC1leGlzdGluZy1jbHVzdGVyJyxcbiAgICAgICAgfSxcbiAgICAgICAgeyB0ZXh0OiAnQWRtaW5pc3RyYXRvciBHdWlkZScsIGxpbms6ICcvZW50ZXJwcmlzZS9pbnN0YWxsYXRpb24vYWRtaW5pc3RyYXRvci1ndWlkZScgfSxcbiAgICAgICAgeyB0ZXh0OiAnQWlyIEdhcHBlZCBJbnN0YWxscycsIGxpbms6ICcvZW50ZXJwcmlzZS9pbnN0YWxsYXRpb24vYWlyLWdhcHBlZC1pbnN0YWxscycgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7IHRleHQ6ICdDb25maWd1cmluZyBETlMgJiBUTFMnLCBsaW5rOiAnL2VudGVycHJpc2UvY29uZmlndXJpbmctZG5zJyB9LFxuICAgIHsgdGV4dDogJ0NvbmZpZ3VyaW5nIEZpcmV3YWxsIFJ1bGVzJywgbGluazogJy9lbnRlcnByaXNlL2NvbmZpZ3VyaW5nLWZpcmV3YWxsLXJ1bGVzJyB9LFxuICAgIHsgdGV4dDogJ1NldHRpbmcgdXAgU1NPJywgbGluazogJy9lbnRlcnByaXNlL3NzbycgfSxcbiAgICB7IHRleHQ6ICdTZXR0aW5nIHVwIFNTTyB3aXRoIE9rdGEnLCBsaW5rOiAnL2VudGVycHJpc2Uvb2t0YS1zc28nIH0sXG4gICAgeyB0ZXh0OiAnU2V0dGluZyB1cCBTU08gd2l0aCBBREZTJywgbGluazogJy9lbnRlcnByaXNlL2FkZnMtc3NvJyB9LFxuICAgIHsgdGV4dDogJ0Nvbm5lY3QgbnBtIFJlZ2lzdHJ5JywgbGluazogJy9lbnRlcnByaXNlL25wbScgfSxcbiAgICB7IHRleHQ6ICdTdGFydGVyIFByb2plY3RzJywgbGluazogJy9lbnRlcnByaXNlL3N0YXJ0ZXItcHJvamVjdHMnIH0sXG4gICAgeyB0ZXh0OiAnVXNlciBNYW5hZ2VtZW50JywgbGluazogJy9lbnRlcnByaXNlL3VzZXItbWFuYWdlbWVudCcgfSxcbiAgICB7IHRleHQ6ICdBZ2dyZWdhdGluZyBMb2dzJywgbGluazogJy9lbnRlcnByaXNlL2xvZy1hZ2dyZWdhdGlvbicgfSxcbiAgICB7IHRleHQ6ICdEYXRhIE1pZ3JhdGlvbicsIGxpbms6ICcvZW50ZXJwcmlzZS9kYXRhLW1pZ3JhdGlvbicgfSxcbiAgXSxcbn07XG5cbmNvbnN0IGxpbmtHcm91cHM6IFJlY29yZDxNZW51TGlua0dyb3VwLCB7IHRleHQ6IHN0cmluZzsgaXRlbXM6IE1lbnVMaW5rSXRlbVtdIH0+ID0ge1xuICB1c2VyR3VpZGU6IHtcbiAgICB0ZXh0OiAnVXNlciBHdWlkZScsXG4gICAgaXRlbXM6IGdyb3VwTGlua3MudXNlckd1aWRlLFxuICB9LFxuICBpbnRlZ3JhdGlvbkd1aWRlOiB7XG4gICAgdGV4dDogJ0ludGVncmF0aW9uIEd1aWRlJyxcbiAgICBpdGVtczogZ3JvdXBMaW5rcy5pbnRlZ3JhdGlvbkd1aWRlLFxuICB9LFxuICBjb2RlZmxvdzoge1xuICAgIHRleHQ6ICdDb2RlZmxvdycsXG4gICAgaXRlbXM6IGdyb3VwTGlua3MuY29kZWZsb3csXG4gIH0sXG4gIHRlYW1zOiB7XG4gICAgdGV4dDogJ1RlYW1zJyxcbiAgICBpdGVtczogZ3JvdXBMaW5rcy50ZWFtcyxcbiAgfSxcbiAgYXBpOiB7XG4gICAgdGV4dDogJ1N0YWNrQmxpdHogQVBJJyxcbiAgICBpdGVtczogZ3JvdXBMaW5rcy5hcGksXG4gIH0sXG4gIHdlYmNvbnRhaW5lcnM6IHtcbiAgICB0ZXh0OiAnV2ViQ29udGFpbmVycycsXG4gICAgaXRlbXM6IGdyb3VwTGlua3Mud2ViY29udGFpbmVycyxcbiAgfSxcbiAgZW50ZXJwcmlzZToge1xuICAgIHRleHQ6ICdFbnRlcnByaXNlIFNlcnZlcicsXG4gICAgaXRlbXM6IGdyb3VwTGlua3MuZW50ZXJwcmlzZSxcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0R3JvdXBMaW5rID0gKGxpbmtHcm91cDogTWVudUxpbmtHcm91cCkgPT4gZ3JvdXBMaW5rc1tsaW5rR3JvdXBdWzBdLmxpbms7XG5cbmV4cG9ydCBjb25zdCBzaWRlYmFyTGlua3MgPSAoXG4gIHNpZGViYXI6ICdtYWluJyB8ICdlbnRlcnByaXNlJyxcbiAgYWN0aXZlTGlua0dyb3VwczogTWVudUxpbmtHcm91cFtdID0gW11cbikgPT4ge1xuICBpZiAoc2lkZWJhciA9PT0gJ2VudGVycHJpc2UnKSB7XG4gICAgcmV0dXJuIFtsaW5rR3JvdXBzLmVudGVycHJpc2VdO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGxpbmtHcm91cHMpXG4gICAgLmZpbHRlcigoW2tleV0pID0+IGtleSAhPT0gJ2VudGVycHJpc2UnKVxuICAgIC5tYXAoKFtrZXksIGRhdGFdKSA9PiAoe1xuICAgICAgLi4uZGF0YSxcbiAgICAgIGNvbGxhcHNlZDogIWFjdGl2ZUxpbmtHcm91cHMuaW5jbHVkZXMoa2V5IGFzIE1lbnVMaW5rR3JvdXApLFxuICAgIH0pKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBIb21lXG5cbmV4cG9ydCBjb25zdCBob21lVG9wTGlua3M6IENhcmRMaW5rW10gPSBbXG4gIHtcbiAgICBpY29uOiAnZmEtZmlsZS1pbXBvcnQnLFxuICAgIHRpdGxlOiAnR2V0IFN0YXJ0ZWQnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0V4cGxvcmUgdGhlIGZ1bGwgcG90ZW50aWFsIG9mIFN0YWNrQmxpdHo6IGZyb20gd3JpdGluZyBjb2RlIG9yIHNwaW5uaW5nIHF1aWNrIGRlbW9zIHRvIG1ha2luZyB5b3VyIGRvY3MgZGVsaWdodGZ1bC4nLFxuICAgIHVybDogJy9ndWlkZXMvdXNlci1ndWlkZS93aGF0LWlzLXN0YWNrYmxpdHonLFxuICB9LFxuICB7XG4gICAgaWNvbjogJ2ZhLWJyb3dzZXInLFxuICAgIHRpdGxlOiAnQ29kZWZsb3cnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ09uZSBjbGljayBvcGVucyBhIGZ1bGwgaW4tYnJvd3NlciBJREUgZm9yIHlvdXIgcmVwb3MsIGlzc3VlcywgYW5kIFBScy4gTm8gbW9yZSBjbG9uaW5nLCBpbnN0YWxsaW5nLCBzdGFzaGluZyEnLFxuICAgIHVybDogJy9jb2RlZmxvdy93aGF0LWlzLWNvZGVmbG93JyxcbiAgfSxcbiAge1xuICAgIGljb246ICdmYS1icmFja2V0cy1jdXJseScsXG4gICAgdGl0bGU6ICdBUEkgUmVmZXJlbmNlJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdFbWJlZCBHaXRIdWIgcmVwb3MsIGNyZWF0ZSBuZXcgcHJvamVjdHMsIGJ1aWxkIGVkdWNhdGlvbmFsIGV4cGVyaWVuY2VzLCBhbGwgcHJvZ3JhbW1hdGljYWxseSB3aXRoIG91ciBTREsuJyxcbiAgICB1cmw6ICcvcGxhdGZvcm0vYXBpL2phdmFzY3JpcHQtc2RrJyxcbiAgfSxcbiAge1xuICAgIGljb246ICdmYS1saWZlLXJpbmcnLFxuICAgIHRpdGxlOiAnSW50ZWdyYXRpbmcgU3RhY2tCbGl0eicsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnRm9sbG93IGd1aWRlcyBvbiBidWlsZGluZyBpbnRlcmFjdGl2ZSBwbGF5Z3JvdW5kcywgaW1wcm92aW5nIGJ1ZyByZXByb3MsIGFuZCB1c2luZyBTdGFja0JsaXR6IGZvciB0ZWNoIGVkdWNhdGlvbi4nLFxuICAgIHVybDogJy9ndWlkZXMvaW50ZWdyYXRpb24vb3Blbi1mcm9tLWdpdGh1YicsXG4gIH0sXG4gIHtcbiAgICBpY29uOiAnZmEtdXNlcnMnLFxuICAgIHRpdGxlOiAnVGVhbXMnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1dpdGggU3RhY2tCbGl0eiBUZWFtcyB5b3UgY3JlYXRlIGEgc2VjdXJlLCBwcml2YXRlIHdvcmtzcGFjZSBmb3IgeW91IGFuZCB5b3VyIHRlYW1tYXRlcy4nLFxuICAgIHVybDogJy90ZWFtcy93aGF0LWlzLXN0YWNrYmxpdHotdGVhbXMnLFxuICB9LFxuICB7XG4gICAgaWNvbjogJ2ZhLXNlcnZlcicsXG4gICAgdGl0bGU6ICdFbnRlcnByaXNlIFNlcnZlcicsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnUnVuIFN0YWNrQmxpdHogYmVoaW5kIHlvdXIgZmlyZXdhbGwsIG9uIG5ldyBvciBleGlzdGluZyBLdWJlcm5ldGVzIGNsdXN0ZXJzLCB3aXRoIG9wdGlvbnMgZm9yIGFpciBnYXBwaW5nIGFuZCBTU08uJyxcbiAgICB1cmw6ICcvZW50ZXJwcmlzZS9vdmVydmlldycsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgaG9tZUV4dGVybmFsTGlua3M6IENhcmRMaW5rW10gPSBbXG4gIHtcbiAgICB0aXRsZTogJ1N0YWNrQmxpdHogQmxvZycsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnU3RheSB1cCB0byBkYXRlIHdpdGggb3VyIG5ld3MsIHJlYWQgdGVjaCBwb3N0cyBmcm9tIG91ciBlbmdpbmVlcnMsIGFuZCBqb2luIGluIGNlbGVicmF0aW5nIG91ciBjb21tdW5pdHkuJyxcbiAgICB1cmw6ICdodHRwczovL2Jsb2cuc3RhY2tibGl0ei5jb20vJyxcbiAgICBsYXJnZTogdHJ1ZSxcbiAgICBiZ0ltZzogJ2JvbHQnLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdDb21tdW5pdHknLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0pvaW4gb3VyIHN1cHBvcnRpdmUgY29tbXVuaXR5IG9uIERpc2NvcmQsIGFzayBxdWVzdGlvbnMsIGFuZCBzaGFyZSB5b3VyIFN0YWNrQmxpdHogcHJvamVjdHMuJyxcbiAgICB1cmw6ICdodHRwczovL2Rpc2NvcmQuZ2cvc3RhY2tibGl0eicsXG4gICAgbGFyZ2U6IHRydWUsXG4gICAgYmdJbWc6ICdzcXVhcmVzJyxcbiAgfSxcbl07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBGb290ZXJcblxuZXhwb3J0IGNvbnN0IGZvb3RlclNlY3Rpb25zOiBGb290ZXJTZWN0aW9uW10gPSBbXG4gIHtcbiAgICB0aXRsZTogJ1dvcmtzcGFjZXMnLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7IHRleHQ6ICdQb3B1bGFyJywgbGluazogJ2h0dHBzOi8vc3RhY2tibGl0ei5jb20vP3N0YXJ0ZXJzPXBvcHVsYXInIH0sXG4gICAgICB7IHRleHQ6ICdGcm9udGVuZCcsIGxpbms6ICdodHRwczovL3N0YWNrYmxpdHouY29tLz9zdGFydGVycz1mcm9udGVuZCcgfSxcbiAgICAgIHsgdGV4dDogJ0JhY2tlbmQnLCBsaW5rOiAnaHR0cHM6Ly9zdGFja2JsaXR6LmNvbS8/c3RhcnRlcnM9YmFja2VuZCcgfSxcbiAgICAgIHsgdGV4dDogJ0Z1bGxzdGFjaycsIGxpbms6ICdodHRwczovL3N0YWNrYmxpdHouY29tLz9zdGFydGVycz1mdWxsc3RhY2snIH0sXG4gICAgICB7IHRleHQ6ICdWaXRlJywgbGluazogJ2h0dHBzOi8vc3RhY2tibGl0ei5jb20vP3N0YXJ0ZXJzPXZpdGUnIH0sXG4gICAgICB7IHRleHQ6ICdEb2NzLCBCbG9ncyAmIFNsaWRlcycsIGxpbms6ICdodHRwczovL3N0YWNrYmxpdHouY29tLz9zdGFydGVycz1kb2NzJyB9LFxuICAgICAgeyB0ZXh0OiAnVmFuaWxsYScsIGxpbms6ICdodHRwczovL3N0YWNrYmxpdHouY29tLz9zdGFydGVycz12YW5pbGxhJyB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1N0YXJ0IGEgbmV3IFByb2plY3QnLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7IHRleHQ6ICdGcm9tIGEgV29ya3NwYWNlJywgbGluazogJ2h0dHBzOi8vc3RhY2tibGl0ei5jb20vP3N0YXJ0ZXJzPXBvcHVsYXInIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdGcm9tIGEgR2l0SHViIFJlcG9zaXRvcnknLFxuICAgICAgICBsaW5rOiAnL2d1aWRlcy91c2VyLWd1aWRlL2ltcG9ydGluZy1wcm9qZWN0cyNpbXBvcnQtZnJvbS1naXRodWInLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0Zyb20geW91ciBjb21wdXRlcicsXG4gICAgICAgIGxpbms6ICcvZ3VpZGVzL3VzZXItZ3VpZGUvaW1wb3J0aW5nLXByb2plY3RzI3VwbG9hZC1mcm9tLXlvdXItY29tcHV0ZXInLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdQcm9kdWN0JyxcbiAgICBpdGVtczogW1xuICAgICAgeyB0ZXh0OiAnRG9jcycsIGxpbms6ICdodHRwczovL2RldmVsb3Blci5zdGFja2JsaXR6LmNvbS8nIH0sXG4gICAgICB7IHRleHQ6ICdFbnRlcnByaXNlJywgbGluazogJ2h0dHBzOi8vc3RhY2tibGl0ei5jb20vZW50ZXJwcmlzZScgfSxcbiAgICAgIHsgdGV4dDogJ1ByaWNpbmcnLCBsaW5rOiAnaHR0cHM6Ly9zdGFja2JsaXR6LmNvbS9tZW1iZXJzaGlwJyB9LFxuICAgICAgeyB0ZXh0OiAnQ2FzZSBTdHVkaWVzJywgbGluazogJ2h0dHBzOi8vc3RhY2tibGl0ei5jb20vY2FzZS1zdHVkaWVzJyB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0NvbXBhbnknLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7IHRleHQ6ICdCbG9nJywgbGluazogJ2h0dHBzOi8vYmxvZy5zdGFja2JsaXR6LmNvbS8nIH0sXG4gICAgICB7IHRleHQ6ICdDYXJlZXJzJywgbGluazogJ2h0dHBzOi8vc3RhY2tibGl0ei5jb20vY2FyZWVycycgfSxcbiAgICAgIHsgdGV4dDogJ0NvbW11bml0eScsIGxpbms6ICdodHRwczovL2Rpc2NvcmQuZ2cvc3RhY2tibGl0eicgfSxcbiAgICAgIHsgdGV4dDogJ0VudGVycHJpc2UgU2FsZXMnLCBsaW5rOiAnaHR0cHM6Ly9zdGFja2JsaXR6LmNvbS9lbnRlcnByaXNlLWNvbnRhY3QnIH0sXG4gICAgICB7IHRleHQ6ICdQcml2YWN5JywgbGluazogJ2h0dHBzOi8vc3RhY2tibGl0ei5jb20vcHJpdmFjeS1wb2xpY3knIH0sXG4gICAgICB7IHRleHQ6ICdUZXJtcyBvZiBTZXJ2aWNlJywgbGluazogJ2h0dHBzOi8vc3RhY2tibGl0ei5jb20vdGVybXMtb2Ytc2VydmljZScgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdDb25uZWN0JyxcbiAgICBpdGVtczogW1xuICAgICAgeyB0ZXh0OiAnR2l0SHViJywgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zdGFja2JsaXR6L2NvcmUnIH0sXG4gICAgICB7IHRleHQ6ICdUd2l0dGVyJywgbGluazogJ2h0dHBzOi8vdHdpdHRlci5jb20vc3RhY2tibGl0eicgfSxcbiAgICAgIHsgdGV4dDogJ0Rpc2NvcmQnLCBsaW5rOiAnaHR0cHM6Ly9kaXNjb3JkLmdnL3N0YWNrYmxpdHonIH0sXG4gICAgXSxcbiAgfSxcbl07XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdRLE9BQU8sWUFBWTtBQUUzUixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLG9CQUFxQzs7O0FDRTlDLElBQU0sYUFBb0Q7QUFBQSxFQUN4RCxXQUFXO0FBQUEsSUFDVCxFQUFFLE1BQU0sc0JBQXNCLE1BQU0sd0NBQXdDO0FBQUEsSUFDNUUsRUFBRSxNQUFNLG1CQUFtQixNQUFNLHFDQUFxQztBQUFBLElBQ3RFLEVBQUUsTUFBTSxvQkFBb0IsTUFBTSxzQ0FBc0M7QUFBQSxJQUN4RSxFQUFFLE1BQU0sMEJBQTBCLE1BQU0sNENBQTRDO0FBQUEsSUFDcEYsRUFBRSxNQUFNLHNCQUFzQixNQUFNLHdDQUF3QztBQUFBLElBQzVFLEVBQUUsTUFBTSxtQ0FBOEIsTUFBTSw4Q0FBOEM7QUFBQSxJQUMxRixFQUFFLE1BQU0sZUFBZSxNQUFNLGlDQUFpQztBQUFBLElBQzlELEVB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