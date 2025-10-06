<template>
  <!-- Withdraw Modal -->
  <div class="modal fade" id="withdrawModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header d-flex">
          <h5 class="d-flex align-items-center gap-3 crypt-grayscale-100 mb-0">Withdraw</h5>
          <button type="button" class="btn-close text-reset close-notify align-items-center justify-content-center" data-bs-dismiss="modal" aria-label="Close">
            <svg class="close-notify" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 4.5L4.5 13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.5 4.5L13.5 13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <div class="modal-body">
          <div class="tab-content table-responsive justify-content-between mb-4 p-0">
            <div class="d-flex flex-row nav nav-pills nav-justified card-bs-tabs p-1">
              <button class="nav-link active fs-6" id="crypto-withdraw-tab" data-bs-toggle="tab" data-bs-target="#crypto-withdraw-tab-pane" type="button" aria-controls="crypto-withdraw-tab-pane">Crypto Withdraw</button>
              <button class="nav-link fs-6" id="fiat-withdraw-tab" data-bs-toggle="tab" data-bs-target="#fiat-withdraw-tab-pane" type="button" aria-controls="fiat-withdraw-tab-pane">Fiat Withdraw</button>
            </div>

            <!-- Crypto Withdraw -->
            <div class="tab-pane fade show active pt-4" id="crypto-withdraw-tab-pane" role="tabpanel" aria-labelledby="crypto-withdraw-tab" tabindex="0">
              <div class="d-flex flex-row align-items-center justify-content-between px-1">
                <label class="form-label text-sm text-light">Withdraw From Wallet</label>
                <label class="form-label text-sm crypt-grayscale-600">Balance:
                  <span class="crypt-grayscale-300">0.00 USDT</span>
                </label>
              </div>

              <div class="input-group d-flex p-1 mb-3">
                <input type="text" id="fiatAmount" class="form-control text-sm" placeholder="Enter fiat amount" inputmode="decimal">
                <div class="input-group-append input-group-text p-1">
                  <select id="fiatCurrency" class="form-select text-sm crypt-grayscale-500">
                    <option value="EUR" selected>EUR</option>
                  </select>
                </div>
              </div>

              <div class="input-group d-flex p-1">
                <input type="text" id="cryptoAmount" class="form-control text-sm" placeholder="0" readonly>
                <div class="input-group-append input-group-text p-1">
                  <select id="cryptoCurrency" class="form-select text-sm crypt-grayscale-500">
                    <option value="USDT" selected>USDT</option>
                    <option value="BTC">BTC</option>
                    <option value="ETH">ETH</option>
                    <option value="BNB">BNB</option>
                    <option value="XRP">XRP</option>
                    <option value="SOL">SOL</option>
                    <option value="TRX">TRX</option>
                  </select>
                </div>
              </div>

              <div class="input-group mt-3 p-1">
                <div class="input-group-prepend input-group-text">To Address</div>
                <input id="withdrawAddress" class="form-control placeholder-text" type="text" placeholder="Paste wallet address">
              </div>

              <div class="mt-4 text-sm card-border p-2">
                <div class="d-flex flex-row justify-content-between">
                  <p class="crypt-grayscale-500">Subtotal:</p>
                  <p id="subtotal" class="crypt-grayscale-600">0.00</p>
                </div>
                <div class="d-flex flex-row justify-content-between">
                  <p class="crypt-grayscale-500">Network Fee:</p>
                  <p id="networkFee" class="crypt-blue">0.00 USDT</p>
                </div>
                <div class="d-flex flex-row justify-content-between">
                  <p class="crypt-grayscale-500 mb-0">Total Sent:</p>
                  <p id="totalSent" class="crypt-grayscale-600 mb-0">0.00</p>
                </div>
              </div>

              <div class="d-grid mt-4">
                <a class="btn btn-up" href="./login.html" role="button">Withdraw Crypto</a>
              </div>
            </div>

            <!-- Fiat Withdraw -->
            <div class="tab-pane fade pt-4" id="fiat-withdraw-tab-pane" role="tabpanel" aria-labelledby="fiat-withdraw-tab" tabindex="0">
              <div class="d-flex flex-row align-items-center justify-content-between px-1">
                <label class="form-label text-sm text-light">Withdraw Fiat</label>
                <label class="form-label text-sm crypt-grayscale-600">Balance: <span class="crypt-grayscale-300">0.00 EUR</span></label>
              </div>

              <div class="input-group d-flex p-1">
                <input type="text" class="form-control text-sm" placeholder="Enter amount" inputmode="decimal">
                <div class="input-group-append input-group-text p-1">
                  <select class="form-select text-sm crypt-grayscale-500">
                    <option selected>EUR</option>
                  </select>
                </div>
              </div>

              <div class="mt-3 p-1">
                <label class="form-label text-sm crypt-grayscale-500">Bank Name</label>
                <input class="form-control placeholder-text" type="text" placeholder="Enter bank name">
              </div>
              <div class="mt-3 p-1">
                <label class="form-label text-sm crypt-grayscale-500">IBAN</label>
                <input class="form-control placeholder-text" type="text" placeholder="Enter IBAN">
              </div>
              <div class="mt-3 p-1">
                <label class="form-label text-sm crypt-grayscale-500">SWIFT / BIC</label>
                <input class="form-control placeholder-text" type="text" placeholder="Enter SWIFT/BIC code">
              </div>
              <div class="mt-3 p-1">
                <label class="form-label text-sm crypt-grayscale-500">Withdrawal Type</label>
                <select class="form-select text-sm crypt-grayscale-500">
                  <option selected>SEPA</option>
                  <option>SWIFT</option>
                </select>
              </div>

              <div class="mt-4 text-sm card-border p-2">
                <div class="d-flex flex-row justify-content-between">
                  <p class="crypt-grayscale-500">Subtotal:</p>
                  <p class="crypt-grayscale-600">0.00</p>
                </div>
                <div class="d-flex flex-row justify-content-between">
                  <p class="crypt-grayscale-500">Processing Fee:</p>
                  <p class="crypt-blue">0.00 EUR</p>
                </div>
                <div class="d-flex flex-row justify-content-between">
                  <p class="crypt-grayscale-500 mb-0">Total Sent:</p>
                  <p class="crypt-grayscale-600 mb-0">0.00</p>
                </div>
              </div>

              <div class="d-grid mt-4">
                <a class="btn btn-up" href="./login.html" role="button">Withdraw Fiat</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default { name: 'WithdrawModal' }
</script>
