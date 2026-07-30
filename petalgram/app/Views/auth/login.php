<?= $this->extend('layouts/main') ?>

<?= $this->section('content') ?>
<div class="auth-container">
    <div class="auth-box">
        <h2><i class="fas fa-sign-in-alt"></i> Login</h2>
        <form action="<?= base_url('login') ?>" method="POST">
            <?= csrf_field() ?>
            <div class="form-group">
                <label>Email</label>
                <input type="email" name="email" required>
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" name="password" required>
            </div>
            <button type="submit" class="btn-primary" style="width:100%;">
                <i class="fas fa-sign-in-alt"></i> Login
            </button>
        </form>
        <p class="auth-link">
            Don't have an account? <a href="<?= base_url('register') ?>">Register</a>
        </p>
    </div>
</div>
<?= $this->endSection() ?>