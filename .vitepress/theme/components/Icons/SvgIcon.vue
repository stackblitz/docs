<script setup lang="ts">
import { computed } from 'vue';

import { iconsUrls } from '@theme/icons';

const props = defineProps<{
  icon: string;
  size?: string;
}>();

const styleObj = computed(() => {
  const style: Record<string, string> = {};
  const url = iconsUrls[props.icon];
  
  if (url) {
    // Vite may transform SVG assets to data URLs, using single quotes for XML
    // attribute values for some reason. This means we can't always quote URLs
    // with single quotes, or the CSS value might be invalid.
    const quote = url.includes(`"`) ? `'` : `"`;
    style['--icon'] = `url(${quote}${url}${quote})`;
  } else {
    style['visibility'] = 'hidden';
    style['--error'] = `'${props.icon} not found'`;
  }

  if (typeof props.size === 'string') {
    style['--size'] = props.size;
  }

  return style;
});
</script>

<template>
  <span class="icon" :style="styleObj"></span>
</template>

<style scoped lang="scss">
.icon {
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
  flex: none;
  width: var(--size, 1em);
  height: var(--size, 1em);
  // Use inherited text color to paint a square
  background-color: currentColor;
  // Then use the SVG icon as mask
  mask-image: var(--icon);
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: contain;
}
</style>
