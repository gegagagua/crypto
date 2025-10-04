import axios from '../../bootstrap';

const state = {
    user: null,
    token: localStorage.getItem('auth_token'),
    isAuthenticated: !!localStorage.getItem('auth_token')
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
            console.error('🔴 Login error:', {
                status: error.response?.status,
                message: error.response?.data?.message,
                data: error.response?.data
            });
            
            // Handle different error scenarios
            let errorMessage = 'არასწორი ელ.ფოსტა ან პაროლი';
            
            if (error.response) {
                // Server responded with error status
                if (error.response.status === 401) {
                    errorMessage = error.response.data?.message || 'არასწორი ელ.ფოსტა ან პაროლი';
                } else if (error.response.status === 422) {
                    errorMessage = error.response.data?.message || 'გთხოვთ შეავსოთ ყველა ველი სწორად';
                } else {
                    errorMessage = error.response.data?.message || 'შეცდომა მოხდა. გთხოვთ სცადოთ თავიდან.';
                }
            } else if (error.request) {
                // Request was made but no response received
                errorMessage = 'სერვერთან დაკავშირება ვერ მოხერხდა';
            }
            
            console.error('🔴 Returning error:', errorMessage);
            
            return { 
                success: false, 
                error: errorMessage,
                errors: error.response?.data?.errors || {}
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
                error: error.response?.data?.message || 'რეგისტრაცია ვერ მოხერხდა',
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
            console.log('📡 Fetching user data from /auth/me...');
            const response = await axios.get('/auth/me');
            console.log('✅ User data received:', response.data.data.user);
            commit('SET_USER', response.data.data.user);
            return { success: true };
        } catch (error) {
            console.error('❌ Failed to fetch user:', error.response?.status);
            commit('LOGOUT');
            return { success: false };
        }
    },

    async initializeAuth({ commit, dispatch, state }) {
        const token = localStorage.getItem('auth_token');
        console.log('🔑 Initializing auth, token exists:', !!token);
        
        if (token) {
            commit('SET_TOKEN', token);
            await dispatch('fetchUser');
        }
        
        console.log('✅ Auth initialized, isAuthenticated:', state.isAuthenticated);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
