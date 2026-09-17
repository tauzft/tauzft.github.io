<nav class="navbar">
    <div class="container">
        <div class="logo">
            <i class="fas fa-seedling"></i> Petalgram
        </div>
        <div class="nav-links">
            <a href="<?= base_url('/') ?>"><i class="fas fa-home"></i> Home</a>
            <a href="<?= base_url('shop') ?>"><i class="fas fa-store"></i> Shop</a>
            <a href="<?= base_url('cart') ?>" class="cart-icon">
                <i class="fas fa-shopping-bag"></i> 
                <span id="cart-count">
                    <?php 
                        $cart = session()->get('cart') ?? [];
                        echo array_sum(array_column($cart, 'quantity'));
                    ?>
                </span>
            </a>
            <?php if (session()->get('isLoggedIn')): ?>
                <a href="<?= base_url('profile') ?>"><i class="fas fa-user"></i> Profile</a>
                <a href="<?= base_url('logout') ?>" class="btn-outline">
                    <i class="fas fa-sign-out-alt"></i> Logout
                </a>
            <?php else: ?>
                <a href="<?= base_url('login') ?>" class="btn-outline">
                    <i class="fas fa-sign-in-alt"></i> Login
                </a>
                <a href="<?= base_url('register') ?>" class="btn-primary">Register</a>
            <?php endif; ?>
        </div>
    </div>
</nav>