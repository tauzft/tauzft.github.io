<?= $this->extend('admin/layouts/main') ?>

<?= $this->section('content') ?>
<div class="admin-header-actions">
    <h2><i class="fas fa-box"></i> Products</h2>
    <a href="<?= base_url('admin/products/add') ?>" class="btn-primary">
        <i class="fas fa-plus"></i> Add Product
    </a>
</div>

<table class="admin-table">
    <thead>
        <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Status</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($products as $product): ?>
        <tr>
            <td><?= $product['id'] ?></td>
            <td style="font-size:2rem;"><?= $product['image'] ?? '🌸' ?></td>
            <td><?= $product['name'] ?></td>
            <td><?= $product['category_name'] ?? 'Uncategorized' ?></td>
            <td>$<?= number_format($product['price'], 2) ?></td>
            <td>
                <span class="stock-<?= $product['stock'] > 10 ? 'high' : ($product['stock'] > 0 ? 'medium' : 'low') ?>">
                    <?= $product['stock'] ?>
                </span>
            </td>
            <td><span class="badge badge-<?= $product['status'] ?>"><?= ucfirst($product['status']) ?></span></td>
            <td class="actions">
                <a href="<?= base_url('admin/products/edit/' . $product['id']) ?>" class="btn-edit">
                    <i class="fas fa-edit"></i>
                </a>
                <a href="<?= base_url('admin/products/delete/' . $product['id']) ?>" 
                   class="btn-delete" 
                   onclick="return confirm('Are you sure you want to delete this product?')">
                    <i class="fas fa-trash"></i>
                </a>
            </td>
        </tr>
        <?php endforeach; ?>
    </tbody>
</table>
<?= $this->endSection() ?>