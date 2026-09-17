<?= $this->extend('layouts/main') ?>

<?= $this->section('content') ?>
<div class="section-title">
    <i class="fas fa-credit-card"></i> Checkout
</div>

<div class="checkout-container">
    <div class="order-summary">
        <h3>Order Summary</h3>
        <?php foreach ($cart as $item): ?>
        <div class="checkout-item">
            <span><?= $item['name'] ?> × <?= $item['quantity'] ?></span>
            <span>$<?= number_format($item['price'] * $item['quantity'], 2) ?></span>
        </div>
        <?php endforeach; ?>
        <div class="checkout-total">
            <strong>Total</strong>
            <strong>$<?= number_format($total, 2) ?></strong>
        </div>
        
        <div class="messenger-note" style="margin-top:20px;">
            <i class="fab fa-facebook-messenger"></i>
            <div>
                <strong>💬 Payment via Messenger</strong>
                <p>After placing your order, send payment or ask for payment method via our Facebook page: <strong>Petalgram Flowershop</strong></p>
            </div>
        </div>
    </div>

    <form action="<?= base_url('checkout/process') ?>" method="POST" class="checkout-form">
        <?= csrf_field() ?>
        <div class="form-group">
            <label>Full Name *</label>
            <input type="text" name="name" required>
        </div>
        <div class="form-group">
            <label>Email *</label>
            <input type="email" name="email" required>
        </div>
        <div class="form-group">
            <label>Phone *</label>
            <input type="tel" name="phone" required>
        </div>
        <div class="form-group">
            <label>Delivery Address *</label>
            <textarea name="address" required></textarea>
        </div>
        <div class="form-group">
            <label>Order Notes</label>
            <textarea name="notes" rows="3"></textarea>
        </div>
        <button type="submit" class="btn-primary" style="width:100%;">
            <i class="fas fa-check"></i> Place Order
        </button>
    </form>
</div>
<?= $this->endSection() ?>