<script setup>
import { useStorage } from '@vueuse/core'
const isOpen = ref(false)

function handleMode() {
  let handleMode = useStorage('nuxt-color-mode', 'dark')
  if (handleMode.value == 'dark') {
    return handleMode.value = dark
  }
  return handleMode.value = light
}

</script>
<template>
  <main class=" h-20  w-40">
    <UButton class="mt-20" label="Abrir" @click="isOpen = true" />

    <UModal v-model="isOpen">
      <div class="bg-white h-96 text-black 
      bg-gradient-to-r from-gray-50 from-10%  via-gray-200 via-50% to-gray-50 to-90% 
      ">
      Portifolio Em Construção!
    </div>
    </UModal>
  </main>
</template>
