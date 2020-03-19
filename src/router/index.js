import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Chart from '../views/Chart'
import SignUp from "../views/SignUp";
import SignIn from "../views/SignIn";
import store from '../store'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/charts',
        name: 'Chart',
        component: Chart,
        beforeEnter: function (to, from, next) {
          if (store.state.loggedIn) {
            next();
          } else {
            next({
              name: 'SignIn'
            })
          }
        }
    },
    {
        path: '/sign-up',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/sign-in',
        name: 'SignIn',
        component: SignIn
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
