import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import AboutPage from '../components/AboutPage.vue'
import UserPage from '../components/UserPage.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HelloWorld },
    { path: '/about', component: AboutPage },
    { path: '/user/:id', component: UserPage },
  ],
})
