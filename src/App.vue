<script setup lang="ts">
import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <NavbarComponent />

  <main>
    <RouterView />
  </main>
  <FooterComponent />
</template>

<style scoped>
main {
  min-height: 80vh;
  font-family: 'Arial', sans-serif;
  color: #1f2937
}
</style>