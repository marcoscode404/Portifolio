<script setup lang="ts">

interface Props{
    icon?: string | null
    type?: string | keyof {}
}

const props = withDefaults(
    defineProps<Props>(),
    {type: 'success', icon: null}
)

const typesStyles: {[index: string]: string} = {
    'danger': 'py-1  bg-msRed600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75',
    'success': 'py-1 px-1 bg-msGreen600 text-white font-bold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75',
    'attention': 'py-1 px-1 bg-msOrange500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75',
    'info': 'py-1 px-1 bg-msBlue500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75',
    'warning': 'py-1 px-1 text-black bg-yellow-400 font-semibold border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75',
    
    'default': 'text-black',
    'defaultSecundary': 'py-1 px-1 text-black font-semibold border rounded-lg shadow-md focus:outline-none focus:ring-2  focus:ring-opacity-75'
}

</script>

<template>
    <button type="button" :class="typesStyles[props.type]">
        <slot></slot>
        <icon v-if="props.icon != null" :name="props.icon" class="ml-2 w-5 h-5" />
    </button>
</template>