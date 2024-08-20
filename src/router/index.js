import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import FormReview from '../views/FormReview.vue';
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
      component: Home,
    },
    {
      path: '/form-review',
      name: 'FormReview',
      component: FormReview // Use the imported Info component
    },
  ]
});

export default router;
