<template>
  <div class="modal fade" id="changeEmailModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog"><div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Change Email</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form id="changeEmailForm" novalidate>
          <div class="mb-3">
            <label for="newEmail" class="form-label">New Email</label>
            <input type="email" id="newEmail" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="confirmEmail" class="form-label">Confirm Email</label>
            <input type="email" id="confirmEmail" class="form-control" required>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" id="password" class="form-control" required>
          </div>
          <button type="submit" class="btn btn-primary w-100">Update Email</button>
        </form>
      </div>
    </div></div>
  </div>
</template>
<script>
export default { name: 'ChangeEmailModal' }
</script>
