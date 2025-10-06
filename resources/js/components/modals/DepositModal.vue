<template>
  <!-- Deposit Modal -->
  <div class="modal fade" id="depositCrypto" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header d-flex">
          <h5 class="d-flex align-items-center gap-3 crypt-grayscale-100 mb-0">Deposit Crypto</h5>
          <button type="button" class="btn-close text-reset close-notify align-items-center justify-content-center" data-bs-dismiss="modal" aria-label="Close">
            <svg class="close-notify" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 4.5L4.5 13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.5 4.5L13.5 13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <div class="modal-body">
          <div class="tab-pane fade show active pt-4" id="deposit-tab-pane" role="tabpanel" aria-labelledby="deposit-tab" tabindex="0">
            <div class="input-group mb-3 p-1">
              <div class="input-group-prepend input-group-text">Spend ≈</div>
              <input id="depositFiat" class="form-control placeholder-text" type="text" placeholder="Enter amount" inputmode="decimal">
              <div class="input-group-append input-group-text p-1">
                <select id="depositFiatCur" class="form-select text-sm crypt-grayscale-500">
                  <option value="EUR" selected>EUR</option>
                </select>
              </div>
            </div>

            <div class="input-group mb-3 p-1">
              <div class="input-group-prepend input-group-text">Receive</div>
              <input id="depositCryptoAmt" class="form-control placeholder-text" type="text" placeholder="0" readonly>
              <div class="input-group-append input-group-text p-1">
                <select id="depositCryptoCur" class="form-select text-sm crypt-grayscale-500">
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

            <div class="mt-2 text-sm card-border p-2">
              <div class="d-flex flex-row justify-content-between">
                <p class="crypt-grayscale-500">Subtotal:</p>
                <p id="depositSubtotal" class="crypt-grayscale-600">0.00</p>
              </div>
              <div class="d-flex flex-row justify-content-between">
                <p class="crypt-grayscale-500">Transaction commission: <span class="crypt-grayscale-500">(0.1%)</span></p>
                <p id="depositCommission" class="crypt-grayscale-600">0.00 EUR</p>
              </div>
              <div class="d-flex flex-row justify-content-between">
                <p class="crypt-grayscale-500">Gas fee: <span class="crypt-grayscale-500">(0.1%)</span></p>
                <p id="depositGas" class="crypt-blue">0.00 EUR</p>
              </div>
              <div class="d-flex flex-row justify-content-between">
                <p class="crypt-grayscale-500 mb-0">Total:</p>
                <p id="depositTotal" class="crypt-grayscale-600 mb-0">0.00</p>
              </div>
            </div>

            <div class="mt-4 mb-4 text-sm">
              <div class="d-flex flex-row">
                <label class="form-label text-light">Payment Method</label>
              </div>
              <a class="btn btn-editor btn-outline-primary d-flex flex-row align-items-center justify-content-between card-border p-2" href="#!">
                <div class="d-flex flex-row align-items-center crypt-grayscale-300 gap-2">
                  <!-- icons preserved -->
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M5 15C4.06 15 3.19 15.33 2.5 15.88C1.58 16.61 1 17.74 1 19C1 19.75 1.21 20.46 1.58 21.06C2.27 22.22 3.54 23 5 23C6.01 23 6.93001 22.63 7.63 22C7.94 21.74 8.21 21.42 8.42 21.06C8.79 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15ZM7.07001 18.57L4.94 20.54C4.8 20.67 4.60999 20.74 4.42999 20.74C4.23999 20.74 4.04999 20.67 3.89999 20.52L2.91 19.53C2.62 19.24 2.62 18.76 2.91 18.47C3.2 18.18 3.68 18.18 3.97 18.47L4.45 18.95L6.05 17.47C6.35 17.19 6.83 17.21 7.11 17.51C7.39 17.81 7.37001 18.29 7.07001 18.57Z" fill="currentColor"/><path opacity="0.4" d="M19.48 12.95H21.5V11.51C21.5 9.44001 19.81 7.75 17.74 7.75H6.25999C4.18999 7.75 2.5 9.44001 2.5 11.51V15.88C3.19 15.33 4.06 15 5 15C7.21 15 9 16.79 9 19C9 19.75 8.79 20.46 8.42 21.06C8.21 21.42 7.94 21.74 7.63 22H17.74C19.81 22 21.5 20.31 21.5 18.24V17.05H19.6C18.52 17.05 17.53 16.26 17.44 15.18C17.38 14.55 17.62 13.96 18.04 13.55C18.41 13.17 18.92 12.95 19.48 12.95Z" fill="currentColor"/><path d="M14.85 3.95012V7.75011H6.25999C4.18999 7.75011 2.5 9.44012 2.5 11.5101V7.84014C2.5 6.65014 3.23 5.59009 4.34 5.17009L12.28 2.17009C13.52 1.71009 14.85 2.62012 14.85 3.95012Z" fill="currentColor"/><path d="M22.5598 13.9702V16.0302C22.5598 16.5802 22.1198 17.0302 21.5598 17.0502H19.5998C18.5198 17.0502 17.5298 16.2602 17.4398 15.1802C17.3798 14.5502 17.6198 13.9602 18.0398 13.5502C18.4098 13.1702 18.9198 12.9502 19.4798 12.9502H21.5598C22.1198 12.9702 22.5598 13.4202 22.5598 13.9702Z" fill="currentColor"/><path d="M14 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H14C14.41 11.25 14.75 11.59 14.75 12C14.75 12.41 14.41 12.75 14 12.75Z" fill="currentColor"/></svg>
                Pay with Cryptomus
              </div>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.75 13.5L11.25 9L6.75 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
            </div>

            <div class="d-grid">
              <a class="btn btn-up" href="./login.html" role="button">Deposit</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default { name: 'DepositModal' }
</script>
