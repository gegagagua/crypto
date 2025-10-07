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
        <!-- Body Content -->
        <div class="card-bs p-3 p-sm-4 animation-element">
          <!-- Accounts -->
          <div class="d-sm-flex flex-row justify-content-between gap-2 mb-4">
            <div class="col-auto">
              <div class="d-flex gap-1">
                <h5>Total Assets</h5>
                <a href="#!" class="link-secondary" id="encrypt" aria-label="toggle visibility">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4"
                          d="M21.25 9.15005C18.94 5.52005 15.56 3.43005 12 3.43005C10.22 3.43005 8.49 3.95005 6.91 4.92005C5.33 5.90005 3.91 7.33005 2.75 9.15005C1.75 10.7201 1.75 13.2701 2.75 14.8401C5.06 18.4801 8.44 20.5601 12 20.5601C13.78 20.5601 15.51 20.0401 17.09 19.0701C18.67 18.0901 20.09 16.6601 21.25 14.8401C22.25 13.2801 22.25 10.7201 21.25 9.15005ZM12 16.0401C9.76 16.0401 7.96 14.2301 7.96 12.0001C7.96 9.77005 9.76 7.96005 12 7.96005C14.24 7.96005 16.04 9.77005 16.04 12.0001C16.04 14.2301 14.24 16.0401 12 16.0401Z"
                          fill="currentColor"/>
                    <path d="M12.0004 9.14001C10.4304 9.14001 9.15039 10.42 9.15039 12C9.15039 13.57 10.4304 14.85 12.0004 14.85C13.5704 14.85 14.8604 13.57 14.8604 12C14.8604 10.43 13.5704 9.14001 12.0004 9.14001Z"
                          fill="currentColor"/>
                  </svg>
                </a>
              </div>
              <div class="d-flex gap-2 align-items-center">
                <h2 class="fw-bold encrypted mb-0">0.00 EUR</h2>
              </div>
              <h6 class="crypt-grayscale-700">≈ $0.00</h6>
            </div>
            <div class="mt-4">
              <div class="d-sm-flex flex-row justify-content-end gap-2">
                <a class="btn btn-editor btn-primary mb-2" href="#!" data-bs-toggle="modal" data-bs-target="#depositCrypto">Deposit Crypto</a>
                <a class="btn btn-editor btn-info mb-2" href="#!" data-bs-toggle="modal" data-bs-target="#withdrawModal">Withdraw</a>
                <a class="btn btn-editor btn-danger mb-2" href="#!" data-bs-toggle="modal" data-bs-target="#convertCrypto">Convert</a>
              </div>
            </div>
          </div>

          <!-- Account Data -->
          <div class="row g-2 card-border mb-4">
            <div class="col-12 col-lg-4 col-xl-4 col-xxl-3 col-md-6">
              <div class="card-bs p-3 d-sm-flex flex-row align-items-center">
                <div class="card-body">
                  <div class="d-flex flex-row justify-content-between">
                    <div>
                      <p class="crypt-grayscale-500">Fiat</p>
                      <div class="d-flex pb-3">
                        <h3 class="fw-bold encrypted mb-0">0.00 EUR</h3>
                      </div>
                      <p class="crypt-grayscale-700 encrypted">≈ 0.00 USD</p>
                    </div>
                    <img alt="" style="width:60px;" src="/images/icon/spot.svg">
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-lg-4 col-xl-4 col-xxl-3 col-md-6">
              <div class="card-bs p-3 d-sm-flex flex-row align-items-center">
                <div class="card-body">
                  <div class="d-flex flex-row justify-content-between">
                    <div>
                      <p class="crypt-grayscale-500">Crypto</p>
                      <div class="d-flex pb-3">
                        <h3 class="fw-bold encrypted mb-0">0.00 EUR</h3>
                      </div>
                      <p class="crypt-grayscale-700 encrypted">≈ 0.00 USD</p>
                    </div>
                    <img alt="" style="width:60px;" src="/images/icon/margin.svg">
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-lg-4 col-xl-4 col-xxl-3 col-md-6">
              <div class="card-bs p-3 d-sm-flex flex-row align-items-center">
                <div class="card-body">
                  <div class="d-flex flex-row justify-content-between">
                    <div>
                      <p class="crypt-grayscale-500">Open Trades</p>
                      <div class="d-flex pb-3">
                        <h3 class="fw-bold encrypted mb-0">0.00 EUR</h3>
                      </div>
                      <p class="crypt-grayscale-700 encrypted">≈ 0.00 USD</p>
                    </div>
                    <img alt="" style="width:60px;" src="/images/icon/funding.svg">
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-lg-4 col-xl-4 col-xxl-3 col-md-6">
              <div class="card-bs p-3 d-sm-flex flex-row align-items-center">
                <div class="card-body">
                  <div class="d-flex flex-row justify-content-between">
                    <div>
                      <p class="crypt-grayscale-500">TP/TL</p>
                      <div class="d-flex pb-3">
                        <h3 class="fw-bold encrypted mb-0">0.45200 EUR</h3>
                      </div>
                      <p class="crypt-grayscale-700 encrypted">≈ 0.00 USD</p>
                    </div>
                    <img alt="" style="width:60px;" src="/images/icon/earn.svg">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- My asset Asset Table -->
          <div class="tab-pane fade show active" id="popular-asset-tab-pane" role="tabpanel" aria-labelledby="popular-asset-tab" tabindex="0">
            <div class="table-responsive card-border">
              <table class="table table-dark table-hover mb-0">
                <thead>
                  <tr class="table-active mb-0">
                    <th scope="col">Coin</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Price</th>
                    <th scope="col">24h Change</th>
                    <th scope="col">Ratio</th>
                    <th scope="col">Market Cap</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="align-middle">
                    <td>
                      <div class="d-flex flex-row gap-2">
                        <img alt="" src="/images/coin/usdt.svg" width="28">
                        <div>
                          <h6 class="fw-bold mb-0">USDT</h6>
                          <p class="crypt-grayscale-600 mb-0">Tether</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h6 class="encrypted mb-0">0.00</h6>
                      <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                    </td>
                    <td class="fw-medium">$1.00</td>
                    <td class="encrypted fw-medium text-up">+0.00%</td>
                    <td class="fw-medium crypt-grayscale-600">--</td>
                    <td class="fw-medium">$100.00B</td>
                  </tr>

                  <tr class="align-middle">
                    <td>
                      <div class="d-flex flex-row gap-2">
                        <img alt="" src="/images/coin/btc.svg" width="28">
                        <div>
                          <h6 class="fw-bold mb-0">BTC</h6>
                          <p class="crypt-grayscale-600 mb-0">Bitcoin</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h6 class="encrypted mb-0">0.00</h6>
                      <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                    </td>
                    <td class="fw-medium">$74,491.41</td>
                    <td class="encrypted fw-medium text-up">+1.62%</td>
                    <td class="fw-medium crypt-grayscale-600">--</td>
                    <td class="fw-medium">$1,865.47B</td>
                  </tr>

                  <tr class="align-middle">
                    <td>
                      <div class="d-flex flex-row gap-2">
                        <img alt="" src="/images/coin/eth.svg" width="28">
                        <div>
                          <h6 class="fw-bold mb-0">ETH</h6>
                          <p class="crypt-grayscale-600 mb-0">Ethereum</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h6 class="encrypted mb-0">0.00</h6>
                      <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                    </td>
                    <td class="fw-medium">$3,073.67</td>
                    <td class="encrypted fw-medium text-down">-0.26%</td>
                    <td class="fw-medium crypt-grayscale-600">--</td>
                    <td class="fw-medium">$500.00B</td>
                  </tr>

                  <tr class="align-middle">
                    <td>
                      <div class="d-flex flex-row gap-2">
                        <img alt="" src="/images/coin/bnb.svg" width="28">
                        <div>
                          <h6 class="fw-bold mb-0">BNB</h6>
                          <p class="crypt-grayscale-600 mb-0">BNB</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h6 class="encrypted mb-0">0.00</h6>
                      <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                    </td>
                    <td class="fw-medium">$608.61</td>
                    <td class="encrypted fw-medium text-up">+3.72%</td>
                    <td class="fw-medium crypt-grayscale-600">--</td>
                    <td class="fw-medium">$100.00B</td>
                  </tr>

                  <tr class="align-middle">
                    <td>
                      <div class="d-flex flex-row gap-2">
                        <img alt="" src="/images/coin/xrp.svg" width="28">
                        <div>
                          <h6 class="fw-bold mb-0">XRP</h6>
                          <p class="crypt-grayscale-600 mb-0">Ripple</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h6 class="encrypted mb-0">0.00</h6>
                      <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                    </td>
                    <td class="fw-medium">$2.88</td>
                    <td class="encrypted fw-medium text-up">+1.20%</td>
                    <td class="fw-medium crypt-grayscale-600">--</td>
                    <td class="fw-medium">$150.00B</td>
                  </tr>

                  <tr class="align-middle">
                    <td>
                      <div class="d-flex flex-row gap-2">
                        <img alt="" src="/images/coin/sol.svg" width="28">
                        <div>
                          <h6 class="fw-bold mb-0">SOL</h6>
                          <p class="crypt-grayscale-600 mb-0">Solana</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h6 class="encrypted mb-0">0.00</h6>
                      <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                    </td>
                    <td class="fw-medium">$208.54</td>
                    <td class="encrypted fw-medium text-down">-0.95%</td>
                    <td class="fw-medium crypt-grayscale-600">--</td>
                    <td class="fw-medium">$90.00B</td>
                  </tr>

                  <tr class="align-middle">
                    <td>
                      <div class="d-flex flex-row gap-2">
                        <img alt="" src="/images/coin/tron.svg" width="28">
                        <div>
                          <h6 class="fw-bold mb-0">TRX</h6>
                          <p class="crypt-grayscale-600 mb-0">TRON</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h6 class="encrypted mb-0">0.00</h6>
                      <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                    </td>
                    <td class="fw-medium">$0.1955</td>
                    <td class="encrypted fw-medium text-down">-2.76%</td>
                    <td class="fw-medium crypt-grayscale-600">--</td>
                    <td class="fw-medium">$17.00B</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- /My asset Asset Table -->
        </div>

        <!-- TradingView Ticker (script injected in mounted) -->
        <div class="container-fluid tradingview-widget-container__widget mt-2 card-bs animation-element">
          <div ref="tvTicker"></div>
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
  mounted () {
    // Inject TradingView script without placing <script> in the template
    const container = this.$refs.tvTicker
    if (!container) return

    const s = document.createElement('script')
    s.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js'
    s.async = true
    // TradingView expects the JSON config as the script's textContent
    s.text = JSON.stringify({
      symbols: [
        { proName: 'FOREXCOM:SPXUSD', title: 'S&P 500 Index' },
        { proName: 'FOREXCOM:NSXUSD', title: 'US 100 Cash CFD' },
        { proName: 'FX_IDC:EURUSD',   title: 'EUR to USD' },
        { proName: 'BITSTAMP:BTCUSD', title: 'Bitcoin' },
        { proName: 'BITSTAMP:ETHUSD', title: 'Ethereum' }
      ],
      showSymbolLogo: true,
      isTransparent: true,
      displayMode: 'adaptive',
      colorTheme: 'dark',
      locale: 'en'
    })
    container.innerHTML = '' // clear just in case of hot reload
    container.appendChild(s)
  }
}
</script>

<style scoped>
.wrapper { min-height: 24px; }

/* ensure nothing is hidden by animation classes */
.animation-element, .animation-element * {
  opacity: 1 !important;
  visibility: visible !important;
  transform: none !important;
}

/* helper palette */
.crypt-grayscale-600 { color: #9ca3af; }
.crypt-grayscale-700 { color: #6b7280; }

/* subtle border card */
.card-border {
  border: 1px solid rgba(255,255,255,.08);
  border-radius: 12px;
  overflow: hidden;
}

/* table polish */
.table-dark thead th {
  color: #fff !important;
  border-color: rgba(255,255,255,.08) !important;
}
.table-dark tbody td {
  color: #e5e7eb !important;
  border-color: rgba(255,255,255,.06) !important;
}

/* show the encrypted numbers normally */
.encrypted { filter: none !important; opacity: 1 !important; }

/* change colors */
.text-up   { color: #10b981 !important; }  /* green */
.text-down { color: #ef4444 !important; }  /* red */
</style>
