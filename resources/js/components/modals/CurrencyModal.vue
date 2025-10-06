<template>
  <div class="modal fade" id="currencyModal" tabindex="-1" aria-labelledby="currencyModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content bg-dark text-light rounded-3 shadow-lg border-0">
        <div class="modal-header border-0">
          <h5 class="modal-title fw-bold" id="currencyModalLabel">💱 Choose Currency</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form id="currencyForm" novalidate>
            <div class="mb-3">
              <label for="currencySelect" class="form-label">Select Currency</label>
              <select class="form-select form-select-lg bg-secondary text-light border-0 rounded-2 shadow-sm" id="currencySelect" required>
                <option value="USD">USD - United States Dollar</option>
                <option value="EUR" selected>EUR - Euro</option>
                <option value="GBP">GBP - British Pound</option>
                <option value="CHF">CHF - Swiss Franc</option>
              </select>
            </div>
            <div class="d-flex justify-content-end">
              <button type="submit" class="btn btn-warning fw-bold px-4 py-2">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default { name: 'CurrencyModal' }
</script>
