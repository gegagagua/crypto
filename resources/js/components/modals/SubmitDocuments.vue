<template>
  <div
    class="modal fade"
    id="SubmitDocuments"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- Header -->
        <div class="modal-header d-flex">
          <h5 class="d-flex align-items-center gap-3 crypt-grayscale-100 mb-0">
            Submit Verification Documents
          </h5>
          <button
            type="button"
            class="btn-close text-reset close-notify align-items-center justify-content-center"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <svg class="close-notify" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 4.5L4.5 13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.5 4.5L13.5 13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <!-- Body -->
        <div class="modal-body">
          <div class="tab-pane fade show active pt-4" role="tabpanel">
            <!-- ========== PENDING SCREEN ========== -->
            <div v-if="status === 'pending'" class="pending-wrap">
              <div class="d-flex align-items-center gap-3 mb-3">
                <div class="badge-circle">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path opacity="0.2" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Z"/>
                    <path d="M10.243 16.314a1 1 0 0 1-1.486 0l-2.772-3.086a1 1 0 0 1 1.486-1.336l2.029 2.259 5.029-6.126a1 1 0 1 1 1.54 1.272l-5.826 7.017Z"/>
                  </svg>
                </div>
                <div>
                  <h5 class="mb-0 fw-bold">Documents submitted</h5>
                  <small class="crypt-grayscale-500">Status: <span class="fw-semibold text-warning">Pending review</span></small>
                </div>
              </div>

              <div class="card-bs p-3 mb-3">
                <p class="mb-2 crypt-grayscale-500">Submitted files</p>
                <ul class="list-unstyled mb-0 small">
                  <li v-for="(fileName, key) in submittedFileNames" :key="key" class="d-flex align-items-center gap-2 mb-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM8 12h8v2H8v-2zm0 4h8v2H8v-2zm6-9V3.5L18.5 7H14z"/>
                    </svg>
                    <span class="text-truncate">{{ fileName }}</span>
                  </li>
                  <li v-if="submittedFileNames.length === 0" class="crypt-grayscale-500">No file names available</li>
                </ul>
              </div>

              <div class="alert alert-info mb-0">
                Our compliance team is reviewing your submission. This typically takes
                <span class="fw-semibold">a few hours</span>. You’ll be notified once it’s approved.
              </div>
            </div>

            <!-- ========== FORM SCREEN ========== -->
            <template v-else>
              <!-- Document Type -->
              <div class="input-group mb-3 p-1">
                <div class="input-group-prepend input-group-text">Document Type</div>
                <select
                  v-model="docTypeRaw"
                  class="form-select text-sm crypt-grayscale-500"
                  @change="normalizeType"
                >
                  <option disabled value="">Select…</option>
                  <option value="id">ID Card</option>
                  <option value="passport">Passport</option>
                </select>
              </div>

              <!-- Switcher (forced remount on type change) -->
              <div :key="docType">
                <!-- ID Card -->
                <template v-if="docType === 'id'">
                  <div class="input-group mb-3 p-1">
                    <div class="input-group-prepend input-group-text">ID Front</div>
                    <input type="file" class="form-control placeholder-text" @change="onFileChange('idFront', $event)" />
                  </div>
                  <div class="input-group mb-3 p-1">
                    <div class="input-group-prepend input-group-text">ID Back</div>
                    <input type="file" class="form-control placeholder-text" @change="onFileChange('idBack', $event)" />
                  </div>
                </template>

                <!-- Passport -->
                <template v-else-if="docType === 'passport'">
                  <div class="input-group mb-3 p-1">
                    <div class="input-group-prepend input-group-text">Passport</div>
                    <input type="file" class="form-control placeholder-text" @change="onFileChange('passport', $event)" />
                  </div>
                </template>
              </div>

              <!-- Always required -->
              <div class="input-group mb-3 p-1">
                <div class="input-group-prepend input-group-text">Bank Statement</div>
                <input type="file" class="form-control placeholder-text" @change="onFileChange('bankStatement', $event)" />
              </div>

              <div class="input-group mb-3 p-1">
                <div class="input-group-prepend input-group-text">Proof of Address</div>
                <input type="file" class="form-control placeholder-text" @change="onFileChange('address', $event)" />
              </div>
            </template>
          </div>
        </div>

        <!-- Footer -->
        <div class="modal-footer" v-if="status === 'new'">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-up" @click="submitDocuments">Submit</button>
        </div>

        <div class="modal-footer" v-else>
          <button type="button" class="btn btn-outline-secondary" @click="replaceDocuments">
            Replace documents
          </button>
          <button type="button" class="btn btn-up" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubmitDocuments',
  data() {
    return {
      status: 'new',           // 'new' | 'pending'
      docTypeRaw: 'id',
      files: {
        idFront: null,
        idBack: null,
        passport: null,
        bankStatement: null,
        address: null
      }
    }
  },
  computed: {
    docType() {
      return this.normalize(this.docTypeRaw)
    },
    submittedFileNames() {
      // Build a small list of submitted file names
      const names = []
      if (this.files.idFront?.name) names.push(this.files.idFront.name)
      if (this.files.idBack?.name) names.push(this.files.idBack.name)
      if (this.files.passport?.name) names.push(this.files.passport.name)
      if (this.files.bankStatement?.name) names.push(this.files.bankStatement.name)
      if (this.files.address?.name) names.push(this.files.address.name)
      return names
    }
  },
  mounted() {
    // Restore saved status
    const saved = localStorage.getItem('kyc_status')
    if (saved) this.status = saved

    // Restore doc type if saved
    const savedType = localStorage.getItem('kyc_doc_type')
    if (savedType) this.docTypeRaw = savedType
  },
  watch: {
    docType(newVal) {
      // Clear opposite docs on switch
      if (newVal === 'id') {
        this.files.passport = null
      } else if (newVal === 'passport') {
        this.files.idFront = null
        this.files.idBack = null
      }
      localStorage.setItem('kyc_doc_type', newVal)
    }
  },
  methods: {
    normalizeType() {
      this.docTypeRaw = this.normalize(this.docTypeRaw)
    },
    normalize(v) {
      const s = String(v || '').toLowerCase().trim()
      if (s.includes('pass')) return 'passport'
      return 'id'
    },
    onFileChange(key, evt) {
      this.files[key] = evt.target.files?.[0] || null
    },
    submitDocuments() {
      // TODO: replace with real API call
      // After successful upload:
      this.status = 'pending'
      localStorage.setItem('kyc_status', 'pending')
    },
    replaceDocuments() {
      // Allow user to re-upload
      this.status = 'new'
      localStorage.setItem('kyc_status', 'new')
      // keep docType as user last selection
    }
  }
}
</script>

