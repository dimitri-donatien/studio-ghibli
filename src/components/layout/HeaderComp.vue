<template>
  <header class="header">
    <search-comp></search-comp>
  </header>
</template>

<script setup>
import SearchComp from "@/components/SearchComp";
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding: 2rem 0;
  background: linear-gradient(
    to bottom,
    var(--search-background-color) 0%,
    var(--search-background-color) 80%,
    rgba(17, 17, 17, 0) 100%
  );
  z-index: 10;
}
</style>
