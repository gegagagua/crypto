<template>
  <div class="page d-flex">
    <!-- Sidebar -->
    <Navbar />

    <!-- Main Content -->
    <div class="flex-fill d-flex flex-column">
      <!-- Header -->
      <HeaderBar />
      <OffcanvasNav />

      <!-- Page Content -->
      <div class="p-4">
        <div class="card-bs p-4">
          <h4 class="crypt-grayscale-100 fw-bold mb-3">Security Settings</h4>
          <p class="crypt-grayscale-300 mb-0">
            Manage your password, 2FA, login devices, and security preferences here.
          </p>
        </div>
      </div>

      
      
    </div>
  </div>
</template>

<script>
import Navbar from './layouts/navbar.vue'
import HeaderBar from './layouts/HeaderBar.vue'
import OffcanvasNav from './layouts/OffcanvasNav.vue'

export default {
  name: 'Security',
  components: { Navbar, HeaderBar, OffcanvasNav }
}
</script>
