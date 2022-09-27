export const homeLinks = [
  {
    icon: 'embed',
    title: 'Embedding',
    description:
      'Include the power of StackBlitz in your own code. Customize the UI and experience for your users.',
    url: '/guide/embedding',
  },
  {
    icon: 'import',
    title: 'Importing',
    description:
      'Upload from local, import from GitHub, and programmatically open files, folders and projects.',
    url: '/guide/importing-projects',
  },
  {
    icon: 'sdk',
    title: 'JavaScript SDK',
    description:
      'Create and embed StackBlitz projects in your docs, examples and blog posts with only a few lines of code.',
    url: '/api/javascript-sdk',
  },
  {
    title: 'StackBlitz API',
    description:
      'Create, import, customize and embed StackBlitz projects into your code. Expand functionality with programmatic access to the VM.',
    url: '/api/javascript-sdk',
    large: true,
    bgImgLight: '/img/home-bg-platform-api-light.png',
    bgImgDark: '/img/home-bg-platform-api-dark.png',
  },
  {
    title: 'Enterprise',
    description:
      'Run StackBlitz behind your firewall, on new or existing Kubernetes clusters, with options for air gapping and SSO.',
    url: '/enterprise/overview',
    large: true,
    invert: true,
    bgImgLight: '/img/home-bg-enterprise-light.png',
    bgImgDark: '/img/home-bg-enterprise-dark.png',
  },
];

export const userGuide = [
  { text: 'What is StackBlitz', link: '/guide/what-is-stackblitz' },
  { text: 'Getting started', link: '/guide/getting-started' },
  { text: 'Starter projects', link: '/guide/project-starters' },
  { text: 'Importing projects', link: '/guide/importing-projects' },
  { text: 'Embedding projects', link: '/guide/embedding' },
  { text: 'Keyboard shortcuts', link: '/guide/keyboard-shortcuts' },
  { text: 'IDE: what’s on your screen', link: '/guide/ide-whats-on-your-screen' },
];

export const openSourceGuide = [
  { text: 'Launching projects from GitHub', link: '/guide/open-from-github' },
  { text: 'Creating projects with the SDK', link: '/guide/create-with-sdk' },
  { text: 'Bug reproductions', link: '/guide/bug-reproductions' },
];

export const environment = [
  { text: 'Available environments', link: '/api/available-environments' },
  { text: 'Browser support', link: '/api/browser-support' },
  { text: 'Browser configuration', link: '/api/third-party-blocker' },
  { text: 'Project configuration', link: '/api/project-config' },
  { text: 'Turbo package manager', link: '/api/turbo' },
];

export const api = [
  { text: 'JavaScript SDK', link: '/api/javascript-sdk' },
  { text: 'JavaScript SDK VM', link: '/api/javascript-sdk-vm' },
  { text: 'POST API', link: '/api/post-api' },
  { text: 'WebContainer API', link: '/api/webcontainer-api' },
];

export const enterprise = [
  { text: 'Overview', link: '/enterprise/overview' },
  {
    text: 'Installation',
    items: [
      { text: 'Quickstart on Bare Metal', link: '/enterprise/installation/quickstart' },
      { text: 'Quickstart on GCP (Non-GKE)', link: '/enterprise/installation/quickstart-gcp' },
      {
        text: 'Quickstart (Existing Cluster)',
        link: '/enterprise/installation/quickstart-existing-cluster',
      },
      { text: 'Administrator Guide', link: '/enterprise/installation/administrator-guide' },
      { text: 'Air Gapped Installs', link: '/enterprise/installation/air-gapped-installs' },
    ],
  },
  { text: 'Configuring DNS & TLS', link: '/enterprise/configuring-dns' },
  { text: 'Configuring Firewall Rules', link: '/enterprise/configuring-firewall-rules' },
  { text: 'Setting up SSO', link: '/enterprise/sso' },
  { text: 'Setting up SSO with Okta', link: '/enterprise/okta-sso' },
  { text: 'Setting up SSO with ADFS', link: '/enterprise/adfs-sso' },
  { text: 'Connect NPM registry', link: '/enterprise/npm' },
  { text: 'Starter Projects', link: '/enterprise/starter-projects' },
  { text: 'User Management', link: '/enterprise/user-management' },
  { text: 'Aggregating Logs', link: '/enterprise/log-aggregation' },
  { text: 'Data Migration', link: '/enterprise/data-migration' },
];

export const footerSections = [
  {
    title: 'Workspaces',
    items: [
      { text: 'Popular', link: 'https://stackblitz.com/?starters=popular' },
      { text: 'Frontend', link: 'https://stackblitz.com/?starters=frontend' },
      { text: 'Backend', link: 'https://stackblitz.com/?starters=backend' },
      { text: 'Fullstack', link: 'https://stackblitz.com/?starters=fullstack' },
      { text: 'Vite', link: 'https://stackblitz.com/?starters=vite' },
      { text: 'Docs, Blogs & Slides', link: 'https://stackblitz.com/?starters=docs' },
      { text: 'Vanilla', link: 'https://stackblitz.com/?starters=vanilla' },
    ],
  },
  {
    title: 'Start a new Project',
    items: [
      { text: 'From a Workspace', link: 'https://stackblitz.com/?starters=popular' },
      {
        text: 'From a GitHub Repo',
        link: 'https://developer.stackblitz.com/guide/importing-projects#import-from-github',
      },
      {
        text: 'From your computer',
        link: 'https://developer.stackblitz.com/guide/importing-projects#upload-from-your-computer',
      },
    ],
  },
  {
    title: 'Product',
    items: [
      { text: 'Docs', link: 'https://developer.stackblitz.com/' },
      { text: 'Enterprise', link: 'https://stackblitz.com/enterprise' },
      { text: 'Pricing', link: 'https://stackblitz.com/membership' },
      { text: 'Case Studies', link: 'https://stackblitz.com/case-studies/google' },
    ],
  },
  {
    title: 'Company',
    items: [
      { text: 'Blog', link: 'https://blog.stackblitz.com/' },
      { text: 'Careers', link: 'https://stackblitz.com/careers' },
      { text: 'Community', link: 'https://discord.gg/stackblitz' },
      { text: 'Enterprise Sales', link: 'https://stackblitz.com/enterprise-contact' },
      { text: 'Privacy', link: 'https://stackblitz.com/privacy-policy' },
      { text: 'Terms of Service', link: 'https://stackblitz.com/terms-of-service' },
    ],
  },
  {
    title: 'Connect',
    items: [
      { text: 'GitHub', link: 'https://github.com/stackblitz/core' },
      { text: 'Twitter', link: 'https://twitter.com/stackblitz' },
      { text: 'Discord', link: 'https://discord.gg/stackblitz' },
    ],
  },
];
