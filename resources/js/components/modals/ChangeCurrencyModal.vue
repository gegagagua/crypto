<template>
  <div class="modal fade" :id="id" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header d-flex">
          <h5 class="d-flex align-items-center gap-3 crypt-grayscale-100 mb-0">
            Change Currency
          </h5>
          <button type="button"
                  class="btn-close text-reset close-notify align-items-center justify-content-center"
                  data-bs-dismiss="modal" aria-label="Close">
            <svg class="close-notify" width="18" height="18" viewBox="0 0 18 18" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 4.5L4.5 13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round"/>
              <path d="M4.5 4.5L13.5 13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <div class="modal-body pt-4">
          <div class="card-border p-2">
            <div class="form-check mb-2">
              <input class="form-check-input" type="radio" id="cur-usd" value="USD" v-model="selected">
              <label class="form-check-label" for="cur-usd">USD – US Dollar</label>
            </div>
            <div class="form-check mb-2">
              <input class="form-check-input" type="radio" id="cur-eur" value="EUR" v-model="selected">
              <label class="form-check-label" for="cur-eur">EUR – Euro</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" id="cur-cad" value="CAD" v-model="selected">
              <label class="form-check-label" for="cur-cad">CAD – Canadian Dollar</label>
            </div>
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
    id: { type: String, default: 'changeCurrencyModal' },
    current: { type: String, default: 'EUR' }
  },
  data () {
    return { selected: this.current }
  },
  watch: {
    current (v) { this.selected = v }
  },
  methods: {
    save () {
      // persist + notify parent
      localStorage.setItem('pref:currency', this.selected)
      this.$emit('changed', this.selected)
      // close via data-bs-dismiss behavior
      const el = document.getElementById(this.id)
      if (el) {
        // Bootstrap 5 modal instance close
        const modal = window.bootstrap?.Modal.getInstance(el) || new window.bootstrap.Modal(el)
        modal.hide()
      }
    }
  }
}
</script>

<style scoped>
/* Inherit your app’s modal look; keep text readable in both themes */
:root,[data-bs-theme="light"] .modal-content { color:#212529; }
[data-bs-theme="dark"] .modal-content { color:#e9ecef; }
</style>
