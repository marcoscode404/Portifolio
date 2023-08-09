<script setup lang="ts">
import { Dialog, DialogPanel, DialogDescription } from '@headlessui/vue';

const props = defineProps<{
    open: boolean
}>()

const emit = defineEmits(['close'])
</script>

<template>
    <Dialog
        class="m-auto p-3 px-5 w-full absolute flex justify-center items-center z-auto bg-[#1212122e] backdrop-blur-sm h-screen top-0"
        :open="$props.open" @close="emit('close')">
        <DialogPanel class="flex flex-col rounded-lg justify-between items-center container w-96 h-52
            bg-gradient-to-r from-[#be78d333] from-10% via-yellow-50 via-50% to-[#fcfafa2d] to-90% 
            shadow-2xl border
        ">

            <div class="inline-flex justify-between w-full">
                <div class="w-full text-center font-medium">
                    <slot name="title">
                    </slot>
                </div>
                <div>
                    <Icon @click="emit('close')" name="mdi:close"
                        class="text-red-500 m-1 border border-red-600 rounded-full text-xl cursor-pointer hover:bg-red-600 hover:text-white">
                    </Icon>
                </div>
            </div>

            <DialogDescription class="flex justify-center items-center font-medium w-full h-full text-center">
                <slot name="description"></slot>
            </DialogDescription>

            <div class="m-2">
                <slot></slot>
            </div>
        </DialogPanel>
    </Dialog>
</template>