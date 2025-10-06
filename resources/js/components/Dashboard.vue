<template>
  <div class="page d-flex">
    <!-- Global Sidebar -->
    <Navbar />

    <!-- Main Content -->
    <div class="flex-fill d-flex flex-column">
      <!-- Global Header -->
      <HeaderBar />

      <!-- Dashboard Content -->
      <div class="wrapper pb-2">
        <div class="dashboard-content">
          <!-- Portfolio Summary -->
          <div class="row mb-4">
            <div class="col-lg-3 col-md-6 mb-3">
              <div class="card">
                <div class="card-body d-flex align-items-center">
                  <div class="avatar-sm rounded-circle bg-primary-subtle text-primary">
                    <i class="fa fa-wallet fa-lg"></i>
                  </div>
                  <div class="ms-3">
                    <h6 class="mb-1">Total Balance</h6>
                    <h4 class="mb-0">$12,450.75</h4>
                    <small class="text-success">+2.45%</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mb-3">
              <div class="card">
                <div class="card-body d-flex align-items-center">
                  <div class="avatar-sm rounded-circle bg-success-subtle text-success">
                    <i class="fa fa-line-chart fa-lg"></i>
                  </div>
                  <div class="ms-3">
                    <h6 class="mb-1">24h Change</h6>
                    <h4 class="mb-0">+$1,250.30</h4>
                    <small class="text-success">+11.2%</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mb-3">
              <div class="card">
                <div class="card-body d-flex align-items-center">
                  <div class="avatar-sm rounded-circle bg-warning-subtle text-warning">
                    <i class="fa fa-coins fa-lg"></i>
                  </div>
                  <div class="ms-3">
                    <h6 class="mb-1">Assets</h6>
                    <h4 class="mb-0">8</h4>
                    <small class="text-muted">Active</small>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mb-3">
              <div class="card">
                <div class="card-body d-flex align-items-center">
                  <div class="avatar-sm rounded-circle bg-info-subtle text-info">
                    <i class="fa fa-exchange fa-lg"></i>
                  </div>
                  <div class="ms-3">
                    <h6 class="mb-1">Total Trades</h6>
                    <h4 class="mb-0">156</h4>
                    <small class="text-muted">This month</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Charts and Transactions -->
          <div class="row">
            <!-- Portfolio Chart -->
            <div class="col-lg-8 mb-4">
              <div class="card">
                <div class="card-header">
                  <h5 class="mb-0">Portfolio Performance</h5>
                </div>
                <div class="card-body text-center">
                  <h6>Portfolio Chart</h6>
                  <p>Chart will be integrated here</p>
                </div>
              </div>
            </div>

            <!-- Recent Transactions -->
            <div class="col-lg-4 mb-4">
              <div class="card">
                <div class="card-header">
                  <h5 class="mb-0">Recent Transactions</h5>
                </div>
                <div class="card-body">
                  <div class="transaction-list">
                    <div
                      class="transaction-item mb-3"
                      v-for="transaction in recentTransactions"
                      :key="transaction.id"
                    >
                      <div class="d-flex align-items-center">
                        <div
                          class="avatar-xs rounded-circle"
                          :class="transaction.type === 'buy'
                            ? 'bg-success-subtle text-success'
                            : 'bg-danger-subtle text-danger'"
                        >
                          <i
                            :class="transaction.type === 'buy'
                              ? 'fa fa-arrow-down'
                              : 'fa fa-arrow-up'"
                          ></i>
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h6 class="mb-0">
                            {{ transaction.type === 'buy' ? 'Bought' : 'Sold' }}
                            {{ transaction.asset }}
                          </h6>
                          <small class="text-muted">{{ transaction.date }}</small>
                        </div>
                        <div class="text-end">
                          <span class="fw-medium">{{ transaction.amount }} {{ transaction.symbol }}</span>
                          <small class="d-block text-muted">${{ transaction.value }}</small>
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
                  <h5 class="mb-0">Top Cryptocurrencies</h5>
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
                              <img :src="coin.icon" :alt="coin.name" class="coin-icon me-2" />
                              <div>
                                <h6 class="mb-0">{{ coin.name }}</h6>
                                <small class="text-muted">{{ coin.symbol }}</small>
                              </div>
                            </div>
                          </td>
                          <td><span class="fw-medium">${{ coin.price }}</span></td>
                          <td>
                            <span :class="coin.change >= 0 ? 'text-success' : 'text-danger'">
                              {{ coin.change >= 0 ? '+' : '' }}{{ coin.change }}%
                            </span>
                          </td>
                          <td><span>${{ coin.marketCap }}</span></td>
                          <td><span>${{ coin.volume }}</span></td>
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
      </div> <!-- wrapper -->
    </div> <!-- flex-fill -->

    <!-- ✅ Global Modals -->
    <DepositModal />
    <WithdrawModal />
    <ConvertModal />
    <ChangeEmailModal />
    <CurrencyModal />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

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
  name: 'Dashboard',
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
      recentTransactions: [
        { id: 1, type: 'buy', asset: 'Bitcoin', symbol: 'BTC', amount: '0.05', value: '2,162.50', date: '2 hours ago' },
        { id: 2, type: 'sell', asset: 'Ethereum', symbol: 'ETH', amount: '0.5', value: '1,325.15', date: '5 hours ago' },
        { id: 3, type: 'buy', asset: 'Solana', symbol: 'SOL', amount: '2.0', value: '196.90', date: '1 day ago' }
      ],
      topCryptos: [
        { id: 1, name: 'Bitcoin', symbol: 'BTC', price: '43,250.50', change: 2.45, marketCap: '850.2B', volume: '15.2B', icon: '/images/coin/btc.svg' },
        { id: 2, name: 'Ethereum', symbol: 'ETH', price: '2,650.30', change: -1.23, marketCap: '320.1B', volume: '8.5B', icon: '/images/coin/eth.svg' },
        { id: 3, name: 'Binance Coin', symbol: 'BNB', price: '315.80', change: 0.87, marketCap: '48.9B', volume: '1.2B', icon: '/images/coin/bnb.svg' },
        { id: 4, name: 'Cardano', symbol: 'ADA', price: '0.4850', change: -0.45, marketCap: '17.2B', volume: '450M', icon: '/images/coin/ada.svg' }
      ]
    }
  },
  computed: {
    ...mapGetters('auth', ['user', 'isAuthenticated'])
  },
  methods: {
    ...mapActions('auth', ['fetchUser', 'logout']),
    async handleLogout() {
      await this.logout()
      this.$router.push('/login')
    }
  },
  created() {
    if (!this.user && this.isAuthenticated) {
      this.fetchUser()
    }
  }
}
</script>
