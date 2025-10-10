<template>
  <div class="card-bs p-3 mb-3">
    <!-- ✅ Single Crypto Header -->
    <div class="asset-header d-flex align-items-center justify-content-between mb-3">
      <div class="d-flex align-items-center gap-3">
        <img :src="asset.icon" :alt="asset.symbol" width="36" height="36" />
        <div>
          <h4 class="m-0 fw-bold text-light">{{ asset.name }}</h4>
          
        </div>
      </div>
      <div class="text-end">
        <h3 class="m-0 fw-bold text-light">{{ asset.price.toLocaleString() }} USD</h3>
        <span
          class="fw-semibold"
          :class="asset.change >= 0 ? 'text-success' : 'text-danger'"
        >
          {{ asset.change > 0 ? '+' : '' }}{{ asset.change.toFixed(2) }}%
        </span>
      </div>
    </div>

    <!-- ✅ TradingView Advanced Chart Widget -->
    <div class="chart-holder">
      <div id="tv_chart_container"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewChart",
  data() {
    return {
      asset: {
        name: "Bitcoin",
        symbol: "BTC",
        price: 0,
        change: 0,
        icon: "/images/coin/btc.svg",
      },
    };
  },
  mounted() {
    this.loadChart();
    this.fetchPrice();
  },
  methods: {
    // ✅ Load TradingView Advanced Chart
    loadChart() {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        autosize: true,
        symbol: "BINANCE:BTCUSDT",
        interval: "D",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        hide_side_toolbar: true,
        allow_symbol_change: false,
        calendar: false,
        details: false,
        hide_top_toolbar: false,
        backgroundColor: "#0F0F0F",
        gridColor: "rgba(255,255,255,0.08)",
        withdateranges: true,
        studies: [],
        save_image: false,
        hide_volume: false,
      });
      document.getElementById("tv_chart_container").appendChild(script);
    },

    // ✅ Fetch current price from your DB or API
    async fetchPrice() {
      try {
        const response = await fetch("/api/crypto-prices");
        const data = await response.json();
        const btc = data.find((c) => c.symbol === "BTC");
        if (btc) {
          this.asset.price = btc.price;
          this.asset.change = btc.change;
        } else {
          throw new Error("BTC not found");
        }
      } catch (err) {
        console.error("Failed to fetch asset price:", err);
        // fallback values
        this.asset.price = 64300.45;
        this.asset.change = 1.28;
      }
    },
  },
};
</script>

<style scoped>
/* ✅ Asset header styles */
.asset-header {
  background: #121212;
  border-radius: 10px;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

/* ✅ Chart container */
.chart-holder {
  position: relative;
  width: 100%;
  height: 660px; /* bigger height */
  background-color: #0f0f0f;
  border-radius: 10px;
  overflow: hidden;
}

#tv_chart_container {
  width: 100%;
  height: 100%;
}

.tradingview-widget-copyright {
  display: none !important;
}

/* ✅ Responsive */
@media (max-width: 992px) {
  .chart-holder {
    height: 480px;
  }
  .asset-header h3 {
    font-size: 1.25rem;
  }
  .asset-header h4 {
    font-size: 1.1rem;
  }
}
</style>
