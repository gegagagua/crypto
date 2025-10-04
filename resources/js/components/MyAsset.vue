<template>
  <div class="container-fluid d-sm-flex flex-row fixed-sidebar">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="d-flex align-items-center justify-content-between">
        <div class="justify-content-between disable-sm-screen mt-3">
          <div class="crypt-logo dark">
            <router-link to="/">
              <img src="/images/logo-dark.svg" alt="">
            </router-link>
          </div>
        </div>
      </div>
      
      <div class="side-wrapper">
        <div class="side-title">Assets</div>
        <div class="side-menu">
          <router-link class="sidebar-link" to="/dashboard">
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
          
          <router-link class="sidebar-link is-active" to="/my-asset">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.0602 11.8201L20.9002 11.6001C20.6202 11.2601 20.2902 10.9901 19.9102 10.7901C19.4002 10.5001 18.8202 10.3501 18.2202 10.3501H5.7702C5.1702 10.3501 4.6002 10.5001 4.0802 10.7901C3.6902 11.0001 3.3402 11.2901 3.0502 11.6501C2.4802 12.3801 2.2102 13.2801 2.3002 14.1801L2.6702 18.8501C2.8002 20.2601 2.9702 22.0001 6.1402 22.0001H17.8602C21.0302 22.0001 21.1902 20.2601 21.3302 18.8401L21.7002 14.1901C21.7902 13.3501 21.5702 12.5101 21.0602 11.8201ZM14.3902 17.3401H9.6002C9.2102 17.3401 8.9002 17.0201 8.9002 16.6401C8.9002 16.2601 9.2102 15.9401 9.6002 15.9401H14.3902C14.7802 15.9401 15.0902 16.2601 15.0902 16.6401C15.0902 17.0301 14.7802 17.3401 14.3902 17.3401Z" fill="currentColor"/>
              <path opacity="0.4" d="M3.37988 11.31C3.59988 11.11 3.81988 10.93 4.07988 10.79C4.58988 10.5 5.16988 10.35 5.76988 10.35H18.2299C18.8299 10.35 19.3999 10.5 19.9199 10.79C20.1799 10.93 20.4099 11.11 20.6199 11.32V10.79V9.82C20.6199 6.25 19.5299 5.16 15.9599 5.16H13.5799C13.1399 5.16 13.1299 5.15 12.8699 4.81L11.6699 3.2C11.0999 2.46 10.6499 2 9.21988 2H8.03988C4.46988 2 3.37988 3.09 3.37988 6.66V10.8V11.31Z" fill="currentColor"/>
            </svg>
            <span> My Asset </span>
          </router-link>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="wrapper pb-2">
      <!-- Header -->
      <div class="header d-flex align-items-center">
        <div class="header-title">
          <h1>My Assets</h1>
          <p class="header-subtitle">Manage your cryptocurrency portfolio</p>
        </div>
      </div>

      <!-- Assets Content -->
      <div class="assets-content">
        <!-- Portfolio Summary -->
        <div class="row mb-4">
          <div class="col-md-3 mb-3">
            <div class="summary-card">
              <div class="summary-icon">
                <i class="fa fa-wallet"></i>
              </div>
              <div class="summary-content">
                <h6>Total Balance</h6>
                <span class="summary-value">$12,450.75</span>
                <span class="summary-change positive">+2.45%</span>
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <div class="summary-card">
              <div class="summary-icon">
                <i class="fa fa-line-chart"></i>
              </div>
              <div class="summary-content">
                <h6>24h Change</h6>
                <span class="summary-value">+$1,250.30</span>
                <span class="summary-change positive">+11.2%</span>
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <div class="summary-card">
              <div class="summary-icon">
                <i class="fa fa-coins"></i>
              </div>
              <div class="summary-content">
                <h6>Assets</h6>
                <span class="summary-value">8</span>
                <span class="summary-change">Active</span>
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <div class="summary-card">
              <div class="summary-icon">
                <i class="fa fa-exchange"></i>
              </div>
              <div class="summary-content">
                <h6>Total Trades</h6>
                <span class="summary-value">156</span>
                <span class="summary-change">This month</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Assets Table -->
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h5>My Cryptocurrency Assets</h5>
                <div class="card-actions">
                  <button class="btn btn-primary btn-sm">
                    <i class="fa fa-plus"></i> Add Asset
                  </button>
                </div>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-dark">
                    <thead>
                      <tr>
                        <th>Asset</th>
                        <th>Balance</th>
                        <th>Value (USD)</th>
                        <th>24h Change</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="asset in userAssets" :key="asset.id">
                        <td>
                          <div class="d-flex align-items-center">
                            <img :src="asset.icon" :alt="asset.name" class="asset-icon me-3">
                            <div>
                              <h6 class="mb-0">{{ asset.name }}</h6>
                              <small class="text-muted">{{ asset.symbol }}</small>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span class="balance">{{ asset.balance }}</span>
                          <small class="text-muted d-block">{{ asset.symbol }}</small>
                        </td>
                        <td>
                          <span class="value">${{ asset.value }}</span>
                        </td>
                        <td>
                          <span :class="asset.change >= 0 ? 'change positive' : 'change negative'">
                            {{ asset.change >= 0 ? '+' : '' }}{{ asset.change }}%
                          </span>
                        </td>
                        <td>
                          <div class="btn-group" role="group">
                            <button class="btn btn-success btn-sm" @click="tradeAsset(asset)">
                              <i class="fa fa-exchange"></i> Trade
                            </button>
                            <button class="btn btn-outline-primary btn-sm" @click="viewDetails(asset)">
                              <i class="fa fa-eye"></i> Details
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Recent Transactions -->
        <div class="row mt-4">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h5>Recent Transactions</h5>
                <router-link to="/order-history" class="btn btn-outline-primary btn-sm">
                  View All
                </router-link>
              </div>
              <div class="card-body">
                <div class="transaction-list">
                  <div class="transaction-item" v-for="transaction in recentTransactions" :key="transaction.id">
                    <div class="transaction-icon">
                      <i :class="transaction.type === 'buy' ? 'fa fa-arrow-down text-success' : 'fa fa-arrow-up text-danger'"></i>
                    </div>
                    <div class="transaction-details">
                      <h6>{{ transaction.type === 'buy' ? 'Bought' : 'Sold' }} {{ transaction.asset }}</h6>
                      <small class="text-muted">{{ transaction.date }}</small>
                    </div>
                    <div class="transaction-amount">
                      <span class="amount">{{ transaction.amount }} {{ transaction.symbol }}</span>
                      <small class="text-muted d-block">${{ transaction.value }}</small>
                    </div>
                    <div class="transaction-status">
                      <span :class="'status ' + transaction.status">{{ transaction.status }}</span>
                    </div>
                  </div>
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
export default {
  name: 'MyAsset',
  data() {
    return {
      userAssets: [
        {
          id: 1,
          name: 'Bitcoin',
          symbol: 'BTC',
          balance: '0.125',
          value: '5,406.25',
          change: 2.45,
          icon: '/images/coin/btc.svg'
        },
        {
          id: 2,
          name: 'Ethereum',
          symbol: 'ETH',
          balance: '2.5',
          value: '6,625.75',
          change: -1.23,
          icon: '/images/coin/eth.svg'
        },
        {
          id: 3,
          name: 'Binance Coin',
          symbol: 'BNB',
          balance: '15.8',
          value: '4,989.64',
          change: 0.87,
          icon: '/images/coin/bnb.svg'
        },
        {
          id: 4,
          name: 'Cardano',
          symbol: 'ADA',
          balance: '1,250',
          value: '606.25',
          change: -0.45,
          icon: '/images/coin/ada.svg'
        },
        {
          id: 5,
          name: 'Solana',
          symbol: 'SOL',
          balance: '8.5',
          value: '836.83',
          change: 3.21,
          icon: '/images/coin/sol.svg'
        }
      ],
      recentTransactions: [
        {
          id: 1,
          type: 'buy',
          asset: 'Bitcoin',
          symbol: 'BTC',
          amount: '0.05',
          value: '2,162.50',
          date: '2 hours ago',
          status: 'completed'
        },
        {
          id: 2,
          type: 'sell',
          asset: 'Ethereum',
          symbol: 'ETH',
          amount: '0.5',
          value: '1,325.15',
          date: '5 hours ago',
          status: 'completed'
        },
        {
          id: 3,
          type: 'buy',
          asset: 'Solana',
          symbol: 'SOL',
          amount: '2.0',
          value: '196.90',
          date: '1 day ago',
          status: 'completed'
        }
      ]
    };
  },
  methods: {
    tradeAsset(asset) {
      this.$router.push({
        name: 'Exchange',
        query: { asset: asset.symbol }
      });
    },
    viewDetails(asset) {
      // Navigate to asset details or show modal
      console.log('View details for:', asset);
    }
  }
};
</script>

