<?= $this->extend('admin/layouts/main') ?>

<?= $this->section('content') ?>
<h2><i class="fas fa-shopping-cart"></i> Orders</h2>

<table class="admin-table">
    <thead>
        <tr>
            <th>Order #</th>
            <th>Customer</th>
            <th>Items</th>
            <th>Total</th>
            <th>Status</th>
            <th>Payment</th>
            <th>Date</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($orders as $order): ?>
        <tr>
            <td><?= $order['order_number'] ?></td>
            <td><?= $order['customer_name'] ?></td>
            <td><?= $order['item_count'] ?? 0 ?></td>
            <td>$<?= number_format($order['total_amount'], 2) ?></td>
            <td><span class="badge badge-<?= $order['status'] ?>"><?= ucfirst($order['status']) ?></span></td>
            <td><span class="badge badge-<?= $order['payment_status'] ?>"><?= ucfirst($order['payment_status']) ?></span></td>
            <td><?= date('M d, Y', strtotime($order['created_at'])) ?></td>
            <td>
                <a href="<?= base_url('admin/orders/' . $order['id']) ?>" class="btn-edit">
                    <i class="fas fa-eye"></i>
                </a>
            </td>
        </tr>
        <?php endforeach; ?>
    </tbody>
</table>
<?= $this->endSection() ?>