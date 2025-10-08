<template>
  <!-- User Profile + Total Assets (left) and Deposit/P2P (right) -->
  <div class="row g-2 animation-element">
    <div class="col-12 col-md-12 col-lg-9">
      <div class="card-bs p-3 h-100">
        <!-- Profile -->
        <div class="row align-items-center p-2">
          <div class="col-12 col-md-12 col-xl-7">
            <div class="d-flex gap-3">
              <div class="pb-2 ">
                <img class="user-profile " src="/images/social/user.jpg" alt="">
              </div>
              <div class="pb-2 ">
                <div class="d-flex flex-wrap align-items-center gap-2 ">
                  <h4 class="crypt-grayscale-100 fw-bold">Hello, customer_name</h4>
                </div>
                <div class="pb-2 text-sm">
                  <a href="#" class="crypt-grayscale-600 link-light" role="button">Last Login:
                    12-15-2024 16:13:15
                  </a>
                </div>
                <div class="d-flex flex-wrap align-items-center gap-3">
                  <div class="verified gd-bg px-0">
                    <a class="d-flex gap-2 mb-2 verified mt-2" href="#!">
                      <p class="crypt-grayscale-600 mb-0">UID:</p>
                      <p class="crypt-grayscale-100 mb-0">35403204</p>
                      <div class="crypt-grayscale-500" data-bs-toggle="tooltip"
                           data-bs-placement="top" title="Copy">
                        <svg width="24" height="24" viewBox="0 0 24 24"
                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M9.15556 5C6.8605 5 5 6.8605 5 9.15556V12.48C5 14.5149 6.46269 16.2083 8.39406 16.566C8.75174 18.4974 10.4451 19.96 12.48 19.96H15.8044C18.0995 19.96 19.96 18.0995 19.96 15.8044V12.48C19.96 10.4451 18.4974 8.75174 16.566 8.39406C16.2083 6.46269 14.5149 5 12.48 5H9.15556ZM14.8315 8.32444C14.4892 7.35604 13.5657 6.66222 12.48 6.66222H9.15556C7.77853 6.66222 6.66222 7.77853 6.66222 9.15556V12.48C6.66222 13.5657 7.35603 14.4892 8.32444 14.8315V12.48C8.32444 10.1849 10.1849 8.32444 12.48 8.32444H14.8315ZM9.98667 12.48C9.98667 11.103 11.103 9.98667 12.48 9.98667H15.8044C17.1814 9.98667 18.2978 11.103 18.2978 12.48V15.8044C18.2978 17.1814 17.1814 18.2978 15.8044 18.2978H12.48C11.103 18.2978 9.98667 17.1814 9.98667 15.8044V12.48Z"
                                fill="currentColor"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-12 col-xl-5">
            <div class="row mt-3">
              <div class="col-12 col-md-4 pb-4 ">
                <div class="d-flex flex-sm-wrap justify-content-between gap-4">
                  <p class="crypt-grayscale-600 mb-0">Identification</p>
                  <a class="verified alert align-items-center d-flex mb-0 gap-2" href="#!"
                     role="button">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor"
                         xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.401 0.794778C10.7011 0.396626 11.2989 0.396625 11.599 0.794778L12.9886 2.6388C13.1879 2.90318 13.5369 3.00566 13.8474 2.89097L16.0135 2.091C16.4812 1.91827 16.9841 2.24147 17.0212 2.73864L17.1934 5.04126C17.218 5.37139 17.4562 5.64629 17.7795 5.7177L20.0342 6.21577C20.521 6.32331 20.7693 6.86709 20.5318 7.30543L19.4317 9.33557C19.274 9.62663 19.3258 9.98668 19.5591 10.2215L21.1866 11.8595C21.538 12.2132 21.4529 12.8049 21.0161 13.0452L18.9931 14.1583C18.703 14.3179 18.5519 14.6488 18.6213 14.9725L19.1048 17.2303C19.2092 17.7178 18.8178 18.1696 18.3204 18.1357L16.0167 17.9783C15.6864 17.9558 15.3804 18.1524 15.2637 18.4622L14.4498 20.6231C14.2741 21.0897 13.7005 21.2581 13.3004 20.9606L11.4475 19.5828C11.1819 19.3852 10.8181 19.3852 10.5525 19.5828L8.69955 20.9606C8.29948 21.2581 7.72589 21.0897 7.55016 20.6231L6.73628 18.4622C6.6196 18.1524 6.3136 17.9558 5.98332 17.9783L3.67964 18.1357C3.18224 18.1696 2.79076 17.7178 2.89517 17.2303L3.37874 14.9725C3.44807 14.6488 3.29697 14.3179 3.00692 14.1583L0.983894 13.0452C0.547091 12.8049 0.462014 12.2132 0.813412 11.8595L2.44089 10.2215C2.67423 9.98668 2.72599 9.62664 2.56827 9.33557L1.46819 7.30543C1.23066 6.86709 1.479 6.32331 1.96582 6.21577L4.2205 5.7177C4.54376 5.64629 4.78196 5.37139 4.80664 5.04126L4.97876 2.73864C5.01593 2.24147 5.51884 1.91827 5.98652 2.091L8.15255 2.89097C8.4631 3.00566 8.81211 2.90318 9.01135 2.6388L10.401 0.794778Z"
                        fill="currentColor" />
                      <path opacity="0.9"
                            d="M6.46921 10.1359C6.94653 9.65862 7.72039 9.65862 8.19771 10.1359L9.77791 11.7161L13.8026 7.69147C14.2798 7.21417 15.0537 7.21417 15.531 7.69147C16.0083 8.16879 16.0083 8.94265 15.531 9.41996L10.6421 14.3088C10.1648 14.7861 9.39097 14.7861 8.91366 14.3088L6.46921 11.8644C5.99191 11.3871 5.99191 10.6132 6.46921 10.1359Z"
                            fill="#000"/>
                    </svg>
                    Verified
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Total Assets -->
        <div class="card-bs-tabs p-3 p-sm-4 mt-3">
          <div class="row">
            <!-- Asset Info -->
            <div class="col-12 col-lg-6 ">
              <div class="d-flex gap-1 ">
                <h5>Total Assets</h5>
                <a href="#!" class="link-secondary" id="encrypt">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4"
                          d="M21.25 9.15005C18.94 5.52005 15.56 3.43005 12 3.43005C10.22 3.43005 8.49 3.95005 6.91 4.92005C5.33 5.90005 3.91 7.33005 2.75 9.15005C1.75 10.7201 1.75 13.2701 2.75 14.8401C5.06 18.4801 8.44 20.5601 12 20.5601C13.78 20.5601 15.51 20.0401 17.09 19.0701C18.67 18.0901 20.09 16.6601 21.25 14.8401C22.25 13.2801 22.25 10.7201 21.25 9.15005ZM12 16.0401C9.76 16.0401 7.96 14.2301 7.96 12.0001C7.96 9.77005 9.76 7.96005 12 7.96005C14.24 7.96005 16.04 9.77005 16.04 12.0001C16.04 14.2301 14.24 16.0401 12 16.0401Z"
                          fill="currentColor"/>
                    <path
                      d="M12.0004 9.14001C10.4304 9.14001 9.15039 10.42 9.15039 12C9.15039 13.57 10.4304 14.85 12.0004 14.85C13.5704 14.85 14.8604 13.57 14.8604 12C14.8604 10.43 13.5704 9.14001 12.0004 9.14001Z"
                      fill="currentColor"/>
                  </svg>
                </a>
              </div>
              <div class="d-flex gap-2 align-items-center">
                <h2 class="fw-bold encrypted mb-0">4.55 EUR</h2>
                <div></div>
              </div>
              <h6 class="crypt-grayscale-700">≈ $0.00</h6>
              <div class="d-sm-flex gap-2 align-items-center mt-3 mb-3">
                <h6 class="fw-bold crypt-grayscale-400 mb-0">Today‘s PnL</h6>
                <h6 class="crypt-grayscale-600 encrypted mb-0">+ $0.00(0.00%)</h6>
              </div>
            </div>

            <div class="col-12 col-lg-6">
              <!-- Button -->
              <div class="d-sm-flex flex-row justify-content-end gap-2 ">
                <a class="btn btn-editor btn-primary mb-2" href="#!" data-bs-toggle="modal"
                   data-bs-target="#depositCrypto">Deposit</a>
                <a class="btn btn-editor btn-info mb-2" href="#!" data-bs-toggle="modal"
                   data-bs-target="#withdrawModal" role=" button">Withdraw</a>
              </div>
              <!-- Chart -->
              <div class="flex mt-2">
                <div class="chart-area"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="col-12 col-md-12 col-lg-3">
      <!-- Deposit or Deposit -->
      <div class="card-bs p-3 h-100">
        <h5 class="fw-bold crypt-grayscale-100">Deposit or Deposit</h5>
        <p class="crypt-grayscale-400">You don't currently have assets. Deposit or Deposit via the
          methods below.</p>
        <div class="row gap-2 ">
          <div class="col-12">
            <div class="d-flex card-bs mesh3 p-3 justify-content-between mt-2">
              <div class="d-flex flex-column ">
                <div class="d-flex flex-row gap-2">
                  <div>
                    <img alt="" style="width:38px;" src="/images/icon/deposit.svg">
                  </div>
                  <h5 class="crypt-grayscale-0 fw-bold">Deposit</h5>
                </div>
                <p class="crypt-grayscale-0">Deposit crypto.</p>
              </div>
              <div>
                <a class="btn btn-editor btn-light mb-2" href="#" data-bs-toggle="modal"
                   data-bs-target="#depositCrypto">Deposit</a>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="d-flex card-bs mesh4 p-3 justify-content-between mt-2">
              <div class="d-flex flex-column">
                <div class="d-flex flex-row gap-2">
                  <div>
                    <img alt="" style="width:38px;" src="/images/icon/p2p.svg">
                  </div>
                  <h5 class="crypt-grayscale-0 fw-bold">P2P</h5>
                </div>
                <p class="crypt-grayscale-0">Convert Crypto</p>
              </div>
              <div>
                <a class="btn btn-editor btn-light mb-2" href="#" data-bs-toggle="modal"
                   data-bs-target="#convertCrypto">Convert</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No logic needed here; markup is kept exactly as in HTML.
</script>

<style scoped>
/* no local styles; uses global CSS exactly as original */
</style>
