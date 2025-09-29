<template>
  <div class="register-container">
    <div class="register-form">
      <h2>Create your account</h2>
      <p class="login-link">
        Or <router-link to="/login">sign in to your existing account</router-link>
      </p>
      
      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label for="name">Full Name</label>
          <input
            id="name"
            type="text"
            required
            v-model="form.name"
            placeholder="Enter your full name"
          />
          <div v-if="errors.name" class="error-message">
            {{ errors.name[0] }}
          </div>
        </div>

        <div class="form-group">
          <label for="email">Email Address</label>
          <input
            id="email"
            type="email"
            required
            v-model="form.email"
            placeholder="Enter your email"
          />
          <div v-if="errors.email" class="error-message">
            {{ errors.email[0] }}
          </div>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            id="password"
            type="password"
            required
            v-model="form.password"
            placeholder="Enter your password"
          />
          <div v-if="errors.password" class="error-message">
            {{ errors.password[0] }}
          </div>
        </div>

        <div class="form-group">
          <label for="password_confirmation">Confirm Password</label>
          <input
            id="password_confirmation"
            type="password"
            required
            v-model="form.password_confirmation"
            placeholder="Confirm your password"
          />
          <div v-if="errors.password_confirmation" class="error-message">
            {{ errors.password_confirmation[0] }}
          </div>
        </div>

        <div v-if="errorMessage" class="error-alert">
          {{ errorMessage }}
        </div>

        <button type="submit" :disabled="loading" class="submit-btn">
          {{ loading ? 'Creating account...' : 'Create account' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Register',
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      loading: false,
      errorMessage: '',
      errors: {}
    };
  },
  methods: {
    ...mapActions('auth', ['register']),
    
    async handleRegister() {
      this.loading = true;
      this.errorMessage = '';
      this.errors = {};

      const result = await this.register(this.form);
      
      if (result.success) {
        this.$router.push('/dashboard');
      } else {
        this.errorMessage = result.error;
        if (result.errors) {
          this.errors = result.errors;
        }
      }
      
      this.loading = false;
    }
  }
};
</script>

<style scoped>
.register-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9fafb;
  padding: 1rem;
}

.register-form {
  max-width: 28rem;
  width: 100%;
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  font-size: 1.875rem;
  font-weight: 800;
  color: #111827;
  margin-bottom: 0.5rem;
}

.login-link {
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 2rem;
}

.login-link a {
  color: #2563eb;
  text-decoration: none;
}

.login-link a:hover {
  color: #1d4ed8;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  color: #111827;
  background-color: white;
}

input:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.error-message {
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.error-alert {
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  color: #dc2626;
  padding: 0.75rem;
  border-radius: 0.375rem;
  margin-bottom: 1rem;
}

.submit-btn {
  width: 100%;
  background-color: #2563eb;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-btn:hover:not(:disabled) {
  background-color: #1d4ed8;
}

.submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>