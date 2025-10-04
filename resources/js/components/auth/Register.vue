<template>
  <div class="crypt-dark log-bg">
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

    <!-- Signup Form -->
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="crypt-login-form mt-5">
          <div class="d-flex mb-4">
            <h3 class="fw-bold">Create Account</h3>
          </div>
          <form class="needs-validation" @submit.prevent="handleRegister" novalidate>
            <div class="d-flex flex-column">
              <!-- First & Last Name -->
              <div class="d-flex gap-3 mb-3">
                <div class="flex-fill">
                  <label for="first_name" class="form-label text-light">First Name <span class="crypt-grayscale-600">*</span></label>
                  <input 
                    type="text" 
                    class="form-control py-2" 
                    id="first_name" 
                    name="first_name" 
                    placeholder="John" 
                    v-model="form.first_name"
                    required
                  >
                  <div class="invalid-feedback" v-if="errors.first_name">{{ errors.first_name[0] }}</div>
                </div>
                <div class="flex-fill">
                  <label for="last_name" class="form-label text-light">Last Name <span class="crypt-grayscale-600">*</span></label>
                  <input 
                    type="text" 
                    class="form-control py-2" 
                    id="last_name" 
                    name="last_name" 
                    placeholder="Doe" 
                    v-model="form.last_name"
                    required
                  >
                  <div class="invalid-feedback" v-if="errors.last_name">{{ errors.last_name[0] }}</div>
                </div>
              </div>

              <!-- Email -->
              <div class="d-flex flex-column mb-3">
                <label for="email" class="form-label text-light">Email <span class="crypt-grayscale-600">*</span></label>
                <input 
                  type="email" 
                  class="form-control py-2" 
                  name="email" 
                  id="email" 
                  placeholder="name@example.com" 
                  v-model="form.email"
                  required
                >
                <div class="invalid-feedback" v-if="errors.email">{{ errors.email[0] }}</div>
              </div>

              <!-- Phone Number -->
              <div class="d-flex flex-column mb-3">
                <label for="phone" class="form-label text-light">Phone Number (with country code) <span class="crypt-grayscale-600">*</span></label>
                <input 
                  type="tel" 
                  class="form-control py-2" 
                  name="phone" 
                  id="phone" 
                  placeholder="+1 555 123 4567" 
                  v-model="form.phone"
                  required
                >
                <div class="invalid-feedback" v-if="errors.phone">{{ errors.phone[0] }}</div>
              </div>

              <!-- Password -->
              <div class="d-flex flex-column mb-3">
                <label for="password" class="form-label text-light">Password <span class="crypt-grayscale-600">*</span></label>
                <div class="input-group">
                  <input 
                    :type="showPassword ? 'text' : 'password'" 
                    class="form-control py-2" 
                    name="password" 
                    id="password" 
                    placeholder="Enter a password" 
                    v-model="form.password"
                    required
                  >
                  <button type="button" class="btn btn-outline-secondary" @click="togglePassword">
                    <i :class="showPassword ? 'fa fa-eye-slash' : 'fa fa-eye'"></i>
                  </button>
                </div>
                <span id="passstrength" :class="passwordStrengthClass">{{ passwordStrengthText }}</span>
                <div class="text-muted crypt-grayscale-600 text-sm">Use 8 or more characters with a mix of letters, numbers & symbols.</div>
                <div class="invalid-feedback" v-if="errors.password">{{ errors.password[0] }}</div>
              </div>

              <!-- Confirm Password -->
              <div class="d-flex flex-column mb-3">
                <label for="confirm_password" class="form-label text-light">Confirm Password <span class="crypt-grayscale-600">*</span></label>
                <input 
                  :type="showConfirmPassword ? 'text' : 'password'" 
                  class="form-control py-2" 
                  name="confirm_password" 
                  id="confirm_password" 
                  placeholder="Re-enter your password" 
                  v-model="form.password_confirmation"
                  required
                >
                <div class="invalid-feedback" v-if="errors.password_confirmation">{{ errors.password_confirmation[0] }}</div>
              </div>

              <!-- Address & Zip -->
              <div class="d-flex gap-3 mb-3">
                <div class="flex-fill">
                  <label for="address" class="form-label text-light">Address <span class="crypt-grayscale-600">*</span></label>
                  <input 
                    type="text" 
                    class="form-control py-2" 
                    id="address" 
                    name="address" 
                    placeholder="123 Main St" 
                    v-model="form.address"
                    required
                  >
                  <div class="invalid-feedback" v-if="errors.address">{{ errors.address[0] }}</div>
                </div>
                <div style="max-width: 200px;">
                  <label for="zip" class="form-label text-light">Zip Code <span class="crypt-grayscale-600">*</span></label>
                  <input 
                    type="text" 
                    class="form-control py-2" 
                    id="zip" 
                    name="zip" 
                    placeholder="10001" 
                    v-model="form.zip"
                    required
                  >
                  <div class="invalid-feedback" v-if="errors.zip">{{ errors.zip[0] }}</div>
                </div>
              </div>

              <!-- Terms -->
              <div class="d-flex justify-content-between mb-3">
                <div class="form-check">
                  <input 
                    class="form-check-input" 
                    type="checkbox" 
                    value="" 
                    name="terms" 
                    id="terms" 
                    v-model="form.terms"
                    required
                  >
                  <label class="form-check-label text-secondary" for="terms">
                    I agree to the <a href="#!" class="link-primary fw-bold mb-0">Terms of Use</a>.
                  </label>
                  <div class="invalid-feedback" v-if="errors.terms">{{ errors.terms[0] }}</div>
                </div>
              </div>

              <!-- Submit -->
              <button class="btn btn-primary rounded-pill text-center mt-2" type="submit" :disabled="loading">
                <span v-if="loading">Creating Account...</span>
                <span v-else>Create Account</span>
              </button>
            </div>
          </form>

          <!-- Already have account -->
          <div class="d-flex flex-row gap-2 mt-4 justify-content-center">
            <p class="crypt-grayscale-500">Already have an account?</p>
            <router-link to="/login" class="link-primary fw-bold">Login</router-link>
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
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Register',
  data() {
    return {
      form: {
        first_name: '',
        last_name: '',
        name: '', // Will be combined from first_name and last_name
        email: '',
        phone: '',
        password: '',
        password_confirmation: '',
        address: '',
        zip: '',
        terms: false
      },
      loading: false,
      showPassword: false,
      showConfirmPassword: false,
      errors: {}
    };
  },
  computed: {
    passwordStrengthClass() {
      const strength = this.getPasswordStrength(this.form.password);
      return `text-${strength.color}`;
    },
    passwordStrengthText() {
      const strength = this.getPasswordStrength(this.form.password);
      return strength.text;
    }
  },
  methods: {
    ...mapActions('auth', ['register']),
    
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    
    toggleConfirmPassword() {
      this.showConfirmPassword = !this.showConfirmPassword;
    },
    
    getPasswordStrength(password) {
      if (!password) return { text: '', color: '' };
      
      let score = 0;
      if (password.length >= 8) score++;
      if (/[a-z]/.test(password)) score++;
      if (/[A-Z]/.test(password)) score++;
      if (/[0-9]/.test(password)) score++;
      if (/[^A-Za-z0-9]/.test(password)) score++;
      
      if (score < 2) return { text: 'Weak', color: 'danger' };
      if (score < 4) return { text: 'Medium', color: 'warning' };
      return { text: 'Strong', color: 'success' };
    },
    
    async handleRegister() {
      this.loading = true;
      this.errors = {};

      // Combine first and last name
      this.form.name = `${this.form.first_name} ${this.form.last_name}`.trim();

      try {
        const result = await this.register(this.form);
        
        if (result.success) {
          this.$router.push('/dashboard');
        } else {
          if (result.errors) {
            this.errors = result.errors;
          }
        }
      } catch (error) {
        console.error('Registration error:', error);
      }
      
      this.loading = false;
    }
  }
};
</script>
