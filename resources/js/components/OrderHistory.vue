<template>
   <section class="container-fluid d-sm-flex flex-row fixed-sidebar">
    <!-- Sidebar -->
    <Navbar />

    <!-- Main content -->
    <div class="wrapper pb-4">
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
   </section>
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
