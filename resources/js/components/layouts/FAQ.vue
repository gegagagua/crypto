<template>
  <div id="scrollFaq" class="card shadow-sm p-3 faq-wrapper">
    <h4 class="fw-medium mb-3">FAQ</h4>

    <!-- Accordion -->
    <div class="accordion pb-4" id="faqAccordion">
      <!-- Q1 -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button fs-6" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            What is Identity Verification?
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
             data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            Identity verification ensures account safety and compliance with regulations.
          </div>
        </div>
      </div>

      <!-- Q2 -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button fs-6 collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Why do I need to complete Identity Verification?
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
             data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            Completing verification protects your account and lets you use features like higher withdrawal limits and P2P trading.
          </div>
        </div>
      </div>

      <!-- Q3 -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button fs-6 collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Which documents are required for Identity Verification?
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
             data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            Typically a government-issued ID (passport, national ID, driver’s license) and sometimes a proof of address.
          </div>
        </div>
      </div>

      <!-- Q4 -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFour">
          <button class="accordion-button fs-6 collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            Where can I find help for Identity Verification?
          </button>
        </h2>
        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
             data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            Check our Help Center and contact support if your document was rejected or you need to retry verification.
          </div>
        </div>
      </div>

      <!-- Q5 -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFive">
          <button class="accordion-button fs-6 collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            How long does the verification process take?
          </button>
        </h2>
        <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
             data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            Verification usually takes a few minutes to a few hours. In rare cases, it may take up to 24–48 hours if additional review is required.
          </div>
        </div>
      </div>

      <!-- Q6 -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingSix">
          <button class="accordion-button fs-6 collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
            What happens if my documents are rejected?
          </button>
        </h2>
        <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix"
             data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            If your documents are rejected, you will be notified by email with the reason. You can resubmit updated or clearer documents for another review.
          </div>
        </div>
      </div>

      <!-- Q7 -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingSeven">
          <button class="accordion-button fs-6 collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
            Is my personal information secure?
          </button>
        </h2>
        <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven"
             data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            Yes, we use bank-level encryption and strict privacy policies to protect your data. Your information is never shared with third parties without your consent.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAQ'
}
</script>

<style scoped>
/* Ensure collapse always shows content */
.faq-wrapper .accordion-collapse.show,
.faq-wrapper .accordion-collapse.collapsing,
.faq-wrapper .accordion-body {
  display: block !important;
  height: auto !important;
  overflow: visible !important;
  opacity: 1 !important;
  visibility: visible !important;
  color: inherit !important;
}

/* Accordion buttons reset */
.faq-wrapper .accordion-button {
  box-shadow: none !important;
  transition: none !important;
}

/* Dark mode */
[data-bs-theme="dark"] .faq-wrapper .accordion-button {
  background: #1e1f23 !important;
  color: #fff !important;
}
[data-bs-theme="dark"] .faq-wrapper .accordion-button:not(.collapsed) {
  background: #2a2b31 !important;
  color: #fff !important;
}
[data-bs-theme="dark"] .faq-wrapper .accordion-body {
  background: #1e1f23 !important;
  color: #e5e5e5 !important;
}

/* Light mode */
[data-bs-theme="light"] .faq-wrapper .accordion-button {
  background: #f8f9fa !important;
  color: #212529 !important;
}
[data-bs-theme="light"] .faq-wrapper .accordion-button:not(.collapsed) {
  background: #e9ecef !important;
  color: #000 !important;
}
[data-bs-theme="light"] .faq-wrapper .accordion-body {
  background: #fff !important;
  color: #333 !important;
}
</style>
