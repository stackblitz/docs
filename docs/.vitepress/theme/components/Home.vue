<script setup lang="ts">
import CardLink from './CardLink.vue';
import Footer from './Footer.vue';
import GridLinks from './GridLinks.vue';
import HomeIntro from './HomeIntro.vue';

const topLinks = [
  {
    icon: 'embed',
    title: 'Get Started',
    description:
      'Explore the full potential of StackBlitz: from writing code or spinning quick demos to making your docs delightful.',
    url: '/guides/user-guide/what-is-stackblitz',
  },
  {
    icon: 'embed',
    title: 'Integrating StackBlitz',
    description:
      'Follow guides on creating interactive playgrounds, transforming your documentation, improving bug reproductions, and using StackBlitz for tech education.',
    url: '/guides/integration/open-from-github',
  },
  {
    icon: 'sdk',
    title: 'API Reference',
    description:
      'Unlock the potential of WebContainers with our JavaScript SDK. Embed  GitHub repos, create new projects, and build new educational experiences, all programmatically.',
    url: '/platform/api/javascript-sdk',
  },
  {
    icon: 'embed',
    title: 'WebContainers',
    description:
      'Consult the documentation on browser support, package managers, project configuration, performance, and troubleshooting.',
    url: '/platform/webcontainers/browser-support',
  },
  {
    icon: 'embed',
    title: 'Browser Support',
    description:
      'Tweak your browser with this step-by-step guide to unleash the full power of WebContainers!',
    url: '/platform/webcontainers/browser-support',
  },
  {
    icon: 'embed',
    title: 'Enterprise Edition',
    description:
      'Run StackBlitz behind your firewall, on new or existing Kubernetes clusters, with options for air gapping and SSO.',
    url: '/enterprise/overview',
  },
];

const externalLinks = [
  {
    title: 'StackBlitz Blog',
    description: 'Stay up to date with our news and developers’ insights.',
    url: 'https://blog.stackblitz.com/',
    large: true,
    bgImgLight: '/img/link-bg-bolt-light.jpg',
    bgImgDark: '/img/link-bg-bolt-dark.jpg',
  },
  {
    title: 'Community',
    description:
      'Join our supportive community on Discord, ask questions, and share your StackBlitz projects.',
    url: 'https://discord.com/invite/EQ7uJQxC',
    large: true,
    bgImgLight: '/img/link-bg-squares-light.png',
    bgImgDark: '/img/link-bg-squares-dark.png',
  },
];
</script>

<template>
  <div class="top-section">
    <HomeIntro />
    <GridLinks :links="topLinks" />
  </div>
  <div class="external-links">
    <h2>Learn More</h2>
    <GridLinks :links="externalLinks" />
  </div>
  <Footer />
</template>

<style scoped lang="scss">
@import '../styles/vars.scss';

.top-section {
  padding-bottom: 60px;
}

.external-links {
  padding-bottom: 60px;

  :root.dark & {
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0) 360px);
  }

  h2 {
    margin-bottom: 40px;
    padding: 0 24px;
    text-align: center;
    font-family: Gilroy, var(--vp-font-family-base);
    font-size: 24px;
    line-height: 1.2;
    font-weight: 600;
  }

  @media (min-width: $bp-medium) {
    padding-top: 20px;
    padding-bottom: 80px;
    h2 {
      margin-bottom: 50px;
      font-size: 28px;
    }
  }
}
</style>
