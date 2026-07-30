<?= $this->extend('layouts/main') ?>

<?= $this->section('content') ?>
<div class="auth-container">
    <div class="auth-box">
        <h2><i class="fas fa-user-plus"></i> Register</h2>
        <form action="<?= base_url('register') ?>" method="POST">
            <?= csrf_field() ?>
            <div class="form-group">
                <label>Full Name</label>
                <input type="text" name="name" required>
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" name="email" required>
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" name="password" required>
            </div>
            <div class="form-group">
                <label>Confirm Password</label>
                <input type="password" name="confirm_password" required>
            </div>
            <button type="submit" class="btn-primary" style="width:100%;">
                <i class="fas fa-user-plus"></i> Register
            </button>
        </form>
        <p class="auth-link">
            Already have an account? <a href="<?= base_url('login') ?>">Login</a>
        </p>
    </div>
</div>
<?= $this->endSection() ?>