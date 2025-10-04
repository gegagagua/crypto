<template>
  <div class="container-fluid d-sm-flex flex-row fixed-sidebar">
    <!-- Sidebar -->
    <aside class="sidebar">
      <!-- Brand Logo -->
      <div class="d-flex align-items-center justify-content-between">
        <div class="justify-content-between disable-sm-screen mt-3">
          <!-- Logo -->
          <div class="crypt-logo dark">
            <router-link to="/">
              <img src="/images/logo-dark.svg" alt="">
            </router-link>
          </div>
          <div class="crypt-logo light">
            <router-link to="/">
              <img src="/images/logo.svg" alt="">
            </router-link>
          </div>
          <!-- Logo sm -->
          <div class="crypt-logo logo-sm dark">
            <router-link to="/">
              <img src="/images/logo-m-dark.svg" alt="">
            </router-link>
          </div>
          <div class="crypt-logo logo-sm light">
            <router-link to="/">
              <img src="/images/logo-m.svg" alt="">
            </router-link>
          </div>
        </div>
      </div>
      
      <!-- Menu -->
      <div class="side-wrapper">
        <div class="side-title">Assets</div>
        <div class="side-menu">
          <router-link class="sidebar-link" to="/dashboard" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Dashboard">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M18.6699 2H16.7699C14.5899 2 13.4399 3.15 13.4399 5.33V7.23C13.4399 9.41 14.5899 10.56 16.7699 10.56H18.6699C20.8499 10.56 21.9999 9.41 21.9999 7.23V5.33C21.9999 3.15 20.8499 2 18.6699 2Z" fill="currentColor" />
              <path opacity="0.4" d="M7.24 13.4301H5.34C3.15 13.4301 2 14.5801 2 16.7601V18.6601C2 20.8501 3.15 22.0001 5.33 22.0001H7.23C9.41 22.0001 10.56 20.8501 10.56 18.6701V16.7701C10.57 14.5801 9.42 13.4301 7.24 13.4301Z" fill="currentColor" />
              <path d="M6.29 10.58C8.6593 10.58 10.58 8.6593 10.58 6.29C10.58 3.9207 8.6593 2 6.29 2C3.9207 2 2 3.9207 2 6.29C2 8.6593 3.9207 10.58 6.29 10.58Z" fill="currentColor" />
              <path d="M17.7099 22C20.0792 22 21.9999 20.0793 21.9999 17.71C21.9999 15.3407 20.0792 13.42 17.7099 13.42C15.3406 13.42 13.4199 15.3407 13.4199 17.71C13.4199 20.0793 15.3406 22 17.7099 22Z" fill="currentColor" />
            </svg>
            <span> Dashboard </span>
          </router-link>
          
          <router-link class="sidebar-link" to="/marketplace" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Marketplace">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.9597 17.84L19.3297 18.39C18.8797 18.54 18.5197 18.89 18.3697 19.35L17.8197 20.98C17.3497 22.39 15.3697 22.36 14.9297 20.95L13.0797 15C12.7197 13.82 13.8097 12.72 14.9797 13.09L20.9397 14.94C22.3397 15.38 22.3597 17.37 20.9597 17.84Z" fill="currentColor" />
              <path opacity="0.4" d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" fill="currentColor" />
            </svg>
            <span> Marketplace </span>
          </router-link>
          
          <router-link class="sidebar-link is-active" to="/exchange" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Exchange">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 15.5C15 19.09 12.09 22 8.5 22C4.91 22 2 19.09 2 15.5C2 11.91 4.91 9 8.5 9C8.67 9 8.84999 9.01 9.01999 9.02C12.19 9.27 14.73 11.81 14.98 14.98C14.99 15.15 15 15.33 15 15.5Z" fill="currentColor"></path>
              <path opacity="0.4" d="M22 8.5C22 12.09 19.09 15 15.5 15C15.33 15 15.15 14.99 14.98 14.98C14.73 11.81 12.19 9.27 9.01999 9.02C9.00999 8.85 9 8.67 9 8.5C9 4.91 11.91 2 15.5 2C19.09 2 22 4.91 22 8.5Z" fill="currentColor"></path>
              <path d="M5.59 2H3C2.45 2 2 2.45 2 3V5.59C2 6.48 3.07999 6.93 3.70999 6.3L6.29999 3.71001C6.91999 3.08001 6.48 2 5.59 2Z" fill="currentColor"></path>
              <path d="M18.41 22H21C21.55 22 22 21.55 22 21V18.41C22 17.52 20.92 17.07 20.29 17.7L17.7 20.29C17.08 20.92 17.52 22 18.41 22Z" fill="currentColor"></path>
            </svg>
            <span> Exchange </span>
          </router-link>
          
          <router-link class="sidebar-link trending" to="/my-asset" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="My Asset">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.0602 11.8201L20.9002 11.6001C20.6202 11.2601 20.2902 10.9901 19.9102 10.7901C19.4002 10.5001 18.8202 10.3501 18.2202 10.3501H5.7702C5.1702 10.3501 4.6002 10.5001 4.0802 10.7901C3.6902 11.0001 3.3402 11.2901 3.0502 11.6501C2.4802 12.3801 2.2102 13.2801 2.3002 14.1801L2.6702 18.8501C2.8002 20.2601 2.9702 22.0001 6.1402 22.0001H17.8602C21.0302 22.0001 21.1902 20.2601 21.3302 18.8401L21.7002 14.1901C21.7902 13.3501 21.5702 12.5101 21.0602 11.8201ZM14.3902 17.3401H9.6002C9.2102 17.3401 8.9002 17.0201 8.9002 16.6401C8.9002 16.2601 9.2102 15.9401 9.6002 15.9401H14.3902C14.7802 15.9401 15.0902 16.2601 15.0902 16.6401C15.0902 17.0301 14.7802 17.3401 14.3902 17.3401Z" fill="currentColor" />
              <path opacity="0.4" d="M3.37988 11.31C3.59988 11.11 3.81988 10.93 4.07988 10.79C4.58988 10.5 5.16988 10.35 5.76988 10.35H18.2299C18.8299 10.35 19.3999 10.5 19.9199 10.79C20.1799 10.93 20.4099 11.11 20.6199 11.32V10.79V9.82C20.6199 6.25 19.5299 5.16 15.9599 5.16H13.5799C13.1399 5.16 13.1299 5.15 12.8699 4.81L11.6699 3.2C11.0999 2.46 10.6499 2 9.21988 2H8.03988C4.46988 2 3.37988 3.09 3.37988 6.66V10.8V11.31Z" fill="currentColor" />
            </svg>
            <span> My Asset </span>
          </router-link>
          
          <router-link class="sidebar-link" to="/order-history" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Order History">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M6.73049 19.7C7.55049 18.82 8.80049 18.89 9.52049 19.85L10.5305 21.2C11.3405 22.27 12.6505 22.27 13.4605 21.2L14.4705 19.85C15.1905 18.89 16.4405 18.82 17.2605 19.7C19.0405 21.6 20.4905 20.97 20.4905 18.31V7.04C20.5005 3.01 19.5605 2 15.7805 2H8.22049C4.44049 2 3.50049 3.01 3.50049 7.04V18.3C3.50049 20.97 4.96049 21.59 6.73049 19.7Z" fill="currentColor"></path>
              <path d="M16.2305 11.75H10.7305C10.3205 11.75 9.98047 11.41 9.98047 11C9.98047 10.59 10.3205 10.25 10.7305 10.25H16.2305C16.6405 10.25 16.9805 10.59 16.9805 11C16.9805 11.41 16.6405 11.75 16.2305 11.75Z" fill="currentColor"></path>
              <path d="M16.2305 7.75H10.7305C10.3205 7.75 9.98047 7.41 9.98047 7C9.98047 6.59 10.3205 6.25 10.7305 6.25H16.2305C16.6405 6.25 16.9805 6.59 16.9805 7C16.9805 7.41 16.6405 7.75 16.2305 7.75Z" fill="currentColor"></path>
              <path d="M7.78027 8C7.23027 8 6.78027 7.55 6.78027 7C6.78027 6.45 7.23027 6 7.78027 6C8.33027 6 8.78027 6.45 8.78027 7C8.78027 7.55 8.33027 8 7.78027 8Z" fill="currentColor"></path>
              <path d="M7.78027 12C7.23027 12 6.78027 11.55 6.78027 11C6.78027 10.45 7.23027 10 7.78027 10C8.33027 10 8.78027 10.45 8.78027 11C8.78027 11.55 8.33027 12 7.78027 12Z" fill="currentColor"></path>
            </svg>
            <span> Order History </span>
          </router-link>
        </div>
      </div>
      
      <!-- Divider -->
      <div class="nav-divider div-transparent mb-2 mt-2"></div>
      
      <!-- Menu 2 -->
      <div class="side-wrapper">
        <div class="side-title">Accounts</div>
        <div class="side-menu">
          <router-link class="sidebar-link" to="/settings" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Settings">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M2 12.8801V11.1201C2 10.0801 2.85 9.22006 3.9 9.22006C5.71 9.22006 6.45 7.94006 5.54 6.37006C5.02 5.47006 5.33 4.30006 6.24 3.78006L7.97 2.79006C8.76 2.32006 9.78 2.60006 10.25 3.39006L10.36 3.58006C11.26 5.15006 12.74 5.15006 13.65 3.58006L13.76 3.39006C14.23 2.60006 15.25 2.32006 16.04 2.79006L17.77 3.78006C18.68 4.30006 18.99 5.47006 18.47 6.37006C17.56 7.94006 18.3 9.22006 20.11 9.22006C21.15 9.22006 22.01 10.0701 22.01 11.1201V12.8801C22.01 13.9201 21.16 14.7801 20.11 14.7801C18.3 14.7801 17.56 16.0601 18.47 17.6301C18.99 18.5401 18.68 19.7001 17.77 20.2201L16.04 21.2101C15.25 21.6801 14.23 21.4001 13.76 20.6101L13.65 20.4201C12.75 18.8501 11.27 18.8501 10.36 20.4201L10.25 20.6101C9.78 21.4001 8.76 21.6801 7.97 21.2101L6.24 20.2201C5.33 19.7001 5.02 18.5301 5.54 17.6301C6.45 16.0601 5.71 14.7801 3.9 14.7801C2.85 14.7801 2 13.9201 2 12.8801Z" fill="currentColor" />
              <path d="M12 15.25C13.7949 15.25 15.25 13.7949 15.25 12C15.25 10.2051 13.7949 8.75 12 8.75C10.2051 8.75 8.75 10.2051 8.75 12C8.75 13.7949 10.2051 15.25 12 15.25Z" fill="currentColor" />
            </svg>
            <span> Settings </span>
          </router-link>
          
          <router-link class="sidebar-link" to="/identification" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Identification">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 13C17.06 13 16.19 13.33 15.5 13.88C14.58 14.61 14 15.74 14 17C14 17.75 14.21 18.46 14.58 19.06C15.27 20.22 16.54 21 18 21C19.01 21 19.93 20.63 20.63 20C20.94 19.74 21.21 19.42 21.42 19.06C21.79 18.46 22 17.75 22 17C22 14.79 20.21 13 18 13ZM20.07 16.57L17.94 18.54C17.8 18.67 17.61 18.74 17.43 18.74C17.24 18.74 17.05 18.67 16.9 18.52L15.91 17.53C15.62 17.24 15.62 16.76 15.91 16.47C16.2 16.18 16.68 16.18 16.97 16.47L17.45 16.95L19.05 15.47C19.35 15.19 19.83 15.21 20.11 15.51C20.39 15.81 20.37 16.28 20.07 16.57Z" fill="currentColor" />
              <path opacity="0.4" d="M21.09 21.5C21.09 21.78 20.87 22 20.59 22H3.41003C3.13003 22 2.91003 21.78 2.91003 21.5C2.91003 17.36 6.99003 14 12 14C13.03 14 14.03 14.14 14.95 14.41C14.36 15.11 14 16.02 14 17C14 17.75 14.21 18.46 14.58 19.06C14.78 19.4 15.04 19.71 15.34 19.97C16.04 20.61 16.97 21 18 21C19.12 21 20.13 20.54 20.85 19.8C21.01 20.34 21.09 20.91 21.09 21.5Z" fill="currentColor" />
              <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="currentColor" />
            </svg>
            <span> Identification </span>
          </router-link>
          
          <router-link class="sidebar-link" to="/security" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Security">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M20.91 11.12C20.91 16.01 17.36 20.59 12.51 21.93C12.18 22.02 11.82 22.02 11.49 21.93C6.63996 20.59 3.08997 16.01 3.08997 11.12V6.73006C3.08997 5.91006 3.70998 4.98007 4.47998 4.67007L10.05 2.39007C11.3 1.88007 12.71 1.88007 13.96 2.39007L19.53 4.67007C20.29 4.98007 20.92 5.91006 20.92 6.73006L20.91 11.12Z" fill="currentColor" />
              <path d="M14.5 10.5C14.5 9.12 13.38 8 12 8C10.62 8 9.5 9.12 9.5 10.5C9.5 11.62 10.24 12.55 11.25 12.87V15.5C11.25 15.91 11.59 16.25 12 16.25C12.41 16.25 12.75 15.91 12.75 15.5V12.87C13.76 12.55 14.5 11.62 14.5 10.5Z" fill="currentColor" />
            </svg>
            <span> Security </span>
          </router-link>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="wrapper pb-2">
      <!-- Header -->
      <div class="header d-flex align-items-center">
        <!-- Mobile Toggle Button -->
        <span id="sidebar-mobile-toggle">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.25 7.81V16.19C21.25 17.8608 20.7549 19.1045 19.9297 19.9297C19.1045 20.7549 17.8608 21.25 16.19 21.25H9.75V2.75H16.19C17.8608 2.75 19.1045 3.24514 19.9297 4.07033C20.7549 4.89552 21.25 6.13915 21.25 7.81Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.25 2.75V21.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>

        <!-- Page Title -->
        <div class="header-title">
          <h1>Exchange</h1>
          <p class="header-subtitle">Trade cryptocurrencies with ease</p>
        </div>

        <!-- Header Actions -->
        <div class="header-actions">
          <!-- Dark/Light Mode Toggle -->
          <div class="mode">
            <button class="controller m-auto" id="darkMode">
              <span class="dark-logo">
                <svg viewBox="0 0 512 512" width="100" fill="currentColor">
                  <path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z" />
                </svg>
              </span>
              <span class="light-logo">
                <svg viewBox="0 0 512 512" width="100" fill="currentColor">
                  <path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-22-22l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.4 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-22 22l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 22 22l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 22-22l-33.5-100.5 94.7-47.3c13-6.5 13-24.7.2-31.1z"/>
                </svg>
              </span>
            </button>
          </div>

          <!-- User Menu -->
          <div class="user-menu">
            <div class="user-avatar">
              <img src="/images/icon/user-1.jpg" alt="User" class="rounded-circle">
            </div>
            <div class="user-info">
              <span class="user-name">{{ user ? user.name : 'Guest' }}</span>
              <span class="user-email">{{ user ? user.email : 'guest@example.com' }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Exchange Content -->
      <div class="exchange-content">
        <div class="row">
          <!-- Trading Chart -->
          <div class="col-lg-8">
            <div class="card">
              <div class="card-header">
                <h5>BTC/USDT</h5>
                <div class="chart-controls">
                  <button class="btn btn-sm btn-outline-primary">1H</button>
                  <button class="btn btn-sm btn-outline-primary">4H</button>
                  <button class="btn btn-sm btn-primary">1D</button>
                  <button class="btn btn-sm btn-outline-primary">1W</button>
                </div>
              </div>
              <div class="card-body">
                <div class="trading-chart">
                  <div class="chart-placeholder">
                    <h6>Trading Chart</h6>
                    <p>Chart will be integrated here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Trading Panel -->
          <div class="col-lg-4">
            <div class="card">
              <div class="card-header">
                <h5>Buy/Sell</h5>
              </div>
              <div class="card-body">
                <div class="trading-form">
                  <div class="form-group">
                    <label>Amount</label>
                    <input type="number" class="form-control" placeholder="0.00" v-model="tradeAmount">
                  </div>
                  <div class="form-group">
                    <label>Price</label>
                    <input type="number" class="form-control" placeholder="0.00" v-model="tradePrice">
                  </div>
                  <div class="form-group">
                    <label>Total</label>
                    <input type="number" class="form-control" placeholder="0.00" v-model="tradeTotal" readonly>
                  </div>
                  <div class="trading-buttons">
                    <button class="btn btn-success btn-lg w-100 mb-2">Buy BTC</button>
                    <button class="btn btn-danger btn-lg w-100">Sell BTC</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Market Data -->
        <div class="row mt-4">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h5>Market Data</h5>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-dark">
                    <thead>
                      <tr>
                        <th>Symbol</th>
                        <th>Price</th>
                        <th>Change</th>
                        <th>Volume</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="coin in marketData" :key="coin.symbol">
                        <td>
                          <div class="d-flex align-items-center">
                            <img :src="coin.icon" :alt="coin.symbol" class="coin-icon me-2">
                            {{ coin.symbol }}
                          </div>
                        </td>
                        <td>${{ coin.price }}</td>
                        <td :class="coin.change >= 0 ? 'text-success' : 'text-danger'">
                          {{ coin.change >= 0 ? '+' : '' }}{{ coin.change }}%
                        </td>
                        <td>${{ coin.volume }}</td>
                        <td>
                          <button class="btn btn-sm btn-outline-primary">Trade</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Exchange',
  data() {
    return {
      tradeAmount: 0,
      tradePrice: 0,
      tradeTotal: 0,
      marketData: [
        {
          symbol: 'BTC/USDT',
          price: '43,250.50',
          change: 2.45,
          volume: '1.2B',
          icon: '/images/coin/btc.svg'
        },
        {
          symbol: 'ETH/USDT',
          price: '2,650.30',
          change: -1.23,
          volume: '850M',
          icon: '/images/coin/eth.svg'
        },
        {
          symbol: 'BNB/USDT',
          price: '315.80',
          change: 0.87,
          volume: '320M',
          icon: '/images/coin/bnb.svg'
        },
        {
          symbol: 'ADA/USDT',
          price: '0.4850',
          change: -0.45,
          volume: '180M',
          icon: '/images/coin/ada.svg'
        }
      ]
    };
  },
  computed: {
    ...mapGetters('auth', ['user'])
  },
  watch: {
    tradeAmount() {
      this.calculateTotal();
    },
    tradePrice() {
      this.calculateTotal();
    }
  },
  methods: {
    calculateTotal() {
      this.tradeTotal = (this.tradeAmount * this.tradePrice).toFixed(2);
    }
  },
  mounted() {
    // Initialize any required functionality
    this.calculateTotal();
  }
};
</script>

