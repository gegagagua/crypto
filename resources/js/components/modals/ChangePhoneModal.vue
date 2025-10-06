<template>
  <!-- Change Phone Modal -->
  <div class="modal fade" id="changePhoneModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- Header -->
        <div class="modal-header">
          <h5 class="modal-title">Change Phone Number</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <!-- Body -->
        <div class="modal-body">
          <form id="changePhoneForm" @submit.prevent="handleSubmit" novalidate>
            <!-- Old phone (read-only) -->
            <div class="mb-3">
              <label class="form-label">Current Phone</label>
              <input
                type="text"
                class="form-control"
                :value="currentPhone"
                readonly
              />
            </div>

            <!-- New phone input -->
            <div class="mb-3">
              <label for="newPhoneNumber" class="form-label">New Phone Number</label>
              <input
                type="tel"
                id="newPhoneNumber"
                v-model="newPhone"
                class="form-control"
                placeholder="+44 123 XXX XXX"
                required
              />
            </div>

            <!-- Verification row -->
            <div class="mb-3 d-flex align-items-center gap-2">
              <button
                type="button"
                class="btn btn-outline-primary flex-shrink-0"
                @click="sendSmsCode"
              >
                Send SMS
              </button>
              <input
                type="text"
                v-model="smsCode"
                class="form-control"
                placeholder="Enter code"
              />
            </div>

            <!-- Submit -->
            <button type="submit" class="btn btn-primary w-100">
              Verify & Update
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChangePhoneModal",
  props: {
    currentPhone: {
      type: String,
      default: "+000 *** *** ***", // neutral default if none provided
    },
  },
  data() {
    return {
      newPhone: "",
      smsCode: "",
    };
  },
  computed: {
    maskedPhone() {
      if (!this.currentPhone) return "+000 *** *** ***";

      const digits = this.currentPhone.split(" ");
      const cc = digits[0]; // country code part e.g. +995
      const masked = digits
        .slice(1)
        .map((d, i) => (i < digits.length - 2 ? "***" : d))
        .join(" ");

      return `${cc} ${masked}`;
    },
  },
  methods: {
    async sendSmsCode() {
      if (!this.newPhone) {
        alert("Please enter a new phone number first.");
        return;
      }

      try {
        // Example API call (replace with your real endpoint)
        const response = await fetch("/api/send-sms", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone: this.newPhone }),
        });

        if (!response.ok) throw new Error("Failed to send SMS code");

        const result = await response.json();
        console.log("SMS sent:", result);
        alert("Verification code sent to " + this.newPhone);
      } catch (error) {
        console.error("Error sending SMS:", error);
        alert("Could not send SMS. Please try again.");
      }
    },

    async handleSubmit() {
      if (!this.newPhone || !this.smsCode) {
        alert("Please fill in all fields.");
        return;
      }

      try {
        // Example API call (replace with your real endpoint)
        const response = await fetch("/api/verify-sms", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            phone: this.newPhone,
            code: this.smsCode,
          }),
        });

        if (!response.ok) throw new Error("Verification failed");

        const result = await response.json();
        console.log("Phone updated:", result);
        alert("Phone number successfully updated!");
      } catch (error) {
        console.error("Error verifying phone:", error);
        alert("Verification failed. Please try again.");
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
