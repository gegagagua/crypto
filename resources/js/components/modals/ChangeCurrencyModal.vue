<template>
  <div class="modal fade" id="changeCurrencyModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header d-flex">
          <h5 class="d-flex align-items-center gap-3 crypt-grayscale-100 mb-0">Change Currency</h5>
          <button type="button" class="btn-close text-reset close-notify align-items-center justify-content-center" data-bs-dismiss="modal" aria-label="Close">
            <svg class="close-notify" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 4.5L4.5 13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.5 4.5L13.5 13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <div class="modal-body pt-4">
          <div class="card-border p-2">
            <label class="form-check mb-2 d-flex justify-content-between align-items-center">
              <span>USD – US Dollar</span>
              <input class="form-check-input" type="radio" value="USD" v-model="selected">
            </label>
            <label class="form-check mb-2 d-flex justify-content-between align-items-center">
              <span>EUR – Euro</span>
              <input class="form-check-input" type="radio" value="EUR" v-model="selected">
            </label>
            <label class="form-check d-flex justify-content-between align-items-center">
              <span>CAD – Canadian Dollar</span>
              <input class="form-check-input" type="radio" value="CAD" v-model="selected">
            </label>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-up" @click="save">Save</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChangeCurrencyModal',
  props: {
    current: { type: String, default: 'EUR' }
  },
  data() {
    return { selected: this.current }
  },
  watch: {
    current(n) { this.selected = n }
  },
  methods: {
    save() {
      // notify parent
      this.$emit('save', this.selected)
      // also persist here for safety (parent persists too)
      localStorage.setItem('currency', this.selected)

      // close the modal via Bootstrap API
      const el = document.getElementById('changeCurrencyModal')
      if (el && window.bootstrap) {
        const inst = window.bootstrap.Modal.getInstance(el) || new window.bootstrap.Modal(el)
        inst.hide()
      }
    }
  }
}
</script>

<style scoped>
:root, [data-bs-theme="light"] .modal-content { color: #212529; }
[data-bs-theme="dark"] .modal-content { color: #e9ecef; }
</style>
