<template>
  <div class="page d-flex">
    <!-- Global Sidebar -->
    <Navbar />

    <!-- Main Content -->
    <div class="flex-fill d-flex flex-column">
      <!-- Global Header -->
      <HeaderBar />

      <!-- Marketplace Content -->
      <div class="wrapper pb-2">
        <div class="header d-flex align-items-center justify-content-between">
          <div class="header-title">
            <h1>Marketplace</h1>
            <p class="header-subtitle">Discover and trade cryptocurrencies</p>
          </div>
        </div>

        <!-- Search and Filters -->
        <div class="row mb-4">
          <div class="col-md-6">
            <input
              type="text"
              class="form-control"
              placeholder="Search cryptocurrencies..."
              v-model="searchQuery"
            />
          </div>
          <div class="col-md-6">
            <select class="form-select" v-model="selectedCategory">
              <option value="">All Categories</option>
              <option value="defi">DeFi</option>
              <option value="nft">NFT</option>
              <option value="gaming">Gaming</option>
              <option value="meme">Meme</option>
            </select>
          </div>
        </div>

        <!-- Featured Cryptocurrencies -->
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header d-flex justify-content-between align-items-center">
                <h5>Featured Cryptocurrencies</h5>
                <button
                  class="btn btn-outline-primary btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#depositModal"
                >
                  <i class="fa fa-wallet"></i> Add Funds
                </button>
              </div>

              <div class="card-body">
                <div class="row">
                  <div
                    class="col-lg-3 col-md-6 mb-4"
                    v-for="coin in filteredCoins"
                    :key="coin.id"
                  >
                    <div class="crypto-card">
                      <div class="crypto-header d-flex justify-content-between align-items-center">
                        <div class="d-flex align-items-center">
                          <img
                            :src="coin.icon"
                            :alt="coin.name"
                            class="crypto-icon me-2"
                            width="36"
                            height="36"
                          />
                          <div>
                            <h6 class="mb-0">{{ coin.name }}</h6>
                            <small class="text-muted">{{ coin.symbol }}</small>
                          </div>
                        </div>
                        <div class="crypto-price text-end">
                          <span class="price fw-bold">${{ coin.price }}</span>
                          <br />
                          <span :class="coin.change >= 0 ? 'text-success' : 'text-danger'">
                            {{ coin.change >= 0 ? '+' : '' }}{{ coin.change }}%
                          </span>
                        </div>
                      </div>

                      <div class="crypto-chart text-center mt-2">
                        <img
                          :src="coin.chart"
                          :alt="coin.name + ' chart'"
                          class="img-fluid"
                        />
                      </div>

                      <div class="crypto-actions mt-3 d-flex justify-content-between">
                        <button
                          class="btn btn-primary btn-sm w-50 me-1"
                          @click="tradeCoin(coin)"
                        >
                          Trade
                        </button>
                        <button class="btn btn-outline-primary btn-sm w-50">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Market Stats -->
        <div class="row mt-4">
          <div class="col-md-3 mb-3" v-for="stat in marketStats" :key="stat.title">
            <div class="stat-card d-flex align-items-center p-3">
              <div class="stat-icon me-3">
                <i :class="stat.icon" style="font-size: 22px"></i>
              </div>
              <div class="stat-content">
                <h6 class="mb-1">{{ stat.title }}</h6>
                <span class="stat-value fw-bold">{{ stat.value }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ✅ Global Modals -->
    <DepositModal />
    <WithdrawModal />
    <ConvertModal />
    <ChangeEmailModal />
    <CurrencyModal />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

// Global Layout Components
import Navbar from '../components/layouts/Navbar.vue'
import HeaderBar from '../components/layouts/HeaderBar.vue'

// Modals
import DepositModal from '../components/modals/DepositModal.vue'
import WithdrawModal from '../components/modals/WithdrawModal.vue'
import ConvertModal from '../components/modals/ConvertModal.vue'
import ChangeEmailModal from '../components/modals/ChangeEmailModal.vue'
import CurrencyModal from '../components/modals/CurrencyModal.vue'

export default {
  name: 'Marketplace',
  components: {
    Navbar,
    HeaderBar,
    DepositModal,
    WithdrawModal,
    ConvertModal,
    ChangeEmailModal,
    CurrencyModal
  },
  data() {
    return {
      searchQuery: '',
      selectedCategory: '',
      coins: [
        { id: 1, name: 'Bitcoin', symbol: 'BTC', price: '43,250.50', change: 2.45, icon: '/images/coin/btc.svg', chart: '/images/chart/highcharts01.svg', category: 'defi' },
        { id: 2, name: 'Ethereum', symbol: 'ETH', price: '2,650.30', change: -1.23, icon: '/images/coin/eth.svg', chart: '/images/chart/highcharts02.svg', category: 'defi' },
        { id: 3, name: 'Binance Coin', symbol: 'BNB', price: '315.80', change: 0.87, icon: '/images/coin/bnb.svg', chart: '/images/chart/highcharts03.svg', category: 'defi' },
        { id: 4, name: 'Cardano', symbol: 'ADA', price: '0.4850', change: -0.45, icon: '/images/coin/ada.svg', chart: '/images/chart/highcharts04.svg', category: 'defi' },
        { id: 5, name: 'Dogecoin', symbol: 'DOGE', price: '0.0825', change: 5.67, icon: '/images/coin/doge.svg', chart: '/images/chart/highcharts05.svg', category: 'meme' },
        { id: 6, name: 'Solana', symbol: 'SOL', price: '98.45', change: 3.21, icon: '/images/coin/sol.svg', chart: '/images/chart/highcharts06.svg', category: 'defi' },
        { id: 7, name: 'Polygon', symbol: 'MATIC', price: '0.7850', change: -2.15, icon: '/images/coin/matic.svg', chart: '/images/chart/highcharts07.svg', category: 'defi' },
        { id: 8, name: 'Chainlink', symbol: 'LINK', price: '14.25', change: 1.89, icon: '/images/coin/link.svg', chart: '/images/chart/highcharts08.svg', category: 'defi' }
      ],
      marketStats: [
        { title: 'Total Market Cap', value: '$2.1T', icon: 'fa fa-bitcoin' },
        { title: '24h Volume', value: '$45.2B', icon: 'fa fa-line-chart' },
        { title: 'Active Coins', value: '8,945', icon: 'fa fa-coins' },
        { title: 'Exchanges', value: '523', icon: 'fa fa-exchange' }
      ]
    }
  },
  computed: {
    ...mapGetters('auth', ['user']),
    filteredCoins() {
      let filtered = this.coins
      if (this.searchQuery) {
        filtered = filtered.filter(
          (coin) =>
            coin.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      }
      if (this.selectedCategory) {
        filtered = filtered.filter((coin) => coin.category === this.selectedCategory)
      }
      return filtered
    }
  },
  methods: {
    tradeCoin(coin) {
      this.$router.push({
        name: 'Exchange',
        query: { asset: coin.symbol }
      })
    }
  }
}
</script>
