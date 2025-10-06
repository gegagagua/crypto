<template>
  <div class="header d-flex align-items-center">
    
    <span id="sidebar-mobile-toggle">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.25 7.81V16.19C21.25 17.8608 20.7549 19.1045 19.9297 19.9297C19.1045 20.7549 17.8608 21.25 16.19 21.25H9.75V2.75H16.19C17.8608 2.75 19.1045 3.24514 19.9297 4.07033C20.7549 4.89552 21.25 6.13915 21.25 7.81Z" stroke="currentColor" stroke-width="1.5"/>
        <path d="M9 2V22H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2H9Z" fill="currentColor"/>
      </svg>
    </span>

    
    <div class="crypt-logo logo-m dark">
      <a href="/"><img :src="logoDark" alt="logo dark" /></a>
    </div>
    <div class="crypt-logo logo-m light">
      <a href="/"><img :src="logoLight" alt="logo light" /></a>
    </div>

    
    <!-- Collapse Button -->
    <div class="collapse-btn">
      <span id="sidebar-collapse" @click="toggleSidebar">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.25 7.81V16.19C21.25 17.8608 20.7549 19.1045 19.9297 19.9297C19.1045 20.7549 17.8608 21.25 16.19 21.25H9.75V2.75H16.19C17.8608 2.75 19.1045 3.24514 19.9297 4.07033C20.7549 4.89552 21.25 6.13915 21.25 7.81Z" stroke="currentColor" stroke-width="1.5"/>
          <path d="M9 2V22H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2H9Z" fill="currentColor"/>
        </svg>
      </span>
    </div>

    <div class="user-settings gap-2 gap-sm-3">
      
      <div class="flex disable-sm-screen">
        <a class="btn btn-editor btn-primary" href="#!" data-bs-toggle="modal" data-bs-target="#depositCrypto">Add Funds</a>
      </div>

      
      <div class="profile_menu d-flex align-items-center">
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle no-active d-flex align-items-center"
                  type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside"
                  aria-expanded="false">
            <img alt="" src="/images/social/user.png">
          </button>
          <ul class="dropdown-menu">
            <li class="wallet align-items-center">
              <img alt="" src="/images/social/user.png">
              <div class="d-grid">
                <h6 class="fw-bold crypt-grayscale-100 mb-0">jh***@gmail.com</h6>
                <a class="d-flex gap-2 mb-2 verified mt-2" href="#!">
                  <p class="crypt-grayscale-600 mb-0">UID:</p>
                  <p class="crypt-grayscale-100 mb-0">35403204</p>
                  <div class="crypt-grayscale-500" data-bs-toggle="tooltip"
                       data-bs-placement="top" title="Copy">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                         xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M9.15556 5C6.8605 5 5 6.8605 5 9.15556V12.48C5 14.5149 6.46269 16.2083 8.39406 16.566C8.75174 18.4974 10.4451 19.96 12.48 19.96H15.8044C18.0995 19.96 19.96 18.0995 19.96 15.8044V12.48C19.96 10.4451 18.4974 8.75174 16.566 8.39406C16.2083 6.46269 14.5149 5 12.48 5H9.15556ZM14.8315 8.32444C14.4892 7.35604 13.5657 6.66222 12.48 6.66222H9.15556C7.77853 6.66222 6.66222 7.77853 6.66222 9.15556V12.48C6.66222 13.5657 7.35603 14.4892 8.32444 14.8315V12.48C8.32444 10.1849 10.1849 8.32444 12.48 8.32444H14.8315ZM9.98667 12.48C9.98667 11.103 11.103 9.98667 12.48 9.98667H15.8044C17.1814 9.98667 18.2978 11.103 18.2978 12.48V15.8044C18.2978 17.1814 17.1814 18.2978 15.8044 18.2978H12.48C11.103 18.2978 9.98667 17.1814 9.98667 15.8044V12.48Z"
                            fill="currentColor" />
                    </svg>
                  </div>
                </a>
              </div>
            </li>
            <li class="mt-2">
              <a class="dropdown-item" href="./my-dashboard.html">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4"
                        d="M18.6699 2H16.7699C14.5899 2 13.4399 3.15  13.4399 5.33V7.23C13.4399 9.41 14.5899 10.56 16.7699 10.56H18.6699C20.8499 10.56 21.9999 9.41 21.9999 7.23V5.33C21.9999 3.15 20.8499 2 18.6699 2Z"
                        fill="currentColor" />
                  <path opacity="0.4"
                        d="M7.24 13.4301H5.34C3.15 13.4301 2 14.5801 2 16.7601V18.6601C2 20.8501 3.15 22.0001 5.33 22.0001H7.23C9.41 22.0001 10.56 20.8501 10.56 18.6701V16.7701C10.57 14.5801 9.42 13.4301 7.24 13.4301Z"
                        fill="currentColor" />
                  <path
                        d="M6.29 10.58C8.6593 10.58 10.58 8.6593 10.58 6.29C10.58 3.9207 8.6593 2 6.29 2C3.9207 2 2 3.9207 2 6.29C2 8.6593 3.9207 10.58 6.29 10.58Z"
                        fill="currentColor" />
                  <path
                        d="M17.7099 22C20.0792 22 21.9999 20.0793 21.9999 17.71C21.9999 15.3407 20.0792 13.42 17.7099 13.42C15.3406 13.42 13.4199 15.3407 13.4199 17.71C13.4199 20.0793 15.3406 22 17.7099 22Z"
                        fill="currentColor" />
                </svg>
                Dashboard
              </a>
              <a class="dropdown-item" href="./my-asset.html">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                        d="M21.0602 11.8201L20.9002 11.6001C20.6202 11.2601 20.2902 10.9901 19.9102 10.7901C19.4002 10.5001 18.8202 10.3501 18.2202 10.3501H5.7702C5.1702 10.3501 4.6002 10.5001 4.0802 10.7901C3.6902 11.0001 3.3402 11.2901 3.0502 11.6501C2.4802 12.3801 2.2102 13.2801 2.3002 14.1801L2.6702 18.8501C2.8002 20.2601 2.9702 22.0001 6.1402 22.0001H17.8602C21.0302 22.0001 21.1902 20.2601 21.3302 18.8401L21.7002 14.1901C21.7902 13.3501 21.5702 12.5101 21.0602 11.8201ZM14.3902 17.3401H9.6002C9.2102 17.3401 8.9002 17.0201 8.9002 16.6401C8.9002 16.2601 9.2102 15.9401 9.6002 15.9401H14.3902C14.7802 15.9401 15.0902 16.2601 15.0902 16.6401C15.0902 17.0301 14.7802 17.3401 14.3902 17.3401Z"
                        fill="currentColor" />
                  <path opacity="0.4"
                        d="M3.37988 11.31C3.59988 11.11 3.81988 10.93 4.07988 10.79C4.58988 10.5 5.16988 10.35 5.76988 10.35H18.2299C18.8299 10.35 19.3999 10.5 19.9199 10.79C20.1799 10.93 20.4099 11.11 20.6199 11.32V10.79V9.82C20.6199 6.25 19.5299 5.16 15.9599 5.16H13.5799C13.1399 5.16 13.1299 5.15 12.8699 4.81L11.6699 3.2C11.0999 2.46 10.6499 2 9.21988 2H8.03988C4.46988 2 3.37988 3.09 3.37988 6.66V10.8V11.31Z"
                        fill="currentColor" />
                </svg>
                My Asset
              </a>
              <a class="dropdown-item" href="./order-history.html">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4"
                        d="M6.73049 19.7C7.55049 18.82 8.80049 18.89 9.52049 19.85L10.5305 21.2C11.3405 22.27 12.6505 22.27 13.4605 21.2L14.4705 19.85C15.1905 18.89 16.4405 18.82 17.2605 19.7C19.0405 21.6 20.4905 20.97 20.4905 18.31V7.04C20.5005 3.01 19.5605 2 15.7805 2H8.22049C4.44049 2 3.50049 3.01 3.50049 7.04V18.3C3.50049 20.97 4.96049 21.59 6.73049 19.7Z"
                        fill="currentColor" />
                  <path
                        d="M16.2305 11.75H10.7305C10.3205 11.75 9.98047 11.41 9.98047 11C9.98047 10.59 10.3205 10.25 10.7305 10.25H16.2305C16.6405 10.25 16.9805 10.59 16.9805 11C16.9805 11.41 16.6405 11.75 16.2305 11.75Z"
                        fill="currentColor" />
                  <path
                        d="M16.2305 7.75H10.7305C10.3205 7.75 9.98047 7.41 9.98047 7C9.98047 6.59 10.3205 6.25 10.7305 6.25H16.2305C16.6405 6.25 16.9805 6.59 16.9805 7C16.9805 7.41 16.6405 7.75 16.2305 7.75Z"
                        fill="currentColor" />
                  <path
                        d="M7.78027 8C7.23027 8 6.78027 7.55 6.78027 7C6.78027 6.45 7.23027 6 7.78027 6C8.33027 6 8.78027 6.45 8.78027 7C8.78027 7.55 8.33027 8 7.78027 8Z"
                        fill="currentColor" />
                  <path
                        d="M7.78027 12C7.23027 12 6.78027 11.55 6.78027 11C6.78027 10.45 7.23027 10 7.78027 10C8.33027 10 8.78027 10.45 8.78027 11C8.78027 11.55 8.33027 12 7.78027 12Z"
                        fill="currentColor" />
                </svg>
                My Orders
              </a>
              <a class="dropdown-item" href="./identification.html">
                <div class="d-flex flex-row align-items-center gap-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18 13C17.06 13 16.19 13.33 15.5 13.88C14.58 14.61 14 15.74 14 17C14 17.75 14.21 18.46 14.58 19.06C15.27 20.22 16.54 21 18 21C19.01 21 19.93 20.63 20.63 20C20.94 19.74 21.21 19.42 21.42 19.06C21.79 18.46 22 17.75 22 17C22 14.79 20.21 13 18 13ZM20.07 16.57L17.94 18.54C17.8 18.67 17.61 18.74 17.43 18.74C17.24 18.74 17.05 18.67 16.9 18.52L15.91 17.53C15.62 17.24 15.62 16.76 15.91 16.47C16.2 16.18 16.68 16.18 16.97 16.47L17.45 16.95L19.05 15.47C19.35 15.19 19.83 15.21 20.11 15.51C20.39 15.81 20.37 16.28 20.07 16.57Z"
                      fill="currentColor"></path>
                    <path opacity="0.4"
                      d="M21.09 21.5C21.09 21.78 20.87 22 20.59 22H3.41003C3.13003 22 2.91003 21.78 2.91003 21.5C2.91003 17.36 6.99003 14 12 14C13.03 14 14.03 14.14 14.95 14.41C14.36 15.11 14 16.02 14 17C14 17.75 14.21 18.46 14.58 19.06C14.78 19.4 15.04 19.71 15.34 19.97C16.04 20.61 16.97 21 18 21C19.12 21 20.13 20.54 20.85 19.8C21.01 20.34 21.09 20.91 21.09 21.5Z"
                      fill="currentColor"></path>
                    <path
                      d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                      fill="currentColor"></path>
                  </svg>
                  Identity Verification
                  <span class="verified alert align-items-center d-flex mb-0">Verified</span>
                </div>
              </a>
              <a class="dropdown-item" href="./settings.html">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4"
                        d="M2 12.8801V11.1201C2 10.0801 2.85 9.22006 3.9 9.22006C5.71 9.22006 6.45 7.94006 5.54 6.37006C5.02 5.47006 5.33 4.30006 6.24 3.78006L7.97 2.79006C8.76 2.32006 9.78 2.60006 10.25 3.39006L10.36 3.58006C11.26 5.15006 12.74 5.15006 13.65 3.58006L13.76 3.39006C14.23 2.60006 15.25 2.32006 16.04 2.79006L17.77 3.78006C18.68 4.30006 18.99 5.47006 18.47 6.37006C17.56 7.94006 18.3 9.22006 20.11 9.22006C21.15 9.22006 22.01 10.0701 22.01 11.1201V12.8801C22.01 13.9201 21.16 14.7801 20.11 14.7801C18.3 14.7801 17.56 16.0601 18.47 17.6301C18.99 18.5401 18.68 19.7001 17.77 20.2201L16.04 21.2101C15.25 21.6801 14.23 21.4001 13.76 20.6101L13.65 20.4201C12.75 18.8501 11.27 18.8501 10.36 20.4201L10.25 20.6101C9.78 21.4001 8.76 21.6801 7.97 21.2101L6.24 20.2201C5.33 19.7001 5.02 18.5301 5.54 17.6301C6.45 16.0601 5.71 14.7801 3.9 14.7801C2.85 14.7801 2 13.9201 2 12.8801Z"
                        fill="currentColor" />
                  <path
                        d="M12 15.25C13.7949 15.25 15.25 13.7949 15.25 12C15.25 10.2051 13.7949 8.75 12 8.75C10.2051 8.75 8.75 10.2051 8.75 12C8.75 13.7949 10.2051 15.25 12 15.25Z"
                        fill="currentColor" />
                </svg>
                Account Settings
              </a>
              <a class="dropdown-item" href="./security.html">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4"
                        d="M20.91 11.12C20.91 16.01 17.36 20.59 12.51 21.93C12.18 22.02 11.82 22.02 11.49 21.93C6.63996 20.59 3.08997 16.01 3.08997 11.12V6.73006C3.08997 5.91006 3.70998 4.98007 4.47998 4.67007L10.05 2.39007C11.3 1.88007 12.71 1.88007 13.96 2.39007L19.53 4.67007C20.29 4.98007 20.92 5.91006 20.92 6.73006L20.91 11.12Z"
                        fill="currentColor"></path>
                  <path
                        d="M14.5 10.5C14.5 9.12 13.38 8 12 8C10.62 8 9.5 9.12 9.5 10.5C9.5 11.62 10.24 12.55 11.25 12.87V15.5C11.25 15.91 11.59 16.25 12 16.25C12.41 16.25 12.75 15.91 12.75 15.5V12.87C13.76 12.55 14.5 11.62 14.5 10.5Z"
                        fill="currentColor"></path>
                </svg>
                Security
              </a>
              <a class="dropdown-item" href="./login.html">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4"
                        d="M16.19 2H7.82002C4.18002 2 2.01001 4.17 2.01001 7.81V16.18C2.01001 19.82 4.18002 21.99 7.82002 21.99H16.19C19.83 21.99 22 19.82 22 16.18V7.81C22 4.17 19.83 2 16.19 2Z"
                        fill="currentColor" />
                  <path
                        d="M9.16985 14.0899C9.35985 14.0899 9.54985 14.0199 9.69985 13.8699L14.0799 9.48992V11.9199C14.0799 12.3299 14.4199 12.6699 14.8299 12.6699C15.2399 12.6699 15.5799 12.3299 15.5799 11.9199V7.67992C15.5799 7.57992 15.5599 7.48992 15.5199 7.38992C15.4399 7.20992 15.2998 7.05993 15.1098 6.97993C15.0198 6.93993 14.9199 6.91992 14.8199 6.91992H10.5799C10.1699 6.91992 9.82985 7.25992 9.82985 7.66992C9.82985 8.07992 10.1699 8.41992 10.5799 8.41992H13.0098L8.62985 12.7999C8.33985 13.0899 8.33985 13.5699 8.62985 13.8599C8.78985 14.0199 8.97985 14.0899 9.16985 14.0899Z"
                        fill="currentColor" />
                  <path
                        d="M18.7099 16.28C18.5799 15.89 18.1599 15.68 17.7599 15.81C14.0399 17.05 9.94993 17.05 6.22993 15.81C5.83993 15.68 5.40994 15.89 5.27994 16.28C5.14994 16.67 5.35994 17.1 5.74994 17.23C7.75994 17.9 9.86994 18.24 11.9899 18.24C14.1099 18.24 16.2199 17.9 18.2299 17.23C18.6299 17.09 18.8399 16.67 18.7099 16.28Z"
                        fill="currentColor" />
                </svg>
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </div>
      

      
     <!-- Dark Mode Toggle -->
    <div class="mode">
      <button class="controller m-auto" id="darkMode" @click="toggleDarkMode">
        <span class="dark-logo">
          <svg viewBox="0 0 512 512" width="20" fill="currentColor"><path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"/></svg>
        </span>
        <span class="light-logo">
          <svg viewBox="0 0 512 512" width="20" fill="currentColor"><path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1z"/></svg>
        </span>
      </button>
    </div>
  </div>

      
      <div id="mobile_menu" class="close">
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <path d="M4 12H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <path d="M4 6H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

 
.profile_menu .dropdown-menu {
  background: #121416;
  border: 1px solid rgba(255,255,255,.06);
  box-shadow: 0 20px 40px rgba(0,0,0,.35);
  border-radius: 12px;
  padding: 14px 12px;
  width: 265px;    
  --bs-dropdown-spacer: 10px;
  margin-top: var(--bs-dropdown-spacer) !important;
 
}

 
.profile_menu .wallet {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 6px 8px 10px 8px;
}
.profile_menu .wallet > img {
  width: 40px;
  height: 40px;
  border-radius: 999px;
}
.profile_menu .wallet h6 {
  font-weight: 700;
  color: #fff;
  margin: 0;
  line-height: 1.2;
}

 
.profile_menu .wallet .d-grid > a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
  padding: 6px 10px;
  background: #0f1f17;
  border: 1px solid rgba(16,185,129,.25);
  border-radius: 8px;
  text-decoration: none;
}
.profile_menu .wallet .d-grid > a p {
  font-size: 12px;
  line-height: 1;
}
.profile_menu .wallet .d-grid > a p:first-child { 
  color: #7aa189;
  text-transform: uppercase;
  letter-spacing: .02em;
  margin: 0;
}
.profile_menu .wallet .d-grid > a p:nth-child(2) { 
  color: #c7f2d9;
  font-weight: 700;
  margin: 0;
}
.profile_menu .wallet .d-grid > a .crypt-grayscale-500 {
  display: inline-flex;
  align-items: center;
  opacity: .7;
}

