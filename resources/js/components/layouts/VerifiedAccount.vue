<template>
  <div class="d-flex flex-column card-bs p-3">
    <h4 class="fw-medium">Identification</h4>

    <!-- Profile -->
    <div class="row justify-content-between align-items-center p-2 mt-4">
      <div class="d-sm-flex justify-content-between">
        <div class="d-flex gap-3">
          <div class="pb-2">
            <img class="user-profile" src="/images/social/user.jpg" alt="">
          </div>
          <div class="pb-2">
            <div class="d-flex flex-wrap align-items-center gap-2">
              <h4 class="crypt-grayscale-100 fw-bold mb-0">Mr. Jhon</h4>
              <a class="verified alert align-items-center d-flex mb-0 gap-2" href="#!" role="button">
                ✅ Verified
              </a>
            </div>
            <div class="pb-2 text-sm mt-2">
              <a href="#" class="crypt-grayscale-600 link-light" role="button">
                Last Login: 12-15-2024 16:13:15 <span class="text-sm fw-bold">USA</span>
              </a>
            </div>
            <div class="d-flex flex-wrap align-items-center gap-3">
              <a class="d-flex gap-2 mb-2 verified gd-bg mt-2" href="#!">
                <p class="crypt-grayscale-600 mb-0 ms-1">UID:</p>
                <p class="crypt-grayscale-100 mb-0">35403204</p>
              </a>
            </div>
          </div>
        </div>

        
      </div>
    </div>

    <!-- Features -->
    <div class="mt-2 text-sm card-border gd-bg p-3">
      <h5 class="fw-medium mb-0 gd-text">Unlock Coin's Features</h5>
      <p class="crypt-grayscale-500 mb-3">
        You now have full access to all of Coin's features, and are in the highest tier for transaction limits.
      </p>
      <div class="d-sm-flex flex-row gap-4 mt-4">
        <h6 class="crypt-grayscale-500 mb-0"><span class="text-info">Unlimited</span> Deposit & Withdrawal Limits</h6>
        <h6 class="crypt-grayscale-500 mb-0">CryptCoin <span class="text-primary">Earn</span></h6>
        <h6 class="crypt-grayscale-500 mb-0"><span class="text-info">Enhanced</span> due diligence</h6>
      </div>
    </div>

    <!-- Account Limits -->
    <div class="mt-2 text-sm card-border p-3">
      <h5 class="fw-bold mb-3">Account Limits</h5>
      <div class="d-flex flex-row justify-content-between">
        <p class="crypt-grayscale-500">Fiat Deposit & Withdrawal Limits</p>
        <p class="crypt-blue">50K USD Daily</p>
      </div>
      <div class="d-flex flex-row justify-content-between">
        <p class="crypt-grayscale-500">Crypto Deposit Limit</p>
        <p class="crypt-blue">Unlimited</p>
      </div>
      <div class="d-flex flex-row justify-content-between">
        <p class="crypt-grayscale-500">Crypto Withdrawal Limit</p>
        <p class="crypt-blue">8M USDT Daily</p>
      </div>
      <div class="d-flex flex-row justify-content-between">
        <p class="crypt-grayscale-500">P2P Transaction Limits</p>
        <p class="crypt-blue">Unlimited</p>
      </div>
    </div>

    <!-- Personal Info -->
    <div class="mt-2 text-sm card-border p-3">
      <h5 class="fw-bold mb-3">Personal information</h5>
      <div class="d-flex flex-row justify-content-between">
        <p class="crypt-grayscale-500">Legal Name</p>
        <p class="crypt-grayscale-600">Mr. Jhon</p>
      </div>
      <div class="d-flex flex-row justify-content-between">
        <p class="crypt-grayscale-500">Date of Birth</p>
        <p class="crypt-grayscale-600">1991-12-10</p>
      </div>
      <div class="d-flex flex-row justify-content-between">
        <p class="crypt-grayscale-500">Address</p>
        <p class="crypt-grayscale-600">New Jersey, United States</p>
      </div>
      <div class="d-flex flex-row justify-content-between">
        <p class="crypt-grayscale-500">Identification Documents</p>
        <p class="crypt-grayscale-600">19**********29</p>
      </div>
      <div class="d-flex flex-row justify-content-between">
        <p class="crypt-grayscale-500 mb-0">Email Address</p>
        <p class="crypt-grayscale-600 mb-0">jh***@gmail.com</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VerifiedAccount'
}
</script>
