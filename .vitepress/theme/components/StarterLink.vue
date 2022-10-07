<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  icon: string;
  title: string;
  link: string;
}>();

const subtitle = computed(() => {
  if (typeof props.link === 'string') {
    const url = props.link.split(/[\?\#]/)[0].trim();
    return url.replace(/^https?:\/\/(www\.)?/g, '').replace(/\/$/, '');
  }
  return '';
});
</script>

<template>
  <a class="link" :href="link" rel="noopener" target="_blank">
    <img v-if="icon" alt="" :src="icon" class="icon" />
    <span v-else class="default-icon"></span>
    <span class="text">
      <span class="title">{{ title }}</span>
      <span class="subtitle">{{ subtitle }}</span>
    </span>
  </a>
</template>

<style scoped lang="scss">
@import '../styles/vars';

.link {
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 64px;
  border-radius: 8px;
  border: solid 2px hsl(200 30% 40% / 0.15);
  padding: 10px 28px 10px 20px;
  gap: 16px;
  text-align: left;
  color: var(--vp-c-text-2);
  text-decoration: none;
  background-color: var(--vp-c-bg);
  transition: box-shadow 0.1s ease, transform 0.1s ease;

  &:hover {
    border-color: var(--sb-foreground-highlight-high);
    transform: translateY(-2px);
    color: var(--vp-c-text-1);
  }

  &:focus-visible {
    outline: solid 2px var(--sb-foreground-highlight-high);
    outline-offset: -2px;
  }
}

.icon {
  flex: none;
  width: 24px;
  height: 24px;
  object-fit: contain;
  object-position: center;
}

.default-icon {
  flex: none;
  width: 24px;
  height: 24px;
  background-color: currentColor;
  -webkit-mask-image: url(/icons/fa-display-code.svg);
  -webkit-mask-size: 24px 24px;
  mask-image: url(/icons/fa-display-code.svg);
  mask-size: 24px 24px;
}

.text {
  flex: 1 1 auto;
  font-size: 14px;
  line-height: 20px;
}

.title {
  display: block;
  font-size: 15px;
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.subtitle {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--vp-c-text-2);
  transition: color 0.1s ease;

  .link:hover &,
  .link:focus & {
    color: inherit;
  }
}
</style>