.profile_menu .dropdown-menu > li.mt-2 {
  margin-top: 10px !important;
  padding-top: 2px;
  border-top: 1px solid rgba(255,255,255,.06);
}

 
.profile_menu .dropdown-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 10px;
  border-radius: 10px;
  color: #e5e7eb;
}
.profile_menu .dropdown-item svg {
  min-width: 24px;
  min-height: 24px;
  opacity: .9;
}
.profile_menu .dropdown-item:hover,
.profile_menu .dropdown-item:focus {
  background: rgba(255,255,255,.06);
  color: #fff;
}

 
.profile_menu .dropdown-item .verified {
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  margin-left: 8px;
  background: #0f1f17;
  border: 1px solid rgba(16,185,129,.25);
  color: #86efac;
  border-radius: 6px;
  font-size: 12px;
  line-height: 1;
}

 
.profile_menu .dropdown-menu .dropdown-item + .dropdown-item {
  margin-top: 20px;
}

 
.profile_menu .btn.dropdown-toggle img {
  width: 28px;
  height: 28px;
  border-radius: 999px;
}

.header {
  padding-right: 16px;
  padding-top: 15px;
}

.user-settings {
  margin-left: auto;
}

/* collapse button */
.collapse-btn {
  margin-left: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 15px; 
}
.collapse-btn svg {
  width: 22px;
  height: 22px;
  color: #aaa;
  transition: transform 0.3s ease;
}
.collapse-btn:hover svg {
  color: #fff;
  transform: scale(1.5);
}

</style>



<script>
export default {
  name: 'HeaderBar',
  data() {
    return {
      logoDark: '/images/logo-dark.svg',
      logoLight: '/images/logo.svg',
    }
  },
  mounted() {
    // Load saved theme on page load
    const savedTheme = localStorage.getItem('theme') || 'crypt-dark'
    document.body.className = savedTheme
  },
  methods: {
    toggleSidebar() {
      document.body.classList.toggle("sidebar-close");
    },
    toggleDarkMode() {
      const body = document.body
      if (body.classList.contains("crypt-light")) {
        body.classList.replace("crypt-light", "crypt-dark")
        localStorage.setItem("theme", "crypt-dark")
      } else {
        body.classList.replace("crypt-dark", "crypt-light")
        localStorage.setItem("theme", "crypt-light")
      }
    }
  }
}
</script>
