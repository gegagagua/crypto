import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/auth/Login.vue';
import Register from '../components/auth/Register.vue';
import Dashboard from '../components/Dashboard.vue';
import Exchange from '../components/Exchange.vue';
import Marketplace from '../components/Marketplace.vue';
import MyAsset from '../components/MyAsset.vue';
import store from '../store';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/dashboard'
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: { requiresGuest: true }
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: { requiresGuest: true }
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: { requiresAuth: true }
    },
    {
        path: '/exchange',
        name: 'Exchange',
        component: Exchange,
        meta: { requiresAuth: true }
    },
    {
        path: '/marketplace',
        name: 'Marketplace',
        component: Marketplace,
        meta: { requiresAuth: true }
    },
    {
        path: '/my-asset',
        name: 'MyAsset',
        component: MyAsset,
        meta: { requiresAuth: true }
    }
];

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes
});

// Navigation guards
router.beforeEach((to, from, next) => {
    const isAuthenticated = store.getters.isAuthenticated;
    
    if (to.meta.requiresAuth && !isAuthenticated) {
        next('/login');
    } else if (to.meta.requiresGuest && isAuthenticated) {
        next('/dashboard');
    } else {
        next();
    }
});

export default router;
