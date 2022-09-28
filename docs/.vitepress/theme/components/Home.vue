<script setup lang="ts">
import Footer from './Footer.vue';
import GridLinks from './GridLinks.vue';
import HomeIntro from './HomeIntro.vue';

const topLinks = [
  {
    icon: 'embed',
    title: 'Get Started',
    description:
      'Include the power of StackBlitz in your own code. Customize the UI and experience for your users.',
    url: '/guide/getting-started',
  },
  {
    icon: 'import',
    title: 'API Reference',
    description:
      'Upload from local, import from GitHub, and programmatically open files, folders and projects.',
    url: '/api/not-sure-which-page!',
  },
  {
    icon: 'sdk',
    title: 'Enterprise Edition',
    description:
      'Create and embed StackBlitz projects in your docs, examples and blog posts with only a few lines of code.',
    url: '/api/javascript-sdk',
  },
  {
    icon: 'embed',
    title: 'StackBlitz for Open Source',
    description:
      'Create, import, customize and embed StackBlitz projects into your code. Expand functionality with programmatic access to the VM.',
    url: '/guide/open-from-github',
  },
  {
    icon: 'embed',
    title: 'A Popular Page',
    description: 'Not sure which one yet.',
    url: '/guide/some-page!',
  },
  {
    icon: 'embed',
    title: 'Another Page',
    description: 'Not sure which one yet.',
    url: '/guide/some-page!',
  },
];
</script>

<template>
  <div class="top-section">
    <HomeIntro />
    <GridLinks :links="topLinks" />
  </div>
  <Footer />
</template>

<style scoped>
:root.dark .top-section {
  padding-bottom: 60px;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0) 360px);
}
</style>
