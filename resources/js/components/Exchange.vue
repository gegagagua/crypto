<template>
  <section class="container-fluid d-sm-flex flex-row fixed-sidebar">
    <!-- Sidebar -->
    <Navbar />

    <!-- Main Content -->
    <div class="wrapper pb-2 flex-fill">
      <!-- Header -->
      <HeaderBar />

      <!-- Offcanvas (Mobile) -->
      <OffcanvasNav />

      <!-- Exchange Layout -->
      <div class="row g-2 pb-2 animation-element">
        <!-- LEFT SIDE -->
        <div id="first" class="col-12 col-xxl-9 col-xl-9 col-lg-12">
          <ViewChart />
          <TradeTabs />
        </div>

        <!-- RIGHT SIDE -->
        <div id="third" class="col-12 col-xxl-3 col-xl-3 col-lg-6">
          <MarketTabs />
        </div>
      </div>

      <!-- TRANSACTION CONTROLLER -->
      <div class="row g-2 animation-element">
        <div class="col-12">
          <TransactionController />
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
// Layout Components
import Navbar from "../components/layouts/Navbar.vue";
import HeaderBar from "../components/layouts/HeaderBar.vue";
import OffcanvasNav from "../components/layouts/OffcanvasNav.vue";

// Exchange Components
import ViewChart from "../components/layouts/ViewChart.vue";
import TradeTabs from "../components/layouts/TradeTabs.vue";
import MarketTabs from "../components/layouts/MarketTabs.vue";
import TransactionController from "../components/layouts/TransactionController.vue";

// Modals
import DepositModal from "../components/modals/DepositModal.vue";
import WithdrawModal from "../components/modals/WithdrawModal.vue";
import ConvertModal from "../components/modals/ConvertModal.vue";
import ChangeEmailModal from "../components/modals/ChangeEmailModal.vue";
import CurrencyModal from "../components/modals/CurrencyModal.vue";

export default {
  name: "Exchange",
  components: {
    Navbar,
    HeaderBar,
    OffcanvasNav,
    ViewChart,
    TradeTabs,
    MarketTabs,
    TransactionController,
    DepositModal,
    WithdrawModal,
    ConvertModal,
    ChangeEmailModal,
    CurrencyModal,
  },
};
</script>

<style scoped>
/* ✅ Keep your global responsiveness intact — no hard overrides */
section.container-fluid {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  overflow: hidden;
}

.wrapper {
  flex: 1;
  overflow-y: auto;
  padding-bottom: 2rem;
}

/* Allow page to scroll */
html,
body {
  height: 100%;
  overflow: auto;
}

.animation-element {
  opacity: 1 !important;
  transform: none !important;
  visibility: visible !important;
}
</style>
