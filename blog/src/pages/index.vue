<script setup>
const isOpen = ref(false)
</script>
<template>
  <main class=" h-20  w-40">
    <UButton class="mt-20" label="Abir" @click="isOpen = true" />

    Blog Em Construção!!!

    <UModal v-model="isOpen">
      <!-- Content -->
      <div class="bg-white text-black">asdas</div>
    </UModal>
  </main>
</template>
