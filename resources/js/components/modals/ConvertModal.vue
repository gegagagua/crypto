<template>
  <!-- Convert Modal -->
  <div class="modal fade" id="convertCrypto" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header d-flex">
          <h5 class="d-flex align-items-center gap-3 crypt-grayscale-100 mb-0">Convert</h5>
          <button type="button" class="btn-close text-reset close-notify align-items-center justify-content-center" data-bs-dismiss="modal" aria-label="Close">
            <svg class="close-notify" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 4.5L4.5 13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.5 4.5L13.5 13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <div class="modal-body">
          <label class="form-label text-sm text-light">Select Conversion Type</label>
          <div class="input-group mb-3">
            <select class="form-select text-sm crypt-grayscale-300" id="convert-type" v-model="selectedType">
              <option value="fiat-crypto">Fiat ⇄ Crypto</option>
              <option value="crypto-crypto">Crypto ⇄ Crypto</option>
              <option value="crypto-fiat">Crypto ⇄ Fiat</option>
            </select>
          </div>

          <!-- Fiat ⇄ Crypto -->
          <div id="fiat-crypto-pane" class="convert-pane" :class="paneClass('fiat-crypto')">
            <div class="d-flex flex-row align-items-center justify-content-between">
              <label class="form-label text-sm text-light mt-2">From</label>
              <label class="form-label text-sm crypt-grayscale-600">Balance: <span id="fiatBalance">{{ fiatBalanceText }}</span></label>
            </div>
            <div class="input-group mb-3">
              <input type="text" id="fiatFromAmount" class="form-control placeholder-text" placeholder="Enter amount" inputmode="decimal">
              <div class="input-group-append input-group-text p-1">
                <select id="fromFiat" class="form-select text-sm crypt-grayscale-500" v-model="fromFiat">
                  <option value="EUR">EUR</option>
                </select>
              </div>
            </div>

            <label class="form-label text-sm text-light">To</label>
            <div class="input-group mb-3">
              <input type="text" id="fiatToAmount" class="form-control placeholder-text" placeholder="0" readonly>
              <div class="input-group-append input-group-text p-1">
                <select id="toFiatCrypto" class="form-select text-sm crypt-grayscale-500" v-model="toFiatCrypto">
                  <option value="USDT">USDT</option>
                  <option value="BTC">BTC</option>
                  <option value="ETH">ETH</option>
                  <option value="BNB">BNB</option>
                  <option value="XRP">XRP</option>
                  <option value="SOL">SOL</option>
                  <option value="TRX">TRX</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Crypto ⇄ Crypto -->
          <div id="crypto-crypto-pane" class="convert-pane" :class="paneClass('crypto-crypto')">
            <div class="d-flex flex-row align-items-center justify-content-between">
              <label class="form-label text-sm text-light mt-2">From</label>
              <label class="form-label text-sm crypt-grayscale-600">Balance: <span id="cryptoBalance">{{ cryptoFromBalanceText }}</span></label>
            </div>
            <div class="input-group mb-3">
              <input type="text" id="cryptoFromAmount" class="form-control placeholder-text" placeholder="Enter amount" inputmode="decimal">
              <div class="input-group-append input-group-text p-1">
                <select id="fromCrypto" class="form-select text-sm crypt-grayscale-500" v-model="fromCrypto" @change="syncFromTo">
                  <option value="BTC">BTC</option>
                  <option value="ETH">ETH</option>
                  <option value="BNB">BNB</option>
                  <option value="XRP">XRP</option>
                  <option value="SOL">SOL</option>
                  <option value="TRX">TRX</option>
                  <option value="USDT">USDT</option>
                </select>
              </div>
            </div>

            <label class="form-label text-sm text-light">To</label>
            <div class="input-group mb-3">
              <input type="text" id="cryptoToAmount" class="form-control placeholder-text" placeholder="0" readonly>
              <div class="input-group-append input-group-text p-1">
                <select id="toCrypto" class="form-select text-sm crypt-grayscale-500" v-model="toCrypto" @change="syncFromTo">
                  <option value="BTC" :disabled="fromCrypto==='BTC'">BTC</option>
                  <option value="ETH" :disabled="fromCrypto==='ETH'">ETH</option>
                  <option value="BNB" :disabled="fromCrypto==='BNB'">BNB</option>
                  <option value="XRP" :disabled="fromCrypto==='XRP'">XRP</option>
                  <option value="SOL" :disabled="fromCrypto==='SOL'">SOL</option>
                  <option value="TRX" :disabled="fromCrypto==='TRX'">TRX</option>
                  <option value="USDT" :disabled="fromCrypto==='USDT'">USDT</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Crypto ⇄ Fiat -->
          <div id="crypto-fiat-pane" class="convert-pane" :class="paneClass('crypto-fiat')">
            <div class="d-flex flex-row align-items-center justify-content-between">
              <label class="form-label text-sm text-light mt-2">From</label>
              <label class="form-label text-sm crypt-grayscale-600">Balance: <span id="cryptoFiatBalance">{{ cryptoFiatBalanceText }}</span></label>
            </div>
            <div class="input-group mb-3">
              <input type="text" id="cryptoFiatFromAmount" class="form-control placeholder-text" placeholder="Enter amount" inputmode="decimal">
              <div class="input-group-append input-group-text p-1">
                <select class="form-select text-sm crypt-grayscale-500" id="fromCryptoFiat" v-model="fromCryptoFiat">
                  <option value="BTC">BTC</option>
                  <option value="ETH">ETH</option>
                  <option value="BNB">BNB</option>
                  <option value="XRP">XRP</option>
                  <option value="SOL">SOL</option>
                  <option value="TRX">TRX</option>
                  <option value="USDT">USDT</option>
                </select>
              </div>
            </div>

            <label class="form-label text-sm text-light">To</label>
            <div class="input-group mb-3">
              <input type="text" id="cryptoFiatToAmount" class="form-control placeholder-text" placeholder="0" readonly>
              <div class="input-group-append input-group-text p-1">
                <select id="toCryptoFiat" class="form-select text-sm crypt-grayscale-500" v-model="toFiat">
                  <option value="EUR">EUR</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Summary -->
          <div class="mt-4 text-sm card-border p-2">
            <div class="d-flex flex-row justify-content-between">
              <p class="crypt-grayscale-500">Rate:</p>
              <p class="crypt-grayscale-600" id="rateText">1 BTC ≈ 27,000 USDT</p>
            </div>
            <div class="d-flex flex-row justify-content-between">
              <p class="crypt-grayscale-500">Fee:</p>
              <p id="convertFee" class="crypt-blue">0.00</p>
            </div>
            <div class="d-flex flex-row justify-content-between">
              <p class="crypt-grayscale-500 mb-0">You Will Receive:</p>
              <p id="convertReceive" class="crypt-grayscale-600 mb-0">0.00</p>
            </div>
          </div>

          <div class="d-grid mt-4 mb-3">
            <a class="btn btn-warning" href="#!" role="button">Confirm Conversion</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConvertModal',
  data() {
    return {
      // pane
      selectedType: 'fiat-crypto',
      // fiat-crypto
      fromFiat: 'EUR',
      toFiatCrypto: 'USDT',
      // crypto-crypto
      fromCrypto: 'BTC',
      toCrypto: 'ETH',
      // crypto-fiat
      fromCryptoFiat: 'BTC',
      toFiat: 'EUR',
      // balances map (same values you had in JS)
      balances: {
        EUR: '500.00 EUR',
        USD: '1000.00 USD',
        GBP: '250.00 GBP',
        BTC: '0.123 BTC',
        ETH: '1.45 ETH',
        BNB: '5.00 BNB',
        XRP: '2000 XRP',
        SOL: '30 SOL',
        TRX: '15000 TRX',
        USDT: '800 USDT'
      }
    }
  },
  computed: {
    fiatBalanceText()       { return this.balances[this.fromFiat] || `0.00 ${this.fromFiat}` },
    cryptoFromBalanceText() { return this.balances[this.fromCrypto] || `0.00 ${this.fromCrypto}` },
    cryptoFiatBalanceText() { return this.balances[this.fromCryptoFiat] || `0.00 ${this.fromCryptoFiat}` }
  },
  methods: {
    paneClass(key) {
      return this.selectedType === key ? '' : 'd-none'
    },
    syncFromTo() {
      // avoid from === to in crypto-crypto
      if (this.toCrypto === this.fromCrypto) {
        const all = ['BTC','ETH','BNB','XRP','SOL','TRX','USDT']
        const alt = all.find(c => c !== this.fromCrypto)
        if (alt) this.toCrypto = alt
      }
    }
  },
  mounted() {
    this.syncFromTo()
  }
}
</script>
