<template>
  <div class="container-fluid d-sm-flex flex-row fixed-sidebar">
    <!-- Sidebar (same as Exchange) -->
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
        </div>
      </div>
      
      <!-- Menu -->
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
          
          <router-link class="sidebar-link is-active" to="/marketplace">
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
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="wrapper pb-2">
      <!-- Header -->
      <div class="header d-flex align-items-center">
        <div class="header-title">
          <h1>Marketplace</h1>
          <p class="header-subtitle">Discover and trade cryptocurrencies</p>
        </div>
      </div>

      <!-- Marketplace Content -->
      <div class="marketplace-content">
        <!-- Search and Filters -->
        <div class="row mb-4">
          <div class="col-md-6">
            <div class="search-box">
              <input type="text" class="form-control" placeholder="Search cryptocurrencies..." v-model="searchQuery">
            </div>
          </div>
          <div class="col-md-6">
            <div class="filters">
              <select class="form-select" v-model="selectedCategory">
                <option value="">All Categories</option>
                <option value="defi">DeFi</option>
                <option value="nft">NFT</option>
                <option value="gaming">Gaming</option>
                <option value="meme">Meme</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Featured Cryptocurrencies -->
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h5>Featured Cryptocurrencies</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-lg-3 col-md-6 mb-4" v-for="coin in filteredCoins" :key="coin.id">
                    <div class="crypto-card">
                      <div class="crypto-header">
                        <img :src="coin.icon" :alt="coin.name" class="crypto-icon">
                        <div class="crypto-info">
                          <h6>{{ coin.name }}</h6>
                          <span class="crypto-symbol">{{ coin.symbol }}</span>
                        </div>
                        <div class="crypto-price">
                          <span class="price">${{ coin.price }}</span>
                          <span :class="coin.change >= 0 ? 'change positive' : 'change negative'">
                            {{ coin.change >= 0 ? '+' : '' }}{{ coin.change }}%
                          </span>
                        </div>
                      </div>
                      <div class="crypto-chart">
                        <div class="mini-chart">
                          <img :src="coin.chart" :alt="coin.name + ' chart'" class="chart-img">
                        </div>
                      </div>
                      <div class="crypto-actions">
                        <button class="btn btn-primary btn-sm">Trade</button>
                        <button class="btn btn-outline-primary btn-sm">View Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Market Statistics -->
        <div class="row mt-4">
          <div class="col-md-3 mb-3">
            <div class="stat-card">
              <div class="stat-icon">
                <i class="fa fa-bitcoin"></i>
              </div>
              <div class="stat-content">
                <h6>Total Market Cap</h6>
                <span class="stat-value">$2.1T</span>
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <div class="stat-card">
              <div class="stat-icon">
                <i class="fa fa-line-chart"></i>
              </div>
              <div class="stat-content">
                <h6>24h Volume</h6>
                <span class="stat-value">$45.2B</span>
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <div class="stat-card">
              <div class="stat-icon">
                <i class="fa fa-coins"></i>
              </div>
              <div class="stat-content">
                <h6>Active Coins</h6>
                <span class="stat-value">8,945</span>
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <div class="stat-card">
              <div class="stat-icon">
                <i class="fa fa-exchange"></i>
              </div>
              <div class="stat-content">
                <h6>Exchanges</h6>
                <span class="stat-value">523</span>
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
  name: 'Marketplace',
  data() {
    return {
      searchQuery: '',
      selectedCategory: '',
      coins: [
        {
          id: 1,
          name: 'Bitcoin',
          symbol: 'BTC',
          price: '43,250.50',
          change: 2.45,
          icon: '/images/coin/btc.svg',
          chart: '/images/chart/highcharts01.svg',
          category: 'defi'
        },
        {
          id: 2,
          name: 'Ethereum',
          symbol: 'ETH',
          price: '2,650.30',
          change: -1.23,
          icon: '/images/coin/eth.svg',
          chart: '/images/chart/highcharts02.svg',
          category: 'defi'
        },
        {
          id: 3,
          name: 'Binance Coin',
          symbol: 'BNB',
          price: '315.80',
          change: 0.87,
          icon: '/images/coin/bnb.svg',
          chart: '/images/chart/highcharts03.svg',
          category: 'defi'
        },
        {
          id: 4,
          name: 'Cardano',
          symbol: 'ADA',
          price: '0.4850',
          change: -0.45,
          icon: '/images/coin/ada.svg',
          chart: '/images/chart/highcharts04.svg',
          category: 'defi'
        },
        {
          id: 5,
          name: 'Dogecoin',
          symbol: 'DOGE',
          price: '0.0825',
          change: 5.67,
          icon: '/images/coin/doge.svg',
          chart: '/images/chart/highcharts05.svg',
          category: 'meme'
        },
        {
          id: 6,
          name: 'Solana',
          symbol: 'SOL',
          price: '98.45',
          change: 3.21,
          icon: '/images/coin/sol.svg',
          chart: '/images/chart/highcharts06.svg',
          category: 'defi'
        },
        {
          id: 7,
          name: 'Polygon',
          symbol: 'MATIC',
          price: '0.7850',
          change: -2.15,
          icon: '/images/coin/matic.svg',
          chart: '/images/chart/highcharts07.svg',
          category: 'defi'
        },
        {
          id: 8,
          name: 'Chainlink',
          symbol: 'LINK',
          price: '14.25',
          change: 1.89,
          icon: '/images/coin/link.svg',
          chart: '/images/chart/highcharts08.svg',
          category: 'defi'
        }
      ]
    };
  },
  computed: {
    filteredCoins() {
      let filtered = this.coins;
      
      if (this.searchQuery) {
        filtered = filtered.filter(coin => 
          coin.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
      
      if (this.selectedCategory) {
        filtered = filtered.filter(coin => coin.category === this.selectedCategory);
      }
      
      return filtered;
    }
  }
};
</script>

<style scoped>
.marketplace-content {
  padding: 1rem;
}

.search-box .form-control {
  background: var(--color-input-field);
  border: 1px solid var(--border-color);
  color: var(--color-primary-100);
}

.search-box .form-control:focus {
  background: var(--color-input-field);
  border-color: var(--brand-color);
  color: var(--color-primary-100);
  box-shadow: 0 0 0 0.2rem rgba(35, 111, 251, 0.25);
}

.filters .form-select {
  background: var(--color-input-field);
  border: 1px solid var(--border-color);
  color: var(--color-primary-100);
}

.filters .form-select:focus {
  background: var(--color-input-field);
  border-color: var(--brand-color);
  color: var(--color-primary-100);
  box-shadow: 0 0 0 0.2rem rgba(35, 111, 251, 0.25);
}

.crypto-card {
  background: var(--card-color);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  height: 100%;
}

.crypto-card:hover {
  border-color: var(--brand-color);
  transform: translateY(-2px);
}

.crypto-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.crypto-icon {
  width: 40px;
  height: 40px;
  margin-right: 0.75rem;
}

.crypto-info h6 {
  color: var(--color-primary-100);
  margin: 0;
  font-weight: 600;
}

.crypto-symbol {
  color: var(--color-primary-500);
  font-size: 0.875rem;
}

.crypto-price {
  margin-left: auto;
  text-align: right;
}

.price {
  color: var(--color-primary-100);
  font-weight: 600;
  display: block;
}

.change {
  font-size: 0.875rem;
  font-weight: 500;
}

.change.positive {
  color: var(--color-data-up);
}

.change.negative {
  color: var(--color-data-down);
}

.crypto-chart {
  margin-bottom: 1rem;
}

.mini-chart {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chart-img {
  max-width: 100%;
  height: auto;
}

.crypto-actions {
  display: flex;
  gap: 0.5rem;
}

.crypto-actions .btn {
  flex: 1;
  font-size: 0.875rem;
  padding: 0.5rem 0.75rem;
}

.stat-card {
  background: var(--card-color);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  height: 100%;
}

.stat-icon {
  width: 50px;
  height: 50px;
  background: var(--brand-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
}

.stat-icon i {
  color: white;
  font-size: 1.25rem;
}

.stat-content h6 {
  color: var(--color-primary-300);
  margin: 0 0 0.25rem 0;
  font-size: 0.875rem;
}

.stat-value {
  color: var(--color-primary-100);
  font-size: 1.25rem;
  font-weight: 600;
}
</style>
