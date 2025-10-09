<template>
  <div class="wrapper pb-4">
    <!-- Header -->
    <div class="card-bs p-4 mb-3">
      <h4 class="crypt-grayscale-100 fw-bold mb-2">Order History</h4>
      <p class="crypt-grayscale-300 mb-0">
        View your completed and active trade orders here.
      </p>
    </div>

    <!-- Tabs -->
    <div class="d-flex flex-column animation-element">
      <div class="tab-content card-bs">
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

        <!-- ================= Open Orders ================= -->
        <div class="tab-pane fade show active" id="open-order-tab-pane" role="tabpanel"
             aria-labelledby="open-order-tab" tabindex="0">
          <div class="table-responsive">
            <table class="table table-dark table-hover mb-0">
              <thead>
                <tr class="table-active mb-0">
                  <th>Date</th>
                  <th>Pair</th>
                  <th>Side</th>
                  <th>Entry</th>
                  <th>Amount</th>
                  <th>Total</th>
                  <th>Total × Lev.</th>
                  <th>TP / SL</th>
                  <th>Leverage</th>
                  <th>Current P/L</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="align-middle">
                  <td>07-06-24 12:44:10</td>
                  <td>ETH/USDT</td>
                  <td class="text-primary">Buy</td>
                  <td>3,540.00</td>
                  <td>0.0800</td>
                  <td>283.20 EUR</td>
                  <td>849.60 EUR</td>
                  <td>
                    <span class="pill pill-tp">TP: 3,600.00</span>
                    <span class="pill pill-sl ms-1">SL: 3,480.00</span>
                  </td>
                  <td>3×</td>
                  <td class="text-success">+9.60 EUR</td>
                  <td>
                    <button class="btn btn-outline-danger btn-sm">Close Trade</button>
                  </td>
                </tr>
                <tr class="align-middle">
                  <td>07-06-24 11:05:32</td>
                  <td>SOL/USDT</td>
                  <td class="text-danger">Sell</td>
                  <td>148.90</td>
                  <td>85.00</td>
                  <td>12,656.50 EUR</td>
                  <td>63,282.50 EUR</td>
                  <td>
                    <span class="pill pill-tp">TP: 145.00</span>
                    <span class="pill pill-sl ms-1">SL: 150.50</span>
                  </td>
                  <td>5×</td>
                  <td class="text-danger">−22.95 EUR</td>
                  <td>
                    <button class="btn btn-outline-danger btn-sm">Close Trade</button>
                  </td>
                </tr>
                <tr class="align-middle">
                  <td>07-06-24 09:18:07</td>
                  <td>BTC/USDT</td>
                  <td class="text-primary">Buy</td>
                  <td>52,120.00</td>
                  <td>0.0120</td>
                  <td>625.44 EUR</td>
                  <td>625.44 EUR</td>
                  <td>
                    <span class="pill pill-na">TP: —</span>
                    <span class="pill pill-na ms-1">SL: —</span>
                  </td>
                  <td>—</td>
                  <td class="text-success">+1.24 EUR</td>
                  <td>
                    <button class="btn btn-outline-danger btn-sm">Close Trade</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- ================= Trade History ================= -->
        <div class="tab-pane fade" id="order-history-tab-pane" role="tabpanel"
             aria-labelledby="order-history-tab" tabindex="0">
          <div class="table-responsive">
            <table class="table table-dark table-hover mb-0">
              <thead>
                <tr class="table-active mb-0">
                  <th>Date</th>
                  <th>Pair</th>
                  <th>Side</th>
                  <th>Entry</th>
                  <th>Exit</th>
                  <th>Amount</th>
                  <th>Total</th>
                  <th>Total × Lev.</th>
                  <th>TP / SL</th>
                  <th>Leverage</th>
                  <th>Realized P&L</th>
                  <th>Outcome</th>
                </tr>
              </thead>
              <tbody>
                <tr class="align-middle">
                  <td>06-14-24 12:10:05</td>
                  <td>ETH/USDT</td>
                  <td class="text-primary">Buy</td>
                  <td>3,520.00</td>
                  <td>3,575.00</td>
                  <td>0.0640</td>
                  <td>225.28 EUR</td>
                  <td>675.84 EUR</td>
                  <td>
                    <span class="pill pill-tp">TP: 3,600.00</span>
                    <span class="pill pill-sl ms-1">SL: 3,480.00</span>
                  </td>
                  <td>3×</td>
                  <td class="text-success">+14.72 EUR</td>
                  <td class="text-success">Profitable</td>
                </tr>
                <tr class="align-middle table-row-disabled">
                  <td>06-13-24 18:05:11</td>
                  <td>SOL/USDT</td>
                  <td class="text-danger">Sell</td>
                  <td>148.30</td>
                  <td>149.90</td>
                  <td>120.00</td>
                  <td>17,796.00 EUR</td>
                  <td>88,980.00 EUR</td>
                  <td>
                    <span class="pill pill-tp">TP: 145.00</span>
                    <span class="pill pill-sl ms-1">SL: 150.20</span>
                  </td>
                  <td>5×</td>
                  <td class="text-danger">−192.00 EUR</td>
                  <td class="text-danger">Loss</td>
                </tr>
                <tr class="align-middle">
                  <td>06-12-24 09:41:20</td>
                  <td>BTC/USDT</td>
                  <td class="text-primary">Buy</td>
                  <td>52,000.00</td>
                  <td>51,980.00</td>
                  <td>0.0100</td>
                  <td>520.00 EUR</td>
                  <td>520.00 EUR</td>
                  <td>
                    <span class="pill pill-na">TP: —</span>
                    <span class="pill pill-na ms-1">SL: —</span>
                  </td>
                  <td>—</td>
                  <td class="text-danger">−0.20 EUR</td>
                  <td class="text-danger">Loss</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- ================= Deposits / Withdrawals ================= -->
        <div class="tab-pane fade" id="deposits-withdrawals-tab-pane" role="tabpanel"
             aria-labelledby="deposits-withdrawals-tab" tabindex="0">
          <div class="table-responsive">
            <table class="table table-dark table-hover mb-0">
              <thead>
                <tr class="table-active mb-0">
                  <th>Date</th>
                  <th>Type</th>
                  <th>Asset</th>
                  <th>Amount</th>
                  <th>Network / Method</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="align-middle">
                  <td>07-02-24 14:12:03</td>
                  <td class="text-primary">Deposit</td>
                  <td>USDT</td>
                  <td>500.00</td>
                  <td>TRC20</td>
                  <td><span class="link-primary fw-bold">Completed</span></td>
                  <td><a class="link-secondary fw-bold" href="#!">View</a></td>
                </tr>
                <tr class="align-middle">
                  <td>07-01-24 09:41:20</td>
                  <td class="text-danger">Withdrawal</td>
                  <td>BTC</td>
                  <td>0.0123</td>
                  <td>Bitcoin</td>
                  <td><span class="link-secondary fw-bold">Pending</span></td>
                  <td><a class="link-secondary fw-bold" href="#!">View</a></td>
                </tr>
                <tr class="align-middle">
                  <td>06-28-24 18:05:11</td>
                  <td class="text-danger">Withdrawal</td>
                  <td>ETH</td>
                  <td>0.50</td>
                  <td>ERC20</td>
                  <td><span class="text-danger fw-bold">Rejected</span></td>
                  <td><a class="link-secondary fw-bold" href="#!">View</a></td>
                </tr>
                <tr class="align-middle">
                  <td>06-26-24 15:22:44</td>
                  <td>Conversion</td>
                  <td>BTC → USDT</td>
                  <td>0.0050 BTC → 155.20 USDT</td>
                  <td>Spot Convert</td>
                  <td><span class="link-primary fw-bold">Completed</span></td>
                  <td><a class="link-secondary fw-bold" href="#!">View</a></td>
                </tr>
                <tr class="align-middle">
                  <td>06-24-24 11:09:03</td>
                  <td class="text-primary">Deposit</td>
                  <td>EUR</td>
                  <td>1,000.00</td>
                  <td>Bank Transfer (SEPA)</td>
                  <td><span class="link-primary fw-bold">Completed</span></td>
                  <td><a class="link-secondary fw-bold" href="#!">View</a></td>
                </tr>
                <tr class="align-middle">
                  <td>06-20-24 16:47:18</td>
                  <td class="text-danger">Withdrawal</td>
                  <td>EUR</td>
                  <td>250.00</td>
                  <td>Card (VISA)</td>
                  <td><span class="link-secondary fw-bold">Pending</span></td>
                  <td><a class="link-secondary fw-bold" href="#!">View</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TransactionController'
}
</script>

<style scoped>
.animation-element {
  opacity: 1 !important;
  transform: none !important;
  visibility: visible !important;
}

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
