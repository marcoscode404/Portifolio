<script setup>
let open = ref(false)
</script>
<template>
  <header v-if="open">
    Meu Blog
  </header>
  <button @click="open = true">
    abrir
  </button>
  <!-- <NuxtPage /> -->
</template>
