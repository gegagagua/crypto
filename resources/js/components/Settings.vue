<template>
  <div class="page d-flex">
    <!-- Sidebar -->
    <Navbar />

    <!-- Main area -->
    <div class="flex-fill d-flex flex-column">
      <!-- Header -->
      <HeaderBar />

      <!-- Offcanvas (mobile) -->
      <OffcanvasNav />

      <!-- Page content -->
      <div class="wrapper p-3">
        <h2 class="text-light fw-bold mb-3">Account Settings</h2>

        <!-- Smoke test content so we SEE something -->
        <div class="card-bs p-4">
          <p class="crypt-grayscale-300 mb-0">
            If you can read this, the route and component are mounted correctly.
          </p>
        </div>
      </div>
    </div>

    <!-- Modals (mounted once globally is fine) -->
    <DepositModal />
    <WithdrawModal />
    <ConvertModal />
    <ChangeEmailModal />
    <CurrencyModal />
  </div>
</template>

<script>
import Navbar           from './layouts/navbar.vue'
import HeaderBar        from './layouts/HeaderBar.vue'
import OffcanvasNav     from './layouts/OffcanvasNav.vue'

import DepositModal     from './modals/DepositModal.vue'
import WithdrawModal    from './modals/WithdrawModal.vue'
import ConvertModal     from './modals/ConvertModal.vue'
import ChangeEmailModal from './modals/ChangeEmailModal.vue'
import CurrencyModal    from './modals/CurrencyModal.vue'

export default {
  name: 'Settings',
  components: {
    Navbar, HeaderBar, OffcanvasNav,
    DepositModal, WithdrawModal, ConvertModal,
    ChangeEmailModal, CurrencyModal
  }
}
</script>
