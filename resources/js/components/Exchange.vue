<template>
  <div class="page d-flex">
    <!-- Global Sidebar -->
    <Navbar />

    <!-- Main Content -->
    <div class="flex-fill d-flex flex-column">
      <!-- Global Header -->
      <HeaderBar />

      <!-- Offcanvas for Mobile -->
      <OffcanvasNav />

      <!-- Page Content -->
      <div class="wrapper pb-2">
        <div class="header d-flex align-items-center justify-content-between">
          <div class="header-title">
            <h1>Exchange</h1>
            <p class="header-subtitle">Trade cryptocurrencies with ease</p>
          </div>
        </div>

        <!-- Exchange Layout -->
        <div class="exchange-content">
          <div class="row">
            <!-- Trading Chart -->
            <div class="col-lg-8">
              <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                  <h5>BTC/USDT</h5>
                  <div class="chart-controls">
                    <button class="btn btn-sm btn-outline-primary">1H</button>
                    <button class="btn btn-sm btn-outline-primary">4H</button>
                    <button class="btn btn-sm btn-primary">1D</button>
                    <button class="btn btn-sm btn-outline-primary">1W</button>
                  </div>
                </div>
                <div class="card-body">
                  <div class="trading-chart text-center py-5">
                    <h6>Trading Chart</h6>
                    <p>Chart integration placeholder (e.g., TradingView or lightweight-charts)</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Trading Panel -->
            <div class="col-lg-4">
              <div class="card">
                <div class="card-header">
                  <h5>Buy/Sell</h5>
                </div>
                <div class="card-body">
                  <div class="trading-form">
                    <div class="form-group mb-3">
                      <label>Amount</label>
                      <input type="number" class="form-control" placeholder="0.00" v-model="tradeAmount" />
                    </div>
                    <div class="form-group mb-3">
                      <label>Price</label>
                      <input type="number" class="form-control" placeholder="0.00" v-model="tradePrice" />
                    </div>
                    <div class="form-group mb-3">
                      <label>Total</label>
                      <input type="number" class="form-control" placeholder="0.00" v-model="tradeTotal" readonly />
                    </div>
                    <div class="trading-buttons">
                      <button class="btn btn-success btn-lg w-100 mb-2">Buy BTC</button>
                      <button class="btn btn-danger btn-lg w-100">Sell BTC</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Market Data -->
          <div class="row mt-4">
            <div class="col-12">
              <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                  <h5>Market Data</h5>
                  <button
                    class="btn btn-outline-primary btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#convertModal"
                  >
                    <i class="fa fa-sync"></i> Convert
                  </button>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-dark align-middle">
                      <thead>
                        <tr>
                          <th>Symbol</th>
                          <th>Price</th>
                          <th>Change</th>
                          <th>Volume</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="coin in marketData" :key="coin.symbol">
                          <td>
                            <div class="d-flex align-items-center">
                              <img :src="coin.icon" :alt="coin.symbol" class="coin-icon me-2" width="28" height="28" />
                              {{ coin.symbol }}
                            </div>
                          </td>
                          <td>${{ coin.price }}</td>
                          <td :class="coin.change >= 0 ? 'text-success' : 'text-danger'">
                            {{ coin.change >= 0 ? '+' : '' }}{{ coin.change }}%
                          </td>
                          <td>${{ coin.volume }}</td>
                          <td>
                            <button class="btn btn-sm btn-outline-primary">Trade</button>
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
import Navbar from '../components/layouts/navbar.vue'
import HeaderBar from '../components/layouts/HeaderBar.vue'
import OffcanvasNav from '../components/layouts/OffcanvasNav.vue'

// Modals
import DepositModal from '../components/modals/DepositModal.vue'
import WithdrawModal from '../components/modals/WithdrawModal.vue'
import ConvertModal from '../components/modals/ConvertModal.vue'
import ChangeEmailModal from '../components/modals/ChangeEmailModal.vue'
import CurrencyModal from '../components/modals/CurrencyModal.vue'

export default {
  name: 'Exchange',
  components: {
    Navbar,
    HeaderBar,
    OffcanvasNav,
    DepositModal,
    WithdrawModal,
    ConvertModal,
    ChangeEmailModal,
    CurrencyModal
  },
  data() {
    return {
      tradeAmount: 0,
      tradePrice: 0,
      tradeTotal: 0,
      marketData: [
        { symbol: 'BTC/USDT', price: '43,250.50', change: 2.45, volume: '1.2B', icon: '/images/coin/btc.svg' },
        { symbol: 'ETH/USDT', price: '2,650.30', change: -1.23, volume: '850M', icon: '/images/coin/eth.svg' },
        { symbol: 'BNB/USDT', price: '315.80', change: 0.87, volume: '320M', icon: '/images/coin/bnb.svg' },
        { symbol: 'ADA/USDT', price: '0.4850', change: -0.45, volume: '180M', icon: '/images/coin/ada.svg' }
      ]
    }
  },
  computed: {
    ...mapGetters('auth', ['user'])
  },
  watch: {
    tradeAmount() {
      this.calculateTotal()
    },
    tradePrice() {
      this.calculateTotal()
    }
  },
  methods: {
    calculateTotal() {
      this.tradeTotal = (this.tradeAmount * this.tradePrice).toFixed(2)
    }
  },
  mounted() {
    this.calculateTotal()
  }
}
</script>
