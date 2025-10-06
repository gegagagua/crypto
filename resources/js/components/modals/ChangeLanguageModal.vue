<template>
  <div class="modal fade" id="changeLanguageModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- Header (matches your Deposit modal vibe) -->
        <div class="modal-header d-flex">
          <h5 class="d-flex align-items-center gap-3 crypt-grayscale-100 mb-0">Change Language</h5>
          <button type="button" class="btn-close text-reset close-notify align-items-center justify-content-center" data-bs-dismiss="modal" aria-label="Close">
            <svg class="close-notify" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 4.5L4.5 13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.5 4.5L13.5 13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <div class="modal-body">
          <div class="pt-2">
            <!-- Radios look like your design system -->
            <div class="list-group card-border">
              <label class="list-group-item d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center gap-2">
                  <span class="crypt-grayscale-100 fw-medium">English</span>
                  <small class="crypt-grayscale-500">en</small>
                </div>
                <input class="form-check-input" type="radio" name="lang" value="en" v-model="selected" />
              </label>

              <label class="list-group-item d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center gap-2">
                  <span class="crypt-grayscale-100 fw-medium">German</span>
                  <small class="crypt-grayscale-500">de</small>
                </div>
                <input class="form-check-input" type="radio" name="lang" value="de" v-model="selected" />
              </label>

              <label class="list-group-item d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center gap-2">
                  <span class="crypt-grayscale-100 fw-medium">French</span>
                  <small class="crypt-grayscale-500">fr</small>
                </div>
                <input class="form-check-input" type="radio" name="lang" value="fr" v-model="selected" />
              </label>
            </div>

            <!-- Preview / hint -->
            <div class="mt-3 text-sm crypt-grayscale-500">
              Your choice will update the interface language after saving.
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button class="btn btn-editor btn-primary" @click="saveAndClose">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChangeLanguageModal',
  data() {
    return {
      selected: localStorage.getItem('language') || 'en'
    }
  },
  methods: {
    saveAndClose() {
      this.$emit('save', this.selected)
      // optional: also persist here for immediate consistency
      localStorage.setItem('language', this.selected)
      // close the modal
      const el = document.getElementById('changeLanguageModal')
      if (el) {
        const modal = window.bootstrap?.Modal.getInstance(el) || new window.bootstrap.Modal(el)
        modal.hide()
      }
    }
  }
}
</script>

<style scoped>
/* make list items feel like your DS cards */
.list-group {
  border-radius: 12px;
  overflow: hidden;
}
.list-group-item {
  background: transparent;
  border: 1px solid rgba(255,255,255,.06);
  display: flex;
  padding: .875rem 1rem;
}
.list-group-item + .list-group-item {
  border-top: none;
}

/* light mode support if your global CSS flips colors */
.crypt-light .list-group-item {
  border-color: rgba(0,0,0,.08);
}
</style>
