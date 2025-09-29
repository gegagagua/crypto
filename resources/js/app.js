import './bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import axios from 'axios';
import App from './components/App.vue';
import router from './router';
import store from './store';

// Configure axios
axios.defaults.baseURL = '/api';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';

// Add token to requests if available
const token = localStorage.getItem('auth_token');
if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

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
