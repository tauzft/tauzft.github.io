<?= $this->extend('admin/layouts/main') ?>

<?= $this->section('content') ?>
<div class="stats-grid">
    <div class="stat-card">
        <div class="stat-icon"><i class="fas fa-box"></i></div>
        <div class="stat-info">
            <h3><?= $total_products ?? 0 ?></h3>
            <p>Total Products</p>
        </div>
    </div>
    <div class="stat-card">
        <div class="stat-icon"><i class="fas fa-shopping-cart"></i></div>
        <div class="stat-info">
            <h3><?= $total_orders ?? 0 ?></h3>
            <p>Total Orders</p>
        </div>
    </div>
    <div class="stat-card">
        <div class="stat-icon"><i class="fas fa-users"></i></div>
        <div class="stat-info">
            <h3><?= $total_customers ?? 0 ?></h3>
            <p>Customers</p>
        </div>
    </div>
    <div class="stat-card">
        <div class="stat-icon"><i class="fas fa-tags"></i></div>
        <div class="stat-info">
            <h3><?= $total_categories ?? 0 ?></h3>
            <p>Categories</p>
        </div>
    </div>
</div>

<div class="recent-orders">
    <h3><i class="fas fa-clock"></i> Recent Orders</h3>
    <table class="admin-table">
        <thead>
            <tr>
                <th>Order #</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Status</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($recent_orders ?? [] as $order): ?>
            <tr>
                <td><?= $order['order_number'] ?></td>
                <td><?= $order['customer_name'] ?></td>
                <td>$<?= number_format($order['total_amount'], 2) ?></td>
                <td><span class="badge badge-<?= $order['status'] ?>"><?= ucfirst($order['status']) ?></span></td>
                <td><?= date('M d, Y', strtotime($order['created_at'])) ?></td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</div>
<?= $this->endSection() ?>