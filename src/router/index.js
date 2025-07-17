import { createWebHistory, createRouter } from 'vue-router'

import LayoutView from '@/views/LayoutView.vue'
import NewEntryComponent from '@/components/main/NewEntryComponent.vue'
import TableComponent from '@/components/main/TableComponent.vue'

const routes = [
    {
        path: '/',
        component: LayoutView,
        children: [
            {
                path: '',
                component: TableComponent
            },
            {
                path: 'new',
                component: NewEntryComponent
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
