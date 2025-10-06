<template>
  <!-- Change Password Modal -->
  <div class="modal fade" id="changePasswordModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- Header -->
        <div class="modal-header">
          <h5 class="modal-title">Change Login Password</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>

        <!-- Body -->
        <div class="modal-body">
          <form id="passwordForm" @submit.prevent="handleSubmit" novalidate>
            <!-- Current Password -->
            <div class="mb-3">
              <label for="currentPassword" class="form-label">Current Password</label>
              <input
                type="password"
                id="currentPassword"
                v-model="currentPassword"
                class="form-control"
                required
              />
            </div>

            <!-- New Password -->
            <div class="mb-3">
              <label for="newPassword" class="form-label">New Password</label>
              <input
                type="password"
                id="newPassword"
                v-model="newPassword"
                class="form-control"
                required
              />
            </div>

            <!-- Confirm Password -->
            <div class="mb-3">
              <label for="confirmPassword" class="form-label">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                v-model="confirmPassword"
                class="form-control"
                required
              />
            </div>

            <!-- Submit -->
            <button type="submit" class="btn btn-primary w-100">Update Password</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChangePasswordModal",
  data() {
    return {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    };
  },
  methods: {
    async handleSubmit() {
      if (!this.currentPassword || !this.newPassword || !this.confirmPassword) {
        alert("Please fill in all fields.");
        return;
      }

      if (this.newPassword !== this.confirmPassword) {
        alert("New password and confirm password do not match.");
        return;
      }

      try {
        // Example API call (replace with your backend endpoint)
        const response = await fetch("/api/change-password", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            currentPassword: this.currentPassword,
            newPassword: this.newPassword,
          }),
        });

        if (!response.ok) throw new Error("Password update failed");

        const result = await response.json();
        console.log("Password updated:", result);
        alert("Password successfully updated!");

        // reset inputs
        this.currentPassword = "";
        this.newPassword = "";
        this.confirmPassword = "";
      } catch (error) {
        console.error("Error updating password:", error);
        alert("Failed to update password. Please try again.");
      }
    },
  },
};
</script>

<style scoped>
.modal-content {
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
}
.modal-title {
  font-weight: 700;
}
</style>
