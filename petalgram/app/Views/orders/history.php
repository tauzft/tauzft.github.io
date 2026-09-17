<div class="orders-page">
    <div class="container">
        <h1>Order History</h1>
        <?php if (empty($orders)): ?>
            <p>No orders found.</p>
        <?php else: ?>
            <table class="orders-table">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Date</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($orders as $order): ?>
                        <tr>
                            <td>#<?= $order->id ?></td>
                            <td><?= date('M d, Y', strtotime($order->created_at)) ?></td>
                            <td>$<?= number_format($order->total, 2) ?></td>
                            <td><span class="status-badge status-<?= $order->status ?>"><?= ucfirst($order->status) ?></span></td>
                            <td><a href="/order/track?id=<?= $order->id ?>" class="btn btn-small">Track</a></td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        <?php endif; ?>
    </div>
</div>
