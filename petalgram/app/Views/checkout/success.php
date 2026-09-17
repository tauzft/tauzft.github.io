<?= $this->extend('layouts/main') ?>

<?= $this->section('content') ?>
<div class="success-page">
    <div class="success-icon">
        <i class="fas fa-check-circle"></i>
    </div>
    <h1>Order Placed Successfully! 🎉</h1>
    <p>Thank you for your order!</p>
    
    <div class="order-details">
        <div class="detail-item">
            <span>Order Number</span>
            <strong><?= $order['order_number'] ?></strong>
        </div>
        <div class="detail-item">
            <span>Total Amount</span>
            <strong>$<?= number_format($order['total_amount'], 2) ?></strong>
        </div>
        <div class="detail-item">
            <span>Status</span>
            <strong><span class="badge badge-pending">Pending</span></strong>
        </div>
    </div>
    
    <div class="messenger-note" style="margin:30px 0;">
        <i class="fab fa-facebook-messenger"></i>
        <div>
            <strong>📱 Next Step: Payment</strong>
            <p>Please send payment or ask for payment method via our Facebook page: <strong>Petalgram Flowershop</strong></p>
            <p style="margin-top:10px; font-size:0.9rem; color:#666;">
                Include your order number <strong><?= $order['order_number'] ?></strong> when messaging us.
            </p>
        </div>
    </div>
    
    <div class="success-actions">
        <a href="<?= base_url('shop') ?>" class="btn-primary">
            <i class="fas fa-store"></i> Continue Shopping
        </a>
        <a href="<?= base_url('orders') ?>" class="btn-outline">
            <i class="fas fa-list"></i> View Orders
        </a>
    </div>
</div>
<?= $this->endSection() ?>