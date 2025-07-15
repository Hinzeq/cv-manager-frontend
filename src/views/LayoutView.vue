<template>
    <div class="bg-gray-100 flex min-h-screen md:flex-row flex-col">
        <aside class="w=1/5 bg-white shadow-lg p-8 rounded-r-xl border-gray-200">
            <NavigationComponent />
        </aside>
        <router-view></router-view>
    </div>
</template>

<script>
// @ is an alias to /src
import NavigationComponent from '@/components/NavigationComponent.vue'

export default {
    name: 'LayoutView',
    components: {
        NavigationComponent
    }
}
</script>
