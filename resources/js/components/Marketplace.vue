<template>
  <section class="container-fluid d-sm-flex flex-row fixed-sidebar">
    <!-- Sidebar -->
    <Navbar />

    <!-- Main -->
    <div class="wrapper pb-4">
      <HeaderBar />
      <div class="d-flex flex-column card-bs">
            <h3 class="flex p-3 p-sm-4">Markets Overview</h3>
            <!-- Intro Marketplace -->
            <div class="row g-2 px-3 px-sm-4 mb-4 ">
                <!-- Hot Coin -->
                <div class="col-12 col-lg-4 col-xl-4 col-xxl-3 col-md-6">
                    <!-- Table -->
                    <div class="table-responsive card-border">
                        <!-- Head -->
                        <div class="d-flex justify-content-between card-line p-2">
                            <h6 class="fw-bold mb-0">Hot Coin</h6>
                            </a>
                        </div>
                        <table class="table table-dark table-hover mb-0">
                            <thead>
                                <tr class="mb-0">
                                    <th scope="col" class="underline">Name</th>
                                    <th scope="col" class="underline">Price</th>
                                    <th scope="col" class="underline">24H</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="align-middle">
                                    <td>
                                        <div class="d-flex flex-row align-items-center gap-2">
                                            <p class="fw-medium crypt-grayscale-600 mb-0">1</p>
                                            <img alt="" src="/images/coin/bnb.svg" width="20">
                                            <p class="fw-medium text-sm mb-0">BNB <span class="verified text-sm">20x</span></p>
                                        </div>
                                    </td>
                                    <td class="encrypted fw-medium">$1,892.31</td>
                                    <td class="encrypted text-up fw-medium">+12.74%</td>
                                </tr>
                                <tr class="align-middle">
                                    <td>
                                        <div class="d-flex flex-row align-items-center gap-2">
                                            <p class="fw-medium crypt-grayscale-600 mb-0">2</p>
                                            <img alt="" src="/images/coin/btc.svg" width="20">
                                            <p class="fw-medium text-sm mb-0">BTC <span class="verified text-sm">20x</span></p>
                                        </div>
                                    </td>
                                    <td class="encrypted fw-medium">$1,892.31</td>
                                    <td class="encrypted text-down fw-medium">-0.89%</td>
                                </tr>
                                <tr class="align-middle">
                                    <td>
                                        <div class="d-flex flex-row align-items-center gap-2">
                                            <p class="fw-medium crypt-grayscale-600 mb-0">3</p>
                                            <img alt="" src="/images/coin/eth.svg" width="20">
                                            <p class="fw-medium text-sm mb-0">ETH <span class="verified text-sm">20x</span></p>
                                        </div>
                                    </td>
                                    <td class="encrypted fw-medium">$1,892.31</td>
                                    <td class="encrypted text-up fw-medium">+1.74%</td>
                                </tr>
                                <tr class="align-middle">
                                    <td>
                                        <div class="d-flex flex-row align-items-center gap-2">
                                            <p class="fw-medium crypt-grayscale-600 mb-0">4</p>
                                            <img alt="" src="/images/coin/kas.svg" width="20">
                                            <p class="fw-medium text-sm mb-0">KAS <span class="verified text-sm">20x</span></p>
                                        </div>
                                    </td>
                                    <td class="encrypted fw-medium">$1,892.31</td>
                                    <td class="encrypted text-down fw-medium">-4.98%</td>
                                </tr>
                                <tr class="align-middle">
                                    <td>
                                        <div class="d-flex flex-row align-items-center gap-2">
                                            <p class="fw-medium crypt-grayscale-600 mb-0">5</p>
                                            <img alt="" src="/images/coin/near.svg" width="20">
                                            <p class="fw-medium text-sm mb-0">NEAR <span class="verified text-sm">20x</span></p>
                                        </div>
                                    </td>
                                    <td class="encrypted fw-medium">$1,892.31</td>
                                    <td class="encrypted text-up fw-medium">+6.34%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <!-- New Listing -->
                <div class="col-12 col-lg-4 col-xl-4 col-xxl-3 col-md-6">
                    <!-- Table -->
                    <div class="table-responsive card-border ">
                        <!-- Head -->
                        <div class="d-flex justify-content-between card-line  p-2">
                            <h6 class="fw-bold mb-0">New Listing</h6>
                        </div>
                        <table class="table table-dark table-hover mb-0">
                            <thead>
                                <tr class="mb-0">
                                    <th scope="col" class="underline">Name</th>
                                    <th scope="col" class="underline">Price</th>
                                    <th scope="col" class="underline">24H</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="align-middle">
                                    <td>
                                        <div class="d-flex flex-row align-items-center gap-2">
                                            <img alt="" src="/images/coin/1INCH.svg" width="20">
                                            <p class="fw-medium text-sm mb-0">1INCH</p>
                                        </div>
                                    </td>
                                    <td class="encrypted fw-medium">$1,892.31</td>
                                    <td class="encrypted text-down fw-medium">-1.74%</td>
                                </tr>
                                <tr class="align-middle">
                                    <td>
                                        <div class="d-flex flex-row align-items-center gap-2">
                                            <img alt="" src="/images/coin/arb.svg" width="20">
                                            <p class="fw-medium text-sm mb-0">ARB</p>
                                        </div>
                                    </td>
                                    <td class="encrypted fw-medium">$1,892.31</td>
                                    <td class="encrypted text-up fw-medium">+21.74%</td>
                                </tr>
                                <tr class="align-middle">
                                    <td>
                                        <div class="d-flex flex-row align-items-center gap-2">
                                            <img alt="" src="/images/coin/dot.svg" width="20">
                                            <p class="fw-medium text-sm mb-0">DOT</p>
                                        </div>
                                    </td>
                                    <td class="encrypted fw-medium">$1,892.31</td>
                                    <td class="encrypted text-down fw-medium">-1.74%</td>
                                </tr>
                                <tr class="align-middle">
                                    <td>
                                        <div class="d-flex flex-row align-items-center gap-2">
                                            <img alt="" src="/images/coin/link.svg" width="20">
                                            <p class="fw-medium text-sm mb-0">LINK</p>
                                        </div>
                                    </td>
                                    <td class="encrypted fw-medium">$1,892.31</td>
                                    <td class="encrypted text-up fw-medium">+0.74%</td>
                                </tr>
                                <tr class="align-middle">
                                    <td>
                                        <div class="d-flex flex-row align-items-center gap-2">
                                            <img alt="" src="/images/coin/near.svg" width="20">
                                            <p class="fw-medium text-sm mb-0">NEAR</p>
                                        </div>
                                    </td>
                                    <td class="encrypted fw-medium">$1,892.31</td>
                                    <td class="encrypted text-down fw-medium">-1.74%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <!-- Top Gainer -->
                <div class="col-12 col-lg-4 col-xl-4 col-xxl-3 col-md-6">
                    <!-- Table -->
                    <div class="table-responsive card-border ">
                        <!-- Head -->
                        <div class="d-flex justify-content-between card-line  p-2">
                            <h6 class="fw-bold mb-0">Top Gainer</h6>
                        </div>
                        <table class="table table-dark table-hover mb-0">
                            <thead>
                                <tr class="mb-0">
                                    <th scope="col" class="underline">Asset</th>
                                    <th scope="col" class="underline">Price</th>
                                    <th scope="col" class="underline">24H</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="align-middle">
                                    <td>
                                        <div class="d-flex flex-row align-items-center gap-2">
                                            <img alt="" src="/images/coin/ape.svg" width="20">
                                            <p class="fw-medium text-sm mb-0">APE <span class="verified text-sm">20x</span></p>
                                        </div>
                                    </td>
                                    <td class="encrypted fw-medium">$1,892.31</td>
                                    <td class="encrypted text-up fw-medium">+1.74%</td>
                                </tr>
                                <tr class="align-middle">
                                    <td>
                                        <div class="d-flex flex-row align-items-center gap-2">
                                            <img alt="" src="/images/coin/shib.svg" width="20">
                                            <p class="fw-medium text-sm mb-0">SHIB <span class="verified text-sm">20x</span></p>
                                        </div>
                                    </td>
                                    <td class="encrypted fw-medium">$1,892.31</td>
                                    <td class="encrypted text-up fw-medium">+1.74%</td>
                                </tr>
                                <tr class="align-middle">
                                    <td>
                                        <div class="d-flex flex-row align-items-center gap-2">
                                            <img alt="" src="/images/coin/bch.svg" width="20">
                                            <p class="fw-medium text-sm mb-0">BCH <span class="verified text-sm">20x</span></p>
                                        </div>
                                    </td>
                                    <td class="encrypted fw-medium">$1,892.31</td>
                                    <td class="encrypted text-up fw-medium">+1.74%</td>
                                </tr>
                                <tr class="align-middle">
                                    <td>
                                        <div class="d-flex flex-row align-items-center gap-2">
                                            <img alt="" src="/images/coin/ton.svg" width="20">
                                            <p class="fw-medium text-sm mb-0">TON <span class="verified text-sm">20x</span></p>
                                        </div>
                                    </td>
                                    <td class="encrypted fw-medium">$1,892.31</td>
                                    <td class="encrypted text-up fw-medium">+1.74%</td>
                                </tr>
                                <tr class="align-middle">
                                    <td>
                                        <div class="d-flex flex-row align-items-center gap-2">
                                            <img alt="" src="/images/coin/usdt.svg" width="20">
                                            <p class="fw-medium text-sm mb-0">USDT <span class="verified text-sm">20x</span></p>
                                        </div>
                                    </td>
                                    <td class="encrypted fw-medium">$1,892.31</td>
                                    <td class="encrypted text-up fw-medium">+1.74%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <!-- Top Volume -->
                <div class="col-12 col-lg-4 col-xl-4 col-xxl-3 col-md-6">
                    <!-- Table -->
                    <div class="table-responsive card-border ">
                        <!-- Head -->
                        <div class="d-flex justify-content-between card-line  p-2">
                            <h6 class="fw-bold mb-0">Top Volume</h6>
                        </div>
                        <table class="table table-dark table-hover mb-0">
                            <thead>
                                <tr class="mb-0">
                                    <th scope="col" class="underline">Asset</th>
                                    <th scope="col" class="underline">Price</th>
                                    <th scope="col" class="underline">24h Change</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="align-middle">
                                    <td>
                                        <div class="d-flex flex-row align-items-center gap-2">
                                            <img alt="" src="/images/coin/xrp.svg" width="20">
                                            <p class="fw-medium text-sm mb-0">XRP</p>
                                        </div>
                                    </td>
                                    <td class="encrypted fw-medium">$1,892.31</td>
                                    <td class="encrypted text-up fw-medium">+1.74%</td>
                                </tr>
                                <tr class="align-middle">
                                    <td>
                                        <div class="d-flex flex-row align-items-center gap-2">
                                            <img alt="" src="/images/coin/btc.svg" width="20">
                                            <p class="fw-medium text-sm mb-0">BTC</p>
                                        </div>
                                    </td>
                                    <td class="encrypted fw-medium">$1,892.31</td>
                                    <td class="encrypted text-up fw-medium">+0.54%</td>
                                </tr>
                                <tr class="align-middle">
                                    <td>
                                        <div class="d-flex flex-row align-items-center gap-2">
                                            <img alt="" src="/images/coin/eth.svg" width="20">
                                            <p class="fw-medium text-sm mb-0">ETH</p>
                                        </div>
                                    </td>
                                    <td class="encrypted fw-medium">$1,892.31</td>
                                    <td class="encrypted text-down fw-medium">-1.74%</td>
                                </tr>
                                <tr class="align-middle">
                                    <td>
                                        <div class="d-flex flex-row align-items-center gap-2">
                                            <img alt="" src="/images/coin/kas.svg" width="20">
                                            <p class="fw-medium text-sm mb-0">KAS</p>
                                        </div>
                                    </td>
                                    <td class="encrypted fw-medium">$1,892.31</td>
                                    <td class="encrypted text-down fw-medium">-1.74%</td>
                                </tr>
                                <tr class="align-middle">
                                    <td>
                                        <div class="d-flex flex-row align-items-center gap-2">
                                            <img alt="" src="/images/coin/near.svg" width="20">
                                            <p class="fw-medium text-sm mb-0">NEAR</p>
                                        </div>
                                    </td>
                                    <td class="encrypted fw-medium">$1,892.31</td>
                                    <td class="encrypted text-up fw-medium">+3.92%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!-- Table -->
            <div class="tab-content">
                <!-- Tabs -->
                <div class="flex p-3 p-sm-4 mb-1">
                    <div class="nav nav-tabs nav-pills gap-2 card-line p-1" role="tablist">
                        <button class="nav-link fw-medium active" id="all-crypto-tab" data-bs-toggle="tab" data-bs-target="#all-crypto-tab-pane" type="button" aria-controls="all-crypto-tab-pane">All Crypto</button>
                        <button class="nav-link fw-medium" id="spot-market-tab" data-bs-toggle="tab" data-bs-target="#spot-market-tab-pane" type="button" aria-controls="spot-market-tab-pane">Spot/Margin Market</button>
                        <button class="nav-link fw-medium" id="futures-market-tab" data-bs-toggle="tab" data-bs-target="#futures-market-tab-pane" type="button" aria-controls="futures-market-tab-pane">Futures Markets</button>
                        <button class="nav-link fw-medium" id="new-listing-tab" data-bs-toggle="tab" data-bs-target="#new-listing-tab-pane" type="button" aria-controls="new-listing-tab-pane">✨ New Listing</button>
                    </div>
                </div>
                <!-- All Crypto Table -->
                <div class="tab-pane fade show active" id="all-crypto-tab-pane" role="tabpanel" aria-labelledby="all-crypto-tab" tabindex="0">
                    <div class="tab-content ">
                        <div class="nav nav-pills mb-3 px-3 px-sm-4" role="tablist">
                            <button class="nav-link text-sm py-0 active" id="all-coin-tab" data-bs-toggle="tab" data-bs-target="#all-coin-tab-pane" type="button" aria-controls="all-coin-tab-pane">All</button>
                            <button class="nav-link text-sm py-0" id="solana-tab" data-bs-toggle="tab" data-bs-target="#solana-tab-pane" type="button" aria-controls="solana-tab-pane">Solana 🔥</button>
                            <div class="vr mx-2"></div>
                            <button class="nav-link text-sm py-0" id="rawa-tab" data-bs-toggle="tab" data-bs-target="#rawa-tab-pane" type="button" aria-controls="rawa-tab-pane">RAWA</button>
                            <button class="nav-link text-sm py-0" id="meme-coin-tab" data-bs-toggle="tab" data-bs-target="#meme-coin-tab-pane" type="button" aria-controls="meme-coin-tab-pane">Meme</button>
                            <button class="nav-link text-sm py-0" id="layer-1-tab" data-bs-toggle="tab" data-bs-target="#layer-1-tab-pane" type="button" aria-controls="layer-1-tab-pane">Layer 1</button>
                        </div>
                        <!-- All Table -->
                        <div class="tab-pane fade show active" id="all-coin-tab-pane" role="tabpanel" aria-labelledby="all-coin-tab" tabindex="0">
                            <!-- Table -->
                            <div class="table-responsive ">
                                <table class="table table-dark table-hover mb-0">
                                    <thead>
                                        <tr class="table-active mb-0">
                                            <th scope="col">Coin</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">24h Change</th>
                                            <th scope="col">Market</th>
                                            <th scope="col">24h Volume</th>
                                            <th scope="col">Market Cap</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row gap-2">
                                                    <img alt="" src="/images/coin/btc.svg" width="28">
                                                    <div>
                                                        <h6 class="fw-bold mb-0">BTC</h6>
                                                        <p class="crypt-grayscale-600 mb-0">Bitcoin</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="fw-medium">$74,491.41</td>
                                            <td class="encrypted fw-medium text-up">+1.62%</td>
                                            <td>
                                                <div class="flex">
                                                    <svg width="120" height="38" viewBox="0 0 120 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_463_338)">
                                                            <mask id="mask0_463_338" style="mask-type: luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="38">
                                                                <path d="M120 0H0V38H120V0Z" fill="white" />
                                                            </mask>
                                                            <g mask="url(#mask0_463_338)">
                                                                <mask id="mask1_463_338" style="mask-type: luminance;" maskUnits="userSpaceOnUse" x="0" y="6" width="120" height="32">
                                                                    <path d="M120 6H0V38H120V6Z" fill="white" />
                                                                </mask>
                                                                <g mask="url(#mask1_463_338)">
                                                                    <path
                                                                        d="M1.17627 5.68236L6.07823 8.1671L10.9802 7.07854L15.8822 12.2308L20.7841 4.51898L25.6861 4.4841L30.588 10.0598L35.49 1.72726L40.392 1.11693L45.2939 3.64947L50.1959 0L55.0978 8.08432L59.9998 8.87778L64.9018 10.7325L69.8037 14.5109L74.7057 22.3281L79.6076 21.2485L84.5096 22.8383L89.4116 38L94.3135 17.7656L99.2155 9.6851L104.117 14.446L109.019 6.77516L113.921 10.5925L118.823 4.20189V5.68236H113.921H109.019H104.117H99.2155H94.3135H89.4116H84.5096H79.6076H74.7057H69.8037H64.9018H59.9998H55.0978H50.1959H45.2939H40.392H35.49H30.588H25.6861H20.7841H15.8822H10.9802H6.07823H1.17627Z"
                                                                        fill="#E74C3C"
                                                                        fill-opacity="0.15"
                                                                    />
                                                                </g>
                                                                <mask id="mask2_463_338" style="mask-type: luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="6">
                                                                    <path d="M120 0H0V6H120V0Z" fill="white" />
                                                                </mask>
                                                                <g mask="url(#mask2_463_338)">
                                                                    <path
                                                                        d="M1.17627 5.68236L6.07823 8.1671L10.9802 7.07854L15.8822 12.2308L20.7841 4.51898L25.6861 4.4841L30.588 10.0598L35.49 1.72726L40.392 1.11693L45.2939 3.64947L50.1959 0L55.0978 8.08432L59.9998 8.87778L64.9018 10.7325L69.8037 14.5109L74.7057 22.3281L79.6076 21.2485L84.5096 22.8383L89.4116 38L94.3135 17.7656L99.2155 9.6851L104.117 14.446L109.019 6.77516L113.921 10.5925L118.823 4.20189V5.68236H113.921H109.019H104.117H99.2155H94.3135H89.4116H84.5096H79.6076H74.7057H69.8037H64.9018H59.9998H55.0978H50.1959H45.2939H40.392H35.49H30.588H25.6861H20.7841H15.8822H10.9802H6.07823H1.17627Z"
                                                                        fill="#2ECC71"
                                                                        fill-opacity="0.15"
                                                                    />
                                                                </g>
                                                                <mask id="mask3_463_338" style="mask-type: luminance;" maskUnits="userSpaceOnUse" x="0" y="6" width="120" height="32">
                                                                    <path d="M120 6H0V38H120V6Z" fill="white" />
                                                                </mask>
                                                                <g mask="url(#mask3_463_338)">
                                                                    <path
                                                                        d="M1.17627 5.68236L6.07823 8.1671L10.9802 7.07854L15.8822 12.2308L20.7841 4.51898L25.6861 4.4841L30.588 10.0598L35.49 1.72726L40.392 1.11693L45.2939 3.64947L50.1959 0L55.0978 8.08432L59.9998 8.87778L64.9018 10.7325L69.8037 14.5109L74.7057 22.3281L79.6076 21.2485L84.5096 22.8383L89.4116 38L94.3135 17.7656L99.2155 9.6851L104.117 14.446L109.019 6.77516L113.921 10.5925L118.823 4.20189"
                                                                        stroke="#E74C3C"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </g>
                                                                <mask id="mask4_463_338" style="mask-type: luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="6">
                                                                    <path d="M120 0H0V6H120V0Z" fill="white" />
                                                                </mask>
                                                                <g mask="url(#mask4_463_338)">
                                                                    <path
                                                                        d="M1.17627 5.68236L6.07823 8.1671L10.9802 7.07854L15.8822 12.2308L20.7841 4.51898L25.6861 4.4841L30.588 10.0598L35.49 1.72726L40.392 1.11693L45.2939 3.64947L50.1959 0L55.0978 8.08432L59.9998 8.87778L64.9018 10.7325L69.8037 14.5109L74.7057 22.3281L79.6076 21.2485L84.5096 22.8383L89.4116 38L94.3135 17.7656L99.2155 9.6851L104.117 14.446L109.019 6.77516L113.921 10.5925L118.823 4.20189"
                                                                        stroke="#2ECC71"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                    />
                                                                </g>
                                                                <path
                                                                    d="M-8.82373 5.68236H1.17627L6.07823 8.1671L10.9802 7.07854L15.8822 12.2308L20.7841 4.51898L25.6861 4.4841L30.588 10.0598L35.49 1.72726L40.392 1.11693L45.2939 3.64947L50.1959 0L55.0978 8.08432L59.9998 8.87778L64.9018 10.7325L69.8037 14.5109L74.7057 22.3281L79.6076 21.2485L84.5096 22.8383L89.4116 38L94.3135 17.7656L99.2155 9.6851L104.117 14.446L109.019 6.77516L113.921 10.5925L118.823 4.20189H128.823"
                                                                    stroke="#C0C0C0"
                                                                    stroke-opacity="0.01"
                                                                    stroke-width="21"
                                                                    stroke-linejoin="round"
                                                                />
                                                            </g>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_463_338">
                                                                <rect width="120" height="38" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </div>
                                            </td>
                                            <td class="fw-medium encrypted">$386.92M</td>
                                            <td class="fw-medium">$1,865.47B</td>
                                            <td>
                                            </td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <!-- Solana Table -->
                        <div class="tab-pane fade" id="solana-tab-pane" role="tabpanel" aria-labelledby="solana-tab" tabindex="0">
                            <!-- Table -->
                            <div class="table-responsive">
                                <table class="table table-dark table-hover mb-0">
                                    <thead>
                                        <tr class="table-active mb-0">
                                            <th scope="col" class="underline">Name</th>
                                            <th scope="col" class="underline">Wallet balance</th>
                                            <th scope="col" class="underline">Price</th>
                                            <th scope="col" class="underline">24h Change</th>
                                            <th scope="col" class="underline">Volume</th>
                                            <th scope="col" class="underline">Market Cap</th>
                                            <th scope="col" class="underline">Funding / Basis</th>
                                            <th scope="col" class="underline">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme is_ating" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" stroke="currentColor" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/sol.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">SOL <small class="fw-medium crypt-grayscale-600 ms-1">Solana</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">3,676.31 / $3,676.31 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-0.39%</td>
                                            <td class="encrypted fw-medium">$32.64B</td>
                                            <td class="encrypted fw-medium">$1,898.75B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.04289</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-secondary fw-bold btn-tr" href="price.html" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Details">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            opacity="0.4"
                                                            d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M15.8 2.20999C15.39 1.79999 14.68 2.07999 14.68 2.64999V6.13999C14.68 7.59999 15.92 8.80999 17.43 8.80999C18.38 8.81999 19.7 8.81999 20.83 8.81999C21.4 8.81999 21.7 8.14999 21.3 7.74999C19.86 6.29999 17.28 3.68999 15.8 2.20999Z"
                                                            fill="currentColor"
                                                        />
                                                        <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor" />
                                                        <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="currentColor" />
                                                    </svg>
                                                </a>
                                                <a class="btn-info verified fw-medium py-1" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/1000BONKUP.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">BONK <small class="fw-medium crypt-grayscale-600 ms-1">Bonk</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">3,676.31 / $3,676.31 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+1.42%</td>
                                            <td class="encrypted fw-medium">$1.90B</td>
                                            <td class="encrypted fw-medium">$443.70B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.00782</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-secondary fw-bold btn-tr" href="price.html" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Details">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            opacity="0.4"
                                                            d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M15.8 2.20999C15.39 1.79999 14.68 2.07999 14.68 2.64999V6.13999C14.68 7.59999 15.92 8.80999 17.43 8.80999C18.38 8.81999 19.7 8.81999 20.83 8.81999C21.4 8.81999 21.7 8.14999 21.3 7.74999C19.86 6.29999 17.28 3.68999 15.8 2.20999Z"
                                                            fill="currentColor"
                                                        />
                                                        <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor" />
                                                        <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="currentColor" />
                                                    </svg>
                                                </a>
                                                <a class="btn-info verified fw-medium py-1" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/sol.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">SOL <small class="fw-medium crypt-grayscale-600 ms-1">Solana</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">245.31 / $235.72 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+2.89%</td>
                                            <td class="encrypted fw-medium">$570.96B</td>
                                            <td class="encrypted fw-medium">$112.84B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.00986</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-secondary fw-bold btn-tr" href="price.html" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Details">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            opacity="0.4"
                                                            d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M15.8 2.20999C15.39 1.79999 14.68 2.07999 14.68 2.64999V6.13999C14.68 7.59999 15.92 8.80999 17.43 8.80999C18.38 8.81999 19.7 8.81999 20.83 8.81999C21.4 8.81999 21.7 8.14999 21.3 7.74999C19.86 6.29999 17.28 3.68999 15.8 2.20999Z"
                                                            fill="currentColor"
                                                        />
                                                        <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor" />
                                                        <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="currentColor" />
                                                    </svg>
                                                </a>
                                                <a class="btn-info verified fw-medium py-1" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/HNT.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">HNT <small class="fw-medium crypt-grayscale-600 ms-1">Helium</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-1.74%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-secondary fw-bold btn-tr" href="price.html" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Details">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            opacity="0.4"
                                                            d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M15.8 2.20999C15.39 1.79999 14.68 2.07999 14.68 2.64999V6.13999C14.68 7.59999 15.92 8.80999 17.43 8.80999C18.38 8.81999 19.7 8.81999 20.83 8.81999C21.4 8.81999 21.7 8.14999 21.3 7.74999C19.86 6.29999 17.28 3.68999 15.8 2.20999Z"
                                                            fill="currentColor"
                                                        />
                                                        <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor" />
                                                        <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="currentColor" />
                                                    </svg>
                                                </a>
                                                <a class="btn-info verified fw-medium py-1" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/WIF.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">WIF <small class="fw-medium crypt-grayscale-600 ms-1">Dogwifhat</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+5.65%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-secondary fw-bold btn-tr" href="price.html" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Details">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            opacity="0.4"
                                                            d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M15.8 2.20999C15.39 1.79999 14.68 2.07999 14.68 2.64999V6.13999C14.68 7.59999 15.92 8.80999 17.43 8.80999C18.38 8.81999 19.7 8.81999 20.83 8.81999C21.4 8.81999 21.7 8.14999 21.3 7.74999C19.86 6.29999 17.28 3.68999 15.8 2.20999Z"
                                                            fill="currentColor"
                                                        />
                                                        <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor" />
                                                        <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="currentColor" />
                                                    </svg>
                                                </a>
                                                <a class="btn-info verified fw-medium py-1" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/link.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">LINK <small class="fw-medium crypt-grayscale-600 ms-1">Chainlink</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+2.24%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-secondary fw-bold btn-tr" href="price.html" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Details">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            opacity="0.4"
                                                            d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M15.8 2.20999C15.39 1.79999 14.68 2.07999 14.68 2.64999V6.13999C14.68 7.59999 15.92 8.80999 17.43 8.80999C18.38 8.81999 19.7 8.81999 20.83 8.81999C21.4 8.81999 21.7 8.14999 21.3 7.74999C19.86 6.29999 17.28 3.68999 15.8 2.20999Z"
                                                            fill="currentColor"
                                                        />
                                                        <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor" />
                                                        <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="currentColor" />
                                                    </svg>
                                                </a>
                                                <a class="btn-info verified fw-medium py-1" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/LUNA.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">LUNA <small class="fw-medium crypt-grayscale-600 ms-1">Terra</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-0.98%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-secondary fw-bold btn-tr" href="price.html" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Details">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            opacity="0.4"
                                                            d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M15.8 2.20999C15.39 1.79999 14.68 2.07999 14.68 2.64999V6.13999C14.68 7.59999 15.92 8.80999 17.43 8.80999C18.38 8.81999 19.7 8.81999 20.83 8.81999C21.4 8.81999 21.7 8.14999 21.3 7.74999C19.86 6.29999 17.28 3.68999 15.8 2.20999Z"
                                                            fill="currentColor"
                                                        />
                                                        <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor" />
                                                        <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="currentColor" />
                                                    </svg>
                                                </a>
                                                <a class="btn-info verified fw-medium py-1" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/ape.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">APE <small class="fw-medium crypt-grayscale-600 ms-1">ApeCoin</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-8.42%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-secondary fw-bold btn-tr" href="price.html" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Details">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            opacity="0.4"
                                                            d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M15.8 2.20999C15.39 1.79999 14.68 2.07999 14.68 2.64999V6.13999C14.68 7.59999 15.92 8.80999 17.43 8.80999C18.38 8.81999 19.7 8.81999 20.83 8.81999C21.4 8.81999 21.7 8.14999 21.3 7.74999C19.86 6.29999 17.28 3.68999 15.8 2.20999Z"
                                                            fill="currentColor"
                                                        />
                                                        <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor" />
                                                        <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="currentColor" />
                                                    </svg>
                                                </a>
                                                <a class="btn-info verified fw-medium py-1" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <!-- RAWA Table -->
                        <div class="tab-pane fade" id="rawa-tab-pane" role="tabpanel" aria-labelledby="rawa-tab" tabindex="0">
                            <!-- Table -->
                            <div class="table-responsive">
                                <table class="table table-dark table-hover mb-0">
                                    <thead>
                                        <tr class="table-active mb-0">
                                            <th scope="col" class="underline">Name</th>
                                            <th scope="col" class="underline">Wallet balance</th>
                                            <th scope="col" class="underline">Price</th>
                                            <th scope="col" class="underline">24h Change</th>
                                            <th scope="col" class="underline">Volume</th>
                                            <th scope="col" class="underline">Market Cap</th>
                                            <th scope="col" class="underline">Funding / Basis</th>
                                            <th scope="col" class="underline">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme is_ating" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" stroke="currentColor" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/avax.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">AVAX <small class="fw-medium crypt-grayscale-600 ms-1">Avalanche</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">3,676.31 / $3,676.31 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-0.39%</td>
                                            <td class="encrypted fw-medium">$32.64B</td>
                                            <td class="encrypted fw-medium">$1,898.75B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.04289</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-secondary fw-bold btn-tr" href="price.html" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Details">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            opacity="0.4"
                                                            d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M15.8 2.20999C15.39 1.79999 14.68 2.07999 14.68 2.64999V6.13999C14.68 7.59999 15.92 8.80999 17.43 8.80999C18.38 8.81999 19.7 8.81999 20.83 8.81999C21.4 8.81999 21.7 8.14999 21.3 7.74999C19.86 6.29999 17.28 3.68999 15.8 2.20999Z"
                                                            fill="currentColor"
                                                        />
                                                        <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor" />
                                                        <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="currentColor" />
                                                    </svg>
                                                </a>
                                                <a class="btn-info verified fw-medium py-1" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/LUNA.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">LUNA <small class="fw-medium crypt-grayscale-600 ms-1">Terra</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">3,676.31 / $3,676.31 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+1.42%</td>
                                            <td class="encrypted fw-medium">$1.90B</td>
                                            <td class="encrypted fw-medium">$443.70B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.00782</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-secondary fw-bold btn-tr" href="price.html" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Details">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            opacity="0.4"
                                                            d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M15.8 2.20999C15.39 1.79999 14.68 2.07999 14.68 2.64999V6.13999C14.68 7.59999 15.92 8.80999 17.43 8.80999C18.38 8.81999 19.7 8.81999 20.83 8.81999C21.4 8.81999 21.7 8.14999 21.3 7.74999C19.86 6.29999 17.28 3.68999 15.8 2.20999Z"
                                                            fill="currentColor"
                                                        />
                                                        <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor" />
                                                        <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="currentColor" />
                                                    </svg>
                                                </a>
                                                <a class="btn-info verified fw-medium py-1" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/sol.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">SOL <small class="fw-medium crypt-grayscale-600 ms-1">Solana</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">245.31 / $235.72 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+2.89%</td>
                                            <td class="encrypted fw-medium">$570.96B</td>
                                            <td class="encrypted fw-medium">$112.84B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.00986</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-secondary fw-bold btn-tr" href="price.html" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Details">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            opacity="0.4"
                                                            d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M15.8 2.20999C15.39 1.79999 14.68 2.07999 14.68 2.64999V6.13999C14.68 7.59999 15.92 8.80999 17.43 8.80999C18.38 8.81999 19.7 8.81999 20.83 8.81999C21.4 8.81999 21.7 8.14999 21.3 7.74999C19.86 6.29999 17.28 3.68999 15.8 2.20999Z"
                                                            fill="currentColor"
                                                        />
                                                        <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor" />
                                                        <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="currentColor" />
                                                    </svg>
                                                </a>
                                                <a class="btn-info verified fw-medium py-1" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/HNT.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">HNT <small class="fw-medium crypt-grayscale-600 ms-1">Helium</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-1.74%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-secondary fw-bold btn-tr" href="price.html" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Details">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            opacity="0.4"
                                                            d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M15.8 2.20999C15.39 1.79999 14.68 2.07999 14.68 2.64999V6.13999C14.68 7.59999 15.92 8.80999 17.43 8.80999C18.38 8.81999 19.7 8.81999 20.83 8.81999C21.4 8.81999 21.7 8.14999 21.3 7.74999C19.86 6.29999 17.28 3.68999 15.8 2.20999Z"
                                                            fill="currentColor"
                                                        />
                                                        <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor" />
                                                        <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="currentColor" />
                                                    </svg>
                                                </a>
                                                <a class="btn-info verified fw-medium py-1" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/WIF.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">WIF <small class="fw-medium crypt-grayscale-600 ms-1">Dogwifhat</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+5.65%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-secondary fw-bold btn-tr" href="price.html" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Details">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            opacity="0.4"
                                                            d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M15.8 2.20999C15.39 1.79999 14.68 2.07999 14.68 2.64999V6.13999C14.68 7.59999 15.92 8.80999 17.43 8.80999C18.38 8.81999 19.7 8.81999 20.83 8.81999C21.4 8.81999 21.7 8.14999 21.3 7.74999C19.86 6.29999 17.28 3.68999 15.8 2.20999Z"
                                                            fill="currentColor"
                                                        />
                                                        <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor" />
                                                        <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="currentColor" />
                                                    </svg>
                                                </a>
                                                <a class="btn-info verified fw-medium py-1" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/link.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">LINK <small class="fw-medium crypt-grayscale-600 ms-1">Chainlink</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+2.24%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-secondary fw-bold btn-tr" href="price.html" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Details">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            opacity="0.4"
                                                            d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M15.8 2.20999C15.39 1.79999 14.68 2.07999 14.68 2.64999V6.13999C14.68 7.59999 15.92 8.80999 17.43 8.80999C18.38 8.81999 19.7 8.81999 20.83 8.81999C21.4 8.81999 21.7 8.14999 21.3 7.74999C19.86 6.29999 17.28 3.68999 15.8 2.20999Z"
                                                            fill="currentColor"
                                                        />
                                                        <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor" />
                                                        <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="currentColor" />
                                                    </svg>
                                                </a>
                                                <a class="btn-info verified fw-medium py-1" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/tron.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">TRX <small class="fw-medium crypt-grayscale-600 ms-1">TRON</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-0.98%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-secondary fw-bold btn-tr" href="price.html" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Details">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            opacity="0.4"
                                                            d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M15.8 2.20999C15.39 1.79999 14.68 2.07999 14.68 2.64999V6.13999C14.68 7.59999 15.92 8.80999 17.43 8.80999C18.38 8.81999 19.7 8.81999 20.83 8.81999C21.4 8.81999 21.7 8.14999 21.3 7.74999C19.86 6.29999 17.28 3.68999 15.8 2.20999Z"
                                                            fill="currentColor"
                                                        />
                                                        <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor" />
                                                        <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="currentColor" />
                                                    </svg>
                                                </a>
                                                <a class="btn-info verified fw-medium py-1" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/ape.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">APE <small class="fw-medium crypt-grayscale-600 ms-1">ApeCoin</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-8.42%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-secondary fw-bold btn-tr" href="price.html" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Details">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            opacity="0.4"
                                                            d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M15.8 2.20999C15.39 1.79999 14.68 2.07999 14.68 2.64999V6.13999C14.68 7.59999 15.92 8.80999 17.43 8.80999C18.38 8.81999 19.7 8.81999 20.83 8.81999C21.4 8.81999 21.7 8.14999 21.3 7.74999C19.86 6.29999 17.28 3.68999 15.8 2.20999Z"
                                                            fill="currentColor"
                                                        />
                                                        <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor" />
                                                        <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="currentColor" />
                                                    </svg>
                                                </a>
                                                <a class="btn-info verified fw-medium py-1" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <!-- Meme Table -->
                        <div class="tab-pane fade" id="meme-coin-tab-pane" role="tabpanel" aria-labelledby="meme-coin-tab" tabindex="0">
                            <!-- Table -->
                            <div class="table-responsive">
                                <table class="table table-dark table-hover mb-0">
                                    <thead>
                                        <tr class="table-active mb-0">
                                            <th scope="col" class="underline">Name</th>
                                            <th scope="col" class="underline">Wallet balance</th>
                                            <th scope="col" class="underline">Price</th>
                                            <th scope="col" class="underline">24h Change</th>
                                            <th scope="col" class="underline">Volume</th>
                                            <th scope="col" class="underline">Market Cap</th>
                                            <th scope="col" class="underline">Funding / Basis</th>
                                            <th scope="col" class="underline">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/HNT.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">HNT <small class="fw-medium crypt-grayscale-600 ms-1">Helium</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-1.74%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-secondary fw-bold btn-tr" href="price.html" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Details">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            opacity="0.4"
                                                            d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M15.8 2.20999C15.39 1.79999 14.68 2.07999 14.68 2.64999V6.13999C14.68 7.59999 15.92 8.80999 17.43 8.80999C18.38 8.81999 19.7 8.81999 20.83 8.81999C21.4 8.81999 21.7 8.14999 21.3 7.74999C19.86 6.29999 17.28 3.68999 15.8 2.20999Z"
                                                            fill="currentColor"
                                                        />
                                                        <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor" />
                                                        <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="currentColor" />
                                                    </svg>
                                                </a>
                                                <a class="btn-info verified fw-medium py-1" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/WIF.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">WIF <small class="fw-medium crypt-grayscale-600 ms-1">Dogwifhat</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+5.65%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-secondary fw-bold btn-tr" href="price.html" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Details">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            opacity="0.4"
                                                            d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M15.8 2.20999C15.39 1.79999 14.68 2.07999 14.68 2.64999V6.13999C14.68 7.59999 15.92 8.80999 17.43 8.80999C18.38 8.81999 19.7 8.81999 20.83 8.81999C21.4 8.81999 21.7 8.14999 21.3 7.74999C19.86 6.29999 17.28 3.68999 15.8 2.20999Z"
                                                            fill="currentColor"
                                                        />
                                                        <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor" />
                                                        <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="currentColor" />
                                                    </svg>
                                                </a>
                                                <a class="btn-info verified fw-medium py-1" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/link.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">LINK <small class="fw-medium crypt-grayscale-600 ms-1">Chainlink</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+2.24%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-secondary fw-bold btn-tr" href="price.html" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Details">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            opacity="0.4"
                                                            d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M15.8 2.20999C15.39 1.79999 14.68 2.07999 14.68 2.64999V6.13999C14.68 7.59999 15.92 8.80999 17.43 8.80999C18.38 8.81999 19.7 8.81999 20.83 8.81999C21.4 8.81999 21.7 8.14999 21.3 7.74999C19.86 6.29999 17.28 3.68999 15.8 2.20999Z"
                                                            fill="currentColor"
                                                        />
                                                        <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor" />
                                                        <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="currentColor" />
                                                    </svg>
                                                </a>
                                                <a class="btn-info verified fw-medium py-1" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/LUNA.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">LUNA <small class="fw-medium crypt-grayscale-600 ms-1">Terra</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-0.98%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-secondary fw-bold btn-tr" href="price.html" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Details">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            opacity="0.4"
                                                            d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M15.8 2.20999C15.39 1.79999 14.68 2.07999 14.68 2.64999V6.13999C14.68 7.59999 15.92 8.80999 17.43 8.80999C18.38 8.81999 19.7 8.81999 20.83 8.81999C21.4 8.81999 21.7 8.14999 21.3 7.74999C19.86 6.29999 17.28 3.68999 15.8 2.20999Z"
                                                            fill="currentColor"
                                                        />
                                                        <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor" />
                                                        <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="currentColor" />
                                                    </svg>
                                                </a>
                                                <a class="btn-info verified fw-medium py-1" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/ape.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">APE <small class="fw-medium crypt-grayscale-600 ms-1">ApeCoin</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-8.42%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-secondary fw-bold btn-tr" href="price.html" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Details">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            opacity="0.4"
                                                            d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M15.8 2.20999C15.39 1.79999 14.68 2.07999 14.68 2.64999V6.13999C14.68 7.59999 15.92 8.80999 17.43 8.80999C18.38 8.81999 19.7 8.81999 20.83 8.81999C21.4 8.81999 21.7 8.14999 21.3 7.74999C19.86 6.29999 17.28 3.68999 15.8 2.20999Z"
                                                            fill="currentColor"
                                                        />
                                                        <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor" />
                                                        <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="currentColor" />
                                                    </svg>
                                                </a>
                                                <a class="btn-info verified fw-medium py-1" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme is_ating" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" stroke="currentColor" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/sol.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">SOL <small class="fw-medium crypt-grayscale-600 ms-1">Solana</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">3,676.31 / $3,676.31 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-0.39%</td>
                                            <td class="encrypted fw-medium">$32.64B</td>
                                            <td class="encrypted fw-medium">$1,898.75B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.04289</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-secondary fw-bold btn-tr" href="price.html" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Details">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            opacity="0.4"
                                                            d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M15.8 2.20999C15.39 1.79999 14.68 2.07999 14.68 2.64999V6.13999C14.68 7.59999 15.92 8.80999 17.43 8.80999C18.38 8.81999 19.7 8.81999 20.83 8.81999C21.4 8.81999 21.7 8.14999 21.3 7.74999C19.86 6.29999 17.28 3.68999 15.8 2.20999Z"
                                                            fill="currentColor"
                                                        />
                                                        <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor" />
                                                        <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="currentColor" />
                                                    </svg>
                                                </a>
                                                <a class="btn-info verified fw-medium py-1" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/1000BONKUP.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">BONK <small class="fw-medium crypt-grayscale-600 ms-1">Bonk</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">3,676.31 / $3,676.31 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+1.42%</td>
                                            <td class="encrypted fw-medium">$1.90B</td>
                                            <td class="encrypted fw-medium">$443.70B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.00782</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-secondary fw-bold btn-tr" href="price.html" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Details">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            opacity="0.4"
                                                            d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M15.8 2.20999C15.39 1.79999 14.68 2.07999 14.68 2.64999V6.13999C14.68 7.59999 15.92 8.80999 17.43 8.80999C18.38 8.81999 19.7 8.81999 20.83 8.81999C21.4 8.81999 21.7 8.14999 21.3 7.74999C19.86 6.29999 17.28 3.68999 15.8 2.20999Z"
                                                            fill="currentColor"
                                                        />
                                                        <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor" />
                                                        <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="currentColor" />
                                                    </svg>
                                                </a>
                                                <a class="btn-info verified fw-medium py-1" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/sol.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">SOL <small class="fw-medium crypt-grayscale-600 ms-1">Solana</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">245.31 / $235.72 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+2.89%</td>
                                            <td class="encrypted fw-medium">$570.96B</td>
                                            <td class="encrypted fw-medium">$112.84B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.00986</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-secondary fw-bold btn-tr" href="price.html" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Details">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            opacity="0.4"
                                                            d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M15.8 2.20999C15.39 1.79999 14.68 2.07999 14.68 2.64999V6.13999C14.68 7.59999 15.92 8.80999 17.43 8.80999C18.38 8.81999 19.7 8.81999 20.83 8.81999C21.4 8.81999 21.7 8.14999 21.3 7.74999C19.86 6.29999 17.28 3.68999 15.8 2.20999Z"
                                                            fill="currentColor"
                                                        />
                                                        <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor" />
                                                        <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="currentColor" />
                                                    </svg>
                                                </a>
                                                <a class="btn-info verified fw-medium py-1" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <!-- Layer 1 Table -->
                        <div class="tab-pane fade" id="layer-1-tab-pane" role="tabpanel" aria-labelledby="layer-1-tab" tabindex="0">
                            <!-- Table -->
                            <div class="table-responsive">
                                <table class="table table-dark table-hover mb-0">
                                    <thead>
                                        <tr class="table-active mb-0">
                                            <th scope="col" class="underline">Name</th>
                                            <th scope="col" class="underline">Wallet balance</th>
                                            <th scope="col" class="underline">Price</th>
                                            <th scope="col" class="underline">24h Change</th>
                                            <th scope="col" class="underline">Volume</th>
                                            <th scope="col" class="underline">Market Cap</th>
                                            <th scope="col" class="underline">Funding / Basis</th>
                                            <th scope="col" class="underline">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme is_ating" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" stroke="currentColor" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/eth.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">ETH <small class="fw-medium crypt-grayscale-600 ms-1">Ethereum</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">3,676.31 / $3,676.31 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-0.39%</td>
                                            <td class="encrypted fw-medium">$32.64B</td>
                                            <td class="encrypted fw-medium">$1,898.75B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.04289</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-secondary fw-bold btn-tr" href="price.html" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Details">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            opacity="0.4"
                                                            d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M15.8 2.20999C15.39 1.79999 14.68 2.07999 14.68 2.64999V6.13999C14.68 7.59999 15.92 8.80999 17.43 8.80999C18.38 8.81999 19.7 8.81999 20.83 8.81999C21.4 8.81999 21.7 8.14999 21.3 7.74999C19.86 6.29999 17.28 3.68999 15.8 2.20999Z"
                                                            fill="currentColor"
                                                        />
                                                        <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor" />
                                                        <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="currentColor" />
                                                    </svg>
                                                </a>
                                                <a class="btn-info verified fw-medium py-1" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/xrp.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">XRP <small class="fw-medium crypt-grayscale-600 ms-1">XRP</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">3,676.31 / $3,676.31 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+1.42%</td>
                                            <td class="encrypted fw-medium">$1.90B</td>
                                            <td class="encrypted fw-medium">$443.70B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.00782</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-secondary fw-bold btn-tr" href="price.html" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Details">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            opacity="0.4"
                                                            d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M15.8 2.20999C15.39 1.79999 14.68 2.07999 14.68 2.64999V6.13999C14.68 7.59999 15.92 8.80999 17.43 8.80999C18.38 8.81999 19.7 8.81999 20.83 8.81999C21.4 8.81999 21.7 8.14999 21.3 7.74999C19.86 6.29999 17.28 3.68999 15.8 2.20999Z"
                                                            fill="currentColor"
                                                        />
                                                        <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor" />
                                                        <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="currentColor" />
                                                    </svg>
                                                </a>
                                                <a class="btn-info verified fw-medium py-1" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/sol.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">SOL <small class="fw-medium crypt-grayscale-600 ms-1">Solana</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">245.31 / $235.72 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+2.89%</td>
                                            <td class="encrypted fw-medium">$570.96B</td>
                                            <td class="encrypted fw-medium">$112.84B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.00986</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-secondary fw-bold btn-tr" href="price.html" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Details">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            opacity="0.4"
                                                            d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M15.8 2.20999C15.39 1.79999 14.68 2.07999 14.68 2.64999V6.13999C14.68 7.59999 15.92 8.80999 17.43 8.80999C18.38 8.81999 19.7 8.81999 20.83 8.81999C21.4 8.81999 21.7 8.14999 21.3 7.74999C19.86 6.29999 17.28 3.68999 15.8 2.20999Z"
                                                            fill="currentColor"
                                                        />
                                                        <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor" />
                                                        <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="currentColor" />
                                                    </svg>
                                                </a>
                                                <a class="btn-info verified fw-medium py-1" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/HNT.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">HNT <small class="fw-medium crypt-grayscale-600 ms-1">Helium</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-1.74%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-secondary fw-bold btn-tr" href="price.html" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Details">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            opacity="0.4"
                                                            d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M15.8 2.20999C15.39 1.79999 14.68 2.07999 14.68 2.64999V6.13999C14.68 7.59999 15.92 8.80999 17.43 8.80999C18.38 8.81999 19.7 8.81999 20.83 8.81999C21.4 8.81999 21.7 8.14999 21.3 7.74999C19.86 6.29999 17.28 3.68999 15.8 2.20999Z"
                                                            fill="currentColor"
                                                        />
                                                        <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor" />
                                                        <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="currentColor" />
                                                    </svg>
                                                </a>
                                                <a class="btn-info verified fw-medium py-1" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/WIF.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">WIF <small class="fw-medium crypt-grayscale-600 ms-1">Dogwifhat</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+5.65%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-secondary fw-bold btn-tr" href="price.html" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Details">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            opacity="0.4"
                                                            d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M15.8 2.20999C15.39 1.79999 14.68 2.07999 14.68 2.64999V6.13999C14.68 7.59999 15.92 8.80999 17.43 8.80999C18.38 8.81999 19.7 8.81999 20.83 8.81999C21.4 8.81999 21.7 8.14999 21.3 7.74999C19.86 6.29999 17.28 3.68999 15.8 2.20999Z"
                                                            fill="currentColor"
                                                        />
                                                        <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor" />
                                                        <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="currentColor" />
                                                    </svg>
                                                </a>
                                                <a class="btn-info verified fw-medium py-1" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/link.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">LINK <small class="fw-medium crypt-grayscale-600 ms-1">Chainlink</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+2.24%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-secondary fw-bold btn-tr" href="price.html" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Details">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            opacity="0.4"
                                                            d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M15.8 2.20999C15.39 1.79999 14.68 2.07999 14.68 2.64999V6.13999C14.68 7.59999 15.92 8.80999 17.43 8.80999C18.38 8.81999 19.7 8.81999 20.83 8.81999C21.4 8.81999 21.7 8.14999 21.3 7.74999C19.86 6.29999 17.28 3.68999 15.8 2.20999Z"
                                                            fill="currentColor"
                                                        />
                                                        <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor" />
                                                        <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="currentColor" />
                                                    </svg>
                                                </a>
                                                <a class="btn-info verified fw-medium py-1" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/LUNA.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">LUNA <small class="fw-medium crypt-grayscale-600 ms-1">Terra</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-0.98%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-secondary fw-bold btn-tr" href="price.html" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Details">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            opacity="0.4"
                                                            d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M15.8 2.20999C15.39 1.79999 14.68 2.07999 14.68 2.64999V6.13999C14.68 7.59999 15.92 8.80999 17.43 8.80999C18.38 8.81999 19.7 8.81999 20.83 8.81999C21.4 8.81999 21.7 8.14999 21.3 7.74999C19.86 6.29999 17.28 3.68999 15.8 2.20999Z"
                                                            fill="currentColor"
                                                        />
                                                        <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor" />
                                                        <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="currentColor" />
                                                    </svg>
                                                </a>
                                                <a class="btn-info verified fw-medium py-1" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/ape.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">APE <small class="fw-medium crypt-grayscale-600 ms-1">ApeCoin</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-8.42%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-secondary fw-bold btn-tr" href="price.html" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Details">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            opacity="0.4"
                                                            d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M15.8 2.20999C15.39 1.79999 14.68 2.07999 14.68 2.64999V6.13999C14.68 7.59999 15.92 8.80999 17.43 8.80999C18.38 8.81999 19.7 8.81999 20.83 8.81999C21.4 8.81999 21.7 8.14999 21.3 7.74999C19.86 6.29999 17.28 3.68999 15.8 2.20999Z"
                                                            fill="currentColor"
                                                        />
                                                        <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor" />
                                                        <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="currentColor" />
                                                    </svg>
                                                </a>
                                                <a class="btn-info verified fw-medium py-1" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Spot/Margin Market Table -->
                <div class="tab-pane fade" id="spot-market-tab-pane" role="tabpanel" aria-labelledby="spot-market-tab" tabindex="0">
                    <div class="tab-content ">
                        <div class="nav nav-pills mb-3 px-3" role="tablist">
                            <button class="nav-link text-sm py-0" id="maker-fee-tab" data-bs-toggle="tab" data-bs-target="#maker-fee-tab-pane" type="button" aria-controls="maker-fee-tab-pane">
                                <abbr title="Enjoy zero-fee trading on maker orders for these pairs.">0 Maker Fee</abbr>
                            </button>
                            <div class="vr mx-2"></div>
                            <button class="nav-link text-sm py-0 active" id="usdt-coin-tab" data-bs-toggle="tab" data-bs-target="#usdt-coin-tab-pane" type="button" aria-controls="usdt-coin-tab-pane">USDT</button>
                            <button class="nav-link text-sm py-0" id="btc-coin-tab" data-bs-toggle="tab" data-bs-target="#btc-coin-tab-pane" type="button" aria-controls="btc-coin-tab-pane">BTC</button>
                            <button class="nav-link text-sm py-0" id="bnb-coin-tab" data-bs-toggle="tab" data-bs-target="#bnb-coin-tab-pane" type="button" aria-controls="bnb-coin-tab-pane">BNB</button>
                            <button class="nav-link text-sm py-0" id="eth-coin-tab" data-bs-toggle="tab" data-bs-target="#eth-coin-tab-pane" type="button" aria-controls="eth-coin-tab-pane">ETH</button>
                        </div>
                        <!-- 0% Fee Table -->
                        <div class="tab-pane fade" id="maker-fee-tab-pane" role="tabpanel" aria-labelledby="maker-fee-tab" tabindex="0">
                            <!-- Table -->
                            <div class="table-responsive">
                                <table class="table table-dark table-hover mb-0">
                                    <thead>
                                        <tr class="table-active mb-0">
                                            <th scope="col" class="underline">Name</th>
                                            <th scope="col" class="underline">Wallet balance</th>
                                            <th scope="col" class="underline">Price</th>
                                            <th scope="col" class="underline">24h Change</th>
                                            <th scope="col" class="underline">Volume</th>
                                            <th scope="col" class="underline">Market Cap</th>
                                            <th scope="col" class="underline">Funding / Basis</th>
                                            <th scope="col" class="underline">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme is_ating" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" stroke="currentColor" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/btc.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">BTC <small class="crypt-grayscale-600">/USDT</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">3,676.31 / $3,676.31 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-0.39%</td>
                                            <td class="encrypted fw-medium">$32.64B</td>
                                            <td class="encrypted fw-medium">$1,898.75B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.04289</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/eth.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">ETH <small class="crypt-grayscale-600">/USDT</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">3,676.31 / $3,676.31 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+1.42%</td>
                                            <td class="encrypted fw-medium">$1.90B</td>
                                            <td class="encrypted fw-medium">$443.70B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.00782</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/sol.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">SOL <small class="crypt-grayscale-600">/USDT</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">245.31 / $235.72 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+2.89%</td>
                                            <td class="encrypted fw-medium">$570.96B</td>
                                            <td class="encrypted fw-medium">$112.84B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.00986</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/xrp.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">XRP <small class="crypt-grayscale-600">/USDT</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-1.74%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/bnb.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">BNB <small class="crypt-grayscale-600">/USDT</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+5.65%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/link.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">LINK <small class="crypt-grayscale-600">/USDT</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+2.24%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/ape.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">APE <small class="crypt-grayscale-600">/USDT</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-0.98%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/ATOM.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">ATOM <small class="crypt-grayscale-600">/USDT</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-8.42%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <!-- USDT Table -->
                        <div class="tab-pane fade show active" id="usdt-coin-tab-pane" role="tabpanel" aria-labelledby="usdt-coin-tab" tabindex="0">
                            <!-- Table -->
                            <div class="table-responsive">
                                <table class="table table-dark table-hover mb-0">
                                    <thead>
                                        <tr class="table-active mb-0">
                                            <th scope="col" class="underline">Name</th>
                                            <th scope="col" class="underline">Wallet balance</th>
                                            <th scope="col" class="underline">Price</th>
                                            <th scope="col" class="underline">24h Change</th>
                                            <th scope="col" class="underline">Volume</th>
                                            <th scope="col" class="underline">Market Cap</th>
                                            <th scope="col" class="underline">Funding / Basis</th>
                                            <th scope="col" class="underline">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme is_ating" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" stroke="currentColor" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/btc.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">BTC <small class="crypt-grayscale-600">/USDT</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">3,676.31 / $3,676.31 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-0.39%</td>
                                            <td class="encrypted fw-medium">$32.64B</td>
                                            <td class="encrypted fw-medium">$1,898.75B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.04289</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/eth.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">ETH <small class="crypt-grayscale-600">/USDT</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">3,676.31 / $3,676.31 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+1.42%</td>
                                            <td class="encrypted fw-medium">$1.90B</td>
                                            <td class="encrypted fw-medium">$443.70B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.00782</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/sol.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">SOL <small class="crypt-grayscale-600">/USDT</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">245.31 / $235.72 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+2.89%</td>
                                            <td class="encrypted fw-medium">$570.96B</td>
                                            <td class="encrypted fw-medium">$112.84B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.00986</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/xrp.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">XRP <small class="crypt-grayscale-600">/USDT</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-1.74%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/bnb.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">BNB <small class="crypt-grayscale-600">/USDT</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+5.65%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/link.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">LINK <small class="crypt-grayscale-600">/USDT</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+2.24%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/ape.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">APE <small class="crypt-grayscale-600">/USDT</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-0.98%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/ATOM.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">ATOM <small class="crypt-grayscale-600">/USDT</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-8.42%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <!-- BTC Table -->
                        <div class="tab-pane fade" id="btc-coin-tab-pane" role="tabpanel" aria-labelledby="btc-coin-tab" tabindex="0">
                            <!-- Table -->
                            <div class="table-responsive">
                                <table class="table table-dark table-hover mb-0">
                                    <thead>
                                        <tr class="table-active mb-0">
                                            <th scope="col" class="underline">Name</th>
                                            <th scope="col" class="underline">Wallet balance</th>
                                            <th scope="col" class="underline">Price</th>
                                            <th scope="col" class="underline">24h Change</th>
                                            <th scope="col" class="underline">Volume</th>
                                            <th scope="col" class="underline">Market Cap</th>
                                            <th scope="col" class="underline">Funding / Basis</th>
                                            <th scope="col" class="underline">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme is_ating" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" stroke="currentColor" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/btc.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">ETH <small class="crypt-grayscale-600">/BTC</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">3,676.31 / $3,676.31 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-0.39%</td>
                                            <td class="encrypted fw-medium">$32.64B</td>
                                            <td class="encrypted fw-medium">$1,898.75B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.04289</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/eth.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">ETH <small class="crypt-grayscale-600">/BTC</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">3,676.31 / $3,676.31 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+1.42%</td>
                                            <td class="encrypted fw-medium">$1.90B</td>
                                            <td class="encrypted fw-medium">$443.70B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.00782</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/sol.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">SOL <small class="crypt-grayscale-600">/BTC</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">245.31 / $235.72 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+2.89%</td>
                                            <td class="encrypted fw-medium">$570.96B</td>
                                            <td class="encrypted fw-medium">$112.84B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.00986</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/xrp.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">XRP <small class="crypt-grayscale-600">/BTC</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-1.74%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/bnb.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">BNB <small class="crypt-grayscale-600">/BTC</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+5.65%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/link.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">LINK <small class="crypt-grayscale-600">/BTC</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+2.24%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/ape.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">APE <small class="crypt-grayscale-600">/BTC</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-0.98%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/ATOM.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">ATOM <small class="crypt-grayscale-600">/BTC</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-8.42%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <!-- BNB Table -->
                        <div class="tab-pane fade" id="bnb-coin-tab-pane" role="tabpanel" aria-labelledby="bnb-coin-tab" tabindex="0">
                            <!-- Table -->
                            <div class="table-responsive">
                                <table class="table table-dark table-hover mb-0">
                                    <thead>
                                        <tr class="table-active mb-0">
                                            <th scope="col" class="underline">Name</th>
                                            <th scope="col" class="underline">Wallet balance</th>
                                            <th scope="col" class="underline">Price</th>
                                            <th scope="col" class="underline">24h Change</th>
                                            <th scope="col" class="underline">Volume</th>
                                            <th scope="col" class="underline">Market Cap</th>
                                            <th scope="col" class="underline">Funding / Basis</th>
                                            <th scope="col" class="underline">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme is_ating" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" stroke="currentColor" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/btc.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">BTC <small class="crypt-grayscale-600">/BNB</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">3,676.31 / $3,676.31 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-0.39%</td>
                                            <td class="encrypted fw-medium">$32.64B</td>
                                            <td class="encrypted fw-medium">$1,898.75B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.04289</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/eth.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">ETH <small class="crypt-grayscale-600">/BNB</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">3,676.31 / $3,676.31 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+1.42%</td>
                                            <td class="encrypted fw-medium">$1.90B</td>
                                            <td class="encrypted fw-medium">$443.70B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.00782</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/sol.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">SOL <small class="crypt-grayscale-600">/BNB</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">245.31 / $235.72 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+2.89%</td>
                                            <td class="encrypted fw-medium">$570.96B</td>
                                            <td class="encrypted fw-medium">$112.84B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.00986</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/xrp.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">XRP <small class="crypt-grayscale-600">/BNB</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-1.74%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/ada.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">ADA <small class="crypt-grayscale-600">/BNB</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+5.65%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/link.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">LINK <small class="crypt-grayscale-600">/BNB</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+2.24%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/ape.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">APE <small class="crypt-grayscale-600">/BNB</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-0.98%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/ATOM.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">ATOM <small class="crypt-grayscale-600">/BNB</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-8.42%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <!-- ETH Table -->
                        <div class="tab-pane fade" id="eth-coin-tab-pane" role="tabpanel" aria-labelledby="eth-coin-tab" tabindex="0">
                            <!-- Table -->
                            <div class="table-responsive">
                                <table class="table table-dark table-hover mb-0">
                                    <thead>
                                        <tr class="table-active mb-0">
                                            <th scope="col" class="underline">Name</th>
                                            <th scope="col" class="underline">Wallet balance</th>
                                            <th scope="col" class="underline">Price</th>
                                            <th scope="col" class="underline">24h Change</th>
                                            <th scope="col" class="underline">Volume</th>
                                            <th scope="col" class="underline">Market Cap</th>
                                            <th scope="col" class="underline">Funding / Basis</th>
                                            <th scope="col" class="underline">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme is_ating" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" stroke="currentColor" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/btc.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">BTC <small class="crypt-grayscale-600">/ETH</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">3,676.31 / $3,676.31 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-0.39%</td>
                                            <td class="encrypted fw-medium">$32.64B</td>
                                            <td class="encrypted fw-medium">$1,898.75B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.04289</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/ada.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">ADA <small class="crypt-grayscale-600">/ETH</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">3,676.31 / $3,676.31 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+1.42%</td>
                                            <td class="encrypted fw-medium">$1.90B</td>
                                            <td class="encrypted fw-medium">$443.70B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.00782</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/sol.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">SOL <small class="crypt-grayscale-600">/ETH</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">245.31 / $235.72 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+2.89%</td>
                                            <td class="encrypted fw-medium">$570.96B</td>
                                            <td class="encrypted fw-medium">$112.84B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.00986</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/xrp.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">XRP <small class="crypt-grayscale-600">/ETH</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-1.74%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/bnb.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">BNB <small class="crypt-grayscale-600">/ETH</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+5.65%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/link.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">LINK <small class="crypt-grayscale-600">/ETH</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+2.24%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/ape.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">APE <small class="crypt-grayscale-600">/ETH</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-0.98%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/ATOM.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">ATOM <small class="crypt-grayscale-600">/ETH</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-8.42%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Futures Markets Table -->
                <div class="tab-pane fade" id="futures-market-tab-pane" role="tabpanel" aria-labelledby="futures-market-tab" tabindex="0">
                    <div class="tab-content ">
                        <div class="nav nav-pills mb-3 px-3" role="tablist">
                            <button class="nav-link text-sm py-0 active" id="usd-m-tab" data-bs-toggle="tab" data-bs-target="#usd-m-tab-pane" type="button" aria-controls="usd-m-tab-pane">USDⓈ-M Futures</button>
                            <button class="nav-link text-sm py-0" id="coin-m-tab" data-bs-toggle="tab" data-bs-target="#coin-m-tab-pane" type="button" aria-controls="coin-m-tab-pane">COIN-M Futures</button>
                            <div class="vr mx-2"></div>
                            <button class="nav-link text-sm py-0" id="degan-tab" data-bs-toggle="tab" data-bs-target="#degan-tab-pane" type="button" aria-controls="degan-tab-pane">🔥 Degen</button>
                            <button class="nav-link text-sm py-0" id="trending-tab" data-bs-toggle="tab" data-bs-target="#trending-tab-pane" type="button" aria-controls="trending-tab-pane">🔥 Trending</button>
                            <button class="nav-link text-sm py-0" id="meme-tab" data-bs-toggle="tab" data-bs-target="#meme-tab-pane" type="button" aria-controls="meme-tab-pane">🔥 Meme</button>
                        </div>
                        <!-- USDⓈ-M Table -->
                        <div class="tab-pane fade show active" id="usd-m-tab-pane" role="tabpanel" aria-labelledby="usd-m-tab" tabindex="0">
                            <!-- Table -->
                            <div class="table-responsive">
                                <table class="table table-dark table-hover mb-0">
                                    <thead>
                                        <tr class="table-active mb-0">
                                            <th scope="col" class="underline">Name</th>
                                            <th scope="col" class="underline">Wallet balance</th>
                                            <th scope="col" class="underline">Price</th>
                                            <th scope="col" class="underline">24h Change</th>
                                            <th scope="col" class="underline">Volume</th>
                                            <th scope="col" class="underline">Market Cap</th>
                                            <th scope="col" class="underline">Funding / Basis</th>
                                            <th scope="col" class="underline">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme is_ating" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" stroke="currentColor" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/btc.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">BTCPERP <small class="crypt-grayscale-600">/USDC</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">3,676.31 / $3,676.31 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-0.39%</td>
                                            <td class="encrypted fw-medium">$32.64B</td>
                                            <td class="encrypted fw-medium">$1,898.75B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.04289</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/eth.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">ETHPERP <small class="crypt-grayscale-600">/USDT</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">3,676.31 / $3,676.31 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+1.42%</td>
                                            <td class="encrypted fw-medium">$1.90B</td>
                                            <td class="encrypted fw-medium">$443.70B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.00782</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/bch.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">BCHPERP <small class="crypt-grayscale-600">/USDT</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">245.31 / $235.72 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+2.89%</td>
                                            <td class="encrypted fw-medium">$570.96B</td>
                                            <td class="encrypted fw-medium">$112.84B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.00986</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/sol.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">SOLPERP <small class="crypt-grayscale-600">/USDT</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-1.74%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/bnb.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">BNBPERP <small class="crypt-grayscale-600">/USDT</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+5.65%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/LTC.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">LTCPERP <small class="crypt-grayscale-600">/USDT</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+2.24%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/ape.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">APEPERP <small class="crypt-grayscale-600">/USDT</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-0.98%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/QNT.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">QNTPERP <small class="crypt-grayscale-600">/USDT</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-8.42%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <!-- COIN-M Table -->
                        <div class="tab-pane fade" id="coin-m-tab-pane" role="tabpanel" aria-labelledby="coin-m-tab" tabindex="0">
                            <!-- Table -->
                            <div class="table-responsive">
                                <table class="table table-dark table-hover mb-0">
                                    <thead>
                                        <tr class="table-active mb-0">
                                            <th scope="col" class="underline">Name</th>
                                            <th scope="col" class="underline">Wallet balance</th>
                                            <th scope="col" class="underline">Price</th>
                                            <th scope="col" class="underline">24h Change</th>
                                            <th scope="col" class="underline">Volume</th>
                                            <th scope="col" class="underline">Market Cap</th>
                                            <th scope="col" class="underline">Funding / Basis</th>
                                            <th scope="col" class="underline">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme is_ating" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" stroke="currentColor" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/btc.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">ETH <small class="crypt-grayscale-600">/BTC</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">3,676.31 / $3,676.31 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-0.39%</td>
                                            <td class="encrypted fw-medium">$32.64B</td>
                                            <td class="encrypted fw-medium">$1,898.75B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.04289</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/eth.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">ETH <small class="crypt-grayscale-600">/BTC</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">3,676.31 / $3,676.31 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+1.42%</td>
                                            <td class="encrypted fw-medium">$1.90B</td>
                                            <td class="encrypted fw-medium">$443.70B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.00782</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/sol.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">SOL <small class="crypt-grayscale-600">/BTC</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">245.31 / $235.72 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+2.89%</td>
                                            <td class="encrypted fw-medium">$570.96B</td>
                                            <td class="encrypted fw-medium">$112.84B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.00986</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/xrp.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">XRP <small class="crypt-grayscale-600">/BTC</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-1.74%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/bnb.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">BNB <small class="crypt-grayscale-600">/BTC</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+5.65%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/link.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">LINK <small class="crypt-grayscale-600">/BTC</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+2.24%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/ape.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">APE <small class="crypt-grayscale-600">/BTC</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-0.98%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/ATOM.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">ATOM <small class="crypt-grayscale-600">/BTC</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-8.42%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <!-- Degan Table -->
                        <div class="tab-pane fade" id="degan-tab-pane" role="tabpanel" aria-labelledby="degan-tab" tabindex="0">
                            <!-- Table -->
                            <div class="table-responsive">
                                <table class="table table-dark table-hover mb-0">
                                    <thead>
                                        <tr class="table-active mb-0">
                                            <th scope="col" class="underline">Name</th>
                                            <th scope="col" class="underline">Wallet balance</th>
                                            <th scope="col" class="underline">Price</th>
                                            <th scope="col" class="underline">24h Change</th>
                                            <th scope="col" class="underline">Volume</th>
                                            <th scope="col" class="underline">Market Cap</th>
                                            <th scope="col" class="underline">Funding / Basis</th>
                                            <th scope="col" class="underline">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme is_ating" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" stroke="currentColor" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/btc.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">BTC <small class="crypt-grayscale-600">/BNB</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">3,676.31 / $3,676.31 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-0.39%</td>
                                            <td class="encrypted fw-medium">$32.64B</td>
                                            <td class="encrypted fw-medium">$1,898.75B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.04289</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/eth.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">ETH <small class="crypt-grayscale-600">/BNB</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">3,676.31 / $3,676.31 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+1.42%</td>
                                            <td class="encrypted fw-medium">$1.90B</td>
                                            <td class="encrypted fw-medium">$443.70B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.00782</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/sol.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">SOL <small class="crypt-grayscale-600">/BNB</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">245.31 / $235.72 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+2.89%</td>
                                            <td class="encrypted fw-medium">$570.96B</td>
                                            <td class="encrypted fw-medium">$112.84B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.00986</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/xrp.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">XRP <small class="crypt-grayscale-600">/BNB</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-1.74%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/ada.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">ADA <small class="crypt-grayscale-600">/BNB</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+5.65%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/link.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">LINK <small class="crypt-grayscale-600">/BNB</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+2.24%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/ape.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">APE <small class="crypt-grayscale-600">/BNB</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-0.98%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/ATOM.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">ATOM <small class="crypt-grayscale-600">/BNB</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-8.42%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <!-- Trending Table -->
                        <div class="tab-pane fade" id="trending-tab-pane" role="tabpanel" aria-labelledby="trending-tab" tabindex="0">
                            <!-- Table -->
                            <div class="table-responsive">
                                <table class="table table-dark table-hover mb-0">
                                    <thead>
                                        <tr class="table-active mb-0">
                                            <th scope="col" class="underline">Name</th>
                                            <th scope="col" class="underline">Wallet balance</th>
                                            <th scope="col" class="underline">Price</th>
                                            <th scope="col" class="underline">24h Change</th>
                                            <th scope="col" class="underline">Volume</th>
                                            <th scope="col" class="underline">Market Cap</th>
                                            <th scope="col" class="underline">Funding / Basis</th>
                                            <th scope="col" class="underline">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme is_ating" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" stroke="currentColor" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/btc.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">BTC <small class="crypt-grayscale-600">/BNB</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">3,676.31 / $3,676.31 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-0.39%</td>
                                            <td class="encrypted fw-medium">$32.64B</td>
                                            <td class="encrypted fw-medium">$1,898.75B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.04289</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/eth.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">ETH <small class="crypt-grayscale-600">/BNB</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">3,676.31 / $3,676.31 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+1.42%</td>
                                            <td class="encrypted fw-medium">$1.90B</td>
                                            <td class="encrypted fw-medium">$443.70B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.00782</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/sol.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">SOL <small class="crypt-grayscale-600">/BNB</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">245.31 / $235.72 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+2.89%</td>
                                            <td class="encrypted fw-medium">$570.96B</td>
                                            <td class="encrypted fw-medium">$112.84B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.00986</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/xrp.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">XRP <small class="crypt-grayscale-600">/BNB</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-1.74%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/ada.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">ADA <small class="crypt-grayscale-600">/BNB</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+5.65%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/link.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">LINK <small class="crypt-grayscale-600">/BNB</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+2.24%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/ape.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">APE <small class="crypt-grayscale-600">/BNB</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-0.98%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/ATOM.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">ATOM <small class="crypt-grayscale-600">/BNB</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-8.42%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <!-- Meme Table -->
                        <div class="tab-pane fade" id="meme-tab-pane" role="tabpanel" aria-labelledby="meme-tab" tabindex="0">
                            <!-- Table -->
                            <div class="table-responsive">
                                <table class="table table-dark table-hover mb-0">
                                    <thead>
                                        <tr class="table-active mb-0">
                                            <th scope="col" class="underline">Name</th>
                                            <th scope="col" class="underline">Wallet balance</th>
                                            <th scope="col" class="underline">Price</th>
                                            <th scope="col" class="underline">24h Change</th>
                                            <th scope="col" class="underline">Volume</th>
                                            <th scope="col" class="underline">Market Cap</th>
                                            <th scope="col" class="underline">Funding / Basis</th>
                                            <th scope="col" class="underline">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme is_ating" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" stroke="currentColor" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/btc.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">BTC <small class="crypt-grayscale-600">/ETH</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">3,676.31 / $3,676.31 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-0.39%</td>
                                            <td class="encrypted fw-medium">$32.64B</td>
                                            <td class="encrypted fw-medium">$1,898.75B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.04289</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/ada.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">ADA <small class="crypt-grayscale-600">/ETH</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">3,676.31 / $3,676.31 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+1.42%</td>
                                            <td class="encrypted fw-medium">$1.90B</td>
                                            <td class="encrypted fw-medium">$443.70B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.00782</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/sol.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">SOL <small class="crypt-grayscale-600">/ETH</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">245.31 / $235.72 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+2.89%</td>
                                            <td class="encrypted fw-medium">$570.96B</td>
                                            <td class="encrypted fw-medium">$112.84B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.00986</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/xrp.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">XRP <small class="crypt-grayscale-600">/ETH</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-1.74%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/bnb.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">BNB <small class="crypt-grayscale-600">/ETH</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+5.65%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/link.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">LINK <small class="crypt-grayscale-600">/ETH</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-up fw-medium">+2.24%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/ape.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">APE <small class="crypt-grayscale-600">/ETH</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-0.98%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                        <tr class="align-middle">
                                            <td>
                                                <div class="d-flex flex-row align-items-center gap-2">
                                                    <div class="fav-btn">
                                                        <svg class="favme" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.173 3.007L12.768 3L15.178 8.11L20.504 8.941L21 10.436L17.11 14.449L18.005 20.085L16.707 21L11.972 18.352L7.236 21L5.94 20.077L6.886 14.445L3 10.436L3.496 8.941L8.818 8.111L11.173 3.007Z" fill="currentColor"/>
                                                        </svg>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center gap-2">
                                                        <img alt="" src="/images/coin/ATOM.svg" width="24">
                                                        <p class="fw-bold fs-6 mb-0">ATOM <small class="crypt-grayscale-600">/ETH</small> <span class="verified text-sm">5x</span></p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h6 class="encrypted mb-0">0.00</h6>
                                                <span class="crypt-grayscale-600 encrypted">≈ $0.00</span>
                                            </td>
                                            <td class="encrypted fw-medium">1,892.31 / $1.92 <span class="crypt-grayscale-600">USD</span></td>
                                            <td class="encrypted text-down fw-medium">-8.42%</td>
                                            <td class="encrypted fw-medium">$1.95B</td>
                                            <td class="encrypted fw-medium">$107.85B</td>
                                            <td>
                                                <p class="encrypted fw-medium mb-0">0.43509</p>
                                                <span class="crypt-grayscale-600 encrypted">≈ %/hr</span>
                                            </td>
                                            <td>
                                                <a class="link-primary fw-bold" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- New Listing Table -->
                <div class="tab-pane fade" id="new-listing-tab-pane" role="tabpanel" aria-labelledby="new-listing-tab" tabindex="0">
                    <!-- Table -->
                    <div class="table-responsive ">
                        <table class="table table-dark table-hover mb-0">
                            <thead>
                                <tr class="mb-0">
                                    <th scope="col" class="underline">Coin</th>
                                    <th scope="col" class="underline">Price</th>
                                    <th scope="col" class="underline">24h Change</th>
                                    <th scope="col" class="underline">Market</th>
                                    <th scope="col" class="underline">24h Volume</th>
                                    <th scope="col" class="underline">Market Cap</th>
                                    <th scope="col" class="underline">Date Listed</th>
                                    <th scope="col" class="underline">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="align-middle">
                                    <td>
                                        <div class="d-flex flex-row gap-2">
                                            <img alt="" src="/images/coin/HNT.svg" width="28">
                                            <div>
                                                <h6 class="fw-bold mb-0">HNT</h6>
                                                <p class="crypt-grayscale-600 mb-0">Helium</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="fw-medium">$74,491.41</td>
                                    <td class="encrypted fw-medium text-up">+1.62%</td>
                                    <td>
                                        <div class="flex">
                                            <svg width="120" height="38" viewBox="0 0 120 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_464_604)">
                                                    <mask id="mask0_464_604" style="mask-type: luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="38">
                                                        <path d="M120 0H0V38H120V0Z" fill="white" />
                                                    </mask>
                                                    <g mask="url(#mask0_464_604)">
                                                        <mask id="mask1_464_604" style="mask-type: luminance;" maskUnits="userSpaceOnUse" x="0" y="37" width="120" height="1">
                                                            <path d="M120 37H0V38H120V37Z" fill="white" />
                                                        </mask>
                                                        <g mask="url(#mask1_464_604)">
                                                            <path
                                                                d="M1.17627 36.8336L6.07823 37.2266L10.9802 36.036L15.8822 38L20.7841 33.6119L25.6861 9.18582L30.588 5.34617L35.49 4.30155L40.392 0.551619L45.2939 5.12253L50.1959 0.453161L55.0978 0L59.9998 3.33549L64.9018 3.21714L69.8037 7.49447L74.7057 11.8868L79.6076 9.96899L84.5096 11.0582L89.4116 32.1683L94.3135 27.6291L99.2155 24.3806L104.117 26.918L109.019 22.7226L113.921 20.1343L118.823 17.4403V36.8336H113.921H109.019H104.117H99.2155H94.3135H89.4116H84.5096H79.6076H74.7057H69.8037H64.9018H59.9998H55.0978H50.1959H45.2939H40.392H35.49H30.588H25.6861H20.7841H15.8822H10.9802H6.07823H1.17627Z"
                                                                fill="#E74C3C"
                                                                fill-opacity="0.15"
                                                            />
                                                        </g>
                                                        <mask id="mask2_464_604" style="mask-type: luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="37">
                                                            <path d="M120 0H0V37H120V0Z" fill="white" />
                                                        </mask>
                                                        <g mask="url(#mask2_464_604)">
                                                            <path
                                                                d="M1.17627 36.8336L6.07823 37.2266L10.9802 36.036L15.8822 38L20.7841 33.6119L25.6861 9.18582L30.588 5.34617L35.49 4.30155L40.392 0.551619L45.2939 5.12253L50.1959 0.453161L55.0978 0L59.9998 3.33549L64.9018 3.21714L69.8037 7.49447L74.7057 11.8868L79.6076 9.96899L84.5096 11.0582L89.4116 32.1683L94.3135 27.6291L99.2155 24.3806L104.117 26.918L109.019 22.7226L113.921 20.1343L118.823 17.4403V36.8336H113.921H109.019H104.117H99.2155H94.3135H89.4116H84.5096H79.6076H74.7057H69.8037H64.9018H59.9998H55.0978H50.1959H45.2939H40.392H35.49H30.588H25.6861H20.7841H15.8822H10.9802H6.07823H1.17627Z"
                                                                fill="#2ECC71"
                                                                fill-opacity="0.15"
                                                            />
                                                        </g>
                                                        <mask id="mask3_464_604" style="mask-type: luminance;" maskUnits="userSpaceOnUse" x="0" y="37" width="120" height="1">
                                                            <path d="M120 37H0V38H120V37Z" fill="white" />
                                                        </mask>
                                                        <g mask="url(#mask3_464_604)">
                                                            <path
                                                                d="M1.17627 36.8336L6.07823 37.2266L10.9802 36.036L15.8822 38L20.7841 33.6119L25.6861 9.18582L30.588 5.34617L35.49 4.30155L40.392 0.551619L45.2939 5.12253L50.1959 0.453161L55.0978 0L59.9998 3.33549L64.9018 3.21714L69.8037 7.49447L74.7057 11.8868L79.6076 9.96899L84.5096 11.0582L89.4116 32.1683L94.3135 27.6291L99.2155 24.3806L104.117 26.918L109.019 22.7226L113.921 20.1343L118.823 17.4403"
                                                                stroke="#E74C3C"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            />
                                                        </g>
                                                        <mask id="mask4_464_604" style="mask-type: luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="37">
                                                            <path d="M120 0H0V37H120V0Z" fill="white" />
                                                        </mask>
                                                        <g mask="url(#mask4_464_604)">
                                                            <path
                                                                d="M1.17627 36.8336L6.07823 37.2266L10.9802 36.036L15.8822 38L20.7841 33.6119L25.6861 9.18582L30.588 5.34617L35.49 4.30155L40.392 0.551619L45.2939 5.12253L50.1959 0.453161L55.0978 0L59.9998 3.33549L64.9018 3.21714L69.8037 7.49447L74.7057 11.8868L79.6076 9.96899L84.5096 11.0582L89.4116 32.1683L94.3135 27.6291L99.2155 24.3806L104.117 26.918L109.019 22.7226L113.921 20.1343L118.823 17.4403"
                                                                stroke="#2ECC71"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            />
                                                        </g>
                                                        <path
                                                            d="M-8.82373 36.8336H1.17627L6.07823 37.2266L10.9802 36.036L15.8822 38L20.7841 33.6119L25.6861 9.18582L30.588 5.34617L35.49 4.30155L40.392 0.551619L45.2939 5.12253L50.1959 0.453161L55.0978 0L59.9998 3.33549L64.9018 3.21714L69.8037 7.49447L74.7057 11.8868L79.6076 9.96899L84.5096 11.0582L89.4116 32.1683L94.3135 27.6291L99.2155 24.3806L104.117 26.918L109.019 22.7226L113.921 20.1343L118.823 17.4403H128.823"
                                                            stroke="#C0C0C0"
                                                            stroke-opacity="0.01"
                                                            stroke-width="21"
                                                            stroke-linejoin="round"
                                                        />
                                                    </g>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_464_604">
                                                        <rect width="120" height="38" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </td>
                                    <td class="fw-medium encrypted">$386.92M</td>
                                    <td class="fw-medium">$1,865.47B</td>
                                    <td class="fw-medium">2024-12-10</td>
                                    <td>
                                        <a class="link-secondary fw-bold btn-tr" href="price.html" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Details">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    opacity="0.4"
                                                    d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M15.8 2.20999C15.39 1.79999 14.68 2.07999 14.68 2.64999V6.13999C14.68 7.59999 15.92 8.80999 17.43 8.80999C18.38 8.81999 19.7 8.81999 20.83 8.81999C21.4 8.81999 21.7 8.14999 21.3 7.74999C19.86 6.29999 17.28 3.68999 15.8 2.20999Z"
                                                    fill="currentColor"
                                                />
                                                <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor" />
                                                <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="currentColor" />
                                            </svg>
                                        </a>
                                        <a class="btn-info verified fw-medium py-1" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                    </td>
                                </tr>
                                <tr class="align-middle">
                                    <td>
                                        <div class="d-flex flex-row gap-2">
                                            <img alt="" src="/images/coin/WIF.svg" width="28">
                                            <div>
                                                <h6 class="fw-bold mb-0">WIF</h6>
                                                <p class="crypt-grayscale-600 mb-0">Dogwifhat</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="fw-medium">$74,491.41</td>
                                    <td class="encrypted fw-medium text-down">-0.85%</td>
                                    <td>
                                        <div class="flex">
                                            <svg width="120" height="38" viewBox="0 0 120 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_464_642)">
                                                    <mask id="mask0_464_642" style="mask-type: luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="38">
                                                        <path d="M120 0H0V38H120V0Z" fill="white" />
                                                    </mask>
                                                    <g mask="url(#mask0_464_642)">
                                                        <mask id="mask1_464_642" style="mask-type: luminance;" maskUnits="userSpaceOnUse" x="0" y="25" width="120" height="13">
                                                            <path d="M120 25H0V38H120V25Z" fill="white" />
                                                        </mask>
                                                        <g mask="url(#mask1_464_642)">
                                                            <path
                                                                d="M1.17627 25.419L6.07823 22.8764L10.9802 24.9495L15.8822 28.4983L20.7841 26.259L25.6861 24.073L30.588 15.9964L35.49 16.4555L40.392 18.6373L45.2939 9.36698L50.1959 27.0696L55.0978 24.7138L59.9998 19.1775L64.9018 20.1863L69.8037 24.0298L74.7057 11.2796L79.6076 0L84.5096 25.3457L89.4116 38L94.3135 35.7339L99.2155 37.0409L104.117 30.5112L109.019 35.0912L113.921 37.2786L118.823 34.3177V25.419H113.921H109.019H104.117H99.2155H94.3135H89.4116H84.5096H79.6076H74.7057H69.8037H64.9018H59.9998H55.0978H50.1959H45.2939H40.392H35.49H30.588H25.6861H20.7841H15.8822H10.9802H6.07823H1.17627Z"
                                                                fill="#E74C3C"
                                                                fill-opacity="0.15"
                                                            />
                                                        </g>
                                                        <mask id="mask2_464_642" style="mask-type: luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="25">
                                                            <path d="M120 0H0V25H120V0Z" fill="white" />
                                                        </mask>
                                                        <g mask="url(#mask2_464_642)">
                                                            <path
                                                                d="M1.17627 25.419L6.07823 22.8764L10.9802 24.9495L15.8822 28.4983L20.7841 26.259L25.6861 24.073L30.588 15.9964L35.49 16.4555L40.392 18.6373L45.2939 9.36698L50.1959 27.0696L55.0978 24.7138L59.9998 19.1775L64.9018 20.1863L69.8037 24.0298L74.7057 11.2796L79.6076 0L84.5096 25.3457L89.4116 38L94.3135 35.7339L99.2155 37.0409L104.117 30.5112L109.019 35.0912L113.921 37.2786L118.823 34.3177V25.419H113.921H109.019H104.117H99.2155H94.3135H89.4116H84.5096H79.6076H74.7057H69.8037H64.9018H59.9998H55.0978H50.1959H45.2939H40.392H35.49H30.588H25.6861H20.7841H15.8822H10.9802H6.07823H1.17627Z"
                                                                fill="#2ECC71"
                                                                fill-opacity="0.15"
                                                            />
                                                        </g>
                                                        <mask id="mask3_464_642" style="mask-type: luminance;" maskUnits="userSpaceOnUse" x="0" y="25" width="120" height="13">
                                                            <path d="M120 25H0V38H120V25Z" fill="white" />
                                                        </mask>
                                                        <g mask="url(#mask3_464_642)">
                                                            <path
                                                                d="M1.17627 25.419L6.07823 22.8764L10.9802 24.9495L15.8822 28.4983L20.7841 26.259L25.6861 24.073L30.588 15.9964L35.49 16.4555L40.392 18.6373L45.2939 9.36698L50.1959 27.0696L55.0978 24.7138L59.9998 19.1775L64.9018 20.1863L69.8037 24.0298L74.7057 11.2796L79.6076 0L84.5096 25.3457L89.4116 38L94.3135 35.7339L99.2155 37.0409L104.117 30.5112L109.019 35.0912L113.921 37.2786L118.823 34.3177"
                                                                stroke="#E74C3C"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            />
                                                        </g>
                                                        <mask id="mask4_464_642" style="mask-type: luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="25">
                                                            <path d="M120 0H0V25H120V0Z" fill="white" />
                                                        </mask>
                                                        <g mask="url(#mask4_464_642)">
                                                            <path
                                                                d="M1.17627 25.419L6.07823 22.8764L10.9802 24.9495L15.8822 28.4983L20.7841 26.259L25.6861 24.073L30.588 15.9964L35.49 16.4555L40.392 18.6373L45.2939 9.36698L50.1959 27.0696L55.0978 24.7138L59.9998 19.1775L64.9018 20.1863L69.8037 24.0298L74.7057 11.2796L79.6076 0L84.5096 25.3457L89.4116 38L94.3135 35.7339L99.2155 37.0409L104.117 30.5112L109.019 35.0912L113.921 37.2786L118.823 34.3177"
                                                                stroke="#2ECC71"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            />
                                                        </g>
                                                        <path
                                                            d="M-8.82373 25.419H1.17627L6.07823 22.8764L10.9802 24.9495L15.8822 28.4983L20.7841 26.259L25.6861 24.073L30.588 15.9964L35.49 16.4555L40.392 18.6373L45.2939 9.36698L50.1959 27.0696L55.0978 24.7138L59.9998 19.1775L64.9018 20.1863L69.8037 24.0298L74.7057 11.2796L79.6076 0L84.5096 25.3457L89.4116 38L94.3135 35.7339L99.2155 37.0409L104.117 30.5112L109.019 35.0912L113.921 37.2786L118.823 34.3177H128.823"
                                                            stroke="#C0C0C0"
                                                            stroke-opacity="0.01"
                                                            stroke-width="21"
                                                            stroke-linejoin="round"
                                                        />
                                                    </g>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_464_642">
                                                        <rect width="120" height="38" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </td>
                                    <td class="fw-medium encrypted">$386.92M</td>
                                    <td class="fw-medium">$1,865.47B</td>
                                    <td class="fw-medium">2024-12-10</td>
                                    <td>
                                        <a class="link-secondary fw-bold btn-tr" href="price.html" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Details">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    opacity="0.4"
                                                    d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M15.8 2.20999C15.39 1.79999 14.68 2.07999 14.68 2.64999V6.13999C14.68 7.59999 15.92 8.80999 17.43 8.80999C18.38 8.81999 19.7 8.81999 20.83 8.81999C21.4 8.81999 21.7 8.14999 21.3 7.74999C19.86 6.29999 17.28 3.68999 15.8 2.20999Z"
                                                    fill="currentColor"
                                                />
                                                <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor" />
                                                <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="currentColor" />
                                            </svg>
                                        </a>
                                        <a class="btn-info verified fw-medium py-1" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                    </td>
                                </tr>
                                <tr class="align-middle">
                                    <td>
                                        <div class="d-flex flex-row gap-2">
                                            <img alt="" src="/images/coin/LUNA.svg" width="28">
                                            <div>
                                                <h6 class="fw-bold mb-0">LUNA</h6>
                                                <p class="crypt-grayscale-600 mb-0">Terra</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="fw-medium">$74,491.41</td>
                                    <td class="encrypted fw-medium text-up">+1.62%</td>
                                    <td>
                                        <div class="flex">
                                            <svg width="120" height="38" viewBox="0 0 120 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_464_680)">
                                                    <mask id="mask0_464_680" style="mask-type: luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="38">
                                                        <path d="M120 0H0V38H120V0Z" fill="white" />
                                                    </mask>
                                                    <g mask="url(#mask0_464_680)">
                                                        <mask id="mask1_464_680" style="mask-type: luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="38">
                                                            <path d="M120 0H0V38H120V0Z" fill="white" />
                                                        </mask>
                                                        <g mask="url(#mask1_464_680)">
                                                            <path
                                                                d="M1.17627 38L6.07823 37.5437L10.9802 33.5385L15.8822 30.2752L20.7841 26.1262L25.6861 24.5462L30.588 19.6141L35.49 23.525L40.392 17.1296L45.2939 18.6757L50.1959 30.1832L55.0978 21.8037L59.9998 19.5997L64.9018 21.3198L69.8037 11.8656L74.7057 11.797L79.6076 11.8456L84.5096 14.543L89.4116 17.0627L94.3135 12.6863L99.2155 8.72202L104.117 3.78183L109.019 8.29463L113.921 0.870938L118.823 0V38H113.921H109.019H104.117H99.2155H94.3135H89.4116H84.5096H79.6076H74.7057H69.8037H64.9018H59.9998H55.0978H50.1959H45.2939H40.392H35.49H30.588H25.6861H20.7841H15.8822H10.9802H6.07823H1.17627Z"
                                                                fill="#2ECC71"
                                                                fill-opacity="0.15"
                                                            />
                                                        </g>
                                                        <mask id="mask2_464_680" style="mask-type: luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="38">
                                                            <path d="M120 0H0V38H120V0Z" fill="white" />
                                                        </mask>
                                                        <g mask="url(#mask2_464_680)">
                                                            <path
                                                                d="M1.17627 38L6.07823 37.5437L10.9802 33.5385L15.8822 30.2752L20.7841 26.1262L25.6861 24.5462L30.588 19.6141L35.49 23.525L40.392 17.1296L45.2939 18.6757L50.1959 30.1832L55.0978 21.8037L59.9998 19.5997L64.9018 21.3198L69.8037 11.8656L74.7057 11.797L79.6076 11.8456L84.5096 14.543L89.4116 17.0627L94.3135 12.6863L99.2155 8.72202L104.117 3.78183L109.019 8.29463L113.921 0.870938L118.823 0"
                                                                stroke="#2ECC71"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            />
                                                        </g>
                                                        <path
                                                            d="M-8.82373 38H1.17627L6.07823 37.5437L10.9802 33.5385L15.8822 30.2752L20.7841 26.1262L25.6861 24.5462L30.588 19.6141L35.49 23.525L40.392 17.1296L45.2939 18.6757L50.1959 30.1832L55.0978 21.8037L59.9998 19.5997L64.9018 21.3198L69.8037 11.8656L74.7057 11.797L79.6076 11.8456L84.5096 14.543L89.4116 17.0627L94.3135 12.6863L99.2155 8.72202L104.117 3.78183L109.019 8.29463L113.921 0.870938L118.823 0H128.823"
                                                            stroke="#C0C0C0"
                                                            stroke-opacity="0.01"
                                                            stroke-width="21"
                                                            stroke-linejoin="round"
                                                        />
                                                    </g>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_464_680">
                                                        <rect width="120" height="38" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </td>
                                    <td class="fw-medium encrypted">$386.92M</td>
                                    <td class="fw-medium">$1,865.47B</td>
                                    <td class="fw-medium">2024-12-10</td>
                                    <td>
                                        <a class="link-secondary fw-bold btn-tr" href="price.html" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Details">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    opacity="0.4"
                                                    d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M15.8 2.20999C15.39 1.79999 14.68 2.07999 14.68 2.64999V6.13999C14.68 7.59999 15.92 8.80999 17.43 8.80999C18.38 8.81999 19.7 8.81999 20.83 8.81999C21.4 8.81999 21.7 8.14999 21.3 7.74999C19.86 6.29999 17.28 3.68999 15.8 2.20999Z"
                                                    fill="currentColor"
                                                />
                                                <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor" />
                                                <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="currentColor" />
                                            </svg>
                                        </a>
                                        <a class="btn-info verified fw-medium py-1" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                    </td>
                                </tr>
                                <tr class="align-middle">
                                    <td>
                                        <div class="d-flex flex-row gap-2">
                                            <img alt="" src="/images/coin/near.svg" width="28">
                                            <div>
                                                <h6 class="fw-bold mb-0">NEAR</h6>
                                                <p class="crypt-grayscale-600 mb-0">NEAR Protocol</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="fw-medium">$74,491.41</td>
                                    <td class="encrypted fw-medium text-down">-4.65%</td>
                                    <td>
                                        <div class="flex">
                                            <svg width="120" height="38" viewBox="0 0 120 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_464_718)">
                                                    <mask id="mask0_464_718" style="mask-type: luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="38">
                                                        <path d="M120 0H0V38H120V0Z" fill="white" />
                                                    </mask>
                                                    <g mask="url(#mask0_464_718)">
                                                        <mask id="mask1_464_718" style="mask-type: luminance;" maskUnits="userSpaceOnUse" x="0" y="4" width="120" height="34">
                                                            <path d="M120 4H0V38H120V4Z" fill="white" />
                                                        </mask>
                                                        <g mask="url(#mask1_464_718)">
                                                            <path
                                                                d="M1.17627 4.40917L6.07823 0L10.9802 5.20076L15.8822 6.84336L20.7841 5.54141L25.6861 7.79445L30.588 0.548358L35.49 9.0017L40.392 15.4371L45.2939 15.9918L50.1959 23.8778L55.0978 29.6059L59.9998 25.8397L64.9018 14.5251L69.8037 25.7936L74.7057 31.9042L79.6076 28.2761L84.5096 26.1346L89.4116 38L94.3135 24.1416L99.2155 22.0414L104.117 11.2575L109.019 3.2192L113.921 2.55377L118.823 1.61481V4.40917H113.921H109.019H104.117H99.2155H94.3135H89.4116H84.5096H79.6076H74.7057H69.8037H64.9018H59.9998H55.0978H50.1959H45.2939H40.392H35.49H30.588H25.6861H20.7841H15.8822H10.9802H6.07823H1.17627Z"
                                                                fill="#E74C3C"
                                                                fill-opacity="0.15"
                                                            />
                                                        </g>
                                                        <mask id="mask2_464_718" style="mask-type: luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="4">
                                                            <path d="M120 0H0V4H120V0Z" fill="white" />
                                                        </mask>
                                                        <g mask="url(#mask2_464_718)">
                                                            <path
                                                                d="M1.17627 4.40917L6.07823 0L10.9802 5.20076L15.8822 6.84336L20.7841 5.54141L25.6861 7.79445L30.588 0.548358L35.49 9.0017L40.392 15.4371L45.2939 15.9918L50.1959 23.8778L55.0978 29.6059L59.9998 25.8397L64.9018 14.5251L69.8037 25.7936L74.7057 31.9042L79.6076 28.2761L84.5096 26.1346L89.4116 38L94.3135 24.1416L99.2155 22.0414L104.117 11.2575L109.019 3.2192L113.921 2.55377L118.823 1.61481V4.40917H113.921H109.019H104.117H99.2155H94.3135H89.4116H84.5096H79.6076H74.7057H69.8037H64.9018H59.9998H55.0978H50.1959H45.2939H40.392H35.49H30.588H25.6861H20.7841H15.8822H10.9802H6.07823H1.17627Z"
                                                                fill="#2ECC71"
                                                                fill-opacity="0.15"
                                                            />
                                                        </g>
                                                        <mask id="mask3_464_718" style="mask-type: luminance;" maskUnits="userSpaceOnUse" x="0" y="4" width="120" height="34">
                                                            <path d="M120 4H0V38H120V4Z" fill="white" />
                                                        </mask>
                                                        <g mask="url(#mask3_464_718)">
                                                            <path
                                                                d="M1.17627 4.40917L6.07823 0L10.9802 5.20076L15.8822 6.84336L20.7841 5.54141L25.6861 7.79445L30.588 0.548358L35.49 9.0017L40.392 15.4371L45.2939 15.9918L50.1959 23.8778L55.0978 29.6059L59.9998 25.8397L64.9018 14.5251L69.8037 25.7936L74.7057 31.9042L79.6076 28.2761L84.5096 26.1346L89.4116 38L94.3135 24.1416L99.2155 22.0414L104.117 11.2575L109.019 3.2192L113.921 2.55377L118.823 1.61481"
                                                                stroke="#E74C3C"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            />
                                                        </g>
                                                        <mask id="mask4_464_718" style="mask-type: luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="4">
                                                            <path d="M120 0H0V4H120V0Z" fill="white" />
                                                        </mask>
                                                        <g mask="url(#mask4_464_718)">
                                                            <path
                                                                d="M1.17627 4.40917L6.07823 0L10.9802 5.20076L15.8822 6.84336L20.7841 5.54141L25.6861 7.79445L30.588 0.548358L35.49 9.0017L40.392 15.4371L45.2939 15.9918L50.1959 23.8778L55.0978 29.6059L59.9998 25.8397L64.9018 14.5251L69.8037 25.7936L74.7057 31.9042L79.6076 28.2761L84.5096 26.1346L89.4116 38L94.3135 24.1416L99.2155 22.0414L104.117 11.2575L109.019 3.2192L113.921 2.55377L118.823 1.61481"
                                                                stroke="#2ECC71"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            />
                                                        </g>
                                                        <path
                                                            d="M-8.82373 4.40917H1.17627L6.07823 0L10.9802 5.20076L15.8822 6.84336L20.7841 5.54141L25.6861 7.79445L30.588 0.548358L35.49 9.0017L40.392 15.4371L45.2939 15.9918L50.1959 23.8778L55.0978 29.6059L59.9998 25.8397L64.9018 14.5251L69.8037 25.7936L74.7057 31.9042L79.6076 28.2761L84.5096 26.1346L89.4116 38L94.3135 24.1416L99.2155 22.0414L104.117 11.2575L109.019 3.2192L113.921 2.55377L118.823 1.61481H128.823"
                                                            stroke="#C0C0C0"
                                                            stroke-opacity="0.01"
                                                            stroke-width="21"
                                                            stroke-linejoin="round"
                                                        />
                                                    </g>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_464_718">
                                                        <rect width="120" height="38" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </td>
                                    <td class="fw-medium encrypted">$386.92M</td>
                                    <td class="fw-medium">$1,865.47B</td>
                                    <td class="fw-medium">2024-12-10</td>
                                    <td>
                                        <a class="link-secondary fw-bold btn-tr" href="price.html" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Details">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    opacity="0.4"
                                                    d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M15.8 2.20999C15.39 1.79999 14.68 2.07999 14.68 2.64999V6.13999C14.68 7.59999 15.92 8.80999 17.43 8.80999C18.38 8.81999 19.7 8.81999 20.83 8.81999C21.4 8.81999 21.7 8.14999 21.3 7.74999C19.86 6.29999 17.28 3.68999 15.8 2.20999Z"
                                                    fill="currentColor"
                                                />
                                                <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor" />
                                                <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="currentColor" />
                                            </svg>
                                        </a>
                                        <a class="btn-info verified fw-medium py-1" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                    </td>
                                </tr>
                                <tr class="align-middle">
                                    <td>
                                        <div class="d-flex flex-row gap-2">
                                            <img alt="" src="/images/coin/link.svg" width="28">
                                            <div>
                                                <h6 class="fw-bold mb-0">LINK</h6>
                                                <p class="crypt-grayscale-600 mb-0">ChainLink</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="fw-medium">$74,491.41</td>
                                    <td class="encrypted fw-medium text-up">+1.62%</td>
                                    <td>
                                        <div class="flex">
                                            <svg width="120" height="38" viewBox="0 0 120 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_464_756)">
                                                    <mask id="mask0_464_756" style="mask-type: luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="38">
                                                        <path d="M120 0H0V38H120V0Z" fill="white" />
                                                    </mask>
                                                    <g mask="url(#mask0_464_756)">
                                                        <mask id="mask1_464_756" style="mask-type: luminance;" maskUnits="userSpaceOnUse" x="0" y="18" width="120" height="20">
                                                            <path d="M120 18H0V38H120V18Z" fill="white" />
                                                        </mask>
                                                        <g mask="url(#mask1_464_756)">
                                                            <path
                                                                d="M1.17627 17.8431L6.07823 13.265L10.9802 13.2075L15.8822 13.5797L20.7841 11.4421L25.6861 12.6591L30.588 11.9616L35.49 12.7567L40.392 3.64855L45.2939 0L50.1959 0.848727L55.0978 0.266889L59.9998 7.60204L64.9018 5.64822L69.8037 5.2377L74.7057 2.27425L79.6076 2.87808L84.5096 2.93845L89.4116 25.5822L94.3135 38L99.2155 35.1821L104.117 36.8205L109.019 32.3739L113.921 27.1149L118.823 22.0483V17.8431H113.921H109.019H104.117H99.2155H94.3135H89.4116H84.5096H79.6076H74.7057H69.8037H64.9018H59.9998H55.0978H50.1959H45.2939H40.392H35.49H30.588H25.6861H20.7841H15.8822H10.9802H6.07823H1.17627Z"
                                                                fill="#E74C3C"
                                                                fill-opacity="0.15"
                                                            />
                                                        </g>
                                                        <mask id="mask2_464_756" style="mask-type: luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="18">
                                                            <path d="M120 0H0V18H120V0Z" fill="white" />
                                                        </mask>
                                                        <g mask="url(#mask2_464_756)">
                                                            <path
                                                                d="M1.17627 17.8431L6.07823 13.265L10.9802 13.2075L15.8822 13.5797L20.7841 11.4421L25.6861 12.6591L30.588 11.9616L35.49 12.7567L40.392 3.64855L45.2939 0L50.1959 0.848727L55.0978 0.266889L59.9998 7.60204L64.9018 5.64822L69.8037 5.2377L74.7057 2.27425L79.6076 2.87808L84.5096 2.93845L89.4116 25.5822L94.3135 38L99.2155 35.1821L104.117 36.8205L109.019 32.3739L113.921 27.1149L118.823 22.0483V17.8431H113.921H109.019H104.117H99.2155H94.3135H89.4116H84.5096H79.6076H74.7057H69.8037H64.9018H59.9998H55.0978H50.1959H45.2939H40.392H35.49H30.588H25.6861H20.7841H15.8822H10.9802H6.07823H1.17627Z"
                                                                fill="#2ECC71"
                                                                fill-opacity="0.15"
                                                            />
                                                        </g>
                                                        <mask id="mask3_464_756" style="mask-type: luminance;" maskUnits="userSpaceOnUse" x="0" y="18" width="120" height="20">
                                                            <path d="M120 18H0V38H120V18Z" fill="white" />
                                                        </mask>
                                                        <g mask="url(#mask3_464_756)">
                                                            <path
                                                                d="M1.17627 17.8431L6.07823 13.265L10.9802 13.2075L15.8822 13.5797L20.7841 11.4421L25.6861 12.6591L30.588 11.9616L35.49 12.7567L40.392 3.64855L45.2939 0L50.1959 0.848727L55.0978 0.266889L59.9998 7.60204L64.9018 5.64822L69.8037 5.2377L74.7057 2.27425L79.6076 2.87808L84.5096 2.93845L89.4116 25.5822L94.3135 38L99.2155 35.1821L104.117 36.8205L109.019 32.3739L113.921 27.1149L118.823 22.0483"
                                                                stroke="#E74C3C"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            />
                                                        </g>
                                                        <mask id="mask4_464_756" style="mask-type: luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="18">
                                                            <path d="M120 0H0V18H120V0Z" fill="white" />
                                                        </mask>
                                                        <g mask="url(#mask4_464_756)">
                                                            <path
                                                                d="M1.17627 17.8431L6.07823 13.265L10.9802 13.2075L15.8822 13.5797L20.7841 11.4421L25.6861 12.6591L30.588 11.9616L35.49 12.7567L40.392 3.64855L45.2939 0L50.1959 0.848727L55.0978 0.266889L59.9998 7.60204L64.9018 5.64822L69.8037 5.2377L74.7057 2.27425L79.6076 2.87808L84.5096 2.93845L89.4116 25.5822L94.3135 38L99.2155 35.1821L104.117 36.8205L109.019 32.3739L113.921 27.1149L118.823 22.0483"
                                                                stroke="#2ECC71"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            />
                                                        </g>
                                                        <path
                                                            d="M-8.82373 17.8431H1.17627L6.07823 13.265L10.9802 13.2075L15.8822 13.5797L20.7841 11.4421L25.6861 12.6591L30.588 11.9616L35.49 12.7567L40.392 3.64855L45.2939 0L50.1959 0.848727L55.0978 0.266889L59.9998 7.60204L64.9018 5.64822L69.8037 5.2377L74.7057 2.27425L79.6076 2.87808L84.5096 2.93845L89.4116 25.5822L94.3135 38L99.2155 35.1821L104.117 36.8205L109.019 32.3739L113.921 27.1149L118.823 22.0483H128.823"
                                                            stroke="#C0C0C0"
                                                            stroke-opacity="0.01"
                                                            stroke-width="21"
                                                            stroke-linejoin="round"
                                                        />
                                                    </g>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_464_756">
                                                        <rect width="120" height="38" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </td>
                                    <td class="fw-medium encrypted">$386.92M</td>
                                    <td class="fw-medium">$1,865.47B</td>
                                    <td class="fw-medium">2024-12-10</td>
                                    <td>
                                        <a class="link-secondary fw-bold btn-tr" href="price.html" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Details">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    opacity="0.4"
                                                    d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M15.8 2.20999C15.39 1.79999 14.68 2.07999 14.68 2.64999V6.13999C14.68 7.59999 15.92 8.80999 17.43 8.80999C18.38 8.81999 19.7 8.81999 20.83 8.81999C21.4 8.81999 21.7 8.14999 21.3 7.74999C19.86 6.29999 17.28 3.68999 15.8 2.20999Z"
                                                    fill="currentColor"
                                                />
                                                <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor" />
                                                <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="currentColor" />
                                            </svg>
                                        </a>
                                        <a class="btn-info verified fw-medium py-1" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                    </td>
                                </tr>
                                <tr class="align-middle">
                                    <td>
                                        <div class="d-flex flex-row gap-2">
                                            <img alt="" src="/images/coin/tron.svg" width="28">
                                            <div>
                                                <h6 class="fw-bold mb-0">TRX</h6>
                                                <p class="crypt-grayscale-600 mb-0">TRON</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="fw-medium">$74,491.41</td>
                                    <td class="encrypted fw-medium text-up">+1.62%</td>
                                    <td>
                                        <div class="flex">
                                            <svg width="120" height="38" viewBox="0 0 120 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_464_794)">
                                                    <mask id="mask0_464_794" style="mask-type: luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="38">
                                                        <path d="M120 0H0V38H120V0Z" fill="white" />
                                                    </mask>
                                                    <g mask="url(#mask0_464_794)">
                                                        <mask id="mask1_464_794" style="mask-type: luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="38">
                                                            <path d="M120 0H0V38H120V0Z" fill="white" />
                                                        </mask>
                                                        <g mask="url(#mask1_464_794)">
                                                            <path
                                                                d="M1.17627 38L6.07823 29.0049L10.9802 28.4668L15.8822 27.0478L20.7841 23.157L25.6861 18.7857L30.588 14.7168L35.49 17.5127L40.392 15.0909L45.2939 6.52396L50.1959 4.46279L55.0978 9.52329L59.9998 10.153L64.9018 2.50781L69.8037 6.5456L74.7057 8.61313L79.6076 1.87303L84.5096 0L89.4116 16.586L94.3135 16.7418L99.2155 12.547L104.117 14.7712L109.019 10.0759L113.921 6.6691L118.823 6.01472V38H113.921H109.019H104.117H99.2155H94.3135H89.4116H84.5096H79.6076H74.7057H69.8037H64.9018H59.9998H55.0978H50.1959H45.2939H40.392H35.49H30.588H25.6861H20.7841H15.8822H10.9802H6.07823H1.17627Z"
                                                                fill="#2ECC71"
                                                                fill-opacity="0.15"
                                                            />
                                                        </g>
                                                        <mask id="mask2_464_794" style="mask-type: luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="38">
                                                            <path d="M120 0H0V38H120V0Z" fill="white" />
                                                        </mask>
                                                        <g mask="url(#mask2_464_794)">
                                                            <path
                                                                d="M1.17627 38L6.07823 29.0049L10.9802 28.4668L15.8822 27.0478L20.7841 23.157L25.6861 18.7857L30.588 14.7168L35.49 17.5127L40.392 15.0909L45.2939 6.52396L50.1959 4.46279L55.0978 9.52329L59.9998 10.153L64.9018 2.50781L69.8037 6.5456L74.7057 8.61313L79.6076 1.87303L84.5096 0L89.4116 16.586L94.3135 16.7418L99.2155 12.547L104.117 14.7712L109.019 10.0759L113.921 6.6691L118.823 6.01472"
                                                                stroke="#2ECC71"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            />
                                                        </g>
                                                        <path
                                                            d="M-8.82373 38H1.17627L6.07823 29.0049L10.9802 28.4668L15.8822 27.0478L20.7841 23.157L25.6861 18.7857L30.588 14.7168L35.49 17.5127L40.392 15.0909L45.2939 6.52396L50.1959 4.46279L55.0978 9.52329L59.9998 10.153L64.9018 2.50781L69.8037 6.5456L74.7057 8.61313L79.6076 1.87303L84.5096 0L89.4116 16.586L94.3135 16.7418L99.2155 12.547L104.117 14.7712L109.019 10.0759L113.921 6.6691L118.823 6.01472H128.823"
                                                            stroke="#C0C0C0"
                                                            stroke-opacity="0.01"
                                                            stroke-width="21"
                                                            stroke-linejoin="round"
                                                        />
                                                    </g>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_464_794">
                                                        <rect width="120" height="38" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </td>
                                    <td class="fw-medium encrypted">$386.92M</td>
                                    <td class="fw-medium">$1,865.47B</td>
                                    <td class="fw-medium">2024-12-10</td>
                                    <td>
                                        <a class="link-secondary fw-bold btn-tr" href="price.html" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Details">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    opacity="0.4"
                                                    d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M15.8 2.20999C15.39 1.79999 14.68 2.07999 14.68 2.64999V6.13999C14.68 7.59999 15.92 8.80999 17.43 8.80999C18.38 8.81999 19.7 8.81999 20.83 8.81999C21.4 8.81999 21.7 8.14999 21.3 7.74999C19.86 6.29999 17.28 3.68999 15.8 2.20999Z"
                                                    fill="currentColor"
                                                />
                                                <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor" />
                                                <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="currentColor" />
                                            </svg>
                                        </a>
                                        <a class="btn-info verified fw-medium py-1" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                    </td>
                                </tr>
                                <tr class="align-middle">
                                    <td>
                                        <div class="d-flex flex-row gap-2">
                                            <img alt="" src="/images/coin/bch.svg" width="28">
                                            <div>
                                                <h6 class="fw-bold mb-0">BCH</h6>
                                                <p class="crypt-grayscale-600 mb-0">Bitcoin Cash</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="fw-medium">$74,491.41</td>
                                    <td class="encrypted fw-medium text-down">-1.23%</td>
                                    <td>
                                        <div class="flex">
                                            <svg width="120" height="38" viewBox="0 0 120 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_464_832)">
                                                    <mask id="mask0_464_832" style="mask-type: luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="38">
                                                        <path d="M120 0H0V38H120V0Z" fill="white" />
                                                    </mask>
                                                    <g mask="url(#mask0_464_832)">
                                                        <mask id="mask1_464_832" style="mask-type: luminance;" maskUnits="userSpaceOnUse" x="0" y="29" width="120" height="9">
                                                            <path d="M120 29H0V38H120V29Z" fill="white" />
                                                        </mask>
                                                        <g mask="url(#mask1_464_832)">
                                                            <path
                                                                d="M1.17627 28.7431L6.07823 18.961L10.9802 20.0897L15.8822 21.1817L20.7841 14.7258L25.6861 11.8121L30.588 0L35.49 8.46141L40.392 11.1647L45.2939 10.6524L50.1959 13.1432L55.0978 20.6557L59.9998 24.5963L64.9018 22.4768L69.8037 21.3328L74.7057 26.3469L79.6076 26.3141L84.5096 19.8325L89.4116 34.8596L94.3135 37.6743L99.2155 37.3591L104.117 38L109.019 34.1177L113.921 31.9693L118.823 32.1617V28.7431H113.921H109.019H104.117H99.2155H94.3135H89.4116H84.5096H79.6076H74.7057H69.8037H64.9018H59.9998H55.0978H50.1959H45.2939H40.392H35.49H30.588H25.6861H20.7841H15.8822H10.9802H6.07823H1.17627Z"
                                                                fill="#E74C3C"
                                                                fill-opacity="0.15"
                                                            />
                                                        </g>
                                                        <mask id="mask2_464_832" style="mask-type: luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="29">
                                                            <path d="M120 0H0V29H120V0Z" fill="white" />
                                                        </mask>
                                                        <g mask="url(#mask2_464_832)">
                                                            <path
                                                                d="M1.17627 28.7431L6.07823 18.961L10.9802 20.0897L15.8822 21.1817L20.7841 14.7258L25.6861 11.8121L30.588 0L35.49 8.46141L40.392 11.1647L45.2939 10.6524L50.1959 13.1432L55.0978 20.6557L59.9998 24.5963L64.9018 22.4768L69.8037 21.3328L74.7057 26.3469L79.6076 26.3141L84.5096 19.8325L89.4116 34.8596L94.3135 37.6743L99.2155 37.3591L104.117 38L109.019 34.1177L113.921 31.9693L118.823 32.1617V28.7431H113.921H109.019H104.117H99.2155H94.3135H89.4116H84.5096H79.6076H74.7057H69.8037H64.9018H59.9998H55.0978H50.1959H45.2939H40.392H35.49H30.588H25.6861H20.7841H15.8822H10.9802H6.07823H1.17627Z"
                                                                fill="#2ECC71"
                                                                fill-opacity="0.15"
                                                            />
                                                        </g>
                                                        <mask id="mask3_464_832" style="mask-type: luminance;" maskUnits="userSpaceOnUse" x="0" y="29" width="120" height="9">
                                                            <path d="M120 29H0V38H120V29Z" fill="white" />
                                                        </mask>
                                                        <g mask="url(#mask3_464_832)">
                                                            <path
                                                                d="M1.17627 28.7431L6.07823 18.961L10.9802 20.0897L15.8822 21.1817L20.7841 14.7258L25.6861 11.8121L30.588 0L35.49 8.46141L40.392 11.1647L45.2939 10.6524L50.1959 13.1432L55.0978 20.6557L59.9998 24.5963L64.9018 22.4768L69.8037 21.3328L74.7057 26.3469L79.6076 26.3141L84.5096 19.8325L89.4116 34.8596L94.3135 37.6743L99.2155 37.3591L104.117 38L109.019 34.1177L113.921 31.9693L118.823 32.1617"
                                                                stroke="#E74C3C"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            />
                                                        </g>
                                                        <mask id="mask4_464_832" style="mask-type: luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="29">
                                                            <path d="M120 0H0V29H120V0Z" fill="white" />
                                                        </mask>
                                                        <g mask="url(#mask4_464_832)">
                                                            <path
                                                                d="M1.17627 28.7431L6.07823 18.961L10.9802 20.0897L15.8822 21.1817L20.7841 14.7258L25.6861 11.8121L30.588 0L35.49 8.46141L40.392 11.1647L45.2939 10.6524L50.1959 13.1432L55.0978 20.6557L59.9998 24.5963L64.9018 22.4768L69.8037 21.3328L74.7057 26.3469L79.6076 26.3141L84.5096 19.8325L89.4116 34.8596L94.3135 37.6743L99.2155 37.3591L104.117 38L109.019 34.1177L113.921 31.9693L118.823 32.1617"
                                                                stroke="#2ECC71"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                            />
                                                        </g>
                                                        <path
                                                            d="M-8.82373 28.7431H1.17627L6.07823 18.961L10.9802 20.0897L15.8822 21.1817L20.7841 14.7258L25.6861 11.8121L30.588 0L35.49 8.46141L40.392 11.1647L45.2939 10.6524L50.1959 13.1432L55.0978 20.6557L59.9998 24.5963L64.9018 22.4768L69.8037 21.3328L74.7057 26.3469L79.6076 26.3141L84.5096 19.8325L89.4116 34.8596L94.3135 37.6743L99.2155 37.3591L104.117 38L109.019 34.1177L113.921 31.9693L118.823 32.1617H128.823"
                                                            stroke="#C0C0C0"
                                                            stroke-opacity="0.01"
                                                            stroke-width="21"
                                                            stroke-linejoin="round"
                                                        />
                                                    </g>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_464_832">
                                                        <rect width="120" height="38" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </td>
                                    <td class="fw-medium encrypted">$386.92M</td>
                                    <td class="fw-medium">$1,865.47B</td>
                                    <td class="fw-medium">2024-12-10</td>
                                    <td>
                                        <a class="link-secondary fw-bold btn-tr" href="price.html" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Details">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    opacity="0.4"
                                                    d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M15.8 2.20999C15.39 1.79999 14.68 2.07999 14.68 2.64999V6.13999C14.68 7.59999 15.92 8.80999 17.43 8.80999C18.38 8.81999 19.7 8.81999 20.83 8.81999C21.4 8.81999 21.7 8.14999 21.3 7.74999C19.86 6.29999 17.28 3.68999 15.8 2.20999Z"
                                                    fill="currentColor"
                                                />
                                                <path d="M13.5 13.75H7.5C7.09 13.75 6.75 13.41 6.75 13C6.75 12.59 7.09 12.25 7.5 12.25H13.5C13.91 12.25 14.25 12.59 14.25 13C14.25 13.41 13.91 13.75 13.5 13.75Z" fill="currentColor" />
                                                <path d="M11.5 17.75H7.5C7.09 17.75 6.75 17.41 6.75 17C6.75 16.59 7.09 16.25 7.5 16.25H11.5C11.91 16.25 12.25 16.59 12.25 17C12.25 17.41 11.91 17.75 11.5 17.75Z" fill="currentColor" />
                                            </svg>
                                        </a>
                                        <a class="btn-info verified fw-medium py-1" href="#!" data-bs-toggle="modal" data-bs-target="#buyCrypto">Trade</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Global Modals -->
    <DepositModal />
    <WithdrawModal />
    <ConvertModal />
    <ChangeEmailModal />
    <CurrencyModal />
  </section>
