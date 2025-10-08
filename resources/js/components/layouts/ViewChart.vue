<template>
  <div class="card-bs p-2 mb-3">
    <!-- TradingView Mini Ticker Widget -->
    <div class="tradingview-widget-container card-line mb-2">
      <div id="tradingview-tickers"></div>
    </div>

    <!-- TradingView Advanced Chart -->
    <div class="tradingview-widget-container">
      <div id="tradingview-chart"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewChart",
  mounted() {
    // Mini Ticker
    const tickerScript = document.createElement("script");
    tickerScript.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-tickers.js";
    tickerScript.async = true;
    tickerScript.innerHTML = JSON.stringify({
      symbols: [
        { description: "Cardano / TetherUS • Binance", proName: "BINANCE:ADAUSDT" },
        { description: "Bitcoin / TetherUS • Binance", proName: "BINANCE:BTCUSDT" },
        { description: "Ethereum / TetherUS • Binance", proName: "BINANCE:ETHUSDT" },
      ],
      isTransparent: true,
      showSymbolLogo: true,
      colorTheme: "dark",
      locale: "en",
    });
    document.getElementById("tradingview-tickers").appendChild(tickerScript);

    // Main Chart
    const chartScript = document.createElement("script");
    chartScript.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    chartScript.async = true;
    chartScript.innerHTML = JSON.stringify({
      symbols: [["BINANCE:ADAUSDT|12M"]],
      chartOnly: false,
      width: "100%",
      height: 499,
      locale: "en",
      colorTheme: "dark",
      autosize: true,
      showVolume: true,
      showMA: true,
      hideDateRanges: false,
      scalePosition: "right",
      scaleMode: "Logarithmic",
      chartType: "candlesticks",
      upColor: "#22ab94",
      downColor: "#f7525f",
      borderUpColor: "#22ab94",
      borderDownColor: "#f7525f",
      wickUpColor: "#22ab94",
      wickDownColor: "#f7525f",
    });
    document.getElementById("tradingview-chart").appendChild(chartScript);
  },
};
</script>

<style scoped>
.tradingview-widget-container {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
}
</style>
