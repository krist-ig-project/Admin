import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import FormReview from '../views/FormReview.vue';
import RequestForm from '../views/RequestForm.vue';
import AccessDeniedPage from '../views/AccessDeniedPage.vue';

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
      name: 'form-review',
      component: FormReview,
    },
    {
      path: '/:pathMatch(.*)*', // Catch-all route for undefined paths
      name: 'access-denied',
      component: AccessDeniedPage,
    },
  ]
});

// Global Navigation Guard
router.beforeEach((to, from, next) => {
  const checkAccess = true; // Replace with your actual access check logic

  if (checkAccess) {
    // Redirect to AccessDeniedPage if the condition is true
    next({ name: 'access-denied' });
  } else {
    // Allow navigation if the condition is false
    next();
  }
});

export default router;
