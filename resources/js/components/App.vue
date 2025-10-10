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
import { mapGetters, mapActions } from 'vuex'
import router from '../router' // ✅ correct import path

export default {
  name: 'App',
  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated', 'user']),
    isAuthPage() {
      return this.$route.name === 'Login' || this.$route.name === 'Register'
    }
  },
  methods: {
    ...mapActions('auth', ['logout', 'initializeAuth'])
  },
  async created() {
    console.log('🚀 App created, initializing auth...')
    this.loading = true

    try {
      await this.initializeAuth()
      console.log('✅ Auth initialization complete')
    } catch (error) {
      console.error('❌ Auth initialization failed:', error)
    }

    this.loading = false
    console.log('✅ App ready, isAuthenticated:', this.isAuthenticated)
  },
  mounted() {
    // ✅ Fix Bootstrap modal and scrolling issues globally
    router.afterEach(() => {
      // Remove leftover modal backdrops
      document.querySelectorAll('.modal-backdrop').forEach(el => el.remove())

      // Reset body scroll/lock states
      document.body.classList.remove('modal-open')
      document.body.style.overflow = ''
      document.body.style.height = 'auto'
      document.body.style.position = ''
      document.body.style.paddingRight = ''

      // Reset scroll position for new pages
      window.scrollTo(0, 0)
    })
  }
}
</script>

<style>
/* ========== Base ========== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  overflow-y: auto !important;
  scroll-behavior: smooth;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: var(--color-bg);
  color: var(--color-primary-100);
}

#app {
  min-height: 100vh;
}

/* ========== Layouts ========== */
.auth-layout {
  min-height: 100vh;
  background: var(--color-bg);
}

.app-layout {
  min-height: 100vh;
  background: var(--color-bg);
  overflow-y: auto;
  height: 100%;
}

/* ========== Loading Overlay ========== */
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
  z-index: 9999;
  transition: opacity 0.3s ease;
}

.loading-overlay[style*='display: none'],
.loading-overlay[style*='display:none'],
.loading-overlay.hidden {
  pointer-events: none !important;
  opacity: 0;
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
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* ========== Bootstrap Modal Fixes ========== */
.modal,
.modal-backdrop {
  z-index: 10000 !important;
}

/* ✅ Transparent backdrop (no dim shadow) */
.modal-backdrop {
  background-color: transparent !important;
  opacity: 0 !important;
  pointer-events: none !important;
}

/* ✅ Prevent body scroll lock bugs */
body.modal-open {
  overflow: hidden !important;
}

body:not(.modal-open) {
  overflow: auto !important;
}

.router-link-active {
  color: var(--brand-color);
}
</style>
