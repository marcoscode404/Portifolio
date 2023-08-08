<script setup>
const isOpen = ref(false)

</script>
<template>
  <main class="overflow-x-hidden">
    <div class="img">
      <UModal v-model="isOpen" :overlay="false">
        <UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
          <UButton :ui="{ rounded: 'rounded-full' }" @click="isOpen = false" color="red" class="text-white" label="X" />
          Portifolio Em Construção!
        </UCard>
      </UModal>

      <!-- banner -->
      <div class="h-full flex flex-col justify-center  max-w-7xl m-auto ">

        <div class="rounded-full border-2 overflow-hidden border-white h-44 w-44 bg-white">
          <img src="../assets/perfil.jpeg" alt="">
        </div>

        <div class="box-texto mt-2">
          <span class="font-bold">Olá, Eu Sou</span>
          <h1 class="title font-bold h-16 flex items-center justify-center text-lg">Marcos Vini</h1>
          <span class="descricao">Desenvolvedor Front-end & UI Designer.</span>

          <!-- buttons Links -->
          <div class="flex mt-5 justify-center gap-4">
            <UButton size="sm" color="purple" :trailing="true">
              GitHub
              <Icon name="grommet-icons:github" />
            </UButton>

            <UButton size="sm" :trailing="true">
              LinkDin
              <Icon name="grommet-icons:linkedin-option"/>
            </UButton>
            <UButton label="Contato" @click="isOpen = true" />
          </div>
        </div>
      </div>


    </div>

    <!-- sobre mim -->
    <div class="h-[555px]">
      <h2>Sobre mim</h2>
    </div>

    <div class="h-[555px]">
      <h2>Experiência</h2>
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



.box-texto{

text-align:center;
position: absolute;
top:0;
left:0;
transform: translate(-50%, -50%);
width: 100%;
display: contents;
background: red;

}

.cabecalho { width:100%; float:left; }

.box-texto span{ display:block; }

.title{

font-size: 70px;
font-weight: 700;
color: #22cad0;
font-family: 'open_sansregular';
letter-spacing: 5px;
margin-bottom: 20px;
background:#ffffff57;
position: relative;
animation: motion 3s 1;
}

.descricao{

font-size:1.5em;
color: #868686;
font-family: 'open_sansregular';
letter-spacing: 26px;
transition:6s;

}

@keyframes motion{
0%{
    color: #000000;
    margin-bottom: -42px;
}
30%{
    letter-spacing: 30px;
    margin-bottom: -42px;
    }
85%{
    letter-spacing: 5px;
    margin-bottom: -42px;
}
}
</style>