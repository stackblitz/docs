const linkItems = {
  enterprise: [
    { text: 'Overview', link: '/w' },
    {
      text: 'Installation',
      items: [
        { text: 'Quickstart on Bare Metal', link: '/w' },
        { text: 'Quickstart on GCP (Non-GKE)', link: '/w' },
        { text: 'Quickstart (Existing Cluster)', link: '/w' },
        { text: 'Administrator Guide', link: '/w' },
        { text: 'Air Gapped Installs', link: '/w' },
      ]
    },
    { text: 'Configuring DNS & TLS', link: '/w' },
    { text: 'Configuring Firewall Rules', link: '/w' },
    { text: 'Setting up SSO', link: '/w' },
    { text: 'Setting up SSO with Okta', link: '/w' },
    { text: 'Setting up SSO with ADFS', link: '/w' },
    { text: 'Connect NPM registry', link: '/w' },
    { text: 'Starter Projects', link: '/w' },
    { text: 'User Management', link: '/w' },
    { text: 'Aggregating Logs', link: '/w' },
    { text: 'Data Migration', link: '/w' },
  ],
  guide: [
    { text: 'What is StackBlitz', link: '/w' },
    { text: 'Getting started', link: '/w' },
    { text: 'Starter projects', link: '/w' },
    { text: 'Importing', link: '/w' },
    { text: 'Embedding', link: '/w' },
    { text: 'Keyboard shortcuts', link: '/w' },
    { text: 'IDE: what\'s on your screen', link: '/w' },
  ],
  open_in_stackblitz: [
    { text: 'Launching projects from GitHub', link: '/w' },
    { text: 'Creating projects with the SDK', link: '/w' },
    { text: 'Bug reproductions', link: '/w' },
  ],
  runtime_envs: [
    { text: 'Available environments', link: '/w' },
    { text: 'Browser support', link: '/w' },
    { text: 'Browser configuration', link: '/w' },
    { text: 'Project configuration', link: '/w' },
    { text: 'Turbo package manager', link: '/w' },
  ],
  stackblitz_api: [
    { text: 'JavaScript SDK', link: '/w' },
    { text: 'JavaScript SDK VM', link: '/w' },
    { text: 'POST API', link: '/w' },
    { text: 'WebContainer API', link: '/w' },
  ]
};

export default {
  title: 'StackBlitz Developers',
  description: 'Docs | Guides | Tutorials',
  themeConfig: {
    siteTitle: 'StackBlitz Developers',
    editLink: {
      pattern: 'https://stackblitz.com/code/github/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page'
    },
    nav: [
      { text: 'Guide', items: linkItems.guide },
      { text: 'Open in StackBlitz', items: linkItems.open_in_stackblitz },
      { text: 'Runtime Envs', items: linkItems.runtime_envs },
      { text: 'JavaScript SDK', link: '/sdk' },
      { text: 'Enterprise Edition (EE)', link: '/ee' },
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
        items: linkItems.open_in_stackblitz,
      },
      {
        text: 'Runtime Environments',
        collapsible: true,
        items: linkItems.runtime_envs,
      },
      {
        text: 'StackBlitz API',
        collapsible: true,
        items: linkItems.stackblitz_api,
      },
      {
        text: 'Enterprise Edition (EE)',
        collapsible: true,
        items: linkItems.enterprise,
      },
    ]
  },
}