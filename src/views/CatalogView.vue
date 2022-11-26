<template>
  <div class="catalog">
    <side-comp></side-comp>
    <main class="catalog__container">
      <header-comp></header-comp>
      <banner-comp
        :title="banner.title"
        :img="banner.img"
        class="catalog__banner"
      ></banner-comp>
      <section class="catalog__content">
        <template v-if="isErrored">
          <p>
            We're sorry, we are unable to retrieve this information at this
            time. Please retry later.
          </p>
        </template>

        <template v-else>
          <div v-if="isLoaded" class="loading">Loading...</div>
          <section class="catalog__card" v-else>
            <article class="article__card">
              <div class="card" v-for="film in filterByName" :key="film.id">
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
  title: "Catalog",
  img: "https://wallpaper.dog/large/20468918.jpg",
  description: "",
});

const { filterByName, formatTime, isErrored, isLoaded } = useFilter('films', 'getFilms');

</script>

<style lang="scss" scoped>
.catalog {
  display: flex;
  background-color: var(--background-color-secondary);
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
}
.catalog__container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 1.5rem 1.5rem 1.5rem;
  overflow-y: auto;
}
.catalog__container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 1.5rem 1.5rem 1.5rem;
  overflow-y: auto;
}
.catalog__banner {
  margin: 1.5rem 0;
}
.catalog__content {
  height: 100%;
  width: 100%;
  padding: 2rem 0;
}
.catalog__card {
  height: 100%;
  width: 100%;
}
.article__card {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1.5rem;
  width: 100%;
}
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

</style>
