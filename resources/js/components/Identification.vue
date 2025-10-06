<template>
  <div class="page d-flex">
    <!-- Sidebar -->
    <Navbar />

    <!-- Main content -->
    <div class="flex-fill d-flex flex-column">
      <!-- Header -->
      <HeaderBar />
      <OffcanvasNav />

      <!-- Page Content -->
      <div class="p-4">
        <div class="card-bs p-4">
          <h4 class="crypt-grayscale-100 fw-bold mb-3">Identification</h4>
          <p class="crypt-grayscale-300 mb-0">
            Upload your identification documents for KYC verification.
          </p>
        </div>
      </div>
    </div>

    <!-- Global Modals -->
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

import DepositModal from './modals/DepositModal.vue'
import WithdrawModal from './modals/WithdrawModal.vue'
import ConvertModal from './modals/ConvertModal.vue'
import ChangeEmailModal from './modals/ChangeEmailModal.vue'
import CurrencyModal from './modals/CurrencyModal.vue'

export default {
  name: 'Identification',
  components: {
    Navbar, HeaderBar, OffcanvasNav,
    DepositModal, WithdrawModal, ConvertModal,
    ChangeEmailModal, CurrencyModal
  }
}
</script>
