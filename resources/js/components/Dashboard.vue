<template>
   <section class="container-fluid d-sm-flex flex-row fixed-sidebar">
    <!-- Sidebar -->
    <Navbar />

    <!-- Main Area -->
    <div class="wrapper pb-4">
      <!-- Header -->
      <HeaderBar />

      <!-- Offcanvas for mobile (keep if used globally) -->
      <OffcanvasNav />

      <!-- Page Wrapper -->
      <!-- <div class="row g-2 animation-element in-view"> -->
        <!-- Overview + Total Assets + Deposit/P2P -->
        <OverviewSection />

        <!-- Account cards row -->
        <AccountSummary />

        <!-- Market table + News + Ticker -->
        <MarketAndNews />
      <!-- </div> -->
    </div>

    <!-- ✅ Global Modals -->
    <DepositModal />
    <WithdrawModal />
    <ConvertModal />
    <ChangeEmailModal />
    <CurrencyModal />
  </section>
</template>

<script>
/* Global layout */
import Navbar from "../components/layouts/Navbar.vue";
import HeaderBar from "../components/layouts/HeaderBar.vue";
import OffcanvasNav from "../components/layouts/OffcanvasNav.vue";

/* Dashboard sections */
import OverviewSection from "../components/layouts/dashboard/OverviewSection.vue";
import AccountSummary from "../components/layouts/dashboard/AccountSummary.vue";
import MarketAndNews from "../components/layouts/dashboard/MarketAndNews.vue";

/* Modals (global) */
import DepositModal from "../components/modals/DepositModal.vue";
import WithdrawModal from "../components/modals/WithdrawModal.vue";
import ConvertModal from "../components/modals/ConvertModal.vue";
import ChangeEmailModal from "../components/modals/ChangeEmailModal.vue";
import CurrencyModal from "../components/modals/CurrencyModal.vue";

export default {
  name: "Dashboard",
  components: {
    Navbar,
    HeaderBar,
    OffcanvasNav,
    OverviewSection,
    AccountSummary,
    MarketAndNews,
    DepositModal,
    WithdrawModal,
    ConvertModal,
    ChangeEmailModal,
    CurrencyModal,
  },
};
</script>

<style>
/* --- Visibility helpers (non-destructive) --- */

/* Show sections that were waiting for scroll/animation */
.animation-element {
  opacity: 1 !important;
  transform: none !important;
  visibility: visible !important;
}

/* If balances were blurred/hidden */
.encrypted {
  -webkit-filter: none !important;
  filter: none !important;
  opacity: 1 !important;
  text-shadow: none !important;
}

/* Common cards/backgrounds sometimes start faded */
.card-bs,
.gd-bg,
.mesh3,
.mesh4 {
  opacity: 1 !important;
  visibility: visible !important;
}

/* Scroll areas shouldn’t collapse */
.market-scroll,
.blog-scroll1,
.chart-area {
  display: block !important;
  visibility: visible !important;
  overflow: auto;
}

/* Active tab pane must be visible */
.tab-pane.active {
  display: block !important;
  opacity: 1 !important;
  visibility: visible !important;
}

/* --- Modal clickability & stacking --- */

/* Ensure Bootstrap modals sit above headers/sidebars/backdrops */
.modal { z-index: 1065; }
.modal-backdrop { z-index: 1060; }

/* If your header/sidebar is fixed with high z-index, put it below the modal while open */
body.modal-open .header,
body.modal-open .sidebar,
body.modal-open .fixed-sidebar {
  z-index: 1040;
}

/* Offcanvas should not intercept clicks when it’s closed */
.offcanvas:not(.show) {
  visibility: hidden;
  pointer-events: none;
}

/* Keep offcanvas backdrop below modal backdrop just in case */
.offcanvas-backdrop { z-index: 1050; }

</style>
