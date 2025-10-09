<template>
   <section class="container-fluid d-sm-flex flex-row fixed-sidebar">
    <!-- Sidebar -->
    <Navbar />

    <!-- Main content -->
    <div class="wrapper">
      <!-- Header -->
      <HeaderBar />
      <OffcanvasNav />

      <!-- Page Content -->
      <!-- <div class="p-4"> -->
        <div class="row mt-2 animation-element">
          <!-- Left Section -->
          <div class="col-md-8 mb-4">
            <VerifiedAccount />
          </div>

          <!-- Right Section -->
          <div class="col-md-4">
            <FAQ />
          </div>
        </div>
      <!-- </div> -->
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
import Navbar from './layouts/navbar.vue'
import HeaderBar from './layouts/HeaderBar.vue'
import OffcanvasNav from './layouts/OffcanvasNav.vue'
import VerifiedAccount from './layouts/VerifiedAccount.vue'
import FAQ from './layouts/FAQ.vue'

// Modals
import DepositModal from './modals/DepositModal.vue'
import WithdrawModal from './modals/WithdrawModal.vue'
import ConvertModal from './modals/ConvertModal.vue'
import ChangeEmailModal from './modals/ChangeEmailModal.vue'
import CurrencyModal from './modals/CurrencyModal.vue'

export default {
  name: 'Identification',
  components: {
    Navbar,
    HeaderBar,
    OffcanvasNav,
    VerifiedAccount,
    FAQ,
    DepositModal,
    WithdrawModal,
    ConvertModal,
    ChangeEmailModal,
    CurrencyModal
  }
}
</script>

<style scoped>
/* keep content visible (your animation classes were hiding it) */
.animation-element,
.in-view {
  opacity: 1 !important;
  transform: none !important;
  visibility: visible !important;
}

/* force readable text within this page; your theme utilities still apply */
.page * {
  color: #fff !important;
  background: transparent !important;
}

/* make sure accordion / alerts are readable on this page */
.accordion-button,
.accordion-body,
.alert {
  color: #fff !important;
}
</style>


<!-- CODE FOR UNVERIFDIED  It has modeal -->


<!-- <template>
  <div class="page d-flex">
    <Navbar />

    <div class="flex-fill d-flex flex-column">
     
      <HeaderBar />
      <OffcanvasNav />

   
      <div class="p-4">
        <div class="row mt-2 animation-element">
    
          <div class="col-md-8 mb-4">
            <UnverifiedAccount />
          </div>

          <div class="col-md-4">
            <FAQ />
          </div>
        </div>
      </div>
    </div>

  
    <DepositModal />
    <WithdrawModal />
    <ConvertModal />
    <ChangeEmailModal />
    <CurrencyModal />
  </div>
</template>

<script>
import Navbar from './layouts/navbar.vue'
import HeaderBar from './layouts/HeaderBar.vue'
import OffcanvasNav from './layouts/OffcanvasNav.vue'
import UnverifiedAccount from './layouts/UnverifiedAccount.vue'
import FAQ from './layouts/FAQ.vue'

// Modals
import DepositModal from './modals/DepositModal.vue'
import WithdrawModal from './modals/WithdrawModal.vue'
import ConvertModal from './modals/ConvertModal.vue'
import ChangeEmailModal from './modals/ChangeEmailModal.vue'
import CurrencyModal from './modals/CurrencyModal.vue'

export default {
  name: 'Identification',
  components: {
    Navbar,
    HeaderBar,
    OffcanvasNav,
    UnverifiedAccount,
    FAQ,
    DepositModal,
    WithdrawModal,
    ConvertModal,
    ChangeEmailModal,
    CurrencyModal
  }
}
</script>

<style scoped>

.animation-element,
.in-view {
  opacity: 1 !important;
  transform: none !important;
  visibility: visible !important;
}


.page * {
  color: #fff !important;
  background: transparent !important;
}


.accordion-button,
.accordion-body,
.alert {
  color: #fff !important;
}
</style> -->
