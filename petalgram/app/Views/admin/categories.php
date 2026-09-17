<?= $this->extend('admin/layouts/main') ?>

<?= $this->section('content') ?>
<div class="admin-header-actions">
    <h2><i class="fas fa-tags"></i> Categories</h2>
    <a href="<?= base_url('admin/categories/add') ?>" class="btn-primary">
        <i class="fas fa-plus"></i> Add Category
    </a>
</div>

<table class="admin-table">
    <thead>
        <tr>
            <th>ID</th>
            <th>Icon</th>
            <th>Name</th>
            <th>Description</th>
            <th>Products</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($categories as $category): ?>
        <tr>
            <td><?= $category['id'] ?></td>
            <td style="font-size:2rem;"><?= $category['icon'] ?? '📂' ?></td>
            <td><?= $category['name'] ?></td>
            <td><?= substr($category['description'] ?? '', 0, 50) ?></td>
            <td><?= $category['product_count'] ?? 0 ?></td>
            <td class="actions">
                <a href="<?= base_url('admin/categories/edit/' . $category['id']) ?>" class="btn-edit">
                    <i class="fas fa-edit"></i>
                </a>
                <a href="<?= base_url('admin/categories/delete/' . $category['id']) ?>" 
                   class="btn-delete" 
                   onclick="return confirm('Are you sure you want to delete this category?')">
                    <i class="fas fa-trash"></i>
                </a>
            </td>
        </tr>
        <?php endforeach; ?>
    </tbody>
</table>
<?= $this->endSection() ?>