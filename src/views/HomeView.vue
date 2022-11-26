<template>
  <div class="home">
    <side-comp></side-comp>
    <main class="home__container">
      <header-comp></header-comp>
      <banner-comp
        :title="banner.title"
        :img="banner.img"
        :description="banner.description"
        class="home__banner"
      ></banner-comp>
      <section class="home__content">
        <template v-if="isErrored">
          <p>
            We're sorry, we are unable to retrieve this information at this
            time. Please retry later.
          </p>
        </template>

        <template v-else>
          <div v-if="isLoaded" class="loading">Loading...</div>

          <section class="home__card" v-else>

            <h2>The most popular</h2>
            <article class="card">
              <div v-for="film in filteredByScore" :key="film.id">
                <film-card
                  :id="film.id"
                  :image="film.image"
                  :title="film.title"
                  :date="film.release_date"
                  :time="formatTime(film.running_time)"
                  :score="film.rt_score"
                ></film-card>
              </div>
            </article>

            <h2>The most recent</h2>
            <article class="card">
              <div v-for="film in filteredByDate" :key="film.id">
                <film-card
                  :id="film.id"
                  :image="film.image"
                  :title="film.title"
                  :date="film.release_date"
                  :time="formatTime(film.running_time)"
                  :score="film.rt_score"
                ></film-card>
              </div>
            </article>
          </section>
        </template>
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
import useFilter from "@/composables/useFilter";

const banner = reactive({
  title: "Welcome to Studio Ghibli",
  img: "https://images.hdqwalls.com/wallpapers/anime-night-scenery-8r.jpg",
  description: "",
});

const { filteredByScore, filteredByDate, formatTime, isErrored, isLoaded } = useFilter('films', 'getFilms');

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
.home__banner {
  margin: 1.5rem 0;
}
.home__content {
  height: 100%;
  width: 100%;
}
.home__card {
  display: grid;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  .card {
    display: flex;
    justify-content: flex-start;
    gap: 1.5rem;
    width: 100%;
    height: auto;
    margin: 1.5rem 0;
  }
}
</style>
