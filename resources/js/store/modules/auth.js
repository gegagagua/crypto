import axios from 'axios';

const state = {
    user: null,
    token: localStorage.getItem('auth_token'),
    isAuthenticated: false
};

const getters = {
    isAuthenticated: state => state.isAuthenticated,
    user: state => state.user,
    token: state => state.token
};

const mutations = {
    SET_USER(state, user) {
        state.user = user;
        state.isAuthenticated = !!user;
    },
    SET_TOKEN(state, token) {
        state.token = token;
        if (token) {
            localStorage.setItem('auth_token', token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            localStorage.removeItem('auth_token');
            delete axios.defaults.headers.common['Authorization'];
        }
    },
    LOGOUT(state) {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        localStorage.removeItem('auth_token');
        delete axios.defaults.headers.common['Authorization'];
    }
};

const actions = {
    async login({ commit }, credentials) {
        try {
            const response = await axios.post('/auth/login', credentials);
            const { user, token } = response.data.data;
            
            commit('SET_USER', user);
            commit('SET_TOKEN', token);
            
            return { success: true, data: response.data };
        } catch (error) {
            return { 
                success: false, 
                error: error.response?.data?.message || 'Login failed' 
            };
        }
    },

    async register({ commit }, userData) {
        try {
            const response = await axios.post('/auth/register', userData);
            const { user, token } = response.data.data;
            
            commit('SET_USER', user);
            commit('SET_TOKEN', token);
            
            return { success: true, data: response.data };
        } catch (error) {
            return { 
                success: false, 
                error: error.response?.data?.message || 'Registration failed',
                errors: error.response?.data?.errors || {}
            };
        }
    },

    async logout({ commit }) {
        try {
            await axios.post('/auth/logout');
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            commit('LOGOUT');
        }
    },

    async fetchUser({ commit }) {
        try {
            const response = await axios.get('/auth/me');
            commit('SET_USER', response.data.data.user);
            return { success: true };
        } catch (error) {
            commit('LOGOUT');
            return { success: false };
        }
    },

    initializeAuth({ commit, dispatch }) {
        const token = localStorage.getItem('auth_token');
        if (token) {
            commit('SET_TOKEN', token);
            dispatch('fetchUser');
        }
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
