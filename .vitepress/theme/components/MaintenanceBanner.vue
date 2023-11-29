<script setup lang="ts">
import CloseIcon from './Icons/CloseIcon.vue';
import WarningIcon from './Icons/WarningIcon.vue';
import { ref, onMounted } from 'vue';

const key = 'shouldShowMaintenanceTopBanner';

let shouldShowTopBanner = ref(false);

onMounted(() => {
  shouldShowTopBanner.value = localStorage.getItem(key) !== 'false';
  if (shouldShowTopBanner.value) {
    document.querySelector('.Layout')?.classList.add('with-banner');
  }
});

function onCloseClick() {
  localStorage.setItem(key, 'false');

  document.querySelector('.Layout')?.classList.remove('with-banner');
  shouldShowTopBanner.value = false;
}
</script>

<template>
  <div class="top-banner" :class="[!shouldShowTopBanner && 'hide']">
    <div class="container">
      <WarningIcon class="icon" />
      <span class="text">
        <b>Scheduled StackBlitz Maintenance</b><span class="reason"> for SOC 2 Compliance Upgrades</span>: <b>Saturday, December 2nd, 8AM PST to 12PM PST</b>
      </span>
      <a class="link" href="https://twitter.com/stackblitz" target="_blank">Learn more</a>
    </div>
    <button class="close-button" @click="onCloseClick">
      <CloseIcon />
    </button>
  </div>
</template>

<style scoped lang="scss">
.top-banner.hide {
  display: none;
}

.top-banner {
  z-index: var(--vp-z-index-nav);
  width: 100%;
  height: var(--sbdocs-top-banner-height);
  position: fixed;
  top: 0;
  left: 0;
  background-color: #920f4e;
  display: flex;
  justify-content: center;
}

.icon {
  flex: none;
}

.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Inter', sans-serif;
  color: #fff;
  padding-inline-start: 24px;
  /* To not overlap the close icon */
  padding-inline-end: 48px;

  @media (max-width: 960px) {
    padding-inline-start: 12px;
    /* To not overlap the close icon */
    padding-inline-end: 36px;
  }
}

.logo {
  margin-inline-end: 17px;
  width: 24px;
  height: 24px;
}

.text {
  margin-inline-start: 16px;
  margin-inline-end: 32px;
  font-size: 13px;
  line-height: 16px;

  @media (max-width: 600px) {
    font-size: 11px;
    margin-inline-end: 16px;
  }
}

.reason {
  @media (max-width: 600px) {
    display: none;
  }
}

.link {
  background-color: #fff;
  padding: 10px 16px;
  font-size: 11.5px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  border-radius: 6px;

  color: #000;
  &:hover {
    opacity: 0.9;
  }

  z-index: 1;
  cursor: pointer;
  white-space: nowrap;

  @media (max-width: 600px) {
    padding: 8px 12px;
  }
}

.close-button {
  position: absolute;
  top: 6px;
  right: 15px;
  z-index: 1;
  padding: 10px;

  > svg {
    fill: #fff;
    width: 10px;
    height: 16px;
  }

  &:hover {
    > svg {
      opacity: 0.5;
    }
  }

  @media (max-width: 960px) {
    right: 7px;
  }
}
</style>
