<template>
  <section class="container-fluid d-sm-flex flex-row fixed-sidebar">
    <!-- Sidebar -->
    <Navbar />

    <!-- Main -->
    <div class="wrapper pb-4">
      <HeaderBar />
      <div class="d-flex flex-column card-bs">

        <!-- Title -->
        <div class="card-bs p-3 p-sm-4 mb-3">
          <h3 class="crypt-grayscale-100 fw-bold mb-0">Markets Overview</h3>
        </div>

        <!-- Mini tables -->
        <div class="card-bs p-2 p-sm-3 mb-3">
          <div class="mini-grid">
            <!-- Crypto -->
            <div class="table-wrap card-border">
              <div class="d-flex justify-content-between align-items-center card-line p-2">
                <h6 class="fw-bold mb-0">Crypto Market</h6>
              </div>
              <div class="table-responsive">
                <table class="table table-dark table-hover mb-0">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Price</th>
                      <th>24h</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(row,i) in miniCrypto" :key="'mc'+i">
                      <td>{{ row.name }}</td>
                      <td>{{ row.price }}</td>
                      <td :class="row.changeNum >= 0 ? 'text-success' : 'text-danger'">
                        {{ row.change }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Forex -->
            <div class="table-wrap card-border">
              <div class="d-flex justify-content-between align-items-center card-line p-2">
                <h6 class="fw-bold mb-0">Forex Market</h6>
              </div>
              <div class="table-responsive">
                <table class="table table-dark table-hover mb-0">
                  <thead>
                    <tr>
                      <th>Pair</th>
                      <th>Rate</th>
                      <th>Base</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(row,i) in miniForex" :key="'mf'+i">
                      <td>{{ row.pair }}</td>
                      <td>{{ row.rate }}</td>
                      <td>{{ row.base }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Commodities -->
            <div class="table-wrap card-border">
              <div class="d-flex justify-content-between align-items-center card-line p-2">
                <h6 class="fw-bold mb-0">Commodities</h6>
              </div>
              <div class="table-responsive">
                <table class="table table-dark table-hover mb-0">
                  <thead>
                    <tr>
                      <th>Asset</th>
                      <th>Price</th>
                      <th>Unit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(row,i) in miniCommodities" :key="'mco'+i">
                      <td>{{ row.asset }}</td>
                      <td>{{ row.price }}</td>
                      <td>{{ row.unit }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Stocks -->
            <div class="table-wrap card-border">
              <div class="d-flex justify-content-between align-items-center card-line p-2">
                <h6 class="fw-bold mb-0">Stocks</h6>
              </div>
              <div class="table-responsive">
                <table class="table table-dark table-hover mb-0">
                  <thead>
                    <tr>
                      <th>Stock</th>
                      <th>Price</th>
                      <th>Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(row,i) in miniStocks" :key="'ms'+i">
                      <td>{{ row.ticker }}</td>
                      <td>{{ row.price }}</td>
                      <td :class="row.changeNum >= 0 ? 'text-success' : 'text-danger'">
                        {{ row.change }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>

        <!-- Big tabs -->
        <div class="card-bs">
          <div class="flex p-2 p-sm-3">
            <div class="nav nav-tabs nav-pills gap-2 card-line p-1" role="tablist">
              <button class="nav-link fw-medium active" data-bs-toggle="tab" data-bs-target="#tab-crypto">Crypto</button>
              <button class="nav-link fw-medium" data-bs-toggle="tab" data-bs-target="#tab-forex">Forex</button>
              <button class="nav-link fw-medium" data-bs-toggle="tab" data-bs-target="#tab-commodities">Commodities</button>
              <button class="nav-link fw-medium" data-bs-toggle="tab" data-bs-target="#tab-stocks">Stocks</button>
            </div>
          </div>

          <div class="tab-content px-2 px-sm-3 pb-3">
            <!-- Crypto -->
            <div class="tab-pane fade show active" id="tab-crypto">
              <div class="table-responsive big-table">
                <table class="table table-dark table-hover mb-0">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Price</th>
                      <th>24h Change</th>
                      <th>Market Cap</th>
                      <th>Volume</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(row,i) in bigCrypto" :key="'bc'+i">
                      <td>{{ row.name }}</td>
                      <td>{{ row.price }}</td>
                      <td :class="row.changeNum >= 0 ? 'text-success' : 'text-danger'">{{ row.change }}</td>
                      <td>{{ row.marketCap }}</td>
                      <td>{{ row.volume }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Forex -->
            <div class="tab-pane fade" id="tab-forex">
              <div class="table-responsive big-table">
                <table class="table table-dark table-hover mb-0">
                  <thead>
                    <tr>
                      <th>Pair</th>
                      <th>Rate</th>
                      <th>Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(row,i) in bigForex" :key="'bf'+i">
                      <td>{{ row.pair }}</td>
                      <td>{{ row.rate }}</td>
                      <td :class="row.changeNum >= 0 ? 'text-success' : 'text-danger'">{{ row.change }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Commodities -->
            <div class="tab-pane fade" id="tab-commodities">
              <div class="table-responsive big-table">
                <table class="table table-dark table-hover mb-0">
                  <thead>
                    <tr>
                      <th>Asset</th>
                      <th>Price</th>
                      <th>Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(row,i) in bigCommodities" :key="'bco'+i">
                      <td>{{ row.asset }}</td>
                      <td>{{ row.price }}</td>
                      <td :class="row.changeNum >= 0 ? 'text-success' : 'text-danger'">{{ row.change }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Stocks -->
            <div class="tab-pane fade" id="tab-stocks">
              <div class="table-responsive big-table">
                <table class="table table-dark table-hover mb-0">
                  <thead>
                    <tr>
                      <th>Stock</th>
                      <th>Price</th>
                      <th>Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(row,i) in bigStocks" :key="'bs'+i">
                      <td>{{ row.ticker }}</td>
                      <td>{{ row.price }}</td>
                      <td :class="row.changeNum >= 0 ? 'text-success' : 'text-danger'">{{ row.change }}</td>
                    </tr>
                  </tbody>
                </table>
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
  </section>
</template>

<script>
import Navbar from '../components/layouts/Navbar.vue'
import HeaderBar from '../components/layouts/HeaderBar.vue'
import DepositModal from '../components/modals/DepositModal.vue'
import WithdrawModal from '../components/modals/WithdrawModal.vue'
import ConvertModal from '../components/modals/ConvertModal.vue'
import ChangeEmailModal from '../components/modals/ChangeEmailModal.vue'
import CurrencyModal from '../components/modals/CurrencyModal.vue'

export default {
  name: 'MarketsOverview',
  components: { Navbar, HeaderBar, DepositModal, WithdrawModal, ConvertModal, ChangeEmailModal, CurrencyModal },
  data () {
    return {
      /* ===== Mini tables (sample values) ===== */
      miniCrypto: [
        { name: 'BTC/USD', price: '$63,420.12', change: '+1.82%', changeNum: 1.82 },
        { name: 'ETH/USD', price: '$3,245.66', change: '-0.64%', changeNum: -0.64 },
        { name: 'SOL/USD', price: '$148.20', change: '+3.12%', changeNum: 3.12 },
        { name: 'XRP/USD', price: '$0.62', change: '+0.45%', changeNum: 0.45 },
        { name: 'BNB/USD', price: '$585.70', change: '-1.04%', changeNum: -1.04 }
      ],
      miniForex: [
        { pair: 'EUR/USD', rate: '1.0852', base: 'EUR' },
        { pair: 'GBP/USD', rate: '1.2760', base: 'GBP' },
        { pair: 'USD/JPY', rate: '158.42', base: 'USD' },
        { pair: 'USD/CHF', rate: '0.8894', base: 'USD' },
        { pair: 'AUD/USD', rate: '0.6621', base: 'AUD' }
      ],
      miniCommodities: [
        { asset: 'XAU/USD', price: '$2,382.50', unit: 'oz' },
        { asset: 'XAG/USD', price: '$29.44', unit: 'oz' },
        { asset: 'WTI/USD', price: '$79.12', unit: 'bbl' },
        { asset: 'BRENT/USD', price: '$83.07', unit: 'bbl' },
        { asset: 'NG/USD', price: '$2.73', unit: 'MMBtu' }
      ],
      miniStocks: [
        { ticker: 'AAPL', price: '$229.31', change: '+0.41%', changeNum: 0.41 },
        { ticker: 'MSFT', price: '$418.22', change: '+0.22%', changeNum: 0.22 },
        { ticker: 'TSLA', price: '$192.66', change: '-1.35%', changeNum: -1.35 },
        { ticker: 'AMZN', price: '$181.02', change: '+0.88%', changeNum: 0.88 },
        { ticker: 'NVDA', price: '$122.44', change: '+2.61%', changeNum: 2.61 }
      ],

      /* ===== Big tabs (sample values) ===== */
      bigCrypto: [
        { name: 'BTC/USD', price: '$63,420.12', change: '+1.82%', changeNum: 1.82, marketCap: '$1.25T', volume: '$28.3B' },
        { name: 'ETH/USD', price: '$3,245.66', change: '-0.64%', changeNum: -0.64, marketCap: '$390.2B', volume: '$12.7B' },
        { name: 'SOL/USD', price: '$148.20', change: '+3.12%', changeNum: 3.12, marketCap: '$69.1B', volume: '$3.1B' },
        { name: 'XRP/USD', price: '$0.62', change: '+0.45%', changeNum: 0.45, marketCap: '$34.8B', volume: '$1.4B' },
        { name: 'BNB/USD', price: '$585.70', change: '-1.04%', changeNum: -1.04, marketCap: '$90.3B', volume: '$1.1B' },
        { name: 'ADA/USD', price: '$0.46', change: '+0.28%', changeNum: 0.28, marketCap: '$16.2B', volume: '$0.35B' },
        { name: 'DOGE/USD', price: '$0.13', change: '+2.11%', changeNum: 2.11, marketCap: '$18.9B', volume: '$0.89B' },
        { name: 'MATIC/USD', price: '$0.74', change: '-0.80%', changeNum: -0.8, marketCap: '$7.1B', volume: '$0.25B' },
        { name: 'LTC/USD', price: '$83.50', change: '+0.62%', changeNum: 0.62, marketCap: '$6.2B', volume: '$0.24B' },
        { name: 'LINK/USD', price: '$14.72', change: '+1.05%', changeNum: 1.05, marketCap: '$8.6B', volume: '$0.42B' }
      ],
      bigForex: [
        { pair: 'EUR/USD', rate: '1.0852', change: '+0.12%', changeNum: 0.12 },
        { pair: 'GBP/USD', rate: '1.2760', change: '-0.08%', changeNum: -0.08 },
        { pair: 'USD/JPY', rate: '158.42', change: '+0.20%', changeNum: 0.20 },
        { pair: 'USD/CHF', rate: '0.8894', change: '-0.05%', changeNum: -0.05 },
        { pair: 'AUD/USD', rate: '0.6621', change: '+0.09%', changeNum: 0.09 }
      ],
      bigCommodities: [
        { asset: 'XAU/USD', price: '$2,382.50', change: '+0.31%', changeNum: 0.31 },
        { asset: 'XAG/USD', price: '$29.44', change: '-0.18%', changeNum: -0.18 },
        { asset: 'WTI/USD', price: '$79.12', change: '+0.72%', changeNum: 0.72 },
        { asset: 'BRENT/USD', price: '$83.07', change: '+0.56%', changeNum: 0.56 },
        { asset: 'NG/USD', price: '$2.73', change: '-1.10%', changeNum: -1.10 }
      ],
      bigStocks: [
        { ticker: 'AAPL', price: '$229.31', change: '+0.41%', changeNum: 0.41 },
        { ticker: 'MSFT', price: '$418.22', change: '+0.22%', changeNum: 0.22 },
        { ticker: 'TSLA', price: '$192.66', change: '-1.35%', changeNum: -1.35 },
        { ticker: 'AMZN', price: '$181.02', change: '+0.88%', changeNum: 0.88 },
        { ticker: 'GOOGL', price: '$171.44', change: '+0.12%', changeNum: 0.12 },
        { ticker: 'META', price: '$506.11', change: '+0.92%', changeNum: 0.92 },
        { ticker: 'NVDA', price: '$122.44', change: '+2.61%', changeNum: 2.61 },
        { ticker: 'AMD', price: '$162.80', change: '-0.74%', changeNum: -0.74 },
        { ticker: 'NFLX', price: '$656.20', change: '+0.35%', changeNum: 0.35 },
        { ticker: 'INTC', price: '$31.95', change: '-0.22%', changeNum: -0.22 }
      ]
    }
  }
}
</script>