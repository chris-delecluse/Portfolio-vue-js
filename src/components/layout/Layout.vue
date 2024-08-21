<script setup lang="ts">

import Header from "@/components/layout/HeaderComponent.vue";
import Footer from "@/components/layout/FooterComponent.vue";
</script>

<template>
  <Header/>
  <main>
    <RouterView/>
  </main>
  <Footer/>
</template>

<style scoped>
:global(#app) {
  @apply h-dvh bg-gray-700 flex flex-col justify-between text-whiteSmoke
}

main {
  @apply flex-1 bg-whiteSmoke text-gray-700 py-1.5
}
</style>