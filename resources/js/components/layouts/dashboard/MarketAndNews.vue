<template>
  <!-- Market table + Crypto/Stock news + Ticker -->
  <div class="row g-2 mt-4 animation-element">
    <!-- Market Data Table -->
    <div class="col-12 col-md-12 col-lg-12 col-xl-5 col-xxl-6">
      <div class="tab-content card-bs h-100">
        <!-- Tabs -->
        <div class="nav nav-tabs nav-justified card-border card-bs p-1 m-2" role="tablist">
          <button
            class="nav-link active fw-medium"
            id="top-market-tab"
            data-bs-toggle="tab"
            data-bs-target="#top-market-tab-pane"
            type="button"
            aria-controls="top-market-tab-pane"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.99984 17.7089C13.5667 17.7089 16.4582 14.5839 16.4582 10.8339C16.4582 6.52805 12.6138 3.47652 11.0653 2.42206C10.7107 2.1805 10.242 2.28502 9.995 2.636L7.9848 5.49288C7.68773 5.91509 7.08029 5.96651 6.71406 5.60264C6.38895 5.27962 5.859 5.27613 5.5672 5.62955C4.21674 7.26519 3.5415 9.30171 3.5415 10.8339C3.5415 14.5839 6.433 17.7089 9.99984 17.7089Z"
                stroke="currentColor" stroke-linejoin="round"/>
            </svg>
            Most popular
          </button>

          <button
            class="nav-link fw-medium"
            id="hot-coin-tab"
            data-bs-toggle="tab"
            data-bs-target="#hot-coin-tab-pane"
            type="button"
            aria-controls="hot-coin-tab-pane"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 2.5L8.40667 7.34417C8.32512 7.59209 8.1865 7.8174 8.00195 8.00195C7.8174 8.1865 7.59209 8.32512 7.34417 8.40667L2.5 10L7.34417 11.5933C7.59209 11.6749 7.8174 11.8135 8.00195 11.9981C8.1865 12.1826 8.32512 12.4079 8.40667 12.6558L10 17.5L11.5933 12.6558C11.6749 12.4079 11.8135 12.1826 11.9981 11.9981C12.1826 11.8135 12.4079 11.6749 12.6558 11.5933L17.5 10L12.6558 8.40667C12.4079 8.32512 12.1826 8.1865 11.9981 8.00195C11.8135 7.8174 11.6749 7.59209 11.5933 7.34417L10 2.5Z"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path
                d="M4.16675 2.5V5.83333M15.8333 14.1665V17.4998M2.5 4.1665H5.83333M14.1667 15.8335H17.5001"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Newly listed
          </button>
        </div>

        <!-- Most Popular -->
        <div class="tab-pane fade show active" id="top-market-tab-pane" role="tabpanel">
          <div class="table-responsive market-scroll">
            <table class="table table-dark table-hover mb-0">
              <thead>
                <tr>
                  <th scope="col" class="underline">Coin</th>
                  <th scope="col" class="underline">Price</th>
                  <th scope="col" class="underline">24h Change</th>
                  <th scope="col" class="underline">Market Cap</th>
                  <th scope="col" class="underline">Volume</th>
                </tr>
              </thead>
              <tbody id="top-market-body">
                <tr><td colspan="5" class="text-center">Loading top coins...</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Newly Listed -->
        <div class="tab-pane fade" id="hot-coin-tab-pane" role="tabpanel">
          <div class="table-responsive market-scroll">
            <table class="table table-dark table-hover mb-0">
              <thead>
                <tr>
                  <th scope="col" class="underline">Coin</th>
                  <th scope="col" class="underline">Price</th>
                  <th scope="col" class="underline">24h Change</th>
                  <th scope="col" class="underline">Volume</th>
                  <th scope="col" class="underline">Market Cap</th>
                </tr>
              </thead>
              <tbody id="hot-coin-body">
                <tr><td colspan="5" class="text-center">Loading new coins...</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Crypto Market News -->
    <div class="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
      <div class="card-bs h-100 d-flex flex-column">
        <div class="d-flex justify-content-between p-3">
          <h5 class="fw-bold">Crypto Market News</h5>
        </div>
        <div class="blog-scroll1 p-3" id="crypto-news-container">
          <p class="crypt-grayscale-600">Loading crypto news...</p>
        </div>
      </div>
    </div>

    <!-- Stock Market News -->
    <div class="col-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
      <div class="card-bs h-100 d-flex flex-column">
        <div class="d-flex justify-content-between p-3">
          <h5 class="fw-bold">Stock Market News</h5>
        </div>
        <div class="blog-scroll1 p-3" id="stock-news-container">
          <p class="crypt-grayscale-600">Loading stock news...</p>
        </div>
      </div>
    </div>

    <!-- TradingView Ticker -->
    <div class="container-fluid tradingview-widget-container__widget mt-2 card-bs animation-element">
      <!-- Script injected on mounted to match the original HTML embed -->
      <div ref="tvMount"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const tvMount = ref(null);

onMounted(() => {
  // inject the TradingView widget script exactly like the original HTML
  const s = document.createElement('script');
  s.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
  s.async = true;
  s.innerHTML = JSON.stringify({
    symbols: [
      { proName: 'FOREXCOM:SPXUSD', title: 'S&P 500 Index' },
      { proName: 'FOREXCOM:NSXUSD', title: 'US 100 Cash CFD' },
      { proName: 'FX_IDC:EURUSD', title: 'EUR to USD' },
      { proName: 'BITSTAMP:BTCUSD', title: 'Bitcoin' },
      { proName: 'BITSTAMP:ETHUSD', title: 'Ethereum' }
    ],
    showSymbolLogo: true,
    isTransparent: true,
    displayMode: 'adaptive',
    colorTheme: 'dark',
    locale: 'en'
  });
  if (tvMount.value) tvMount.value.appendChild(s);
});
</script>

<style scoped></style>
