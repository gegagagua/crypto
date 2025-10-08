<template>
  <!-- Account summary row -->
  <div class="row g-2 mt-1 animation-element">
    <h5 class="crypt-grayscale-100 mb-2 mt-4 fw-bold">Account</h5>

    <div class="col-12 col-lg-4 col-xl-4 col-xxl-3 col-md-6">
      <div class="card-bs p-3 d-sm-flex flex-row align-items-center">
        <div class="card-body ">
          <div class="d-flex flex-row justify-content-between">
            <div>
              <p class="crypt-grayscale-500">FIAT</p>
              <div class="d-flex pb-3">
                <h3 class="fw-bold encrypted mb-0">0.00 EUR</h3>
              </div>
              <p class="crypt-grayscale-700 encrypted">≈ 0.00 USD</p>
            </div>
            <img alt="" style="width:60px;" src="/images/icon/spot.svg">
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 col-lg-4 col-xl-4 col-xxl-3 col-md-6">
      <div class="card-bs p-3 d-sm-flex flex-row align-items-center">
        <div class="card-body ">
          <div class="d-flex flex-row justify-content-between">
            <div>
              <p class="crypt-grayscale-500">Deposits</p>
              <div class="d-flex pb-3">
                <h3 class="fw-bold encrypted mb-0">0.00 EUR</h3>
              </div>
              <p class="crypt-grayscale-700 encrypted">≈ 0.00 USD</p>
            </div>
            <img alt="" style="width:60px;" src="/images/icon/margin.svg">
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 col-lg-4 col-xl-4 col-xxl-3 col-md-6">
      <div class="card-bs p-3 d-sm-flex flex-row align-items-center">
        <div class="card-body ">
          <div class="d-flex flex-row justify-content-between">
            <div>
              <p class="crypt-grayscale-500">Open Trades</p>
              <div class="d-flex pb-3">
                <h3 class="fw-bold encrypted mb-0">0.00 EUR</h3>
              </div>
              <p class="crypt-grayscale-700 encrypted">≈ 0.00 USD</p>
            </div>
            <img alt="" style="width:60px;" src="/images/icon/funding.svg">
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 col-lg-4 col-xl-4 col-xxl-3 col-md-6">
      <div class="card-bs p-3 d-sm-flex flex-row align-items-center">
        <div class="card-body ">
          <div class="d-flex flex-row justify-content-between">
            <div>
              <p class="crypt-grayscale-500">TP/TL</p>
              <div class="d-flex pb-3">
                <h3 class="fw-bold encrypted mb-0">0.45200 EUR</h3>
              </div>
              <p class="crypt-grayscale-700 encrypted">≈ 0.00 USD</p>
            </div>
            <img alt="" style="width:60px;" src="/images/icon/earn.svg">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// purely presentational – exact HTML retained
</script>

<style scoped></style>
