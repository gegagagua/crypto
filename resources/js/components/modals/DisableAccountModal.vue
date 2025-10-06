<template>
  <!-- Disable Account Modal -->
  <div class="modal fade" id="disableAccountModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0">
        <!-- Header -->
        <div class="modal-header border-0">
          <h5 class="modal-title text-warning fw-bold">Disable Account</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>

        <!-- Body -->
        <div class="modal-body">
          <p class="mb-3">
            Disabling your account will <span class="fw-bold text-warning">temporarily restrict</span> your access to trading, logins, and other actions.
            You can re-enable it at any time by contacting support or logging back in with verification.
          </p>
          <p class="fw-bold">
            Please type <span class="text-warning">DISABLE</span> below to confirm:
          </p>

          <input
            type="text"
            v-model="confirmText"
            class="form-control mb-3"
            placeholder="Type DISABLE to confirm"
          />

          <!-- Error message -->
          <div v-if="error" class="alert alert-danger py-2">{{ error }}</div>
        </div>

        <!-- Footer -->
        <div class="modal-footer border-0">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button
            type="button"
            class="btn btn-warning text-dark fw-bold"
            :disabled="loading"
            @click="disableAccount"
          >
            <span v-if="loading">Disabling...</span>
            <span v-else>Disable Account</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DisableAccountModal",
  data() {
    return {
      confirmText: "",
      loading: false,
      error: "",
    };
  },
  methods: {
    async disableAccount() {
      if (this.confirmText !== "DISABLE") {
        this.error = "You must type DISABLE to confirm.";
        return;
      }

      this.error = "";
      this.loading = true;

      try {
        // Example API call - replace with your actual endpoint
        const response = await fetch("/api/disable-account", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) throw new Error("Failed to disable account");

        const result = await response.json();
        console.log("Account disabled:", result);

        alert("Your account has been disabled. You can re-enable it anytime.");
        // Optionally refresh page or redirect
        window.location.reload();
      } catch (err) {
        console.error("Disable error:", err);
        this.error = "Failed to disable account. Please try again.";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.modal-content {
  border-radius: 12px;
  background: #111316;
  color: #fff;
}
.modal-title {
  font-size: 1.25rem;
}
.form-control {
  background: #1a1d21;
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #fff;
}
.form-control:focus {
  border-color: #ffc107;
  box-shadow: none;
}
</style>
