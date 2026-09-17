<?= $this->extend('layouts/main') ?>

<?= $this->section('content') ?>
<div class="section-title">
    <i class="fas fa-user"></i> My Profile
</div>

<div class="profile-container">
    <div class="profile-sidebar">
        <div class="profile-avatar">
            <i class="fas fa-user-circle"></i>
        </div>
        <h3><?= session()->get('name') ?? 'User' ?></h3>
        <p><?= session()->get('email') ?? '' ?></p>
        <nav class="profile-nav">
            <a href="<?= base_url('profile') ?>" class="active">
                <i class="fas fa-user"></i> Profile
            </a>
            <a href="<?= base_url('orders') ?>">
                <i class="fas fa-shopping-bag"></i> Orders
            </a>
            <a href="<?= base_url('logout') ?>">
                <i class="fas fa-sign-out-alt"></i> Logout
            </a>
        </nav>
    </div>
    
    <div class="profile-content">
        <h3>Personal Information</h3>
        <form action="<?= base_url('profile/update') ?>" method="POST">
            <?= csrf_field() ?>
            <div class="form-group">
                <label>Full Name</label>
                <input type="text" name="name" value="<?= session()->get('name') ?? '' ?>">
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="email" name="email" value="<?= session()->get('email') ?? '' ?>">
            </div>
            <div class="form-group">
                <label>Phone</label>
                <input type="tel" name="phone" value="<?= session()->get('phone') ?? '' ?>">
            </div>
            <button type="submit" class="btn-primary">
                <i class="fas fa-save"></i> Update Profile
            </button>
        </form>
    </div>
</div>
<?= $this->endSection() ?>