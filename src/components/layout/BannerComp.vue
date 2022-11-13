<template>
  <div class="banner" :style="{ backgroundImage: `url(${props.img})` }">
    <div class="banner__container">
      <div class="banner__content">
        <h1 class="banner__title">{{ props.title }}</h1>
        <p class="banner__description">
          {{ props.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  img: String,
  title: String,
  description: String,
});
</script>

<style lang="scss" scoped>
.banner {
  display: flex;
  min-height: 40vh;
  width: 100%;
  border-radius: 0.5rem;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
.banner__container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  height: 100%;
  width: 100%;
}
.banner__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  z-index: 10;
}
.banner__title {
  color: #fff;
}
</style>
