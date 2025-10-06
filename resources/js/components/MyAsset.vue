<template>
  <div class="page d-flex">
    <!-- Sidebar -->
    <Navbar />

    <!-- Main area -->
    <div class="flex-fill d-flex flex-column">
      <!-- Header -->
      <HeaderBar />

      <!-- Offcanvas for mobile -->
      <OffcanvasNav />

      <!-- Page Content -->
      <div class="wrapper pb-2">
        <!-- Header Section -->
        <div class="header d-flex align-items-center justify-content-between">
          <div class="header-title">
            <h1>My Assets</h1>
            <p class="header-subtitle">Manage your cryptocurrency portfolio</p>
          </div>
        </div>

        <!-- Portfolio Summary -->
        <div class="row mb-4">
          <div class="col-md-3 mb-3" v-for="summary in summaryData" :key="summary.id">
            <div class="summary-card">
              <div class="summary-icon">
                <i :class="summary.icon"></i>
              </div>
              <div class="summary-content">
                <h6>{{ summary.title }}</h6>
                <span class="summary-value">{{ summary.value }}</span>
                <span :class="'summary-change ' + summary.changeClass">{{ summary.change }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Assets Table -->
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header d-flex justify-content-between align-items-center">
                <h5>My Cryptocurrency Assets</h5>
                <div class="card-actions">
                  <button
                    class="btn btn-primary btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#depositModal"
                  >
                    <i class="fa fa-plus"></i> Add Funds
                  </button>
                </div>
              </div>

              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-dark align-middle">
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
                            <img
                              :src="asset.icon"
                              :alt="asset.name"
                              class="asset-icon me-3"
                              width="32"
                              height="32"
                            />
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
                          <span
                            :class="asset.change >= 0 ? 'change positive' : 'change negative'"
                          >
                            {{ asset.change >= 0 ? '+' : '' }}{{ asset.change }}%
                          </span>
                        </td>
                        <td>
                          <div class="btn-group" role="group">
                            <button
                              class="btn btn-success btn-sm"
                              @click="tradeAsset(asset)"
                            >
                              <i class="fa fa-exchange"></i> Trade
                            </button>
                            <button
                              class="btn btn-outline-primary btn-sm"
                              @click="viewDetails(asset)"
                            >
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
              <div class="card-header d-flex justify-content-between align-items-center">
                <h5>Recent Transactions</h5>
                <router-link to="/order-history" class="btn btn-outline-primary btn-sm">
                  View All
                </router-link>
              </div>
              <div class="card-body">
                <div class="transaction-list">
                  <div
                    class="transaction-item"
                    v-for="transaction in recentTransactions"
                    :key="transaction.id"
                  >
                    <div class="transaction-icon">
                      <i
                        :class="transaction.type === 'buy'
                          ? 'fa fa-arrow-down text-success'
                          : 'fa fa-arrow-up text-danger'"
                      ></i>
                    </div>
                    <div class="transaction-details">
                      <h6>
                        {{ transaction.type === 'buy' ? 'Bought' : 'Sold' }}
                        {{ transaction.asset }}
                      </h6>
                      <small class="text-muted">{{ transaction.date }}</small>
                    </div>
                    <div class="transaction-amount">
                      <span class="amount">{{ transaction.amount }} {{ transaction.symbol }}</span>
                      <small class="text-muted d-block">${{ transaction.value }}</small>
                    </div>
                    <div class="transaction-status">
                      <span :class="'status ' + transaction.status">
                        {{ transaction.status }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Global Modals -->
    <DepositModal />
    <WithdrawModal />
    <ConvertModal />
    <ChangeEmailModal />
    <CurrencyModal />
  </div>
</template>

<script>
import Navbar from '../components/layouts/navbar.vue'
import HeaderBar from '../components/layouts/HeaderBar.vue'
import OffcanvasNav from '../components/layouts/OffcanvasNav.vue'

import DepositModal from '../components/modals/DepositModal.vue'
import WithdrawModal from '../components/modals/WithdrawModal.vue'
import ConvertModal from '../components/modals/ConvertModal.vue'
import ChangeEmailModal from '../components/modals/ChangeEmailModal.vue'
import CurrencyModal from '../components/modals/CurrencyModal.vue'

export default {
  name: 'MyAsset',
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
      summaryData: [
        { id: 1, title: 'Total Balance', value: '$12,450.75', change: '+2.45%', icon: 'fa fa-wallet', changeClass: 'positive' },
        { id: 2, title: '24h Change', value: '+$1,250.30', change: '+11.2%', icon: 'fa fa-line-chart', changeClass: 'positive' },
        { id: 3, title: 'Assets', value: '8', change: 'Active', icon: 'fa fa-coins', changeClass: '' },
        { id: 4, title: 'Total Trades', value: '156', change: 'This month', icon: 'fa fa-exchange', changeClass: '' }
      ],
      userAssets: [
        { id: 1, name: 'Bitcoin', symbol: 'BTC', balance: '0.125', value: '5,406.25', change: 2.45, icon: '/images/coin/btc.svg' },
        { id: 2, name: 'Ethereum', symbol: 'ETH', balance: '2.5', value: '6,625.75', change: -1.23, icon: '/images/coin/eth.svg' },
        { id: 3, name: 'Binance Coin', symbol: 'BNB', balance: '15.8', value: '4,989.64', change: 0.87, icon: '/images/coin/bnb.svg' },
        { id: 4, name: 'Cardano', symbol: 'ADA', balance: '1,250', value: '606.25', change: -0.45, icon: '/images/coin/ada.svg' },
        { id: 5, name: 'Solana', symbol: 'SOL', balance: '8.5', value: '836.83', change: 3.21, icon: '/images/coin/sol.svg' }
      ],
      recentTransactions: [
        { id: 1, type: 'buy', asset: 'Bitcoin', symbol: 'BTC', amount: '0.05', value: '2,162.50', date: '2 hours ago', status: 'completed' },
        { id: 2, type: 'sell', asset: 'Ethereum', symbol: 'ETH', amount: '0.5', value: '1,325.15', date: '5 hours ago', status: 'completed' },
        { id: 3, type: 'buy', asset: 'Solana', symbol: 'SOL', amount: '2.0', value: '196.90', date: '1 day ago', status: 'completed' }
      ]
    }
  },
  methods: {
    tradeAsset(asset) {
      this.$router.push({ name: 'Exchange', query: { asset: asset.symbol } })
    },
    viewDetails(asset) {
      console.log('View details for:', asset)
    }
  }
}
</script>
