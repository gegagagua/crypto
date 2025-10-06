<template>
  <div class="page d-flex">
    <!-- Sidebar -->
    <Navbar />

    <!-- Main area -->
    <div class="flex-fill d-flex flex-column">
      <!-- Header -->
      <HeaderBar />

      <!-- Offcanvas (mobile) -->
      <OffcanvasNav />

      <!-- Page content -->
      <div class="wrapper p-3">
        <h2 class="text-light fw-bold mb-3">Account Settings</h2>

        <!-- Settings -->
        <div class="d-flex flex-column pb-4">
          <!-- Two-Factor Authentication (2FA) -->
          <div class="card-bs p-3 p-sm-4 mt-2">
            <h5 class="crypt-grayscale-100 fw-bold mb-4">
              Two-Factor Authentication (2FA)
            </h5>

            <!-- Email -->
            <div class="row align-items-center justify-content-between mb-4 mb-sm-3">
              <div class="col-12 col-md-6">
                <div class="d-sm-flex gap-3 text-warning">
                  <div class="flex mb-2">
                    <svg class="circle p-2 card-bs-tabs" width="38" height="38" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.4"
                        d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                        fill="currentColor" />
                      <path
                        d="M11.9998 12.87C11.1598 12.87 10.3098 12.61 9.65978 12.08L6.52978 9.57997C6.20978 9.31997 6.14978 8.84997 6.40978 8.52997C6.66978 8.20997 7.13978 8.14997 7.45978 8.40997L10.5898 10.91C11.3498 11.52 12.6398 11.52 13.3998 10.91L16.5298 8.40997C16.8498 8.14997 17.3298 8.19997 17.5798 8.52997C17.8398 8.84997 17.7898 9.32997 17.4598 9.57997L14.3298 12.08C13.6898 12.61 12.8398 12.87 11.9998 12.87Z"
                        fill="currentColor" />
                    </svg>
                  </div>
                  <div class="flex">
                    <h6 class="text-light fs-6 fw-bold">Email</h6>
                    <p class="crypt-grayscale-500">
                      Use your email to protect your account and transactions.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 text-end">
                <a href="#!" class="btn btn-editor btn-dark text-sm" data-bs-toggle="modal"
                  data-bs-target="#ChangeEmailModal">
                  Manage
                </a>
              </div>
            </div>

            <!-- Phone -->
            <div class="row align-items-center justify-content-between mb-4 mb-sm-3">
              <div class="col-12 col-md-6">
                <div class="d-sm-flex gap-3 text-info">
                  <div class="flex mb-2">
                    <svg class="circle p-2 card-bs-tabs" width="38" height="38" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.4"
                        d="M16.24 2H7.76C5 2 4 3 4 5.81V18.19C4 21 5 22 7.76 22H16.23C19 22 20 21 20 18.19V5.81C20 3 19 2 16.24 2Z"
                        fill="currentColor" />
                      <path
                        d="M14 6.25H10C9.59 6.25 9.25 5.91 9.25 5.5C9.25 5.09 9.59 4.75 10 4.75H14C14.41 4.75 14.75 5.09 14.75 5.5C14.75 5.91 14.41 6.25 14 6.25Z"
                        fill="currentColor" />
                      <path
                        d="M12 19.3C12.9665 19.3 13.75 18.5165 13.75 17.55C13.75 16.5835 12.9665 15.8 12 15.8C11.0335 15.8 10.25 16.5835 10.25 17.55C10.25 18.5165 11.0335 19.3 12 19.3Z"
                        fill="currentColor" />
                    </svg>
                  </div>
                  <div class="flex">
                    <h6 class="text-light fs-6 fw-bold">Phone</h6>
                    <p class="crypt-grayscale-500">
                      Used to verify account logins, withdrawals, API creation,
                      etc. Can be switched with Google Verification (and vice
                      versa).
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 text-end">
                <!-- opens ChangePhoneModal -->
                <a href="#!" class="btn btn-editor btn-dark text-sm" data-bs-toggle="modal"
                  data-bs-target="#changePhoneModal">Link</a>
              </div>
            </div>

            <!-- Login Password -->
            <div class="row align-items-center justify-content-between mb-4 mb-sm-3">
              <div class="col-12 col-md-6">
                <div class="d-sm-flex gap-3 text-danger">
                  <div class="flex mb-2">
                    <svg class="circle p-2 card-bs-tabs" width="38" height="38" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15 22C14.59 22 14.25 21.66 14.25 21.25V2.75C14.25 2.34 14.59 2 15 2C15.41 2 15.75 2.34 15.75 2.75V21.25C15.75 21.66 15.41 22 15 22Z"
                        fill="currentColor" />
                    </svg>
                  </div>
                  <div class="flex">
                    <h6 class="text-light fs-6 fw-bold">Login Password</h6>
                    <p class="crypt-grayscale-500">
                      Login password is used to log in to your account.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6 text-end">
                <!-- opens ChangePasswordModal -->
                <a href="#!" class="btn btn-editor btn-dark text-sm" data-bs-toggle="modal"
                  data-bs-target="#changePasswordModal">Manage</a>
              </div>
            </div>
          </div>

          <!-- Devices Management -->
          <div class="card-bs p-3 p-sm-4 mt-2">
            <h5 class="crypt-grayscale-100 fw-bold mb-4">Devices and Activities</h5>

            <!-- Account Activity -->
            <div class="row align-items-center justify-content-between mb-4 mb-sm-3">
              <div class="col-12 col-md-6">
                <div class="d-sm-flex gap-3 text-primary">
                  <div class="flex mb-2">
                    <svg class="circle p-2 card-bs-tabs" width="38" height="38" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.4"
                        d="M10.49 2.23006L5.50003 4.10007C4.35003 4.53007 3.41003 5.89006 3.41003 7.12006V14.5501C3.41003 15.7301 4.19005 17.2801 5.14005 17.9901L9.44003 21.2001C10.85 22.2601 13.17 22.2601 14.58 21.2001L18.88 17.9901C19.83 17.2801 20.61 15.7301 20.61 14.5501V7.12006C20.61 5.89006 19.67 4.53007 18.52 4.10007L13.53 2.23006C12.68 1.92006 11.32 1.92006 10.49 2.23006Z"
                        fill="currentColor" />
                      <path
                        d="M11.9 11.3C11.92 11.3 11.94 11.3 11.96 11.3H11.98H12C13.15 11.26 14.05 10.33 14.06 9.17003C14.06 7.99003 13.1 7.03003 11.92 7.03003C10.74 7.03003 9.78003 7.99003 9.78003 9.17003C9.80003 10.32 10.7 11.26 11.9 11.3Z"
                        fill="currentColor" />
                      <path
                        d="M14.19 13.4101C12.98 12.6101 11.02 12.6101 9.80002 13.4101C9.24002 13.7901 8.91003 14.3301 8.91003 14.8901C8.91003 15.4601 9.23002 15.9801 9.80002 16.3601C10.41 16.7601 11.2 16.9701 11.99 16.9701C12.78 16.9701 13.58 16.7701 14.18 16.3601C14.74 15.9801 15.07 15.4401 15.07 14.8801C15.08 14.3101 14.76 13.7901 14.19 13.4101Z"
                        fill="currentColor" />
                    </svg>
                  </div>
                  <div class="flex">
                    <h6 class="text-light fs-6 fw-bold">Account Activity</h6><br>
                    <p class="crypt-grayscale-500">Last login: 2024-12-05 02:22:45</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Devices and IP Table -->
            <div class="trusted-devices-section">
              <h6 class="text-light fs-6 fw-bold">Trusted Devices and IP Addresses</h6>
              <div class="table-responsive card-border">
                <table class="table table-dark table-hover card-bs mb-0">
                  <thead>
                    <tr class="table-active mb-0">
                      <th scope="col" class="underline">Trusted Device</th>
                      <th scope="col" class="underline">Location</th>
                      <th scope="col" class="underline">Login IP</th>
                      <th scope="col" class="underline">Type</th>
                      <th scope="col" class="underline">Last Login</th>
                      <th scope="col" class="underline">Remove Device</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="align-middle alert alert-dismissible fade show">
                      <td>
                        <svg class="me-2" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="1em"
                          height="1em" fill="currentColor">
                          <path
                            d="M192 170.656A21.344 21.344 0 00170.656 192v469.344c0 11.776 9.536 21.344 21.344 21.344h640a21.344 21.344 0 0021.344-21.344V192A21.344 21.344 0 00832 170.656H192zM85.344 192A106.656 106.656 0 01192 85.344h640A106.656 106.656 0 01938.656 192v469.344A106.656 106.656 0 01832 768H192A106.656 106.656 0 0185.344 661.344V192z">
                          </path>
                          <path
                            d="M512 682.656c23.552 0 42.656 19.104 42.656 42.656v128h170.656a42.656 42.656 0 010 85.312H298.656a42.656 42.656 0 010-85.312h170.656v-128c0-23.552 19.104-42.656 42.656-42.656z">
                          </path>
                        </svg>
                        Chrome V131.0.0.0 (Windows)
                      </td>
                      <td>New Jersey, United States</td>
                      <td>226.217.16.40</td>
                      <td class="text-success mb-0 align-items-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.4"
                            d="M10.96 2.05996L5.45999 4.11996C4.40999 4.51996 3.54999 5.75996 3.54999 6.88996V14.99C3.54999 15.8 4.07999 16.87 4.72999 17.35L10.23 21.46C11.2 22.19 12.79 22.19 13.76 21.46L19.26 17.35C19.91 16.86 20.44 15.8 20.44 14.99V6.88996C20.44 5.76996 19.58 4.51996 18.53 4.12996L13.03 2.06996C12.47 1.84996 11.53 1.84996 10.96 2.05996Z"
                            fill="currentColor" />
                          <path
                            d="M10.66 14.23C10.47 14.23 10.28 14.16 10.13 14.01L8.51999 12.4C8.22999 12.11 8.22999 11.63 8.51999 11.34C8.80999 11.05 9.28999 11.05 9.57999 11.34L10.66 12.42L14.43 8.65C14.72 8.36 15.2 8.36 15.49 8.65C15.78 8.94 15.78 9.42 15.49 9.71L11.19 14.01C11.04 14.16 10.85 14.23 10.66 14.23Z"
                            fill="currentColor" />
                        </svg>
                        Trusted Device
                      </td>
                      <td>12/5/2024, 02:22:35</td>
                      <td>
                        <a class="btn-info verified fw-medium py-1" href="#!" data-bs-dismiss="alert"
                          aria-label="Close">Remove Device</a>
                      </td>
                    </tr>
                    <tr class="align-middle">
                      <td>
                        <svg class="me-2" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="1em"
                          height="1em" fill="currentColor">
                          <path
                            d="M192 170.656A21.344 21.344 0 00170.656 192v469.344c0 11.776 9.536 21.344 21.344 21.344h640a21.344 21.344 0 0021.344-21.344V192A21.344 21.344 0 00832 170.656H192zM85.344 192A106.656 106.656 0 01192 85.344h640A106.656 106.656 0 01938.656 192v469.344A106.656 106.656 0 01832 768H192A106.656 106.656 0 0185.344 661.344V192z">
                          </path>
                          <path
                            d="M512 682.656c23.552 0 42.656 19.104 42.656 42.656v128h170.656a42.656 42.656 0 010 85.312H298.656a42.656 42.656 0 010-85.312h170.656v-128c0-23.552 19.104-42.656 42.656-42.656z">
                          </path>
                        </svg>
                        Windows Chrome 131
                      </td>
                      <td>New Jersey, United States</td>
                      <td>157.94.165.154</td>
                      <td>-</td>
                      <td>12/5/2024, 02:22:35</td>
                      <td>
                        <a class="text-bg-bs verified fw-medium py-1" href="#!">Remove Device</a>
                      </td>
                    </tr>
                    <tr class="align-middle">
                      <td>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                          stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                          xmlns="http://www.w3.org/2000/svg">
                          <rect x="5" y="2" width="12" height="18" rx="2" ry="2"></rect>
                          <line x1="12" y1="18" x2="12.01" y2="18"></line>
                        </svg>
                        iPhone
                      </td>
                      <td>Florida, United States</td>
                      <td>74.43.110.45</td>
                      <td>-</td>
                      <td>12/5/2024, 02:22:35</td>
                      <td>
                        <a class="text-bg-bs verified fw-medium py-1" href="#!">Remove Device</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- Account Management -->
          <div class="card-bs p-3 p-sm-4 mt-2">
            <h5 class="crypt-grayscale-100 fw-bold mb-4">Account Management</h5>
            <!-- Disable Account -->
            <div class="row align-items-center justify-content-between mb-4 mb-sm-3">
              <div class="col-12 col-md-6">
                <div class="d-sm-flex gap-3 text-warning">
                  <div class="flex mb-2">
                    <svg class="circle p-2 card-bs-tabs" width="38" height="38" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20.97 14.33C20.25 13.51 19.18 13 18 13C16.88 13 15.86 13.46 15.13 14.21C14.43 14.93 14 15.92 14 17C14 17.75 14.21 18.46 14.58 19.06C14.78 19.4 15.04 19.71 15.34 19.97C16.04 20.61 16.97 21 18 21C19.46 21 20.73 20.22 21.42 19.06C21.63 18.72 21.79 18.33 21.88 17.93C21.96 17.63 22 17.32 22 17C22 15.98 21.61 15.04 20.97 14.33ZM19.5 17.73H16.51C16.1 17.73 15.76 17.39 15.76 16.98C15.76 16.57 16.1 16.23 16.51 16.23H19.5C19.91 16.23 20.25 16.57 20.25 16.98C20.25 17.39 19.91 17.73 19.5 17.73Z"
                        fill="currentColor" />
                      <path opacity="0.4"
                        d="M21.09 21.5C21.09 21.78 20.87 22 20.59 22H3.40991C3.12991 22 2.90991 21.78 2.90991 21.5C2.90991 17.36 6.98994 14 11.9999 14C13.0299 14 14.03 14.14 14.95 14.41C14.36 15.11 13.9999 16.02 13.9999 17C13.9999 17.75 14.21 18.46 14.58 19.06C14.78 19.4 15.04 19.71 15.34 19.97C16.04 20.61 16.9699 21 17.9999 21C19.1199 21 20.1299 20.54 20.8499 19.8C21.0099 20.34 21.09 20.91 21.09 21.5Z"
                        fill="currentColor" />
                      <path
                        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                        fill="currentColor" />
                    </svg>
                  </div>
                  <div class="flex">
                    <h6 class="text-light fs-6 fw-bold">Disable Account</h6>
                    <p class="crypt-grayscale-500">
                      Once the account is disabled, most of your actions will be restricted, such as logging in and
                      trading. You can choose to unblock the account at any time.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="d-flex justify-content-sm-end align-items-center gap-2 text-primary text-sm">
                  <!-- opens DisableAccountModal -->
                  <a href="#!" class="btn btn-editor btn-dark text-sm ms-2" data-bs-toggle="modal"
                    data-bs-target="#disableAccountModal">Disable</a>
                </div>
              </div>
            </div>

            <!-- Delete Account -->
            <div class="row align-items-center justify-content-between mb-4 mb-sm-3">
              <div class="col-12 col-md-6">
                <div class="d-sm-flex gap-3 text-danger">
                  <div class="flex mb-2">
                    <svg class="circle p-2 card-bs-tabs" width="38" height="38" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.4"
                        d="M21.09 21.5C21.09 21.78 20.87 22 20.59 22H3.41003C3.13003 22 2.91003 21.78 2.91003 21.5C2.91003 17.36 6.99003 14 12 14C13.03 14 14.03 14.14 14.95 14.41C14.36 15.11 14 16.02 14 17C14 17.75 14.21 18.46 14.58 19.06C14.78 19.4 15.04 19.71 15.34 19.97C16.04 20.61 16.97 21 18 21C19.12 21 20.13 20.54 20.85 19.8C21.01 20.34 21.09 20.91 21.09 21.5Z"
                        fill="currentColor" />
                      <path
                        d="M21.88 16.04C21.78 15.65 21.62 15.26 21.4 14.91C21.25 14.65 21.05 14.4 20.83 14.17C20.11 13.45 19.17 13.06 18.21 13.01C17.12 12.94 16.01 13.34 15.17 14.17C14.38 14.96 13.98 16.01 14 17.06C14.01 18.06 14.41 19.06 15.17 19.83C15.7 20.36 16.35 20.71 17.04 20.87C17.42 20.97 17.82 21.01 18.22 20.98C19.17 20.94 20.1 20.56 20.83 19.83C21.86 18.8 22.21 17.35 21.88 16.04ZM19.6 18.6C19.31 18.89 18.83 18.89 18.54 18.6L17.99 18.05L17.46 18.58C17.17 18.87 16.69 18.87 16.4 18.58C16.11 18.28 16.11 17.81 16.4 17.52L16.93 16.99L16.42 16.49C16.13 16.19 16.13 15.72 16.42 15.42C16.72 15.13 17.19 15.13 17.49 15.42L17.99 15.93L18.52 15.4C18.81 15.11 19.28 15.11 19.58 15.4C19.87 15.69 19.87 16.17 19.58 16.46L19.05 16.99L19.6 17.54C19.89 17.83 19.89 18.31 19.6 18.6Z"
                        fill="currentColor" />
                      <path
                        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                        fill="currentColor" />
                    </svg>
                  </div>
                  <div class="flex">
                    <h6 class="text-light fs-6 fw-bold">Delete Account</h6>
                    <p class="crypt-grayscale-500">
                      Please note that account deletion is irreversible. Once deleted, you will not be able to access
                      your account or view your transaction history.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="d-flex justify-content-sm-end align-items-center gap-2 text-primary text-sm">
                  <!-- opens DeleteAccountModal -->
                  <a class="btn btn-editor btn-danger text-sm ms-2" href="#!" data-bs-toggle="modal"
                    data-bs-target="#deleteAccountModal">Delete</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modals (mounted once globally is fine) -->
    <DepositModal />
    <WithdrawModal />
    <ConvertModal />
    <ChangeEmailModal />
    <CurrencyModal />

    <ChangePhoneModal />
    <ChangePasswordModal />
    <DisableAccountModal />
    <DeleteAccountModal />
  </div>
