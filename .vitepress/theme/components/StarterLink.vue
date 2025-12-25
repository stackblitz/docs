<script setup lang="ts">
import { computed } from 'vue';
import SvgIcon from '@theme/components/Icons/SvgIcon.vue';

const props = defineProps<{
  icon: string;
  iconInvert?: boolean;
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
    <img
      v-if="icon"
      alt=""
      class="icon"
      :class="{ icon_invert: iconInvert }"
      height="24"
      width="24"
      :src="icon"
    />
    <SvgIcon v-else icon="fa-link" size="24px" />
    <span class="text">
      <span class="title">{{ title }}</span>
      <span class="subtitle">{{ subtitle }}</span>
    </span>
  </a>
</template>

<style scoped lang="scss">
.link {
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 64px;
  border-radius: 8px;
  border: solid 2px hsl(200 30% 40% / 0.15);
  padding: 10px 24px 10px 18px;
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
  object-fit: contain;
  object-position: center;
}

:root.dark .icon_invert {
  filter: invert(1) hue-rotate(0.5turn);
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
