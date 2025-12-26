<script setup lang="ts">

import { ref, effect } from 'vue';
import { useRoute, useData} from 'vitepress';

const scriptId = 'chatlio-widget-src';
const webComponentName = 'chatlio-widget';
const registered = ref(false);

const route = useRoute();
const data = useData();
const chatlio = data.theme.value.chatlio;

const loadChatlio = () => {
  if (!chatlio.id || document.getElementById(scriptId)) return;

  const script = document.createElement('script');
  script.id = scriptId;
  script.async = true;
  script.src = 'https://js.chatlio.com/widget.js';
  document.body.appendChild(script);
  customElements.whenDefined(webComponentName).then(() => {
    registered.value = true;
  });
};

effect(() => {
  // We load the widget on allowed pages, but then persist it across all the pages in case you want
  // to browse the docs and keep the chat.
  if (chatlio.allowedRoutes.some((allowedRoute: string) => route.path.match(allowedRoute))) {
    loadChatlio();
  }
});
</script>

<template>
  <chatlio-widget v-if="chatlio.id  && registered" :widgetid="chatlio.id" />
</template>