</template>

<script>
import Navbar from "./layouts/navbar.vue";
import HeaderBar from "./layouts/HeaderBar.vue";
import OffcanvasNav from "./layouts/OffcanvasNav.vue";

import DepositModal from "./modals/DepositModal.vue";
import WithdrawModal from "./modals/WithdrawModal.vue";
import ConvertModal from "./modals/ConvertModal.vue";
import ChangeEmailModal from "./modals/ChangeEmailModal.vue";
import CurrencyModal from "./modals/CurrencyModal.vue";

import ChangePhoneModal from "./modals/ChangePhoneModal.vue";
import ChangePasswordModal from "./modals/ChangePasswordModal.vue";
import DisableAccountModal from "./modals/DisableAccountModal.vue";
import DeleteAccountModal from "./modals/DeleteAccountModal.vue";

export default {
  name: "Security",
  components: {
    Navbar,
    HeaderBar,
    OffcanvasNav,
    DepositModal,
    WithdrawModal,
    ConvertModal,
    ChangeEmailModal,
    CurrencyModal,
    ChangePhoneModal,
    ChangePasswordModal,
    DisableAccountModal,
    DeleteAccountModal,
  },
};
</script>

<style scoped>
.row .flex {
  display: flex;
  flex-direction: column;
}


/* Fix for text alignment under each other */
.d-sm-flex.gap-3 .flex {
  display: flex;
  flex-direction: column;
  /* stack items vertically */
  justify-content: center;
}

.d-sm-flex.gap-3 .flex h6 {
  margin-bottom: 4px;
  /* space between heading and description */
}

.d-sm-flex.gap-3 .flex p {
  margin: 0;
  /* remove default large spacing */
  line-height: 1.4;
}

/* Force "Trusted Devices and IP Addresses" heading and table to stack */
.trusted-devices-section {
  display: flex;
  flex-direction: column;
  /* stack heading and table */
  gap: 0.75rem;
  /* space between heading and table */
}

/* Heading style stays as-is */
.trusted-devices-section h6 {
  margin-bottom: 0;
  /* no extra spacing so gap controls it */
}

/* Table box gets its own spacing */
.trusted-devices-section .table-responsive {
  margin-top: 0;
}
</style>