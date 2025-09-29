<template>
  <div class="dashboard">
    <!-- Welcome Section -->
    <div class="welcome-card">
      <h3>Welcome to Crypto Dashboard</h3>
      <p>Hello {{ user.name }}, welcome to your crypto application dashboard.</p>
    </div>

    <!-- User Info Card -->
    <div class="info-card">
      <h3>Your Account Information</h3>
      <div class="info-grid">
        <div class="info-item">
          <label>Full name</label>
          <span>{{ user.name }}</span>
        </div>
        <div class="info-item">
          <label>Email address</label>
          <span>{{ user.email }}</span>
        </div>
        <div class="info-item">
          <label>Account created</label>
          <span>{{ formatDate(user.created_at) }}</span>
        </div>
        <div class="info-item">
          <label>Last updated</label>
          <span>{{ formatDate(user.updated_at) }}</span>
        </div>
      </div>
    </div>

    <!-- Crypto Features Placeholder -->
    <div class="features-card">
      <h3>Crypto Features</h3>
      <div class="features-grid">
        <div class="feature-item">
          <div class="feature-icon">💰</div>
          <div class="feature-content">
            <h4>Portfolio</h4>
            <p>View your crypto portfolio</p>
          </div>
        </div>

        <div class="feature-item">
          <div class="feature-icon">📈</div>
          <div class="feature-content">
            <h4>Trading</h4>
            <p>Buy and sell cryptocurrencies</p>
          </div>
        </div>

        <div class="feature-item">
          <div class="feature-icon">📊</div>
          <div class="feature-content">
            <h4>Analytics</h4>
            <p>Track market trends</p>
          </div>
        </div>
      </div>
    </div>

    <!-- API Status -->
    <div class="status-card">
      <h3>API Status</h3>
      <div class="status-item">
        <div class="status-indicator"></div>
        <div class="status-content">
          <p class="status-title">Connected to Laravel API</p>
          <p class="status-subtitle">All systems operational</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters('auth', ['user'])
  },
  methods: {
    formatDate(dateString) {
      if (!dateString) return 'N/A';
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    }
  }
};
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.welcome-card,
.info-card,
.features-card,
.status-card {
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
}

.welcome-card p {
  color: #6b7280;
  font-size: 0.875rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.info-item {
  display: flex;
  flex-direction: column;
}

.info-item label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
  margin-bottom: 0.25rem;
}

.info-item span {
  font-size: 0.875rem;
  color: #111827;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.feature-item {
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  transition: border-color 0.2s;
}

.feature-item:hover {
  border-color: #d1d5db;
}

.feature-icon {
  font-size: 2rem;
  margin-right: 1rem;
}

.feature-content h4 {
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
  margin-bottom: 0.25rem;
}

.feature-content p {
  font-size: 0.875rem;
  color: #6b7280;
}

.status-item {
  display: flex;
  align-items: center;
}

.status-indicator {
  width: 0.5rem;
  height: 0.5rem;
  background-color: #10b981;
  border-radius: 50%;
  margin-right: 0.75rem;
}

.status-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
  margin-bottom: 0.25rem;
}

.status-subtitle {
  font-size: 0.875rem;
  color: #6b7280;
}
</style>