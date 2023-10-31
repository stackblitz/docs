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
    style['--icon'] = `url('${url}')`;
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
  color: inherit;
  // Use SVG icon as mask for background
  -webkit-mask: var(--icon) center/contain no-repeat;
  mask: var(--icon) center/contain no-repeat;
  background-color: currentColor;
}
</style>
