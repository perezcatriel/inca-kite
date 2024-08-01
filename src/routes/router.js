import { createRouter, createWebHistory } from 'vue-router'
import VxHome from '@/views/VxHome.vue'
import VxAbout from '@/views/VxAbout.vue'
import VxServices from '@/views/VxServices.vue'
import VxProducts from '@/views/VxProducts.vue'
import VxContact from '@/views/VxContact.vue'

const routes = [
  { path: '/', component: VxHome },
  { path: '/about', component: VxAbout },
  { path: '/services', component: VxServices },
  { path: '/products', component: VxProducts },
  { path: '/contact', component: VxContact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
