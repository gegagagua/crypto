<template>
  <div class="page d-flex">
    <!-- Sidebar -->
    <Navbar />

    <!-- Main content -->
    <div class="flex-fill d-flex flex-column">
      <HeaderBar />
      <OffcanvasNav />

      <!-- Transaction Controller -->
      <TransactionController />
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
import TransactionController from './layouts/TransactionController.vue'

import DepositModal from './modals/DepositModal.vue'
import WithdrawModal from './modals/WithdrawModal.vue'
import ConvertModal from './modals/ConvertModal.vue'
import ChangeEmailModal from './modals/ChangeEmailModal.vue'
import CurrencyModal from './modals/CurrencyModal.vue'

export default {
  name: 'OrderHistory',
  components: {
    Navbar, HeaderBar, OffcanvasNav,
    TransactionController,
    DepositModal, WithdrawModal, ConvertModal,
    ChangeEmailModal, CurrencyModal
  }
}
</script>
