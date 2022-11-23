<script setup lang="ts">
import { watch, ref } from 'vue';
import { useRoute } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import LoadingIcon from './LoadingIcon.vue';
import { sendEvent } from '../scripts/gtag';

const { Layout } = DefaultTheme;

enum FeedbackState {
  START = 'START',
  YES = 'YES',
  NO = 'NO',
  END = 'END',
}

const route = useRoute();
const currentState = ref(FeedbackState.START);
const feedback = ref('');
const isSending = ref(false);
const hasError = ref(false);

function onButtonClick(value: FeedbackState.YES | FeedbackState.NO) {
  currentState.value = value;
  sendEvent({
    eventName: 'feedback_helpful',
    pageTitle: route.data.title,
    value,
  });
}

function submitForm() {
  isSending.value = true;
  const formData = new FormData();
  formData.append('form-name', 'doc-feedback');
  formData.append('page', route.path);
  formData.append('wasHelpful', currentState.value);
  formData.append('feedback', feedback.value);

  // The form doesn't contain `File` but FormDataEntryValue can be `string | File`
  // To make TS happy we covert all values to string
  const convertedFormEntries = Array.from(formData, ([key, value]) => [
    key,
    typeof value === 'string' ? value : value.name,
  ]);

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(convertedFormEntries).toString(),
  })
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(res);
      }
      currentState.value = FeedbackState.END;
      feedback.value = '';
      hasError.value = false;
    })
    .catch((error) => {
      currentState.value = FeedbackState.END;
      hasError.value = true;
    })
    .finally(() => {
      isSending.value = false;
    });
}

// Reset the states on page change
watch(
  () => route.path,
  () => {
    currentState.value = FeedbackState.START;
    feedback.value = '';
    hasError.value = false;
  }
);
</script>

<template>
  <Layout>
    <template #doc-footer-before>
      <div class="feedbackContainer">
        <template v-if="currentState === FeedbackState.START">
          <p class="title">Was this page helpful?</p>
          <div class="buttonContainer">
            <button class="button" @click="onButtonClick(FeedbackState.YES)">
              <span class="icon thumsUp"></span> Yes
            </button>
            <button class="button" @click="onButtonClick(FeedbackState.NO)">
              <src class="icon thumsDown"></src>No
            </button>
          </div>
        </template>

        <template
          v-else-if="currentState === FeedbackState.YES || currentState === FeedbackState.NO"
        >
          <form class="form" @submit.prevent="submitForm" data-netlify="true">
            <label class="title label" for="feedback">
              <template v-if="currentState === FeedbackState.YES">
                What was most helpful?
              </template>
              <template v-else> What should we improve? </template>
            </label>
            <textarea
              id="feedback"
              name="feedback"
              class="textarea"
              v-model="feedback"
              autofocus
            ></textarea>
            <button class="button" type="submit" :disabled="feedback.length === 0">
              <LoadingIcon v-if="isSending" :size="11" />Submit
            </button>
            <p v-if="hasError" class="error">
              Sorry, something went wrong. Please try it again later.
            </p>
          </form>
        </template>
        <template v-if="currentState === FeedbackState.END">
          <p class="end">Thank you for helping improve StackBlitz documentation! &#9829;</p>
        </template>
      </div>
    </template>
  </Layout>
</template>

<style scoped lang="scss">
@import '../styles/vars';

.feedbackContainer {
  margin-block-start: 50px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  min-height: 64px;
  gap: 30px;
  text-align: left;
  text-decoration: none;
  background-color: var(--vp-c-bg);
  transition: box-shadow 0.1s ease, transform 0.1s ease;
}

.buttonContainer {
  display: flex;
  gap: 16px;
}

.title {
  font-weight: 700;
  font-size: 18px;
}

.label {
  display: block;
  margin-block-end: 10px;
}

.button {
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #0b7099;
  color: #e1e2e2;
  border-radius: 6px;
  padding: 4px 10px;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:hover {
    background-color: #085877;
  }
}

.icon {
  display: block;
  width: 16px;
  height: 16px;
  background-color: white;
  transition: background-color 0.1s ease, opacity 0.1s ease;
}

.thumsUp {
  -webkit-mask: url('/icons/fa-thumbs-up.svg') center/contain no-repeat;
  mask: url('/icons/fa-thumbs-up.svg') center/contain no-repeat;
}

.thumsDown {
  -webkit-mask: url('/icons/fa-thumbs-down.svg') center/contain no-repeat;
  mask: url('/icons/fa-thumbs-down.svg') center/contain no-repeat;
}

.form {
  width: 100%;
}

.textarea {
  width: 100%;
  height: 80px;
  padding: 6px 10px;
  margin-block-end: 10px;
  border: 1px solid var(--vp-c-gray-dark-2);
  border-radius: 6px;
  background-color: var(--vp-c-bg);
  font-family: inherit;
  &:focus-visible {
    outline: solid 2px var(--sb-foreground-highlight);
    outline-offset: -2px;
  }
}

.error {
  margin-block-start: 10px;
  color: var(--vp-custom-block-danger-text);
}

.end {
  flex: 1;
  text-align: center;
}
</style>
