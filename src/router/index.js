import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Auth from '@/views/Auth.vue';
import Shop from '@/views/Shop.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Auth
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop
  },
];

const router = new VueRouter({
  routes
});

export default router;
