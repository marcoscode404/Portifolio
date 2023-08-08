<script setup>

const props = defineProps(['icon'])

</script>

<template>
    <NuxtLink class="flex flex-col gap-5 cursor-pointer justify-center items-center 
                                           h-28 font-medium 
                      rounded-md shadow-md drop-shadow-md hover:drop-shadow-xl">
        <Icon :name="props.icon" class="h-7 w-7" />
        <slot></slot>
    </NuxtLink>
</template>