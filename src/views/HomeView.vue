<template>
  <div class="home">
    <side-comp></side-comp>
    <main class="home__container">
      <header-comp></header-comp>
      <banner-comp
        :title="banner.title"
        :img="banner.img"
        :description="banner.description"
      ></banner-comp>
      <section class="home__content">
        <div v-for="film in films" :key="film.id">
          <film-card
            :id="film.id"
            :image="film.image"
            :title="film.title"
            :date="film.release_date"
            :time="film.running_time"
            :score="film.rt_score"
          ></film-card>
        </div>
      </section>
      <footer-comp></footer-comp>
    </main>
  </div>
</template>

<script setup>
import SideComp from "@/components/layout/SideComp";
import HeaderComp from "@/components/layout/HeaderComp";
import BannerComp from "@/components/layout/BannerComp";
import FilmCard from "@/components/FilmCard";
import FooterComp from "@/components/layout/FooterComp";

import { reactive } from "vue";
import { onBeforeMount, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

onBeforeMount(() => {
  store.dispatch("ghibli/getFilms");
});

const banner = reactive({
  title: "Welcome to Studio Ghibli",
  img: "https://images.hdqwalls.com/wallpapers/anime-night-scenery-8r.jpg",
  description: "",
});

const films = computed(() => store.state.ghibli.films);
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  background-color: var(--background-color-secondary);
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
}
.home__container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 1.5rem 1.5rem 1.5rem;
  overflow-y: auto;
}
</style>
