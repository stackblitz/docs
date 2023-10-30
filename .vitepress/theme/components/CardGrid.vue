<script setup lang="ts">
import CardLink from './CardLink.vue';

defineProps<{ links: any[] }>();
</script>

<template>
  <ul class="grid">
    <li v-for="link in links" :class="{ item: true, item_large: link.large }">
      <CardLink v-bind="link" />
    </li>
  </ul>
</template>

<style scoped lang="scss">
.grid {
  display: grid;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  gap: 24px;
  list-style: none;

  @media (min-width: 680px) {
    grid-template-columns: 1fr 1fr;

    .item > a {
      height: 100%;
    }
  }
  @media (min-width: 960px) {
    grid-template-columns: repeat(6, 1fr);
    .item {
      grid-column: span 2;
    }
    .item_large {
      grid-column: span 3;
    }
  }
}
</style>
