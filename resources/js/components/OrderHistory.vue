<template>
  <div class="page d-flex">
    <!-- Sidebar -->
    <Navbar />

    <!-- Main content -->
    <div class="flex-fill d-flex flex-column">
      <!-- Header -->
      <HeaderBar />
      <OffcanvasNav />

      <!-- Page Content -->
      <div class="p-4">
        <div class="card-bs p-4 mb-3">
          <h4 class="crypt-grayscale-100 fw-bold mb-2">Order History</h4>
          <p class="crypt-grayscale-300 mb-0">
            View your completed and active trade orders here.
          </p>
        </div>

        <!-- Body Content -->
        <div class="d-flex flex-column animation-element">
          <div class="tab-content card-bs">
            <!-- Tabs -->
            <div class="flex p-2 p-sm-3 mb-4">
              <div class="nav nav-tabs nav-justified card-line card-bs p-1" role="tablist">
                <button class="nav-link fw-medium active"
                        id="open-order-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#open-order-tab-pane"
                        type="button"
                        aria-controls="open-order-tab-pane"
                        aria-selected="true">
                  Open Orders
                </button>
                <button class="nav-link fw-medium"
                        id="order-history-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#order-history-tab-pane"
                        type="button"
                        aria-controls="order-history-tab-pane"
                        aria-selected="false">
                  Trade History
                </button>
                <button class="nav-link fw-medium"
                        id="deposits-withdrawals-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#deposits-withdrawals-tab-pane"
                        type="button"
                        aria-controls="deposits-withdrawals-tab-pane"
                        aria-selected="false">
                  Deposits / Withdrawals
                </button>
              </div>
            </div>

            <!-- Open Orders (EUR) -->
            <div class="tab-pane fade show active" id="open-order-tab-pane" role="tabpanel"
                 aria-labelledby="open-order-tab" tabindex="0">
              <div class="table-responsive">
                <table class="table table-dark table-hover mb-0">
                  <thead>
                    <tr class="table-active mb-0">
                      <th scope="col">Date</th>
                      <th scope="col">Pair</th>
                      <th scope="col">Side</th>
                      <th scope="col">Entry</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Total</th>
                      <th scope="col">Total × Lev.</th>
                      <th scope="col">TP / SL</th>
                      <th scope="col">Leverage</th>
                      <th scope="col">Current P/L</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    <!-- Long, in profit -->
                    <tr class="align-middle">
                      <td class="fw-medium">07-06-24 12:44:10</td>
                      <td class="encrypted fw-medium">ETH/USDT</td>
                      <td class="fw-medium text-primary">Buy</td>
                      <td class="encrypted fw-medium">3,540.00</td>
                      <td class="encrypted fw-medium">0.0800</td>
                      <td class="encrypted fw-medium">283.20 EUR</td> <!-- 3540 × 0.08 -->
                      <td class="encrypted fw-bold">849.60 EUR</td> <!-- ×3 -->
                      <td class="fw-medium">
                        <span class="pill pill-tp">TP: 3,600.00</span>
                        <span class="pill pill-sl ms-1">SL: 3,480.00</span>
                      </td>
                      <td class="fw-medium">3×</td>
                      <td class="fw-bold text-success">+9.60 EUR</td>
                      <td>
                        <button class="btn btn-outline-danger btn-sm">Close Trade</button>
                      </td>
                    </tr>

                    <!-- Short, slightly down -->
                    <tr class="align-middle">
                      <td class="fw-medium">07-06-24 11:05:32</td>
                      <td class="encrypted fw-medium">SOL/USDT</td>
                      <td class="fw-medium text-danger">Sell</td>
                      <td class="encrypted fw-medium">148.90</td>
                      <td class="encrypted fw-medium">85.00</td>
                      <td class="encrypted fw-medium">12,656.50 EUR</td> <!-- 148.90 × 85 -->
                      <td class="encrypted fw-bold">63,282.50 EUR</td> <!-- ×5 -->
                      <td class="fw-medium">
                        <span class="pill pill-tp">TP: 145.00</span>
                        <span class="pill pill-sl ms-1">SL: 150.50</span>
                      </td>
                      <td class="fw-medium">5×</td>
                      <td class="fw-bold text-danger">−22.95 EUR</td>
                      <td>
                        <button class="btn btn-outline-danger btn-sm">Close Trade</button>
                      </td>
                    </tr>

                    <!-- No TP/SL set -->
                    <tr class="align-middle">
                      <td class="fw-medium">07-06-24 09:18:07</td>
                      <td class="encrypted fw-medium">BTC/USDT</td>
                      <td class="fw-medium text-primary">Buy</td>
                      <td class="encrypted fw-medium">52,120.00</td>
                      <td class="encrypted fw-medium">0.0120</td>
                      <td class="encrypted fw-medium">625.44 EUR</td> <!-- 52120 × 0.012 -->
                      <td class="encrypted fw-bold">625.44 EUR</td> <!-- ×1 -->
                      <td class="fw-medium">
                        <span class="pill pill-na">TP: —</span>
                        <span class="pill pill-na ms-1">SL: —</span>
                      </td>
                      <td class="fw-medium">—</td>
                      <td class="fw-bold text-success">+1.24 EUR</td>
                      <td>
                        <button class="btn btn-outline-danger btn-sm">Close Trade</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Trade History (DETAILED, EUR) -->
            <div class="tab-pane fade" id="order-history-tab-pane" role="tabpanel"
                 aria-labelledby="order-history-tab" tabindex="0">
              <div class="table-responsive">
                <table class="table table-dark table-hover mb-0">
                  <thead>
                    <tr class="table-active mb-0">
                      <th scope="col">Date</th>
                      <th scope="col">Pair</th>
                      <th scope="col">Side</th>
                      <th scope="col">Entry</th>
                      <th scope="col">Exit</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Total</th>
                      <th scope="col">Total × Lev.</th>
                      <th scope="col">TP / SL</th>
                      <th scope="col">Leverage</th>
                      <th scope="col">Realized P&L</th>
                      <th scope="col">Outcome</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- Profitable long -->
                    <tr class="align-middle">
                      <td class="fw-medium">06-14-24 12:10:05</td>
                      <td class="encrypted fw-medium">ETH/USDT</td>
                      <td class="fw-medium text-primary">Buy</td>
                      <td class="encrypted fw-medium">3,520.00</td>
                      <td class="encrypted fw-medium">3,575.00</td>
                      <td class="encrypted fw-medium">0.0640</td>
                      <td class="encrypted fw-medium">225.28 EUR</td> <!-- 3520 × 0.064 -->
                      <td class="encrypted fw-bold">675.84 EUR</td> <!-- 225.28 × 3× -->
                      <td class="fw-medium">
                        <span class="pill pill-tp">TP: 3,600.00</span>
                        <span class="pill pill-sl ms-1">SL: 3,480.00</span>
                      </td>
                      <td class="fw-medium">3×</td>
                      <td class="fw-bold text-success">+14.72 EUR</td>
                      <td class="fw-bold text-success">Profitable</td>
                    </tr>

                    <!-- Losing short, SL hit -->
                    <tr class="align-middle table-row-disabled">
                      <td class="fw-medium">06-13-24 18:05:11</td>
                      <td class="encrypted fw-medium">SOL/USDT</td>
                      <td class="fw-medium text-danger">Sell</td>
                      <td class="encrypted fw-medium">148.30</td>
                      <td class="encrypted fw-medium">149.90</td>
                      <td class="encrypted fw-medium">120.00</td>
                      <td class="encrypted fw-medium">17,796.00 EUR</td> <!-- 148.30 × 120 -->
                      <td class="encrypted fw-bold">88,980.00 EUR</td> <!-- 17,796 × 5× -->
                      <td class="fw-medium">
                        <span class="pill pill-tp">TP: 145.00</span>
                        <span class="pill pill-sl ms-1">SL: 150.20</span>
                      </td>
                      <td class="fw-medium">5×</td>
                      <td class="fw-bold text-danger">−192.00 EUR</td>
                      <td class="fw-bold text-danger">Loss</td>
                    </tr>

                    <!-- No TP/SL provided -->
                    <tr class="align-middle">
                      <td class="fw-medium">06-12-24 09:41:20</td>
                      <td class="encrypted fw-medium">BTC/USDT</td>
                      <td class="fw-medium text-primary">Buy</td>
                      <td class="encrypted fw-medium">52,000.00</td>
                      <td class="encrypted fw-medium">51,980.00</td>
                      <td class="encrypted fw-medium">0.0100</td>
                      <td class="encrypted fw-medium">520.00 EUR</td> <!-- 52000 × 0.01 -->
                      <td class="encrypted fw-bold">520.00 EUR</td> <!-- 1× leverage -->
                      <td class="fw-medium">
                        <span class="pill pill-na">TP: —</span>
                        <span class="pill pill-na ms-1">SL: —</span>
                      </td>
                      <td class="fw-medium">—</td>
                      <td class="fw-bold text-danger">−0.20 EUR</td>
                      <td class="fw-bold text-danger">Loss</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Deposits / Withdrawals / Conversions -->
            <div class="tab-pane fade" id="deposits-withdrawals-tab-pane" role="tabpanel"
                 aria-labelledby="deposits-withdrawals-tab" tabindex="0">
              <div class="table-responsive">
                <table class="table table-dark table-hover mb-0">
                  <thead>
                    <tr class="table-active mb-0">
                      <th scope="col">Date</th>
                      <th scope="col">Type</th>
                      <th scope="col">Asset</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Network / Method</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- Crypto deposit — Completed -->
                    <tr class="align-middle">
                      <td class="fw-medium">07-02-24 14:12:03</td>
                      <td class="fw-medium text-primary">Deposit</td>
                      <td class="fw-medium">USDT</td>
                      <td class="encrypted fw-medium">500.00</td>
                      <td class="fw-medium">TRC20</td>
                      <td><span class="link-primary fw-bold">Completed</span></td>
                      <td><a class="link-secondary fw-bold ms-3" href="#!">View</a></td>
                    </tr>

                    <!-- Crypto withdrawal — Pending -->
                    <tr class="align-middle">
                      <td class="fw-medium">07-01-24 09:41:20</td>
                      <td class="fw-medium text-danger">Withdrawal</td>
                      <td class="fw-medium">BTC</td>
                      <td class="encrypted fw-medium">0.0123</td>
                      <td class="fw-medium">Bitcoin</td>
                      <td><span class="link-secondary fw-bold">Pending</span></td>
                      <td><a class="link-secondary fw-bold ms-3" href="#!">View</a></td>
                    </tr>

                    <!-- Crypto withdrawal — Rejected -->
                    <tr class="align-middle">
                      <td class="fw-medium">06-28-24 18:05:11</td>
                      <td class="fw-medium text-danger">Withdrawal</td>
                      <td class="fw-medium">ETH</td>
                      <td class="encrypted fw-medium">0.50</td>
                      <td class="fw-medium">ERC20</td>
                      <td><span class="text-danger fw-bold">Rejected</span></td>
                      <td><a class="link-secondary fw-bold ms-3" href="#!">View</a></td>
                    </tr>

                    <!-- Conversion — Completed -->
                    <tr class="align-middle">
                      <td class="fw-medium">06-26-24 15:22:44</td>
                      <td class="fw-medium">Conversion</td>
                      <td class="fw-medium">BTC → USDT</td>
                      <td class="encrypted fw-medium">0.0050 BTC → 155.20 USDT</td>
                      <td class="fw-medium">Spot Convert</td>
                      <td><span class="link-primary fw-bold">Completed</span></td>
                      <td><a class="link-secondary fw-bold ms-3" href="#!">View</a></td>
                    </tr>

                    <!-- Fiat deposit — Completed -->
                    <tr class="align-middle">
                      <td class="fw-medium">06-24-24 11:09:03</td>
                      <td class="fw-medium text-primary">Deposit</td>
                      <td class="fw-medium">EUR</td>
                      <td class="encrypted fw-medium">1,000.00</td>
                      <td class="fw-medium">Bank Transfer (SEPA)</td>
                      <td><span class="link-primary fw-bold">Completed</span></td>
                      <td><a class="link-secondary fw-bold ms-3" href="#!">View</a></td>
                    </tr>

                    <!-- Fiat withdrawal — Pending -->
                    <tr class="align-middle">
                      <td class="fw-medium">06-20-24 16:47:18</td>
                      <td class="fw-medium text-danger">Withdrawal</td>
                      <td class="fw-medium">EUR</td>
                      <td class="encrypted fw-medium">250.00</td>
                      <td class="fw-medium">Card (VISA)</td>
                      <td><span class="link-secondary fw-bold">Pending</span></td>
                      <td><a class="link-secondary fw-bold ms-3" href="#!">View</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
        <!-- /Body Content -->
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
import Navbar from './layouts/navbar.vue'
import HeaderBar from './layouts/HeaderBar.vue'
import OffcanvasNav from './layouts/OffcanvasNav.vue'

import DepositModal from './modals/DepositModal.vue'
import WithdrawModal from './modals/WithdrawModal.vue'
import ConvertModal from './modals/ConvertModal.vue'
import ChangeEmailModal from './modals/ChangeEmailModal.vue'
import CurrencyModal from './modals/CurrencyModal.vue'

export default {
  name: 'OrderHistory',
  components: {
    Navbar, HeaderBar, OffcanvasNav,
    DepositModal, WithdrawModal, ConvertModal,
    ChangeEmailModal, CurrencyModal
  }
}
</script>

<style scoped>
/* keep content visible even if your global animation classes hide it */
.animation-element {
  opacity: 1 !important;
  transform: none !important;
  visibility: visible !important;
}

/* TP/SL pills */
.pill {
  display: inline-block;
  padding: .15rem .5rem;
  border-radius: .5rem;
  font-size: .8125rem;
}
.pill-tp {
  background: rgba(34, 197, 94, .15);
  color: #22c55e;
}
.pill-sl {
  background: rgba(239, 68, 68, .15);
  color: #ef4444;
}
.pill-na {
  background: rgba(148, 163, 184, .2);
  color: #cbd5e1;
}
</style>
