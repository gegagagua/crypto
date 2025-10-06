<template>
  <!-- Delete Account Modal -->
  <div class="modal fade" id="deleteAccountModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0">
        <!-- Header -->
        <div class="modal-header border-0">
          <h5 class="modal-title text-danger fw-bold">Delete Account</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>

        <!-- Body -->
        <div class="modal-body">
          <p class="mb-3">
            This action is <span class="fw-bold text-danger">irreversible</span>.
            Once deleted, you will not be able to access your account or view
            your transaction history.
          </p>
          <p class="fw-bold">
            Please type <span class="text-danger">DELETE</span> below to confirm:
          </p>

          <input
            type="text"
            v-model="confirmText"
            class="form-control mb-3"
            placeholder="Type DELETE to confirm"
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
            class="btn btn-danger"
            :disabled="loading"
            @click="deleteAccount"
          >
            <span v-if="loading">Deleting...</span>
            <span v-else>Delete Account</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeleteAccountModal",
  data() {
    return {
      confirmText: "",
      loading: false,
      error: "",
    };
  },
  methods: {
    async deleteAccount() {
      if (this.confirmText !== "DELETE") {
        this.error = "You must type DELETE to confirm.";
        return;
      }

      this.error = "";
      this.loading = true;

      try {
        // Example API call - replace with your actual endpoint
        const response = await fetch("/api/delete-account", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) throw new Error("Failed to delete account");

        const result = await response.json();
        console.log("Account deleted:", result);

        alert("Your account has been permanently deleted.");
        // Optionally redirect or logout
        window.location.href = "/goodbye";
      } catch (err) {
        console.error("Delete error:", err);
        this.error = "Failed to delete account. Please try again.";
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
  border-color: #dc3545;
  box-shadow: none;
}
</style>
