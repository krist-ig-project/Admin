import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/info',
      name: 'info',
      component: () => import('../views/Info.vue') // Assuming you have an Info.vue component
    },
  ]
});

export default router;
