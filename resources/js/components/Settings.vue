<template>
  <div class="page d-flex">
    <Navbar />

    <div class="flex-fill d-flex flex-column">
      <HeaderBar />
      <OffcanvasNav />

      <div class="p-4">
        <div class="card-bs p-4 mb-3">
          <h4 class="crypt-grayscale-100 fw-bold mb-2">Security Settings</h4>
          <p class="crypt-grayscale-300 mb-0">
            Manage your password, 2FA, login devices, and security preferences here.
          </p>
        </div>

        <div class="d-flex flex-column pb-4">
          <!-- Profile -->
          <div class="card-bs p-4 animation-element settings-card">
            <h5 class="crypt-grayscale-100 fw-bold mb-4">Profile</h5>

            <div class="row align-items-start justify-content-between mb-4">
              <div class="col-12 col-md-7">
                <div class="d-flex gap-3 text-primary">
                  <div class="flex mb-2">
                    <!-- icon -->
                    <svg class="p-2 card-bs-tabs" width="38" height="38" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.4" d="M7 3H17C20 3 22 4.5 22 8V11.14C22 11.87 21.25 12.33 20.58 12.04C19.48 11.56 18.23 11.38 16.92 11.59C14.3 12.02 12.16 14.09 11.63 16.69C11.48 17.45 11.46 18.19 11.56 18.9C11.64 19.49 11.16 20.01 10.57 20.01H7C4 20.01 2 18.51 2 15.01V8.01C2 4.5 4 3 7 3Z" fill="currentColor"/>
                      <path d="M12 11.87c-.84 0-1.69-.26-2.34-.79L6.53 8.58a.75.75 0 1 1 .93-1.17l3.13 2.5c.76.61 2.05.61 2.81 0l3.13-2.5a.75.75 0 1 1 .93 1.17l-3.13 2.5c-.65.53-1.5.79-2.33.79Z" fill="currentColor"/>
                      <path d="M18 13c-2.76 0-5 2.23-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5Zm2.05 4.55-.37.36-2.17 2.18c-.1.09-.29.19-.43.21l-.98.14c-.35.05-.6-.2-.55-.55l.14-.98c.02-.14.11-.33.21-.47l2.18-2.17.36-.37c.29-.26.56-.41.86-.41.28 0 .55.11.81.41.67.73.46 1.64-.06 2.16Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div class="flex">
                    <div class="d-flex align-items-center gap-2">
                      <h6 class="text-light fs-6 fw-bold mb-1">Email Authentication</h6>
                    </div>
                    <p class="crypt-grayscale-500 mt-1 mb-0">
                      For login, withdraw, password retrieval, security settings change and API management verification.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-5">
                <div class="d-flex justify-content-sm-end align-items-center gap-2 text-primary">
                  <div class="form-check align-items-center">
                    <input class="form-check-input" type="radio" checked disabled>
                    <label class="form-check-label crypt-grayscale-100 text-sm">joh****@gmail.com</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Notifications -->
          <div class="card-bs p-4 mt-2 animation-element settings-card">
            <h5 class="crypt-grayscale-100 fw-bold mb-4">Notifications</h5>

            <div class="row align-items-start justify-content-between mb-4">
              <div class="col-12 col-md-7">
                <div class="d-flex gap-3 text-primary">
                  <div class="flex mb-2">
                    <!-- bell icon -->
                    <svg class="p-2 card-bs-tabs" width="38" height="38" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.4" d="M20.4 16.33c-.28.75-.87 1.32-1.64 1.58a32.2 32.2 0 0 1-5.36 1.14c-.11.02-.22.04-.33.05-.18.03-.36.05-.54.07-.23.03-.46.05-.69.07-.63.05-1.25.08-1.88.08-.64 0-1.28-.03-1.91-.09-.27-.02-.53-.05-.79-.09-.15-.02-.3-.04-.44-.06-.11-.02-.22-.03-.33-.05a32.1 32.1 0 0 1-3.28-.81 2.24 2.24 0 0 1-1.68-1.57 2.4 2.4 0 0 1 .26-2.28l1.13-1.88c.24-.41.46-1.2.46-1.68V8.63C5.44 5 8.39 2.05 12.02 2.05s6.57 2.95 6.57 6.58v1.86c0 .48.22 1.27.47 1.68l1.13 1.88c.41.7.49 1.52.21 2.28Z" fill="currentColor"/>
                      <path d="M12 10.76a.76.76 0 0 1-.76-.76V6.9c0-.42.34-.76.76-.76s.76.34.76.76V10c0 .42-.34.76-.76.76Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div class="flex">
                    <h6 class="text-light fs-6 fw-bold mb-1">Notification Alert</h6>
                    <p class="crypt-grayscale-500 mt-1 mb-0">This will affect the language settings of E-mail and App push.</p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-5">
                <div class="d-flex justify-content-sm-end align-items-center gap-2 text-primary">
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" checked>
                  </div>
                </div>
              </div>
            </div>

            <div class="row align-items-start justify-content-between mb-4">
              <div class="col-12 col-md-7">
                <div class="d-flex gap-3 text-primary">
                  <div class="flex mb-2">
                    <!-- prefs icon -->
                    <svg class="p-2 card-bs-tabs" width="38" height="38" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3Z" fill="currentColor"/>
                      <path opacity="0.4" d="M19 9.5c-2.48 0-4.5-2.02-4.5-4.5 0-.91.27-1.75.74-2.45A10 10 0 1 0 22 12c0-1.13-.2-2.22-.55-3.24-.7.47-1.54.74-2.45.74Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div class="flex">
                    <h6 class="text-light fs-6 fw-bold mb-1">Notification Preferences</h6>
                    <p class="crypt-grayscale-500 mt-1 mb-0">Once configured, you will receive relevant on-site inbox notifications within the app and website.</p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-5">
                <div class="d-flex justify-content-sm-end align-items-center gap-2 text-primary">
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox">
                  </div>
                </div>
              </div>
            </div>

            <div class="row align-items-start justify-content-between">
              <div class="col-12 col-md-7">
                <div class="d-flex gap-3 text-primary">
                  <div class="flex mb-2">
                    <!-- alert icon -->
                    <svg class="p-2 card-bs-tabs" width="38" height="38" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.4" d="M19.21 6.36C18.17 4.26 16.16 2.71 13.83 2.2 11.39 1.66 8.89 2.24 6.98 3.78 5.06 5.31 3.97 7.6 3.97 10.05c0 2.59 1.55 5.3 3.89 6.87v.83c-.01.28-.02.71.32 1.06.35.36.87.4 1.28.4h5.13c.54 0 .95-.15 1.23-.43.38-.39.37-.89.36-1.16v-.83c3.1-2.09 5.05-6.5 3.03-10.56Z" fill="currentColor"/>
                      <path d="M12 13.85c-.13 0-.26-.03-.37-.1-.36-.21-.48-.67-.27-1.02l.85-1.48h-.84c-.5 0-.91-.22-1.13-.59-.22-.38-.21-.86.02-1.28l1.07-1.86c.21-.36.67-.48 1.03-.27.36.21.48.67.27 1.02l-.64 1.11h.84c.5 0 .91.22 1.13.59.22.38.21.86-.02 1.28l-1.07 1.86c-.14.25-.39.41-.69.41Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div class="flex">
                    <h6 class="text-light fs-6 fw-bold mb-1">Auto Price Alert</h6>
                    <p class="crypt-grayscale-500 mt-1 mb-0">Once configured, you will receive alerts on the price changes of major and holding cryptos.</p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-5">
                <div class="d-flex justify-content-sm-end align-items-center gap-2 text-primary">
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Preferences -->
          <div class="card-bs p-4 mt-2 animation-element settings-card">
            <h5 class="crypt-grayscale-100 fw-bold mb-4">Preferences</h5>

            <!-- Currency -->
            <div class="row align-items-center justify-content-between mb-4">
              <div class="col-12 col-md-7">
                <div class="d-flex align-items-start gap-2 text-primary">
                  <div class="flex mb-3">
                    <!-- currency icon -->
                    <svg class="text-success" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.4" d="M22 7.81V15.16c-.29-.14-.61-.24-.97-.3l-.31-.05-.26-.54C19.91 13.15 19.01 12.5 18 12.5s-1.91.65-2.46 1.77l-.27.54-.3.05c-1.19.2-2.05.86-2.36 1.8-.3.95.01 1.99.86 2.85l.31.31-.03.12c-.2.89-.12 1.57.07 2.06H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2h8.38C19.83 2 22 4.17 22 7.81Z" fill="currentColor"/>
                      <path d="M19.12 14.94l.32.65c.16.32.57.62.91.68l.43.07c1.31.22 1.61 1.18.68 2.12l-.4.4c-.27.27-.41.79-.33 1.17l.05.24c.36 1.58-.48 2.19-1.85 1.49l-.29-.15c-.35-.21-.93-.21-1.28 0l-.29.18c-1.24.83-2.07.21-1.71-1.37l.05-.24c.08-.34-.06-.86-.33-1.13l-.4-.41c-.99-.99-.68-1.95.64-2.17l.43-.07c.43-.07.84-.37 1-.69l.32-.65c.62-1.25 1.62-1.25 2.24 0Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div class="flex">
                    <div class="d-flex align-items-center gap-2">
                      <h6 class="text-light fs-6 fw-bold mb-0">Currency</h6>
                    </div>
                    <p class="crypt-grayscale-500 mt-1 mb-0">Preferred settlement & display currency.</p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-5">
                <div class="d-flex justify-content-sm-end align-items-center gap-3">
                  <span class="crypt-grayscale-300 mb-0">{{ currencyLabel }}</span>
                  <a href="#!" class="btn btn-editor btn-dark text-sm ms-2"
                     data-bs-toggle="modal" data-bs-target="#changeCurrencyModal">Change</a>
                </div>
              </div>
            </div>

            <!-- Language -->
            <div class="row align-items-center justify-content-between">
              <div class="col-12 col-md-7">
                <div class="d-flex align-items-start gap-2 text-primary">
                  <div class="flex mb-3">
                    <!-- language icon -->
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.4" d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2Z" fill="currentColor"/>
                      <path d="M7.5 11h9a.75.75 0 0 1 0 1.5h-9A.75.75 0 0 1 7.5 11Z" fill="currentColor"/>
                      <path d="M12 6.5a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-1.5 0V7.25A.75.75 0 0 1 12 6.5Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div class="flex">
                    <div class="d-flex align-items-center gap-2">
                      <h6 class="text-light fs-6 fw-bold mb-0">Language</h6>
                    </div>
                    <p class="crypt-grayscale-500 mt-1 mb-0">Choose your interface language.</p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-5">
                <div class="d-flex justify-content-sm-end align-items-center gap-3">
                  <span class="crypt-grayscale-300">{{ languageLabel }}</span>
                  <a href="#!" class="btn btn-editor btn-dark text-sm ms-2" data-bs-toggle="modal" data-bs-target="#changeLanguageModal">Edit</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- Modals present on this page -->
    <ChangeEmailModal />
    <ChangeCurrencyModal :current="currency" @save="onCurrencySaved" />
    <ChangeLanguageModal @save="saveLanguage" />
    <!-- IMPORTANT: include Deposit modal so HeaderBar's "Add Funds" works -->
    <DepositModal />
  </div>
