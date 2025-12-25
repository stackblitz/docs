<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';

const { Layout } = DefaultTheme;

import Feedback from '@theme/components/Feedback/Feedback.vue';
import Chatlio from '@theme/components/Chatlio.vue';
import NavBarAuthButtons from '@theme/components/AuthButtons/NavBarAuthButtons.vue';
import NavScreenAuthButtons from '@theme/components/AuthButtons/NavScreenAuthButtons.vue';
</script>

<template>
  <Layout>
    <template #nav-bar-content-after>
      <NavBarAuthButtons />
    </template>
    <template #doc-footer-before>
      <ClientOnly>
        <Feedback />
        <Chatlio />
      </ClientOnly>
    </template>
    <template #nav-screen-content-after>
      <NavScreenAuthButtons />
    </template>
  </Layout>
</template>
