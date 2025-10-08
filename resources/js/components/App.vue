<template>
  <div id="app" data-scroll-container>
    <!-- Authentication Pages (Login/Register) -->
    <div v-if="isAuthPage" class="auth-layout">
      <router-view />
    </div>

    <!-- Main Application Layout -->
    <div v-else class="app-layout">
      <router-view />
    </div>

    <!-- Loading Overlay -->
    <div v-if="loading" class="loading-overlay">
      <div class="loading-content">
        <div class="loading-spinner"></div>
        <h3>Loading...</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'App',
  data() {
    return {
      loading: false
    };
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated', 'user']),
    isAuthPage() {
      return this.$route.name === 'Login' || this.$route.name === 'Register';
    }
  },
  methods: {
    ...mapActions('auth', ['logout', 'initializeAuth'])
  },
  async created() {
    console.log('🚀 App created, initializing auth...');
    this.loading = true;
    
    try {
      await this.initializeAuth();
      console.log('✅ Auth initialization complete');
    } catch (error) {
      console.error('❌ Auth initialization failed:', error);
    }
    
    this.loading = false;
    console.log('✅ App ready, isAuthenticated:', this.isAuthenticated);
  }
};
</script>
