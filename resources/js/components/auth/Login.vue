<template>
  <div class="crypt-dark">
    <!-- Header -->
    <header class="crypt-header blur-header align-items-center fixed-top z-3">
      <div class="row align-items-center justify-content-between">
        <!-- main menu -->
        <div class="col-auto d-flex flex-row align-items-center">
          <!-- Logo -->
          <div class="crypt-logo dark">
            <router-link to="/">
              <img src="/images/logo-dark.svg" alt="">
            </router-link>
          </div>
          <div class="crypt-logo light">
            <router-link to="/">
              <img src="/images/logo.svg" alt="">
            </router-link>
          </div>
        </div>

        <!-- secondary menu -->
        <div class="col-auto d-flex flex-row align-items-center">
          <div class="user-settings gap-2 gap-sm-3">
            <!-- dark/light mode -->
            <div class="mode">
              <button class="controller m-auto" id="darkMode">
                <span class="dark-logo">
                  <svg viewBox="0 0 512 512" width="100" fill="currentColor">
                    <path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z" />
                  </svg>
                </span>
                <span class="light-logo">
                  <svg viewBox="0 0 512 512" width="100" fill="currentColor">
                    <path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z" />
                  </svg>
                </span>
              </button>
            </div>

            <!-- Hamburger Menu -->
            <div id="mobile_menu" class="close">
              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  <path d="M4 12H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  <path d="M4 6H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Login Form -->
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="crypt-login-form mt-5">
                <div class="d-flex justify-content-between mb-4 text-center">
                    <h3 class="fw-bold">Log in 🔥</h3>
            <div class="dropup">
              <div class="dropdown-menu dropdown-menu-lg-end text-center card-bs" style="max-width: 390px;">
                <div class="d-flex flex-column justify-content-center text-sm px-3 mt-2">
                  <!--QR Scan -->
                  <img class="card text-bg-light p-3" alt="" src="/images/features/qr.svg">
                  <div class="crypto-has-dropdown fw-medium crypt-grayscale-600 mt-3" role="button">
                    <svg width="24" height="24" viewBox="0 0 1024 1024" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M213.344 170.656c-23.552 0-42.656 19.104-42.656 42.656v106.656a42.656 42.656 0 01-85.312 0V213.312a128 128 0 01128-128h106.656a42.656 42.656 0 010 85.312H213.376zM128 661.344c23.552 0 42.656 19.104 42.656 42.656v106.656c0 23.552 19.104 42.656 42.656 42.656h106.656a42.656 42.656 0 010 85.312H213.312a128 128 0 01-128-128V703.968c0-23.552 19.104-42.656 42.656-42.656zM938.656 704a42.656 42.656 0 00-85.312 0v106.656c0 23.552-19.104 42.656-42.656 42.656H704.032a42.656 42.656 0 000 85.312h106.656a128 128 0 00128-128V703.968zM661.344 128c0-23.552 19.104-42.656 42.656-42.656h106.656a128 128 0 01128 128V320a42.656 42.656 0 01-85.312 0V213.344c0-23.552-19.104-42.656-42.656-42.656H704.032a42.656 42.656 0 01-42.656-42.656zm-448 341.344a42.656 42.656 0 000 85.312h597.344a42.656 42.656 0 000-85.312H213.344z"></path>
                    </svg>
                    Scan the QR code to log in or Open Crypt app.
                  </div>
                  <div class="d-flex flex-row gap-2 mt-3 justify-content-center">
                    <p class="crypt-grayscale-500">Don't have an account?</p>
                    <router-link to="/register" class="link-primary fw-bold">Sign up</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form class="needs-validation" @submit.prevent="handleLogin" novalidate>
            <div class="d-flex flex-column">
              <div class="d-flex flex-column mb-3">
                <label for="email" class="form-label text-light">Email/Phone Number <span class="crypt-grayscale-600">*</span></label>
                <input 
                  type="email" 
                  class="form-control py-2" 
                  name="email" 
                  id="email" 
                  placeholder="Email/Phone Number" 
                  v-model="form.email"
                  required
                >
                <div class="invalid-feedback mt-0" v-if="errors.email">{{ errors.email[0] }}</div>
              </div>
              <div class="d-flex flex-column">
                <div class="d-flex justify-content-between">
                  <label for="password" class="form-label text-light">Password <span class="crypt-grayscale-600">*</span></label>
                  <a href="#!" class="link-primary text-sm text-decoration-none">Forgot password?</a>
                </div>
                <div class="input-group-append">
                  <input 
                    :type="showPassword ? 'text' : 'password'" 
                    class="form-control form-controls py-2" 
                    name="password" 
                    id="password" 
                    placeholder="Login Password" 
                    v-model="form.password"
                    required
                  >
                  <div class="eye fright" @click="togglePassword">
                    <i :class="showPassword ? 'fa fa-eye-slash' : 'fa fa-eye'" id="eye"></i>
                  </div>
                  <div class="invalid-feedback mt-0" v-if="errors.password">{{ errors.password[0] }}</div>
                </div>
              </div>
              <div class="d-flex justify-content-between">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" name="remember_me" id="remember_me" v-model="form.remember_me">
                  <label class="form-check-label text-secondary" for="remember_me">
                    Remember me
                  </label>
                </div>
              </div>
              <button class="btn btn-primary rounded-pill text-center mt-4" type="submit" :disabled="loading">
                <span v-if="loading">Loading...</span>
                <span v-else>Continue</span>
              </button>
            </div>
          </form>
          <div class="d-flex flex-row gap-2 mt-4 justify-content-center">
            <p class="crypt-grayscale-500">Don't have an account?</p>
            <router-link to="/register" class="link-primary fw-bold">Sign up</router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="container-fluid text-left text-lg-start animation-element">
      <div class="container in-view">
        <!-- Link -->
        <div class="d-flex justify-content-center gap-4 crypt-footer-copyright border-0 mb-3 mt-3">
          <a class="text-link text-sm crypt-grayscale-600" href="#!">
            Docs
          </a>
          <a class="text-link text-sm crypt-grayscale-600" href="#!">
            Cookies
          </a>
          <a class="text-link text-sm crypt-grayscale-600" href="#!">
            Terms
          </a>
          <a class="text-link text-sm crypt-grayscale-600" href="#!">
            Privacy
          </a>
        </div>
      </div>
    </footer>

    <!-- Toast Container -->
    <div class="toast-container position-fixed top-0 end-0 p-3" style="z-index: 9999;">
      <div ref="errorToast" class="toast align-items-center text-bg-danger border-0" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
          <div class="toast-body">
            {{ errorMessage }}
          </div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        password: '',
        remember_me: false
      },
      loading: false,
      showPassword: false,
      errors: {},
      errorMessage: ''
    };
  },
  methods: {
    ...mapActions('auth', ['login']),
    
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    
    showErrorToast(message) {
      console.log('🍞 Showing toast:', message);
      this.errorMessage = message;
      
      this.$nextTick(() => {
        const toastElement = this.$refs.errorToast;
        
        if (!toastElement) {
          console.error('❌ Toast element not found!');
          return;
        }
        
        if (!window.bootstrap || !window.bootstrap.Toast) {
          console.error('❌ Bootstrap Toast not available!');
          return;
        }
        
        const toast = new window.bootstrap.Toast(toastElement, {
          autohide: true,
          delay: 5000
        });
        
        toast.show();
        console.log('✅ Toast shown successfully');
      });
    },
    
    async handleLogin() {
      this.loading = true;
      this.errors = {};

      const result = await this.login(this.form);
      
      if (result.success) {
        console.log('✅ Login successful! Redirecting to dashboard...');
        // Redirect to dashboard on success
        this.$router.push('/dashboard');
      } else {
        // Show error toast
        const errorMsg = result.error || 'არასწორი ელ.ფოსტა ან პაროლი';
        this.showErrorToast(errorMsg);
        
        // Set field-specific errors if available
        if (result.errors) {
          this.errors = result.errors;
        }
      }
      
      this.loading = false;
    }
  }
};
</script>
