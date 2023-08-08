<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
const selected = ref(false);

import { useInvoiceEntryStore } from '~/store/invoiceEntry/invoiceEntry'

const { state } = useInvoiceEntryStore()

function colorConfigTable(value) {
  localStorage.setItem("colorConfigTable", value)
}

function colorTextConfigTable(value) {
  localStorage.setItem("colorTextConfigTable", value)

  let valueColor = localStorage.getItem("colorTextConfigTable")
  state.backgroundColor = valueColor
}

</script>

<template>
  <Popover as="nav" class="relative">
    <div class="h-full flex items-center">
      <PopoverButton>
        <Icon name="grommet-icons:more-vertical" />
      </PopoverButton>
    </div>

    <transition enter-active-class="transition duration-200 ease-out" enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100" leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-1 opacity-0">
      <PopoverPanel class="absolute w-28 h-52 bg-white p-2 z-[999] rounded-xl border">
        <select class="w-full rounded-lg" name="" id="">
          <option value="branch">15 segundos</option>
          <option value="branch">30 segundos</option>
          <option value="branch">45 segundos</option>
          <option value="branch">60 segundos</option>
          <option value="branch">90 segundos</option>
        </select>

        <div class="mt-1 flex items-center justify-between">
          <div>editavel</div>
          <UToggle v-model="selected" on-icon="i-heroicons-check-20-solid" off-icon="i-heroicons-x-mark-20-solid" />
        </div>

        <div class=" flex flex-wrap items-center mt-2 h-3 gap-2">
          bkg
          <UButton @click="colorConfigTable('#00AB55')" :ui="{ rounded: 'rounded-full' }" />
          <UButton @click="colorConfigTable('#FF4842')" color="red" :ui="{ rounded: 'rounded-full' }" />
          <UButton @click="colorConfigTable('white')" color="white" :ui="{ rounded: 'rounded-full' }" />
          <UButton @click="colorConfigTable('#15aaf7')" color="blue" :ui="{ rounded: 'rounded-full' }" />
          <UButton @click="colorConfigTable('#e9e9e985')" color="gray" :ui="{ rounded: 'rounded-full' }" />
        </div>

        <div class="flex flex-wrap items-center mt-8 border-t-2 h-3 gap-2 pt-2">
          <UButton @click="colorTextConfigTable('#000')" color="black" :ui="{ rounded: 'rounded-full' }" />
          <UButton @click="colorTextConfigTable('white')" color="white" :ui="{ rounded: 'rounded-full' }" />
          <UButton @click="colorTextConfigTable('#00AB55')" color="green" :ui="{ rounded: 'rounded-full' }" />
          <UButton @click="colorTextConfigTable('#FF4842')" color="red" :ui="{ rounded: 'rounded-full' }" />
        </div>

      </PopoverPanel>
    </transition>

  </Popover>
</template>
