export const userGuide = [
  { text: 'What is StackBlitz', link: '/guides/user-guide/what-is-stackblitz' },
  { text: 'Getting started', link: '/guides/user-guide/getting-started' },
  { text: 'Starter projects', link: '/guides/user-guide/starter-projects' },
  { text: 'Available environments', link: '/guides/user-guide/available-environments' },
  { text: 'Importing projects', link: '/guides/user-guide/importing-projects' },
  { text: 'IDE: what’s on your screen', link: '/guides/user-guide/ide-whats-on-your-screen' },
  { text: 'Keyboard shortcuts', link: '/guides/user-guide/keyboard-shortcuts' },
];

export const integrationGuide = [
  { text: 'Embedding projects', link: '/guides/integration/embedding' },
  { text: 'Launching projects from GitHub', link: '/guides/integration/open-from-github' },
  { text: 'Creating projects with the SDK', link: '/guides/integration/create-with-sdk' },
  { text: 'Bug reproductions', link: '/guides/integration/bug-reproductions' },
];

export const codeflowGuide = [
  { text: 'What is Codeflow?', link: '/guides/codeflow/what-is-codeflow' },
  { text: 'Working in Codeflow IDE', link: '/guides/codeflow/working-in-codeflow-ide' },
  { text: 'Making a PR with pr.new', link: '/guides/codeflow/making-a-pr-with-pr-new' },
  { text: 'Reviewing PRs on Codeflow IDE', link: '/guides/codeflow/rewieving-prs-on-codeflow-ide' },
  { text: 'Package Managers', link: '/guides/codeflow/package-managers' },
  { text: 'Integrating Codeflow IDE', link: '/guides/codeflow/integrating-codeflow-ide' },
  { text: 'Integrating CodeflowApp bot', link: '/guides/codeflow/integrating-codeflowapp-bot' },
  { text: 'Codeflow FAQ', link: '/guides/codeflow/codeflow-faq' },
];

export const api = [
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
];

export const webcontainers = [
  { text: 'Browser support', link: '/platform/webcontainers/browser-support' },
  { text: 'Browser configuration', link: '/platform/webcontainers/browser-config' },
  { text: 'Project configuration', link: '/platform/webcontainers/project-config' },
  { text: 'Turbo package manager', link: '/platform/webcontainers/turbo-package-manager' },
];

export const enterprise = [
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
  { text: 'Connect NPM registry', link: '/enterprise/npm' },
  { text: 'Starter Projects', link: '/enterprise/starter-projects' },
  { text: 'User Management', link: '/enterprise/user-management' },
  { text: 'Aggregating Logs', link: '/enterprise/log-aggregation' },
  { text: 'Data Migration', link: '/enterprise/data-migration' },
];
