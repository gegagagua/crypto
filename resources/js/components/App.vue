<template>
  <div id="app">
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
    ...mapActions('auth', ['logout'])
  },
  async created() {
    this.loading = true;
    await this.$store.dispatch('auth/initializeAuth');
    this.loading = false;
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: var(--color-bg);
  color: var(--color-primary-100);
}

#app {
  min-height: 100vh;
}

.auth-layout {
  min-height: 100vh;
  background: var(--color-bg);
}

.app-layout {
  min-height: 100vh;
  background: var(--color-bg);
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.loading-content {
  background: var(--card-color);
  padding: 2rem;
  border-radius: 0.5rem;
  text-align: center;
  color: var(--color-primary-100);
}

.loading-spinner {
  width: 2rem;
  height: 2rem;
  border: 2px solid var(--color-primary-300);
  border-top: 2px solid var(--brand-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.router-link-active {
  color: var(--brand-color);
}
</style>