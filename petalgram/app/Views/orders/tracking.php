<div class="track-order">
    <div class="container">
        <h1>Track Your Order</h1>
        <form class="track-form" action="/order/track" method="GET">
            <input type="text" name="id" placeholder="Enter Order ID" value="<?= esc($orderId ?? '') ?>" required>
            <button type="submit" class="btn btn-primary">Track</button>
        </form>

        <?php if ($order): ?>
            <div class="order-details">
                <h2>Order #<?= $order->id ?></h2>
                <div class="order-status">
                    <div class="status-step <?= $order->status === 'pending' ? 'active' : '' ?>">
                        <span class="step-icon">1</span>
                        <span class="step-label">Pending</span>
                    </div>
                    <div class="status-step <?= $order->status === 'processing' ? 'active' : '' ?>">
                        <span class="step-icon">2</span>
                        <span class="step-label">Processing</span>
                    </div>
                    <div class="status-step <?= $order->status === 'shipped' ? 'active' : '' ?>">
                        <span class="step-icon">3</span>
                        <span class="step-label">Shipped</span>
                    </div>
                    <div class="status-step <?= $order->status === 'delivered' ? 'active' : '' ?>">
                        <span class="step-icon">4</span>
                        <span class="step-label">Delivered</span>
                    </div>
                </div>
                <div class="order-info">
                    <p><strong>Status:</strong> <?= ucfirst($order->status) ?></p>
                    <p><strong>Total:</strong> $<?= number_format($order->total, 2) ?></p>
                    <p><strong>Order Date:</strong> <?= date('M d, Y', strtotime($order->created_at)) ?></p>
                </div>
                <div class="order-items">
                    <h3>Order Items</h3>
                    <?php foreach ($items as $item): ?>
                        <div class="order-item">
                            <span><?= esc($item->product_name) ?> x <?= $item->quantity ?></span>
                            <span>$<?= number_format($item->price * $item->quantity, 2) ?></span>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        <?php elseif ($orderId): ?>
            <div class="error-message">Order not found. Please check your order ID.</div>
        <?php endif; ?>
    </div>
</div>
