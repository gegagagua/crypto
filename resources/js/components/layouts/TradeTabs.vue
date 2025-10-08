<template>
  <div class="tab-content table-responsive card-bs p-2 mt-2">
    <!-- Tabs -->
    <ul class="nav nav-pills nav-justified gap-1 card-bs-tabs p-1">
      <li class="nav-item">
        <button
          class="nav-link active"
          id="pills-limit"
          data-bs-toggle="pill"
          data-bs-target="#pills-limit-tab"
          type="button"
        >
          Limit
        </button>
      </li>
    </ul>

    <!-- Limit Tab -->
    <div class="tab-pane fade show active" id="pills-limit-tab">
      <div class="d-sm-flex flex-row justify-content-between gap-3 p-1">
        <!-- BUY -->
        <div class="w-100 mt-3">
          <div class="input-group mb-3 p-1">
            <div class="input-group-text">Spend ≈</div>
            <input class="form-control" type="text" placeholder="Enter amount" />
            <div class="input-group-text">EUR</div>
          </div>

          <div class="input-group mb-3 p-1">
            <div class="input-group-text">Receive</div>
            <input class="form-control" type="text" placeholder="0" />
            <div class="input-group-text">BTC</div>
          </div>

          <div class="mb-3 p-1">
            <label for="buy-leverage" class="form-label">
              Leverage: <span>{{ buyLeverage }}×</span>
            </label>
            <input
              v-model="buyLeverage"
              type="range"
              min="1"
              max="50"
              step="1"
              class="form-range"
              id="buy-leverage"
            />
          </div>

          <div class="input-group mb-3 p-1">
            <div class="input-group-text">Stop Loss</div>
            <input class="form-control" type="text" placeholder="Price (optional)" />
          </div>

          <div class="input-group mb-3 p-1">
            <div class="input-group-text">Take Profit</div>
            <input class="form-control" type="text" placeholder="Price (optional)" />
          </div>

          <div class="mt-2 text-sm card-border p-2">
            <div class="d-flex justify-content-between">
              <p class="crypt-grayscale-500 mb-1">Position Size:</p>
              <p class="crypt-grayscale-600 mb-1">0.00 EUR</p>
            </div>
            <div class="d-flex justify-content-between">
              <p class="crypt-grayscale-500 mb-1">Required Margin:</p>
              <p class="crypt-grayscale-600 mb-1">0.00 EUR</p>
            </div>
            <div class="d-flex justify-content-between">
              <p class="crypt-grayscale-500 mb-1">Trade Fee (0.1%):</p>
              <p class="crypt-grayscale-600 mb-1">0.00 EUR</p>
            </div>
          </div>

          <div class="d-grid mt-4">
            <a class="btn btn-up" href="#">Buy / Long</a>
          </div>
        </div>

        <!-- Divider -->
        <div class="d-flex"><div class="vr"></div></div>

        <!-- SELL -->
        <div class="w-100 mt-3">
          <div class="input-group mb-3 p-1">
            <div class="input-group-text">Spend ≈</div>
            <input class="form-control" type="text" placeholder="Enter amount" />
            <div class="input-group-text">EUR</div>
          </div>

          <div class="input-group mb-3 p-1">
            <div class="input-group-text">Receive</div>
            <input class="form-control" type="text" placeholder="0" />
            <div class="input-group-text">BTC</div>
          </div>

          <div class="mb-3 p-1">
            <label for="sell-leverage" class="form-label">
              Leverage: <span>{{ sellLeverage }}×</span>
            </label>
            <input
              v-model="sellLeverage"
              type="range"
              min="1"
              max="50"
              step="1"
              class="form-range"
              id="sell-leverage"
            />
          </div>

          <div class="input-group mb-3 p-1">
            <div class="input-group-text">Stop Loss</div>
            <input class="form-control" type="text" placeholder="Price (optional)" />
          </div>

          <div class="input-group mb-3 p-1">
            <div class="input-group-text">Take Profit</div>
            <input class="form-control" type="text" placeholder="Price (optional)" />
          </div>

          <div class="mt-2 text-sm card-border p-2">
            <div class="d-flex justify-content-between">
              <p class="crypt-grayscale-500 mb-1">Position Size:</p>
              <p class="crypt-grayscale-600 mb-1">0.00 EUR</p>
            </div>
            <div class="d-flex justify-content-between">
              <p class="crypt-grayscale-500 mb-1">Required Margin:</p>
              <p class="crypt-grayscale-600 mb-1">0.00 EUR</p>
            </div>
            <div class="d-flex justify-content-between">
              <p class="crypt-grayscale-500 mb-1">Trade Fee (0.1%):</p>
              <p class="crypt-grayscale-600 mb-1">0.00 EUR</p>
            </div>
          </div>

          <div class="d-grid mt-4">
            <a class="btn btn-down" href="#">Sell / Short</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TradeTabs",
  data() {
    return {
      buyLeverage: 1,
      sellLeverage: 1,
    };
  },
};
</script>

<style scoped>
.vr {
  width: 1px;
  background-color: rgba(255, 255, 255, 0.1);
}
.btn-up {
  background-color: #22ab94;
  color: #fff;
  font-weight: 600;
}
.btn-down {
  background-color: #f7525f;
  color: #fff;
  font-weight: 600;
}
</style>
