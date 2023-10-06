// --------------------------------
// Link Groups / Sidebar

type LinkGroup =
  | 'api'
  | 'codeflow'
  | 'teams'
  | 'enterprise'
  | 'integrationGuide'
  | 'userGuide'
  | 'webcontainers';

interface LinkItem {
  text: string;
  link: string;
  items?: LinkItem[];
}

const groupLinks: Record<LinkGroup, LinkItem[]> = {
  userGuide: [
    { text: 'What is StackBlitz', link: '/guides/user-guide/what-is-stackblitz' },
    { text: 'Getting started', link: '/guides/user-guide/getting-started' },
    { text: 'Starter projects', link: '/guides/user-guide/starter-projects' },
    { text: 'Available environments', link: '/guides/user-guide/available-environments' },
    { text: 'Importing projects', link: '/guides/user-guide/importing-projects' },
    { text: 'IDE: what’s on your screen', link: '/guides/user-guide/ide-whats-on-your-screen' },
    { text: 'Collections', link: '/guides/user-guide/collections' },
    { text: 'Keyboard shortcuts', link: '/guides/user-guide/keyboard-shortcuts' },
    { text: 'General FAQs', link: '/guides/user-guide/general-faqs' },
  ],
  integrationGuide: [
    { text: 'Embedding projects', link: '/guides/integration/embedding' },
    { text: 'Launching projects from GitHub', link: '/guides/integration/open-from-github' },
    { text: 'Creating projects with the SDK', link: '/guides/integration/create-with-sdk' },
    { text: 'Bug reproductions', link: '/guides/integration/bug-reproductions' },
  ],
  codeflow: [
    { text: 'What is Codeflow?', link: '/codeflow/what-is-codeflow' },
    { text: 'Using pr.new', link: '/codeflow/using-pr-new' },
    { text: 'Working in Codeflow IDE', link: '/codeflow/working-in-codeflow-ide' },
    { text: 'Integrating CodeflowApp bot', link: '/codeflow/integrating-codeflowapp-bot' },
    { text: 'Environment Variables', link: '/codeflow/environment-variables' },
    {
      text: 'Content updates with Web Publisher',
      link: '/codeflow/content-updates-with-web-publisher',
    },
    { text: 'Integrating Web Publisher', link: '/codeflow/integrating-web-publisher' },
    { text: 'Codeflow FAQ', link: '/codeflow/codeflow-faq' },
  ],
  teams: [
    { text: 'What is StackBlitz Teams', link: '/teams/what-is-stackblitz-teams.md' },
    { text: 'Setting Up Your Team', link: '/teams/setting-up-your-team' },
    { text: 'Collaboration and Access Control', link: '/teams/collaboration-and-access-control' },
    { text: 'Pull Request Review Integration', link: '/teams/pull-request-review-integration' },
    { text: 'Environment Variables', link: '/teams/environment-variables' },
    { text: 'Private NPM Registry Integration', link: '/teams/private-npm-registry-integration' },
  ],
  api: [
    {
      text: 'JavaScript SDK',
      link: '/platform/api/javascript-sdk',
      items: [
        { text: 'SDK overview', link: '/platform/api/javascript-sdk' },
        { text: 'Options reference', link: '/platform/api/javascript-sdk-options' },
        { text: 'Controlling embeds', link: '/platform/api/javascript-sdk-vm' },
        { text: 'Managing dependencies', link: '/platform/api/javascript-sdk-dependencies' },
      ],
    },
    { text: 'POST API', link: '/platform/api/post-api' },
    { text: 'WebContainer API', link: '/platform/api/webcontainer-api' },
  ],
  webcontainers: [
    { text: 'Browser support', link: '/platform/webcontainers/browser-support' },
    { text: 'Browser configuration', link: '/platform/webcontainers/browser-config' },
    { text: 'Project configuration', link: '/platform/webcontainers/project-config' },
    { text: 'Turbo package manager', link: '/platform/webcontainers/turbo-package-manager' },
    { text: 'Troubleshooting', link: '/platform/webcontainers/troubleshooting-webcontainers' },
  ],
  enterprise: [
    { text: 'Overview', link: '/enterprise/overview' },
    {
      text: 'Installation',
      link: '/enterprise/installation/quickstart',
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
    { text: 'Connect npm Registry', link: '/enterprise/npm' },
    { text: 'Starter Projects', link: '/enterprise/starter-projects' },
    { text: 'User Management', link: '/enterprise/user-management' },
    { text: 'Aggregating Logs', link: '/enterprise/log-aggregation' },
    { text: 'Data Migration', link: '/enterprise/data-migration' },
  ],
};

const linkGroups: Record<LinkGroup, { text: string; items: LinkItem[] }> = {
  userGuide: {
    text: 'User Guide',
    items: groupLinks.userGuide,
  },
  integrationGuide: {
    text: 'Integration Guide',
    items: groupLinks.integrationGuide,
  },
  codeflow: {
    text: 'Codeflow',
    items: groupLinks.codeflow,
  },
  teams: {
    text: 'Teams',
    items: groupLinks.teams,
  },
  api: {
    text: 'StackBlitz API',
    items: groupLinks.api,
  },
  webcontainers: {
    text: 'WebContainers',
    items: groupLinks.webcontainers,
  },
  enterprise: {
    text: 'Enterprise Edition',
    items: groupLinks.enterprise,
  },
};

export const defaultGroupLink = (linkGroup: LinkGroup) => groupLinks[linkGroup][0].link;

export const sidebarLinks = (
  sidebar: 'main' | 'enterprise',
  activeLinkGroups: LinkGroup[] = []
) => {
  if (sidebar === 'enterprise') {
    return [linkGroups.enterprise];
  }

  return Object.entries(linkGroups)
    .filter(([key]) => key !== 'enterprise')
    .map(([key, data]) => ({
      ...data,
      collapsed: !activeLinkGroups.includes(key as LinkGroup),
    }));
};

// --------------------------------
// Home

export const homeTopLinks = [
  {
    icon: '/icons/fa-file-import.svg',
    title: 'Get Started',
    description:
      'Explore the full potential of StackBlitz: from writing code or spinning quick demos to making your docs delightful.',
    url: '/guides/user-guide/what-is-stackblitz',
  },
  {
    icon: '/icons/fa-browser.svg',
    title: 'Codeflow',
    description:
      'One click opens a full in-browser IDE for your repos, issues, and PRs. No more cloning, installing, stashing!',
    url: '/codeflow/what-is-codeflow',
  },
  {
    icon: '/icons/fa-brackets-curly.svg',
    title: 'API Reference',
    description:
      'Embed GitHub repos, create new projects, build educational experiences, all programmatically with our SDK.',
    url: '/platform/api/javascript-sdk',
  },
  {
    icon: '/icons/fa-life-ring.svg',
    title: 'Integrating StackBlitz',
    description:
      'Follow guides on building interactive playgrounds, improving bug repros, and using StackBlitz for tech education.',
    url: '/guides/integration/open-from-github',
  },
  {
    icon: '/icons/fa-users.svg',
    title: 'Teams',
    description:
      'With stackBlitz Teams you create a secure, private workspace for you and your teammates.',
    url: '/teams/what-is-stackblitz-teams',
  },
  {
    icon: '/icons/fa-users.svg',
    title: 'Enterprise Edition',
    description:
      'Run StackBlitz behind your firewall, on new or existing Kubernetes clusters, with options for air gapping and SSO.',
    url: '/enterprise/overview',
  },
];

export const homeExternalLinks = [
  {
    title: 'StackBlitz Blog',
    description:
      'Stay up to date with our news, read tech posts from our engineers, and join in celebrating our community.',
    url: 'https://blog.stackblitz.com/',
    large: true,
    bgImgLight: '/img/theme/link-bg-bolt-light.jpg',
    bgImgDark: '/img/theme/link-bg-bolt-dark.jpg',
  },
  {
    title: 'Community',
    description:
      'Join our supportive community on Discord, ask questions, and share your StackBlitz projects.',
    url: 'https://discord.gg/stackblitz',
    large: true,
    bgImgLight: '/img/theme/link-bg-squares-light.png',
    bgImgDark: '/img/theme/link-bg-squares-dark.png',
  },
];

// --------------------------------
// Footer

export const footerSections: Array<{ title: string; items: LinkItem[] }> = [
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
        text: 'From a GitHub Repository',
        link: '/guides/user-guide/importing-projects#import-from-github',
      },
      {
        text: 'From your computer',
        link: '/guides/user-guide/importing-projects#upload-from-your-computer',
      },
    ],
  },
  {
    title: 'Product',
    items: [
      { text: 'Docs', link: 'https://developer.stackblitz.com/' },
      { text: 'Enterprise', link: 'https://stackblitz.com/enterprise' },
      { text: 'Pricing', link: 'https://stackblitz.com/membership' },
      { text: 'Case Studies', link: 'https://stackblitz.com/case-studies' },
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
