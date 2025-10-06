<template>
  <div class="modal fade" id="ChangeEmailModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h5 class="modal-title">Change Email</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body">
          <form @submit.prevent="submitForm" novalidate>

            <!-- New Email -->
            <div class="mb-3">
              <label for="newEmail" class="form-label">New Email</label>
              <input type="email" v-model="form.newEmail" id="newEmail" class="form-control" required>
            </div>

            <!-- Confirm Email -->
            <div class="mb-3">
              <label for="confirmEmail" class="form-label">Confirm Email</label>
              <input type="email" v-model="form.confirmEmail" id="confirmEmail" class="form-control" required>
            </div>

            <!-- Password -->
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" v-model="form.password" id="password" class="form-control" required>
            </div>

            <div class="mb-3 d-flex align-items-center gap-2">
              <input type="text" id="otp" class="form-control" placeholder="Enter OTP" v-model="otp" required />
              <button type="button" class="btn btn-primary otp-btn" @click="sendOtp">
                Send OTP
              </button>
            </div>


            <!-- Submit -->
            <button type="submit" class="btn btn-primary w-100">Update Email</button>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChangeEmailModal',
  data() {
    return {
      form: {
        newEmail: '',
        confirmEmail: '',
        password: '',
        otp: ''
      },
      loadingOtp: false,
    };
  },
  methods: {
    async sendOtp() {
      if (!this.form.newEmail) {
        alert("Please enter new email before sending OTP.");
        return;
      }
      this.loadingOtp = true;
      try {
        // API request to backend to send OTP email
        const res = await fetch("/api/send-otp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: this.form.newEmail })
        });
        const data = await res.json();
        if (res.ok) {
          alert("OTP sent to " + this.form.newEmail);
        } else {
          alert(data.message || "Failed to send OTP");
        }
      } catch (e) {
        alert("Error sending OTP");
      } finally {
        this.loadingOtp = false;
      }
    },

    async submitForm() {
      if (this.form.newEmail !== this.form.confirmEmail) {
        alert("Emails do not match!");
        return;
      }
      if (!this.form.otp) {
        alert("Please enter OTP to verify.");
        return;
      }

      try {
        const res = await fetch("/api/update-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.form)
        });
        const data = await res.json();
        if (res.ok) {
          alert("Email updated successfully!");
          window.location.reload();
        } else {
          alert(data.message || "Failed to update email");
        }
      } catch (e) {
        alert("Error updating email");
      }
    }
  }
}
</script>

<style>
.btn-otp {
  background: linear-gradient(135deg, #007bff, #0056b3);
  color: #fff;
  border: none;
  font-weight: 600;
  padding: 6px 14px;
  /* smaller padding */
  border-radius: 6px;
  transition: all 0.2s ease-in-out;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 100%;
  /* match input height */
  white-space: nowrap;
  /* keep text in one line */
}

.btn-otp:hover {
  background: linear-gradient(135deg, #0056b3, #003f7f);
  transform: translateY(-1px);
  box-shadow: 0 3px 8px rgba(0, 123, 255, 0.3);
}

.btn-otp:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

.otp-btn {
  white-space: nowrap;
  padding: 0.45rem 1rem;
  font-weight: 600;
  border-radius: 8px;
  background: #0d6efd; /* Bootstrap primary blue */
  border: none;
  transition: background 0.2s ease;
}

.otp-btn:hover {
  background: #0b5ed7; /* slightly darker on hover */
}

</style>