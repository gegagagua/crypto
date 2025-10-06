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
                            <a class="unverified-badge" href="#!" role="button">
                                ❌ Unverified
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
                To unlock all features, please complete verification by providing:
            </p>
            <ul class="crypt-grayscale-500">
                <li>Valid ID card (front and back) or Passport</li>
                <li>Proof of address (Bank statement / Utility bill)</li>
            </ul>
            <button class="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#SubmitDocuments">
                Get Verified
            </button>
        </div>

        <!-- Account Limits -->
        <div class="mt-2 text-sm card-border p-3">
            <h5 class="fw-bold mb-3">Account Limits</h5>
            <div class="d-flex flex-row justify-content-between">
                <p class="crypt-grayscale-500">Fiat Deposit & Withdrawal Limits</p>
                <p class="crypt-blue">0 USD</p>
            </div>
            <div class="d-flex flex-row justify-content-between">
                <p class="crypt-grayscale-500">Crypto Deposit Limit</p>
                <p class="crypt-blue">0</p>
            </div>
            <div class="d-flex flex-row justify-content-between">
                <p class="crypt-grayscale-500">Crypto Withdrawal Limit</p>
                <p class="crypt-blue">0</p>
            </div>
            <div class="d-flex flex-row justify-content-between">
                <p class="crypt-grayscale-500">P2P Transaction Limits</p>
                <p class="crypt-blue">0</p>
            </div>
        </div>

        <!-- Personal Info -->
        <div class="mt-2 text-sm card-border p-3">
            <h5 class="fw-bold mb-3">Personal information</h5>
            <div class="d-flex flex-row justify-content-between">
                <p class="crypt-grayscale-500">Identification Documents</p>
                <p class="crypt-grayscale-600">Unverified</p>
            </div>
        </div>

        <!-- Submit Documents Modal -->
        <SubmitDocuments />
    </div>
</template>

<script>
import SubmitDocuments from '../modals/SubmitDocuments.vue'

export default {
    name: 'UnverifiedAccount',
    components: {
        SubmitDocuments
    }
}
</script>

<style>
.unverified-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 6px;
  background: rgba(220, 53, 69, 0.15); /* soft red bg */
  color: #dc3545; /* red text */
  border: 1px solid rgba(220, 53, 69, 0.3);
  text-decoration: none;
  cursor: default;
  line-height: 1.2;
}
.unverified-badge:hover {
  background: rgba(220, 53, 69, 0.25); /* subtle hover effect */
}
</style>