<script setup>

</script>


<template>
  <header class="fixed w-full bg-[#000000ad]  shadow-lg drop-shadow-lg
  h-10 z-[9999999999999] font-semibold px-2  flex items-center justify-between">
  程序員 Portifolio

  <div>Menu</div>
  </header>
  <slot>
    <div class="borda-animada w-full bg-red-900 mt-96"></div>
  </slot>
</template>


<style scoped>
/* .icon{
  @apply 
} */

.borda-animada {
  background: linear-gradient(to right, white, green),
    -webkit-linear-gradient(left, white 0, red),
    -webkit-linear-gradient(top, white, red),
    -webkit-linear-gradient(top, white, red);

  background-size: 400px 2px;
  background-repeat: no-repeat;
  background-position: 0 0;
  -webkit-animation: anima-borda 60s linear infinite;
  animation: anima-borda 2s linear infinite;
}

@keyframes anima-borda {
  0% {
    background-position: 0 0
  }

  100% {
    background-position: 2000px 0
  }
}
</style>