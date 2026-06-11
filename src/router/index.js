import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ServicesPage from '../pages/ServicesPage.vue'
import ContentPage from '../pages/ContentPage.vue'
import WeddingPage from '../pages/WeddingPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: { title: 'Ubud Jungle View - Truly Ubud Escape' }
  },
  {
    path: '/our-services',
    name: 'Services',
    component: ServicesPage,
    meta: { title: 'Our Services - Ubud Jungle View' }
  },
  { path: '/accommodations/:slug', component: ContentPage },
  { path: '/dining/:slug', component: ContentPage },
  { path: '/wellness/:slug', component: ContentPage },
  { path: '/packages/:slug', component: ContentPage },
  { path: '/page/weddings', component: WeddingPage },
  { path: '/page/:slug', component: ContentPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  }
})

router.beforeEach((to) => {
  document.title = to.meta.title || 'Ubud Jungle View'
})

export default router
