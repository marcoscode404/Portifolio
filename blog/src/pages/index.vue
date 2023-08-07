<script setup>
const isOpen = ref(false)

function theme() {
  localStorage.setItem("nuxt-color-mode", 'light');
}

</script>
<template>
  <main class="overflow-x-hidden">
    <div class="img">
      <!-- <UButton class="mt-20" label="Abrir" @click="isOpen = true" /> -->
      <UModal v-model="isOpen" :overlay="false">
        <UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
          <UButton :ui="{ rounded: 'rounded-full' }" @click="isOpen = false" color="red" class="text-white" label="X" />
          Portifolio Em Construção!
        </UCard>
      </UModal>



      <!-- banner -->
      <div class="h-full flex items-center  max-w-7xl m-auto ">
        <div>
          Olá, Eu Sou
          <h1 class="font-bold text-lg">Marcos Vini</h1>
          <span class="">Desenvolvedor Front-end & UI Designer.</span>

          <div class="flex gap-10">
            <UButton icon="grommet-icons:github" size="sm" color="primary" variant="solid" label="Button" :trailing="false" />
            <UButton icon="grommet-icons:linkedin-option" size="sm" color="primary" variant="solid" label="Button" :trailing="false" />
          </div>
        </div>
      </div>


    </div>

    <div class="h-52">
    </div>

  </main>
</template>

<style scoped>
.img {
  background-image: url(../assets/img3.svg);
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>