<style scoped>
/* Shell */
.modal-content { border-radius: 10px; border: none; }

/* Left labels */
.input-group-text {
  min-width: 160px;
  font-weight: 600;
  opacity: 1 !important;
  border: 1px solid rgba(255,255,255,0.1);
}
[data-bs-theme="light"] .input-group-text {
  background: #f1f3f5 !important;
  color: #212529 !important;
  border-color: #dee2e6 !important;
}
[data-bs-theme="dark"] .input-group-text {
  background: #2a2b31 !important;
  color: #ffffff !important;
  border-color: #3a3b3f !important;
}

/* Controls */
.form-control, .form-select {
  background: var(--bs-body-bg);
  border: 1px solid rgba(255,255,255,0.1);
  color: var(--bs-body-color);
}
[data-bs-theme="light"] .form-control, [data-bs-theme="light"] .form-select {
  background: #fff !important; color: #212529 !important; border-color: #dee2e6 !important;
}
[data-bs-theme="dark"] .form-control, [data-bs-theme="dark"] .form-select {
  background: #1e1f23 !important; color: #f1f1f1 !important; border-color: #3a3b3f !important;
}
.form-control:focus, .form-select:focus {
  border-color: #fbbf24 !important;
  box-shadow: 0 0 0 0.2rem rgba(251,191,36,0.25) !important;
}

/* Dropdown options */
:deep(select.form-select) option {
  background: var(--bs-body-bg);
  color: var(--bs-body-color);
}

/* Pending panel aesthetics */
.pending-wrap .badge-circle {
  width: 40px; height: 40px;
  display: grid; place-items: center;
  border-radius: 999px;
  background: rgba(251,191,36,0.15);
  color: #fbbf24;
}
.pending-wrap .card-bs {
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 8px;
}

/* Buttons */
.btn-up { background: #fbbf24; border: none; color: #000; font-weight: 600; }
.btn-up:hover { background: #f59e0b; }
</style>
