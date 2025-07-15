<template>
    <div class="bg-gray-100 flex min-h-screen">
        <aside class="w=1/5 bg-white shadow-lg p-8 border-r border-gray-200 flex flex-col justify-between">
            <NavigationComponent />
        </aside>
        <aside class="w=4/5">
            <div>
                <router-view></router-view>
            </div>
        </aside>
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
