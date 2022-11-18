<template>
  <figure>
    <figcaption>
      <img :src="props.image" alt="" />
    </figcaption>
    <figcaption>
      <h3>{{ props.title }}</h3>
      <span>{{ props.time }}</span>
      <span>{{ props.score }}</span>
      <span>{{ props.date }}</span>
    </figcaption>
  </figure>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  id: String,
  image: String,
  title: String,
  date: String,
  time: String,
  score: String,
});
</script>

<style lang="scss" scoped></style>
