<script lang="ts">
export default {
  props: {
    src: String,
  },
  data(): {observer: IntersectionObserver | null, isPausedByUser: boolean} {
    return {
      observer: null,
      isPausedByUser: false
    };
  },
  mounted() {
    this.observer?.observe(this.$el);
  },
  created() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
            console.log('isPausedByUser', this.isPausedByUser)
          if (!this.isPausedByUser && entry.isIntersecting) {
            this.play();
          } else {
            this.pause();
          }
        });
      },
      {
        threshold: 0.9,
      }
    );
  },
  beforeDestroy() {
    this.observer?.disconnect();
  },
  methods: {
    play() {
      this.$refs.video.play();
    },
    pause() {
      this.$refs.video.pause();
    },
    handleVideoClick() {
        if (this.$refs.video.paused) {
            this.isPausedByUser = false;
            this.play();
        } else {
            this.isPausedByUser = true;
            this.pause();
        }
    }
  },

};
</script>

<template>
  <div>
    <video muted loop :src="src" ref="video" @click="handleVideoClick"></video>
  </div>
</template>

