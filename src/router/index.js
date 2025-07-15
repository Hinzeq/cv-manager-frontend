import { createMemoryHistory, createRouter } from 'vue-router'

import LayoutView from '@/views/LayoutView.vue'
import MainView from '@/views/MainView.vue'
import NewEntryView from '@/views/NewEntryView.vue'

const routes = [
    {
        path: '/',
        component: LayoutView,
        children: [
            {
                path: '',
                component: MainView
            },
            {
                path: 'new-entry',
                component: NewEntryView
            }
        ]
    },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router
