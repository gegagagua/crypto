<template>
  <div class="container-fluid d-sm-flex flex-row fixed-sidebar">
    <!-- Sidebar -->
    <aside class="sidebar">
      <!-- Brand Logo -->
      <div class="d-flex align-items-center justify-content-between">
        <div class="justify-content-between disable-sm-screen mt-3">
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
          <!-- Logo sm -->
          <div class="crypt-logo logo-sm dark">
            <router-link to="/">
              <img src="/images/logo-m-dark.svg" alt="">
            </router-link>
          </div>
          <div class="crypt-logo logo-sm light">
            <router-link to="/">
              <img src="/images/logo-m.svg" alt="">
            </router-link>
          </div>
        </div>
      </div>
      
      <!-- Menu -->
      <div class="side-wrapper">
        <div class="side-title">Assets</div>
        <div class="side-menu">
          <router-link class="sidebar-link is-active" to="/dashboard">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M18.6699 2H16.7699C14.5899 2 13.4399 3.15 13.4399 5.33V7.23C13.4399 9.41 14.5899 10.56 16.7699 10.56H18.6699C20.8499 10.56 21.9999 9.41 21.9999 7.23V5.33C21.9999 3.15 20.8499 2 18.6699 2Z" fill="currentColor" />
              <path opacity="0.4" d="M7.24 13.4301H5.34C3.15 13.4301 2 14.5801 2 16.7601V18.6601C2 20.8501 3.15 22.0001 5.33 22.0001H7.23C9.41 22.0001 10.56 20.8501 10.56 18.6701V16.7701C10.57 14.5801 9.42 13.4301 7.24 13.4301Z" fill="currentColor" />
              <path d="M6.29 10.58C8.6593 10.58 10.58 8.6593 10.58 6.29C10.58 3.9207 8.6593 2 6.29 2C3.9207 2 2 3.9207 2 6.29C2 8.6593 3.9207 10.58 6.29 10.58Z" fill="currentColor" />
              <path d="M17.7099 22C20.0792 22 21.9999 20.0793 21.9999 17.71C21.9999 15.3407 20.0792 13.42 17.7099 13.42C15.3406 13.42 13.4199 15.3407 13.4199 17.71C13.4199 20.0793 15.3406 22 17.7099 22Z" fill="currentColor" />
            </svg>
            <span> Dashboard </span>
          </router-link>
          
          <router-link class="sidebar-link" to="/marketplace">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.9597 17.84L19.3297 18.39C18.8797 18.54 18.5197 18.89 18.3697 19.35L17.8197 20.98C17.3497 22.39 15.3697 22.36 14.9297 20.95L13.0797 15C12.7197 13.82 13.8097 12.72 14.9797 13.09L20.9397 14.94C22.3397 15.38 22.3597 17.37 20.9597 17.84Z" fill="currentColor"/>
              <path opacity="0.4" d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" fill="currentColor"/>
            </svg>
            <span> Marketplace </span>
          </router-link>
          
          <router-link class="sidebar-link" to="/exchange">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 15.5C15 19.09 12.09 22 8.5 22C4.91 22 2 19.09 2 15.5C2 11.91 4.91 9 8.5 9C8.67 9 8.84999 9.01 9.01999 9.02C12.19 9.27 14.73 11.81 14.98 14.98C14.99 15.15 15 15.33 15 15.5Z" fill="currentColor"></path>
              <path opacity="0.4" d="M22 8.5C22 12.09 19.09 15 15.5 15C15.33 15 15.15 14.99 14.98 14.98C14.73 11.81 12.19 9.27 9.01999 9.02C9.00999 8.85 9 8.67 9 8.5C9 4.91 11.91 2 15.5 2C19.09 2 22 4.91 22 8.5Z" fill="currentColor"></path>
              <path d="M5.59 2H3C2.45 2 2 2.45 2 3V5.59C2 6.48 3.07999 6.93 3.70999 6.3L6.29999 3.71001C6.91999 3.08001 6.48 2 5.59 2Z" fill="currentColor"></path>
              <path d="M18.41 22H21C21.55 22 22 21.55 22 21V18.41C22 17.52 20.92 17.07 20.29 17.7L17.7 20.29C17.08 20.92 17.52 22 18.41 22Z" fill="currentColor"></path>
            </svg>
            <span> Exchange </span>
          </router-link>
          
          <router-link class="sidebar-link trending" to="/my-asset">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.0602 11.8201L20.9002 11.6001C20.6202 11.2601 20.2902 10.9901 19.9102 10.7901C19.4002 10.5001 18.8202 10.3501 18.2202 10.3501H5.7702C5.1702 10.3501 4.6002 10.5001 4.0802 10.7901C3.6902 11.0001 3.3402 11.2901 3.0502 11.6501C2.4802 12.3801 2.2102 13.2801 2.3002 14.1801L2.6702 18.8501C2.8002 20.2601 2.9702 22.0001 6.1402 22.0001H17.8602C21.0302 22.0001 21.1902 20.2601 21.3302 18.8401L21.7002 14.1901C21.7902 13.3501 21.5702 12.5101 21.0602 11.8201ZM14.3902 17.3401H9.6002C9.2102 17.3401 8.9002 17.0201 8.9002 16.6401C8.9002 16.2601 9.2102 15.9401 9.6002 15.9401H14.3902C14.7802 15.9401 15.0902 16.2601 15.0902 16.6401C15.0902 17.0301 14.7802 17.3401 14.3902 17.3401Z" fill="currentColor"/>
              <path opacity="0.4" d="M3.37988 11.31C3.59988 11.11 3.81988 10.93 4.07988 10.79C4.58988 10.5 5.16988 10.35 5.76988 10.35H18.2299C18.8299 10.35 19.3999 10.5 19.9199 10.79C20.1799 10.93 20.4099 11.11 20.6199 11.32V10.79V9.82C20.6199 6.25 19.5299 5.16 15.9599 5.16H13.5799C13.1399 5.16 13.1299 5.15 12.8699 4.81L11.6699 3.2C11.0999 2.46 10.6499 2 9.21988 2H8.03988C4.46988 2 3.37988 3.09 3.37988 6.66V10.8V11.31Z" fill="currentColor"/>
            </svg>
            <span> My Asset </span>
          </router-link>
        </div>
      </div>
      
      <!-- Divider -->
      <div class="nav-divider div-transparent mb-2 mt-2"></div>
      
      <!-- Menu 2 -->
      <div class="side-wrapper">
        <div class="side-title">Accounts</div>
        <div class="side-menu">
          <router-link class="sidebar-link" to="/settings">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M2 12.8801V11.1201C2 10.0801 2.85 9.22006 3.9 9.22006C5.71 9.22006 6.45 7.94006 5.54 6.37006C5.02 5.47006 5.33 4.30006 6.24 3.78006L7.97 2.79006C8.76 2.32006 9.78 2.60006 10.25 3.39006L10.36 3.58006C11.26 5.15006 12.74 5.15006 13.65 3.58006L13.76 3.39006C14.23 2.60006 15.25 2.32006 16.04 2.79006L17.77 3.78006C18.68 4.30006 18.99 5.47006 18.47 6.37006C17.56 7.94006 18.3 9.22006 20.11 9.22006C21.15 9.22006 22.01 10.0701 22.01 11.1201V12.8801C22.01 13.9201 21.16 14.7801 20.11 14.7801C18.3 14.7801 17.56 16.0601 18.47 17.6301C18.99 18.5401 18.68 19.7001 17.77 20.2201L16.04 21.2101C15.25 21.6801 14.23 21.4001 13.76 20.6101L13.65 20.4201C12.75 18.8501 11.27 18.8501 10.36 20.4201L10.25 20.6101C9.78 21.4001 8.76 21.6801 7.97 21.2101L6.24 20.2201C5.33 19.7001 5.02 18.5301 5.54 17.6301C6.45 16.0601 5.71 14.7801 3.9 14.7801C2.85 14.7801 2 13.9201 2 12.8801Z" fill="currentColor" />
              <path d="M12 15.25C13.7949 15.25 15.25 13.7949 15.25 12C15.25 10.2051 13.7949 8.75 12 8.75C10.2051 8.75 8.75 10.2051 8.75 12C8.75 13.7949 10.2051 15.25 12 15.25Z" fill="currentColor" />
            </svg>
            <span> Settings </span>
          </router-link>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="wrapper pb-2">
      <!-- Header -->
      <div class="header d-flex align-items-center">
        <!-- Mobile Toggle Button -->
        <span id="sidebar-mobile-toggle">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.25 7.81V16.19C21.25 17.8608 20.7549 19.1045 19.9297 19.9297C19.1045 20.7549 17.8608 21.25 16.19 21.25H9.75V2.75H16.19C17.8608 2.75 19.1045 3.24514 19.9297 4.07033C20.7549 4.89552 21.25 6.13915 21.25 7.81Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.25 2.75V21.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>

        <!-- Page Title -->
        <div class="header-title">
          <h1>Dashboard</h1>
          <p class="header-subtitle">Welcome back, {{ user ? user.name : 'User' }}!</p>
        </div>

        <!-- Header Actions -->
        <div class="header-actions">
          <!-- Dark/Light Mode Toggle -->
          <div class="mode">
            <button class="controller m-auto" id="darkMode">
              <span class="dark-logo">
                <svg viewBox="0 0 512 512" width="100" fill="currentColor">
                  <path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z" />
                </svg>
              </span>
              <span class="light-logo">
                <svg viewBox="0 0 512 512" width="100" fill="currentColor">
                  <path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"/>
                </svg>
              </span>
            </button>
          </div>

          <!-- User Menu -->
          <div class="user-menu">
            <div class="user-avatar">
              <img src="/images/icon/user-1.jpg" alt="User" class="rounded-circle">
            </div>
            <div class="user-info">
              <span class="user-name">{{ user ? user.name : 'Guest' }}</span>
              <span class="user-email">{{ user ? user.email : 'guest@example.com' }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Dashboard Content -->
      <div class="dashboard-content">
        <!-- Portfolio Summary -->
        <div class="row mb-4">
          <div class="col-lg-3 col-md-6 mb-3">
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <div class="avatar-sm rounded-circle bg-primary-subtle text-primary">
                      <i class="fa fa-wallet fa-lg"></i>
                    </div>
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h6 class="mb-1">Total Balance</h6>
                    <h4 class="mb-0">$12,450.75</h4>
                    <small class="text-success">+2.45%</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-3 col-md-6 mb-3">
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <div class="avatar-sm rounded-circle bg-success-subtle text-success">
                      <i class="fa fa-line-chart fa-lg"></i>
                    </div>
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h6 class="mb-1">24h Change</h6>
                    <h4 class="mb-0">+$1,250.30</h4>
                    <small class="text-success">+11.2%</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-3 col-md-6 mb-3">
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <div class="avatar-sm rounded-circle bg-warning-subtle text-warning">
                      <i class="fa fa-coins fa-lg"></i>
                    </div>
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h6 class="mb-1">Assets</h6>
                    <h4 class="mb-0">8</h4>
                    <small class="text-muted">Active</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-3 col-md-6 mb-3">
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <div class="avatar-sm rounded-circle bg-info-subtle text-info">
                      <i class="fa fa-exchange fa-lg"></i>
                    </div>
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <h6 class="mb-1">Total Trades</h6>
                    <h4 class="mb-0">156</h4>
                    <small class="text-muted">This month</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Charts and Tables -->
        <div class="row">
          <!-- Portfolio Chart -->
          <div class="col-lg-8 mb-4">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title mb-0">Portfolio Performance</h5>
              </div>
              <div class="card-body">
                <div class="chart-container">
                  <div class="chart-placeholder">
                    <h6>Portfolio Chart</h6>
                    <p>Chart will be integrated here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Recent Transactions -->
          <div class="col-lg-4 mb-4">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title mb-0">Recent Transactions</h5>
              </div>
              <div class="card-body">
                <div class="transaction-list">
                  <div class="transaction-item" v-for="transaction in recentTransactions" :key="transaction.id">
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0">
                        <div class="avatar-xs rounded-circle" :class="transaction.type === 'buy' ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'">
                          <i :class="transaction.type === 'buy' ? 'fa fa-arrow-down' : 'fa fa-arrow-up'"></i>
                        </div>
                      </div>
                      <div class="flex-grow-1 ms-3">
                        <h6 class="mb-0">{{ transaction.type === 'buy' ? 'Bought' : 'Sold' }} {{ transaction.asset }}</h6>
                        <small class="text-muted">{{ transaction.date }}</small>
                      </div>
                      <div class="text-end">
                        <span class="fw-medium">{{ transaction.amount }} {{ transaction.symbol }}</span>
                        <small class="text-muted d-block">${{ transaction.value }}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Top Cryptocurrencies -->
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title mb-0">Top Cryptocurrencies</h5>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-dark">
                    <thead>
                      <tr>
                        <th>Asset</th>
                        <th>Price</th>
                        <th>24h Change</th>
                        <th>Market Cap</th>
                        <th>Volume</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="coin in topCryptos" :key="coin.id">
                        <td>
                          <div class="d-flex align-items-center">
                            <img :src="coin.icon" :alt="coin.name" class="coin-icon me-2">
                            <div>
                              <h6 class="mb-0">{{ coin.name }}</h6>
                              <small class="text-muted">{{ coin.symbol }}</small>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span class="fw-medium">${{ coin.price }}</span>
                        </td>
                        <td>
                          <span :class="coin.change >= 0 ? 'text-success' : 'text-danger'">
                            {{ coin.change >= 0 ? '+' : '' }}{{ coin.change }}%
                          </span>
                        </td>
                        <td>
                          <span>${{ coin.marketCap }}</span>
                        </td>
                        <td>
                          <span>${{ coin.volume }}</span>
                        </td>
                        <td>
                          <button class="btn btn-primary btn-sm">Trade</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Dashboard',
  data() {
    return {
      recentTransactions: [
        {
          id: 1,
          type: 'buy',
          asset: 'Bitcoin',
          symbol: 'BTC',
          amount: '0.05',
          value: '2,162.50',
          date: '2 hours ago'
        },
        {
          id: 2,
          type: 'sell',
          asset: 'Ethereum',
          symbol: 'ETH',
          amount: '0.5',
          value: '1,325.15',
          date: '5 hours ago'
        },
        {
          id: 3,
          type: 'buy',
          asset: 'Solana',
          symbol: 'SOL',
          amount: '2.0',
          value: '196.90',
          date: '1 day ago'
        }
      ],
      topCryptos: [
        {
          id: 1,
          name: 'Bitcoin',
          symbol: 'BTC',
          price: '43,250.50',
          change: 2.45,
          marketCap: '850.2B',
          volume: '15.2B',
          icon: '/images/coin/btc.svg'
        },
        {
          id: 2,
          name: 'Ethereum',
          symbol: 'ETH',
          price: '2,650.30',
          change: -1.23,
          marketCap: '320.1B',
          volume: '8.5B',
          icon: '/images/coin/eth.svg'
        },
        {
          id: 3,
          name: 'Binance Coin',
          symbol: 'BNB',
          price: '315.80',
          change: 0.87,
          marketCap: '48.9B',
          volume: '1.2B',
          icon: '/images/coin/bnb.svg'
        },
        {
          id: 4,
          name: 'Cardano',
          symbol: 'ADA',
          price: '0.4850',
          change: -0.45,
          marketCap: '17.2B',
          volume: '450M',
          icon: '/images/coin/ada.svg'
        }
      ]
    };
  },
  computed: {
    ...mapGetters('auth', ['user'])
  },
  methods: {
    ...mapActions('auth', ['fetchUser'])
  },
  created() {
    if (!this.user) {
      this.fetchUser();
    }
  }
};
</script>

<style scoped>
.dashboard-content {
  padding: 1rem;
}

.chart-container {
  height: 300px;
  background: var(--card-color);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chart-placeholder {
  text-align: center;
  color: var(--color-primary-500);
}

.transaction-list {
  max-height: 300px;
  overflow-y: auto;
}

.transaction-item {
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--border-color);
}

.transaction-item:last-child {
  border-bottom: none;
}

.avatar-sm {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-xs {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.coin-icon {
  width: 24px;
  height: 24px;
}

.user-menu {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.user-avatar img {
  width: 40px;
  height: 40px;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.user-name {
  color: var(--color-primary-100);
  font-weight: 500;
  font-size: 0.875rem;
}

.user-email {
  color: var(--color-primary-500);
  font-size: 0.75rem;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.mode button {
  background: none;
  border: none;
  color: var(--color-primary-300);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.mode button:hover {
  background: var(--brand-hover-bg);
  color: var(--brand-color);
}
</style>