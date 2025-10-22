import {createRouter, createWebHistory} from 'vue-router'

import Home from '@/views/Home.vue'
import News from '@/views/News.vue'
import Shop from '@/views/Shop.vue'
import Detail from '@/views/Detail.vue'

const base = import.meta.env.VITE_BASE;

const router = createRouter({
    history: createWebHistory(base),
    routes:[
        {
            path: '/',
            component: Home,
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
        },
        {
            name: 'news',
            path: '/news',
            component: News,
            children:[
                {
                    name: 'detail',
                    path: 'detail',
                    component: Detail,
                }
            ]
        },
        {
            name: 'shop',
            path: '/shop',
            component: Shop,
        },
    ]
})

export default router