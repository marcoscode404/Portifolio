<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle,DialogDescription } from '@headlessui/vue'

const props = defineProps<{
    isOpen: boolean
}>()

const emit = defineEmits(['onYes', 'onNo', 'close'])

function handlePositive() {
    emit('onYes')
    emit('close')
}

function handleNegative() {
    emit('onNo')
    emit('close')
}
</script>

<template>
    <Dialog
        class="m-auto p-3 px-5 absolute flex z-[99999] justify-center items-center bg-[#1212122e] backdrop-blur-sm  w-full h-screen top-0"
        :open="$props.isOpen" @close="emit('close')">
        <DialogPanel
            class="flex flex-col max-w-md -mt-20 relative rounded-lg justify-between items-center bg-white container w-2/3 h-36">

            <DialogTitle class=" text-lg font-bold w-full text-center uppercase bg-msRed500 text-white rounded-t-lg">
                <slot name="title">
                </slot>
            </DialogTitle>

            <DialogDescription class="flex justify-center items-center font-medium w-full h-full text-center">
                <slot name="description"></slot>
            </DialogDescription>

            <div class="flex justify-center border-t-2 w-full gap-[2px] divide-x-2">
                <GlobalButton type="default" class="px-5 py-3 border-r-2 text-msRed600 hover:bg-red-100 focus:rounded-bl-lg  w-full font-semibold 
                                    focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-75"
                    @click="handleNegative()">
                    <slot name="no">Não</slot>
                </GlobalButton>

                <GlobalButton type="default" class="px-5 text-msGreen600 hover:bg-green-100 font-semibold w-full focus:outline-none focus:rounded-br-lg  
                    focus:ring-2 focus:ring-green-600 focus:ring-opacity-75" @click="handlePositive()">
                    <slot name="yes">Sim</slot>
                </GlobalButton>
            </div>
        </DialogPanel>
    </Dialog>
</template>