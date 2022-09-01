export const homeLinks = [
  {
    icon: 'embed',
    title: 'Embedding',
    description:
      'Include the power of StackBlitz in your own code. Customize the UI and experience for your users.',
    url: '/docs/platform/embedding',
  },
  {
    icon: 'import',
    title: 'Importing',
    description:
      'Upload from local, import from GitHub, and programmatically open files, folders and projects.',
    url: '/docs/platform/importing-projects',
  },
  {
    icon: 'sdk',
    title: 'JavaScript SDK',
    description:
      'Create and embed StackBlitz projects in your docs, examples and blog posts with only a few lines of code.',
    url: '/docs/platform/javascript-sdk',
  },
  {
    title: 'StackBlitz API',
    description:
      'Create, import, customize and embed StackBlitz projects into your code. Expand functionality with programmatic access to the VM.',
    url: '/docs/platform/javascript-sdk',
    large: true,
    bgImgLight: '/img/home-bg-platform-api-light.png',
    bgImgDark: '/img/home-bg-platform-api-dark.png',
  },
  {
    title: 'Enterprise',
    description:
      'Run StackBlitz behind your firewall, on new or existing Kubernetes clusters, with options for air gapping and SSO.',
    url: '/docs/enterprise',
    large: true,
    invert: true,
    bgImgLight: '/img/home-bg-enterprise-light.png',
    bgImgDark: '/img/home-bg-enterprise-dark.png',
  },
];

export const userGuide = [
  { text: 'What is StackBlitz', link: '/docs/platform/what-is-stackblitz' },
  { text: 'Getting started', link: '/docs/platform/getting-started' },
  { text: 'Starter projects', link: '/docs/platform/project-starters' },
  { text: 'Importing projects', link: '/docs/platform/importing-projects' },
  { text: 'Embedding projects', link: '/docs/platform/embedding' },
  { text: 'Keyboard shortcuts', link: '/docs/platform/keyboard-shortcuts' },
  { text: "IDE: what's on your screen", link: '/docs/platform/ide-whats-on-your-screen' },
];

export const developerGuide = [
  { text: 'Launching projects from GitHub', link: '/docs/guide/open-from-github' },
  { text: 'Creating projects with the SDK', link: '/docs/guide/create-with-sdk' },
  { text: 'Bug reproductions', link: '/docs/guide/bug-reproductions' },
];

export const environment = [
  { text: 'Available environments', link: '/docs/platform/available-environments' },
  { text: 'Browser support', link: '/docs/platform/browser-support' },
  { text: 'Browser configuration', link: '/docs/platform/third-party-blocker' },
  { text: 'Project configuration', link: '/docs/platform/project-config' },
  { text: 'Turbo package manager', link: '/docs/platform/turbo' },
];

export const api = [
  { text: 'JavaScript SDK', link: '/docs/platform/javascript-sdk' },
  { text: 'JavaScript SDK VM', link: '/docs/platform/javascript-sdk-vm' },
  { text: 'POST API', link: '/docs/platform/post-api' },
  { text: 'WebContainer API', link: '/docs/platform/webcontainer-api' },
];

export const enterprise = [
  { text: 'Overview', link: '/docs/enterprise/overview' },
  {
    text: 'Installation',
    items: [
      { text: 'Quickstart on Bare Metal', link: '/docs/enterprise/installation/quickstart' },
      { text: 'Quickstart on GCP (Non-GKE)', link: '/docs/enterprise/installation/quickstart-gcp' },
      {
        text: 'Quickstart (Existing Cluster)',
        link: '/docs/enterprise/installation/quickstart-existing-cluster',
      },
      { text: 'Administrator Guide', link: '/docs/enterprise/installation/administrator-guide' },
      { text: 'Air Gapped Installs', link: '/docs/enterprise/installation/air-gapped-installs' },
    ],
  },
  { text: 'Configuring DNS & TLS', link: '/docs/enterprise/configuring-dns' },
  { text: 'Configuring Firewall Rules', link: '/docs/enterprise/configuring-firewall-rules' },
  { text: 'Setting up SSO', link: '/docs/enterprise/sso' },
  { text: 'Setting up SSO with Okta', link: '/docs/enterprise/okta-sso' },
  { text: 'Setting up SSO with ADFS', link: '/docs/enterprise/adfs-sso' },
  { text: 'Connect NPM registry', link: '/docs/enterprise/npm' },
  { text: 'Starter Projects', link: '/docs/platform/starter-projects' },
  { text: 'User Management', link: '/docs/enterprise/user-management' },
  { text: 'Aggregating Logs', link: '/docs/enterprise/log-aggregation' },
  { text: 'Data Migration', link: '/docs/enterprise/data-migration' },
];
