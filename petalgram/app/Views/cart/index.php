<?= $this->extend('layouts/main') ?>

<?= $this->section('content') ?>
<div class="section-title">
    <i class="fas fa-shopping-bag"></i> Your Cart
</div>

<?php if (empty($cart)): ?>
    <div class="empty-cart">
        <i class="fas fa-shopping-bag" style="font-size:4rem; color:#d4c4e0;"></i>
        <h3>Your cart is empty</h3>
        <p>Browse our beautiful flowers and add some to your cart!</p>
        <a href="<?= base_url('shop') ?>" class="btn-primary">Start Shopping</a>
    </div>
<?php else: ?>
    <div id="cartContainer">
        <?php foreach ($cart as $id => $item): ?>
        <div class="cart-item" data-id="<?= $id ?>">
            <div class="item-info">
                <span style="font-size:2.5rem;"><?= $item['image'] ?? '🌸' ?></span>
                <div>
                    <h4><?= $item['name'] ?></h4>
                    <span class="price">$<?= number_format($item['price'], 2) ?></span>
                    <span class="stock-info">(<?= $item['stock'] ?? 0 ?> available)</span>
                </div>
            </div>
            <div class="qty-control">
                <button class="qty-btn" data-id="<?= $id ?>" data-change="-1">−</button>
                <span class="qty"><?= $item['quantity'] ?></span>
                <button class="qty-btn" data-id="<?= $id ?>" data-change="1">+</button>
                <button class="remove-btn" data-id="<?= $id ?>">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>
        <?php endforeach; ?>
        
        <div class="cart-summary">
            <div class="cart-total">
                <span>Total</span>
                <span id="cartTotal">$<?= number_format($total, 2) ?></span>
            </div>
            <div class="checkout-actions">
                <a href="<?= base_url('checkout') ?>" class="btn-primary">
                    <i class="fas fa-credit-card"></i> Proceed to Checkout
                </a>
                <button id="clearCart" class="btn-outline">
                    <i class="fas fa-trash-alt"></i> Clear Cart
                </button>
            </div>
        </div>
    </div>
<?php endif; ?>
<?= $this->endSection() ?>