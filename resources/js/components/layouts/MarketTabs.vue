<template>
  <div class="card-bs p-2">
    <!-- Tabs -->
    <div class="nav nav-pills nav-justified gap-1 card-bs-tabs p-1">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        class="nav-link"
        :class="{ active: activeTab === tab.id }"
        @click="activeTab = tab.id"
      >
        {{ tab.name }}
      </button>
    </div>

    <!-- Search -->
    <div class="pt-2">
      <input
        v-model="search"
        type="text"
        class="form-control text-sm"
        placeholder="Search asset"
      />
    </div>

    <!-- Market Table -->
    <div class="table-responsive mt-2">
      <table class="table table-dark table-hover crypt-tab">
        <thead>
          <tr>
            <th>Asset</th>
            <th>Price</th>
            <th>Change (24h)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="asset in filteredAssets" :key="asset.symbol">
            <td>
              <div class="d-flex align-items-center gap-2">
                <p class="fw-medium mb-0">
                  {{ asset.symbol }}
                  <small class="crypt-grayscale-600">/{{ activeTab }}</small>
                  <span class="verified text-sm">{{ asset.leverage }}x</span>
                </p>
              </div>
            </td>
            <td>${{ asset.price }}</td>
            <td :class="asset.change >= 0 ? 'text-up' : 'text-down'">
              {{ asset.change >= 0 ? '+' : '' }}{{ asset.change }}%
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "MarketTabs",
  data() {
    return {
      activeTab: "Crypto",
      search: "",
      tabs: [
        { id: "Crypto", name: "Crypto" },
        { id: "Forex", name: "Forex" },
        { id: "Stocks", name: "Stocks" },
        { id: "Commodities", name: "Commodities" },
      ],
      assets: [
        { symbol: "BTC", price: 43000, change: 1.2, leverage: 5 },
        { symbol: "ETH", price: 2700, change: -0.5, leverage: 10 },
        { symbol: "ADA", price: 0.48, change: 3.1, leverage: 20 },
        { symbol: "XRP", price: 0.57, change: -2.8, leverage: 10 },
      ],
    };
  },
  computed: {
    filteredAssets() {
      return this.assets.filter((a) =>
        a.symbol.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
.text-up {
  color: #22ab94 !important;
}
.text-down {
  color: #f7525f !important;
}
</style>
