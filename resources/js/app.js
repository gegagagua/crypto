import './bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './components/App.vue';
import router from './router';
import store from './store';

Vue.use(VueRouter);
Vue.use(Vuex);

// Global error handler
Vue.config.errorHandler = (err, vm, info) => {
    console.error('Vue Error:', err, info);
};

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
