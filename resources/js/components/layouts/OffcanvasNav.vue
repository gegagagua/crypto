<template>
  <nav class="navbar py-0 navbar-dark bg-dark">
    <div class="container-fluid">
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasDarkNavbar">

        <!-- header -->
        <div class="offcanvas-header card-line">
          <div class="d-flex align-items-center gap-3 crypt-grayscale-100 text-uppercase mb-0 fw-bold">
            <div class="controller update text-bg-info">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                <g style="animation:loader5 1.5s linear infinite both;transform-origin:center center">
                  <circle cx="12" cy="12" r="4" stroke="#0A0A30" stroke-width="1.5"/>
                  <circle cx="17" cy="7" r="1" fill="#265BFF"/>
                </g>
              </svg>
            </div>
            Crypt 2.0
          </div>

          <button type="button" class="btn-close text-reset close-notify align-items-center justify-content-center" data-bs-dismiss="offcanvas" aria-label="Close">
            <svg class="close-notify" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 4.5L4.5 13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.5 4.5L13.5 13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <!-- main menu -->
        <div class="offcanvas-body">
          <!-- (keep ALL your original offcanvas list, CTAs, carousel exactly the same) -->
          <ul class="navbar-nav justify-content-end flex-grow-1 gap-2 mt-3 pb-3">
            <!-- Dropdown (Assets) -->
            <div class="dropdown-menu-dark card-bs gd-bg p-2 pb-2">
              <div class="d-flex flex-column card-bs-tabs p-2 mb-3">
                <div class="d-flex gap-1">
                  <p class="text-sm fw-bold crypt-grayscale-600 mb-0">Total Assets</p>
                </div>
                <div class="d-flex flex-row gap-2 align-items-center">
                  <div class="flex"><h4 class="fw-bold mb-0 encrypted">4.55 BTC</h4></div>
                  <div class="flex"></div>
                </div>
                <div class="flex"><h6 class="text-sm crypt-grayscale-600 encrypted">≈ $99,738.50 USD</h6></div>
              </div>

              <ul class="d-flex flex-column profile_menu gap-2">
                <li class="nav-item">
                  <a class="nav-link" href="/my-dashboard.html">… Dashboard</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/marketplace.html">… Marketplace</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/my-asset.html">… My Asset</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/order-history.html">… Order History</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/exchange.html">… Exchange</a>
                </li>
              </ul>
            </div>

            <span class="d-grid">
              <a class="btn btn-editor btn-primary" href="#!" data-bs-toggle="modal" data-bs-target="#depositCrypto">Add Funds</a>
            </span>
            <span class="d-grid">
              <a class="btn btn-editor btn-primary" href="#!" data-bs-toggle="modal" data-bs-target="#withdrawModal">Withdraw Funds</a>
            </span>

            <!-- Carousel copied as-is -->
            <div id="RewardCarousel" class="carousel slide card-bs mt-4" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#RewardCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label=""></button>
                <button type="button" data-bs-target="#RewardCarousel" data-bs-slide-to="1" aria-label=""></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="col-12 p-3 reward-bg2 pb-5">
                    <h4 class="fw-medium text-white mb-1">Invite Friends for Rewards</h4>
                    <p class="text-white mb-3">Invite friends and get 20% commissions.</p>
                    <a class="btn btn-editor btn-info mt-2" href="#!" data-bs-toggle="modal" data-bs-target="#RewardCrypto">Invite friends</a>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="col-12 p-3 reward-bg3 pb-5">
                    <h4 class="fw-medium text-white text-white mb-1">Crypt Affiliate Programs</h4>
                    <p class="text-white mb-3">Apply and earn up to 60% commission!</p>
                    <a class="btn btn-editor btn-success mt-2" href="#!" data-bs-toggle="modal" data-bs-target="#RewardCrypto">Apply now</a>
                  </div>
                </div>
              </div>
            </div>

          </ul>
        </div>

      </div>
    </div>
  </nav>
</template>

<script>
export default { name: 'OffcanvasNav' }
</script>

<style scoped>
@keyframes loader5 {
  0% { -webkit-transform: rotate(0); transform: rotate(0); }
  to { -webkit-transform: rotate(360deg); transform: rotate(360deg); }
}
</style>
