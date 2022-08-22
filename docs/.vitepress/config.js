const linkItems = {
  enterprise: [
    { text: 'Overview', link: '/enterprise' },
    {
      text: 'Installation',
      items: [
        { text: 'Quickstart on Bare Metal', link: '/enterprise/installation/quickstart' },
        { text: 'Quickstart on GCP (Non-GKE)', link: '/enterprise/installation/quickstart-gcp' },
        { text: 'Quickstart (Existing Cluster)', link: '/enterprise/installation/quickstart-existing-cluster' },
        { text: 'Administrator Guide', link: '/enterprise/installation/administrator-guide' },
        { text: 'Air Gapped Installs', link: '/enterprise/installation/air-gapped-installs' },
      ]
    },
    { text: 'Configuring DNS & TLS', link: '/enterprise/configuring-dns' },
    { text: 'Configuring Firewall Rules', link: '/enterprise/configuring-firewall-rules' },
    { text: 'Setting up SSO', link: '/enterprise/sso' },
    { text: 'Setting up SSO with Okta', link: '/enterprise/okta-sso' },
    { text: 'Setting up SSO with ADFS', link: '/enterprise/adfs-sso' },
    { text: 'Connect NPM registry', link: '/enterprise/npm' },
    { text: 'Starter Projects', link: '/platform/starter-projects' },
    { text: 'User Management', link: '/enterprise/user-management' },
    { text: 'Aggregating Logs', link: '/enterprise/log-aggregation' },
    { text: 'Data Migration', link: '/enterprise/data-migration' },
  ],
  guide: [
    { text: 'What is StackBlitz', link: '/platform/what-is-stackblitz' },
    { text: 'Getting started', link: '/platform/getting-started' },
    { text: 'Starter projects', link: '/platform/project-starters' },
    { text: 'Importing projects', link: '/platform/importing-projects' },
    { text: 'Embedding projects', link: '/platform/embedding' },
    { text: 'Keyboard shortcuts', link: '/platform/keyboard-shortcuts' },
    { text: 'IDE: what\'s on your screen', link: '/platform/ide-whats-on-your-screen' },
  ],
  open_in_stackblitz: [
    { text: 'Launching projects from GitHub', link: '/guide/open-from-github' },
    { text: 'Creating projects with the SDK', link: '/guide/create-with-sdk' },
    { text: 'Bug reproductions', link: '/guide/bug-reproductions' },
  ],
  runtime_envs: [
    { text: 'Available environments', link: '/platform/available-environments' },
    { text: 'Browser support', link: '/platform/browser-support' },
    { text: 'Browser configuration', link: '/platform/third-party-blocker' },
    { text: 'Project configuration', link: '/platform/project-config' },
    { text: 'Turbo package manager', link: '/platform/turbo' },
  ],
  stackblitz_api: [
    { text: 'JavaScript SDK', link: '/platform/javascript-sdk' },
    { text: 'JavaScript SDK VM', link: '/platform/javascript-sdk-vm' },
    { text: 'POST API', link: '/platform/post-api' },
    { text: 'WebContainer API', link: '/platform/webcontainer-api' },
  ]
};

export default {
  title: 'StackBlitz Developers',
  description: 'Docs | Guides | Tutorials',
  // lastUpdated: true,
  themeConfig: {
    siteTitle: 'StackBlitz Developers',
    // lastUpdatedText: 'Updated Date',
    editLink: {
      pattern: 'https://stackblitz.com/code/github/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page'
    },
    nav: [
      { text: 'Guide', items: linkItems.guide },
      { text: 'Open in StackBlitz', items: linkItems.open_in_stackblitz },
      { text: 'Runtime Envs', items: linkItems.runtime_envs },
      { text: 'JavaScript SDK', link: '/platform/javascript-sdk' },
      { text: 'Enterprise Edition (EE)', link: '/enterprise' },
    ],
    sidebar: [
      {
        text: 'Guide',
        collapsible: true,
        items: linkItems.guide,
      },
      {
        text: 'Open in StackBlitz',
        collapsible: true,
        collapsed: true,
        items: linkItems.open_in_stackblitz,
      },
      {
        text: 'Runtime Environments',
        collapsible: true,
        collapsed: true,
        items: linkItems.runtime_envs,
      },
      {
        text: 'StackBlitz API',
        collapsible: true,
        collapsed: true,
        items: linkItems.stackblitz_api,
      },
      {
        text: 'Enterprise Edition (EE)',
        collapsible: true,
        collapsed: true,
        items: linkItems.enterprise,
      },
    ]
  },
}