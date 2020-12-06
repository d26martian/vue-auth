import Vue from 'vue'
import Router from 'vue-router'
import firebase from "firebase/app";

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {layout: 'main', auth: true},
    component: () => import('../views/Home/Home')
  },
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'empty'},
    component: () => import('../views/Login/Login')
  },
  {
    path: '/register',
    name: 'register',
    meta: {layout: 'empty'},
    component: () => import('../views/Register/Register')
  },
  {
    path: '/secure',
    name: 'secure',
    meta: {layout: 'main', auth: true},
    component: () => import('../views/Secure/Secure'),
  },
  {
    path: '/about',
    name: 'about',
    meta: {layout: 'main', auth: true},
    component: () => import('../views/About/About')
  }
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requireAuth = to.matched.some(record => record.meta.auth);

  if (requireAuth && !currentUser) {
    next('/login')
  } else {
    next()
  }
});

export default router