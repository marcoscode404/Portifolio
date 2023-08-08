<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
    <div class="relative">
        <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" 
        type="text" class="block rounded-lg px-2.5 pb-1.5 pt-1 h-8 w-full text-xs text-gray-900 bg-white 
                           border border-gray-300 appearance-none  dark:focus:border-blue-500 
                           focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />

        <label class="absolute text-sm rounded-lg  text-blue-800 duration-300 transform -translate-y-3 scale-75 top-0.5
                           z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
                           peer-placeholder-shown:translate-y-1 peer-focus:scale-75 peer-focus:-translate-y-2">

            <slot></slot>
        </label>
    </div>
</template>