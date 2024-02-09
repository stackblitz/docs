<script setup lang="ts">
import StarterLink from './StarterLink.vue';

defineProps<{ links: any[] }>();
</script>

<template>
  <ul class="grid">
    <li v-for="link in links" class="item">
      <StarterLink v-bind="link" />
    </li>
  </ul>
</template>

<style scoped lang="scss">
.grid {
  display: grid;
  margin: 24px 0;
  padding: 0;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 16px;
  list-style: none;
}

.item {
  margin: 0;
}

.item > a {
  height: 100%;
  text-decoration: none;
}
</style>
