<template>
  <div class="catalog">
    <side-comp></side-comp>
    <main class="catalog__container">
      <header-comp></header-comp>
      <section class="catalog__content"></section>
      <footer-comp></footer-comp>
    </main>
  </div>
</template>

<script setup>
import SideComp from "@/components/layout/SideComp";
import HeaderComp from "@/components/layout/HeaderComp";
import FooterComp from "@/components/layout/FooterComp";
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
</style>
