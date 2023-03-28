import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
{ path: '/', component: () => import('../views/Home/index.vue') },
{ path: '/video/:id', name:'video', component: () => import('../views/Video/index.vue') },
]
const router = createRouter({
history: createWebHashHistory(),
routes
})

export default router
