import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import FormReview from '../views/FormReview.vue';
import RequestForm from '../views/RequestForm.vue';
import AccessDeniedPage from '../views/AccessDeniedPage.vue';

// Define routes
const routes = [
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
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Global navigation guard
router.beforeEach((to, from, next) => {
  const CheckAccess = true; // Set this to control access

  if (CheckAccess) {
    // Redirect all paths to AccessDeniedPage if CheckAccess is true
    next({ name: 'access-denied' });
  } else {
    // Allow navigation to all defined routes
    next();
  }
});

export default router;
