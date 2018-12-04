import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Home from './views/Home.vue';
import SignIn from './views/Sign-in.vue';

const fb = require('./firebase.config');

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: SignIn,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '*',
      redirect: '/login',
    },
    {
      path: '/',
      redirect: '/login',
    },
  ],
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  // eslint-disable-next-line prefer-destructuring
  const currentUser = fb.auth.currentUser;

  if (requiresAuth && !currentUser) {
    next('/login');
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});

export default router;
