<script setup>

const props = defineProps(['icon'])

</script>

<template>
    <NuxtLink class="flex flex-col gap-5 border-2 rounded-lg max-w-sm cursor-pointer">
        <Icon :name="props.icon" class="h-7 w-7" />
        <slot></slot>
    </NuxtLink>
</template>