<template>
    <main class="flex-1 p-8 overflow-x-auto pt-[90px] md:pt-8 md:ml-0 ">
        <div class="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
            <TableComponent />
        </div>
    </main>
</template>

<script>
import TableComponent from '@/components/TableComponent.vue';

export default {
    name: 'MainView',
    components: {
        TableComponent
    }
}
</script>
