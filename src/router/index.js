import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Info from '../views/Info.vue';
import RequestForm from '../views/RequestForm.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/request-form',
      name: 'request-form',
      component: RequestForm,
    },
    {
      path: '/',
      name: 'home',
      component: Home, // Use the imported Home component
      props: (route) => ({ id: route.query.id }),
    },
    {
      path: '/info',
      name: 'info',
      component: Info // Use the imported Info component
    },
  ]
});

export default router;