</template>

<script>
import Navbar from './layouts/Navbar.vue'
import HeaderBar from './layouts/HeaderBar.vue'
import OffcanvasNav from './layouts/OffcanvasNav.vue'

import ChangeEmailModal from './modals/ChangeEmailModal.vue'
import ChangeCurrencyModal from './modals/ChangeCurrencyModal.vue'
import ChangeLanguageModal from './modals/ChangeLanguageModal.vue'
import DepositModal from './modals/DepositModal.vue' // <-- add funds modal

export default {
  name: 'Settings',
  components: {
    Navbar,
    HeaderBar,
    OffcanvasNav,
    ChangeEmailModal,
    ChangeCurrencyModal,
    ChangeLanguageModal,
    DepositModal
  },
  data() {
    return {
      currency: localStorage.getItem('currency') || 'EUR',
      language: localStorage.getItem('language') || 'en'
    }
  },
  computed: {
    currencyLabel() {
      return { USD: 'US Dollar', EUR: 'Euro', CAD: 'Canadian Dollar' }[this.currency] || 'Euro'
    },
    languageLabel() {
      return { en: 'English', de: 'German', fr: 'French' }[this.language] || 'English'
    }
  },
  methods: {
    // Save currency WITHOUT redirect
    onCurrencySaved(code) {
      this.currency = code
      localStorage.setItem('currency', code)
      // optional: broadcast so other components can react
      window.dispatchEvent(new CustomEvent('currency:changed', { detail: code }))
    },
    saveLanguage(code) {
      this.language = code
      localStorage.setItem('language', code)
    }
  }
}
</script>

<style scoped>
.animation-element{opacity:1!important;transform:none!important;visibility:visible!important;}
.settings-card .d-flex.gap-3.text-primary{align-items:flex-start!important;}
.settings-card .flex{display:block!important;flex:none!important;}
.settings-card .flex>.d-flex{display:block!important;margin:0!important;}
.settings-card .flex>h6,
.settings-card .flex>.d-flex>h6{display:block;margin:0 0 6px!important;line-height:1.25;}
.settings-card .flex>p{display:block;margin:0!important;line-height:1.45;}
</style>
