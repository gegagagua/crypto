<template>
  <div class="login-container">
    <div class="login-form">
      <h2>Sign in to your account</h2>
      <p class="register-link">
        Or <router-link to="/register">create a new account</router-link>
      </p>
      
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">Email address</label>
          <input
            id="email"
            type="email"
            required
            v-model="form.email"
            placeholder="Email address"
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
            placeholder="Password"
          />
          <div v-if="errors.password" class="error-message">
            {{ errors.password[0] }}
          </div>
        </div>

        <div v-if="errorMessage" class="error-alert">
          {{ errorMessage }}
        </div>

        <button type="submit" :disabled="loading" class="submit-btn">
          {{ loading ? 'Signing in...' : 'Sign in' }}
        </button>
      </form>
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
        password: ''
      },
      loading: false,
      errorMessage: '',
      errors: {}
    };
  },
  methods: {
    ...mapActions('auth', ['login']),
    
    async handleLogin() {
      this.loading = true;
      this.errorMessage = '';
      this.errors = {};

      const result = await this.login(this.form);
      
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
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9fafb;
  padding: 1rem;
}

.login-form {
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

.register-link {
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 2rem;
}

.register-link a {
  color: #2563eb;
  text-decoration: none;
}

.register-link a:hover {
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