<template>
    <div class="bg-gray-100 flex min-h-screen md:flex-row flex-col dark:bg-gray-700 ">
        <aside class="w=1/5 bg-white shadow-lg p-8 rounded-r-xl border-gray-200 dark:bg-gray-900">
            <NavigationComponent />
        </aside>
        <router-view></router-view>
    </div>
</template>

<script>
import NavigationComponent from '@/components/shared/NavigationComponent.vue'

export default {
    name: 'LayoutView',
    components: {
        NavigationComponent
    }
}
</script>
