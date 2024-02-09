import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import Food from '../views/Food.vue';
import Workouts from '../views/Workouts.vue';
import Community from '../views/Community.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/food',
      name: 'Food',
      component: Food
    },
    {
      path: '/workouts',
      name: 'Workouts',
      component: Workouts
    },
    {
      path: '/community',
      name: 'Community',
      component: Community
    },
  ]
})

export default router
