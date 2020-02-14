import Vue from 'vue';
import Router from 'vue-router';
import nprogress from 'nprogress';
import store from '@/store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        authRequired: true,
      },
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    },
    {
      path: '/login',
      name: 'login',
      beforeEnter: (to, from, next) => {
        if (store.getters['auth/loggedIn']) {
          next('/');
        } else {
          next();
        }
      },
      component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    nprogress.start();
  }
  next();
});

router.beforeEach((to, from, next) => {
  const canNavigate = to.matched.some((route) => {
    if (route.meta.authRequired) {
      return store.getters['auth/loggedIn'];
    }
    return true;
  });
  if (!canNavigate) {
    return next({ path: '/login', query: { redirect: to.path } });
  }
  return next();
});

// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  nprogress.done();
});

export default router;