</template>

<script>
import Navbar from '../components/layouts/Navbar.vue'
import HeaderBar from '../components/layouts/HeaderBar.vue'
import DepositModal from '../components/modals/DepositModal.vue'
import WithdrawModal from '../components/modals/WithdrawModal.vue'
import ConvertModal from '../components/modals/ConvertModal.vue'
import ChangeEmailModal from '../components/modals/ChangeEmailModal.vue'
import CurrencyModal from '../components/modals/CurrencyModal.vue'

export default {
  name: 'MarketsOverview',
  components: { Navbar, HeaderBar, DepositModal, WithdrawModal, ConvertModal, ChangeEmailModal, CurrencyModal },
  data () {
    return {
      /* ===== Mini tables (sample values) ===== */
      miniCrypto: [
        { name: 'BTC/USD', price: '$63,420.12', change: '+1.82%', changeNum: 1.82 },
        { name: 'ETH/USD', price: '$3,245.66', change: '-0.64%', changeNum: -0.64 },
        { name: 'SOL/USD', price: '$148.20', change: '+3.12%', changeNum: 3.12 },
        { name: 'XRP/USD', price: '$0.62', change: '+0.45%', changeNum: 0.45 },
        { name: 'BNB/USD', price: '$585.70', change: '-1.04%', changeNum: -1.04 }
      ],
      miniForex: [
        { pair: 'EUR/USD', rate: '1.0852', base: 'EUR' },
        { pair: 'GBP/USD', rate: '1.2760', base: 'GBP' },
        { pair: 'USD/JPY', rate: '158.42', base: 'USD' },
        { pair: 'USD/CHF', rate: '0.8894', base: 'USD' },
        { pair: 'AUD/USD', rate: '0.6621', base: 'AUD' }
      ],
      miniCommodities: [
        { asset: 'XAU/USD', price: '$2,382.50', unit: 'oz' },
        { asset: 'XAG/USD', price: '$29.44', unit: 'oz' },
        { asset: 'WTI/USD', price: '$79.12', unit: 'bbl' },
        { asset: 'BRENT/USD', price: '$83.07', unit: 'bbl' },
        { asset: 'NG/USD', price: '$2.73', unit: 'MMBtu' }
      ],
      miniStocks: [
        { ticker: 'AAPL', price: '$229.31', change: '+0.41%', changeNum: 0.41 },
        { ticker: 'MSFT', price: '$418.22', change: '+0.22%', changeNum: 0.22 },
        { ticker: 'TSLA', price: '$192.66', change: '-1.35%', changeNum: -1.35 },
        { ticker: 'AMZN', price: '$181.02', change: '+0.88%', changeNum: 0.88 },
        { ticker: 'NVDA', price: '$122.44', change: '+2.61%', changeNum: 2.61 }
      ],

      /* ===== Big tabs (sample values) ===== */
      bigCrypto: [
        { name: 'BTC/USD', price: '$63,420.12', change: '+1.82%', changeNum: 1.82, marketCap: '$1.25T', volume: '$28.3B' },
        { name: 'ETH/USD', price: '$3,245.66', change: '-0.64%', changeNum: -0.64, marketCap: '$390.2B', volume: '$12.7B' },
        { name: 'SOL/USD', price: '$148.20', change: '+3.12%', changeNum: 3.12, marketCap: '$69.1B', volume: '$3.1B' },
        { name: 'XRP/USD', price: '$0.62', change: '+0.45%', changeNum: 0.45, marketCap: '$34.8B', volume: '$1.4B' },
        { name: 'BNB/USD', price: '$585.70', change: '-1.04%', changeNum: -1.04, marketCap: '$90.3B', volume: '$1.1B' },
        { name: 'ADA/USD', price: '$0.46', change: '+0.28%', changeNum: 0.28, marketCap: '$16.2B', volume: '$0.35B' },
        { name: 'DOGE/USD', price: '$0.13', change: '+2.11%', changeNum: 2.11, marketCap: '$18.9B', volume: '$0.89B' },
        { name: 'MATIC/USD', price: '$0.74', change: '-0.80%', changeNum: -0.8, marketCap: '$7.1B', volume: '$0.25B' },
        { name: 'LTC/USD', price: '$83.50', change: '+0.62%', changeNum: 0.62, marketCap: '$6.2B', volume: '$0.24B' },
        { name: 'LINK/USD', price: '$14.72', change: '+1.05%', changeNum: 1.05, marketCap: '$8.6B', volume: '$0.42B' }
      ],
      bigForex: [
        { pair: 'EUR/USD', rate: '1.0852', change: '+0.12%', changeNum: 0.12 },
        { pair: 'GBP/USD', rate: '1.2760', change: '-0.08%', changeNum: -0.08 },
        { pair: 'USD/JPY', rate: '158.42', change: '+0.20%', changeNum: 0.20 },
        { pair: 'USD/CHF', rate: '0.8894', change: '-0.05%', changeNum: -0.05 },
        { pair: 'AUD/USD', rate: '0.6621', change: '+0.09%', changeNum: 0.09 }
      ],
      bigCommodities: [
        { asset: 'XAU/USD', price: '$2,382.50', change: '+0.31%', changeNum: 0.31 },
        { asset: 'XAG/USD', price: '$29.44', change: '-0.18%', changeNum: -0.18 },
        { asset: 'WTI/USD', price: '$79.12', change: '+0.72%', changeNum: 0.72 },
        { asset: 'BRENT/USD', price: '$83.07', change: '+0.56%', changeNum: 0.56 },
        { asset: 'NG/USD', price: '$2.73', change: '-1.10%', changeNum: -1.10 }
      ],
      bigStocks: [
        { ticker: 'AAPL', price: '$229.31', change: '+0.41%', changeNum: 0.41 },
        { ticker: 'MSFT', price: '$418.22', change: '+0.22%', changeNum: 0.22 },
        { ticker: 'TSLA', price: '$192.66', change: '-1.35%', changeNum: -1.35 },
        { ticker: 'AMZN', price: '$181.02', change: '+0.88%', changeNum: 0.88 },
        { ticker: 'GOOGL', price: '$171.44', change: '+0.12%', changeNum: 0.12 },
        { ticker: 'META', price: '$506.11', change: '+0.92%', changeNum: 0.92 },
        { ticker: 'NVDA', price: '$122.44', change: '+2.61%', changeNum: 2.61 },
        { ticker: 'AMD', price: '$162.80', change: '-0.74%', changeNum: -0.74 },
        { ticker: 'NFLX', price: '$656.20', change: '+0.35%', changeNum: 0.35 },
        { ticker: 'INTC', price: '$31.95', change: '-0.22%', changeNum: -0.22 }
      ]
    }
  }
}
</script>