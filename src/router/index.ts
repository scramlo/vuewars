import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import CategoryView from '../views/CategoryView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/category',
      redirect: '/category/characters',
    },
    {
      path: '/category/:category',
      name: 'category',
      component: CategoryView,
    }
  ]
})

export default router
