import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

const { isAuthenticated } = useAuth()

import MainPage from '@/components/MainPage.vue'
import LoginPage from '@/components/LoginPage.vue'
import SummaryPage from '@/components/SummaryPage.vue'
import NotFound from '@/components/NotFound.vue'
import SettingsPage from '@/views/SettingsPage.vue'

const routes = [
    { path: '/', name: 'Home', component: MainPage },
    { path: '/login', name: 'Login', component: LoginPage },
    { path: '/settings', name: 'Settings', component: SettingsPage, meta: { requiresAuth: true } },
    { path: '/summary', name: 'Summary', component: SummaryPage, meta: { requiresAuth: true } },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, _, next) => {
    if (to.meta.requiresAuth && !isAuthenticated.value) next({ name: 'Login', query: { redirect: to.fullPath } })
    else next()
})

export default router