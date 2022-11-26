<template>
  <div class="about">
    <side-comp></side-comp>
    <main class="about__container">
      <banner-comp
        :title="banner.title"
        :img="banner.img"
        :description="banner.description"
      ></banner-comp>
      <article class="about__content">
        <div class="about__text">
          <p class="about__intro">
            The creations of <strong>Hayao Miyazaki</strong> and
            <strong>Isao Takahata</strong>, the founders of Studio Ghibli are
            perfect to escape into a surreal atmosphere while immersing yourself
            to the best of Japanese animals and (re)discover the adventures of
            <strong>Chihiro</strong>, <strong>Princess Mononoke</strong> and
            <strong>Totoro</strong>. With the productions on
            <a href="netflix.com" target="_blank" rel="noopener noreferrer"
              >Netflix</a
            >
            in certain countries around the world and coming soon to HBO Max,
            here is everything you need to know about Studio Ghibli before
            starting your binge watching.
          </p>
          <h2>The beginnings of the studio</h2>
          <p>
            <strong>Isao Takahata</strong> and
            <strong>Hayao Miyazaki</strong> met in the 1960s when working for
            the Japanese animation studio <strong>Tôei Dôga</strong>. The two
            men worked together for more than a decade notably on the animation
            Heidi. But it wasn't until the early 1980s, when the growth of
            animation on television threatened the quality of productions, that
            these two enthusiasts decided to join forces to offer the public a
            quality animated feature film that would not overlook either the
            narration or the direction. In 1985, a first collaboration ensues,
            Nausicaä of the Valley of the Wind, the animated adaptation of the
            manga published by <strong>Miyazaki</strong> in the magazine
            Animage. On the strength of this first success, and convinced that
            there is a place for quality animated feature films on the Japanese
            market, they set up a small production studio in the suburbs of
            Tokyo, with the help of the <strong>Tokuma</strong>
            <strong>Shoten</strong> publishing company. In 1986 The Castle in
            the Skywas released on the screens, the first film officially
            created by <strong>Studio Ghibli</strong>, now at the head of more
            than 40 film and video game productions.
          </p>
          <h2>The name</h2>
          <p>
            It was <strong>Hayao Miyazaki</strong> who came up with the idea. A
            avid flyer, he was inspired by the
            <strong>Caproni Ca.309 Ghibli</strong>, a surveillance aircraft that
            was developed in Italy during the Second World War. The
            <strong>Ghibli</strong> also refers to the hot air in the Sahara
            desert, symbolising the breath of fresh air being blown in to
            Japanese animation.
          </p>
          <h2>The logo</h2>
          <p>
            Having become the <strong>Studio Ghibli</strong> mascot, the figure
            of <strong>Totoro</strong> is also the one that secured them their
            first financial success. While the film (released in 1988) wasn't as
            much of a success as the first two <strong>Miyazaki</strong> and
            <strong>Takahata</strong> creations, it was the sales from the
            associated products (notably the Totoro soft toys) that kept them
            afloat, alleviated their financial worries and allowed them to
            continue their work.
          </p>
          <h2>The philosophy</h2>
          <p>
            Not like the classic animation studios,
            <strong>Studio Ghibli</strong> was born with one goal: to explore
            the depths of the human soul, and to offer Japanese and
            international audiences poetic stories that would translate all its
            complexity. No international commercial strategy, but a concern for
            integrity and exemplary quality, for which its productions are
            renowned.
          </p>
          <h2>The biggest success</h2>
          <p>
            In 1989, Kiki's Delivery Service became the studio's first major
            Japanese hit as it was number one in theatres that year. Three years
            later, Porco Rosso_, almost entirely conceived and directed by Hayao
            Miyazaki, dethroned Hook and Beauty and the Beast at the Japanese
            box office. But it was Spirited Away, the first non-English-language
            film to win the Oscar for Best Animated Film in 2003, that devoted
            the studio to its international work. It succeeds Princess Mononoke,
            which was to be Miyazaki's last film before he retired.
          </p>
        </div>
      </article>
      <footer-comp></footer-comp>
    </main>
  </div>
</template>

<script setup>
import SideComp from "@/components/layout/SideComp";
import BannerComp from "@/components/layout/BannerComp";
import FooterComp from "@/components/layout/FooterComp";

import { reactive } from "vue";

const banner = reactive({
  title: "About Studio Ghibli",
  img: "https://wallpaperaccess.com/full/745699.jpg",
});
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  background-color: var(--background-color-secondary);
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
}
.about__container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem;
  overflow-y: auto;
}
.about__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
}
.about__text {
  width: 60%;
  max-width: 800px;
  padding-left: 30px;
  border-left: 1px solid var(--text-primary-color);
  transition: all 0.4s ease;
}
.about__intro {
  margin-bottom: 1rem;
}
</style>
