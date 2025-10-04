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
router.beforeEach(async (to, from, next) => {
    const isAuthenticated = store.getters['auth/isAuthenticated'];
    const user = store.getters['auth/user'];
    const token = localStorage.getItem('auth_token');
    
    console.log('🔐 Navigation guard:', {
        to: to.path,
        from: from.path,
        isAuthenticated,
        hasUser: !!user,
        hasToken: !!token,
        requiresAuth: to.meta.requiresAuth,
        requiresGuest: to.meta.requiresGuest
    });
    
    // If we have a token but no user data, fetch user first
    if (token && !user && to.meta.requiresAuth) {
        console.log('📡 Token exists but no user data, fetching...');
        try {
            await store.dispatch('auth/fetchUser');
            console.log('✅ User data fetched successfully');
        } catch (error) {
            console.error('❌ Failed to fetch user');
        }
    }
    
    const finalIsAuthenticated = store.getters['auth/isAuthenticated'];
    
    if (to.meta.requiresAuth && !finalIsAuthenticated) {
        console.log('❌ Not authenticated, redirecting to login');
        next('/login');
    } else if (to.meta.requiresGuest && finalIsAuthenticated) {
        console.log('✅ Already authenticated, redirecting to dashboard');
        next('/dashboard');
    } else {
        console.log('✅ Navigation allowed');
        next();
    }
});

export default router;
