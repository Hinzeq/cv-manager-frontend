import { createMemoryHistory, createRouter } from 'vue-router'

import LayoutView from '@/views/LayoutView.vue'
import MainView from '@/views/MainView.vue'
import SummaryView from '@/views/SummaryView.vue'

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
                path: 'summary',
                component: SummaryView
            }
        ]
    },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router
