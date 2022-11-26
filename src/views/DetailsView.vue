<template>
  <div class="details">
    <side-comp></side-comp>
    <main class="details__container">
      <banner-comp :title="film.title"></banner-comp>
      <section class="details__content">
        <template v-if="isErrored">
          <p>
            We're sorry, we are unable to retrieve this information at this
            time. Please retry later.
          </p>
        </template>

        <template v-else>
          <div v-if="isLoaded" class="loading">Loading...</div>

          <article v-else>
            <h1>work in progress</h1>
          </article>
        </template>
      </section>
      <footer-comp></footer-comp>
    </main>
  </div>
</template>

<script setup>
import SideComp from "@/components/layout/SideComp";
import BannerComp from "@/components/layout/BannerComp";
import FooterComp from "@/components/layout/FooterComp";

import { onMounted, onUnmounted, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();

const film = computed(() => store.state.ghibli.film);
const isLoaded = computed(() => store.state.ghibli.loading);
const isErrored = computed(() => store.state.ghibli.error);

onMounted(() => {
  store.dispatch("ghibli/getFilm", route.params.id);
});
onUnmounted(() => {
  store.commit("ghibli/resetFilm");
});
</script>

<style lang="scss" scoped>
.details {
  display: flex;
  background-color: var(--background-color-secondary);
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
}
.details__container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem;
  overflow-y: auto;
}
.details__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
}
</style>
