<script setup lang="ts">

</script>

<template>
    <div class="overflow-x-auto overflow-hidden rounded-sm flex gap-5 flex-col shadow-md ">
        <div class="bg-red-200 overflow-y-auto">
            <table class="w-full text-sm text-left text-gray-500 ">
                <thead class="text-xs rounded-mg -z-20 text-gray-900 uppercase bg-gray-200">
                    <tr>
                        <th scope="col" class="px-2 border-r border-gray-300">
                            status
                        </th>
                        <th scope="col" class="px-2 border-r border-gray-300">
                            Número
                        </th>
                        <th scope="col" class="px-2 border-r border-gray-300">
                            Emitente
                        </th>
                        <th scope="col" class="px-2 border-r border-gray-300">
                            Data da Emissão
                        </th>
                        <th scope="col" class="px-2 border-r border-gray-300">
                            Volumes
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr
                        class="bg-white border-b  hover:bg-gray-50 ">
                        <th scope="row"
                            class="px-2 text-sm  font-medium text-gray-900 whitespace-nowrap border-r border-gray-300">      
                        </th>
                        <td
                            class="px-3  font-medium text-gray-900 whitespace-nowrap border-r border-gray-300">
                            101010
                        </td>
                        <td
                            class="px-3  font-medium text-gray-900 whitespace-nowrap border-r border-gray-300">
                            Panpharma
                        </td>
                        <td
                            class="px-3  font-medium text-gray-900 whitespace-nowrap border-r border-gray-300">
                            01/01/2023
                        </td>
                        <td
                            class="px-3  font-medium text-gray-900 whitespace-nowrap border-r border-gray-300">
                            10
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
