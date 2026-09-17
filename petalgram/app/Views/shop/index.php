<?= $this->extend('layouts/main') ?>

<?= $this->section('content') ?>
<div class="shop-header">
    <h1><i class="fas fa-store"></i> Our Shop</h1>
    <p>Browse our beautiful collection of fresh flowers</p>
</div>

<!-- Categories Filter -->
<div class="category-filters">
    <a href="<?= base_url('shop') ?>" class="filter-btn <?= !isset($category) ? 'active' : '' ?>">
        All
    </a>
    <?php foreach ($categories as $cat): ?>
    <a href="<?= base_url('shop/category/' . $cat['id']) ?>" 
       class="filter-btn <?= isset($category) && $category['id'] == $cat['id'] ? 'active' : '' ?>">
        <?= $cat['icon'] ?? '📂' ?> <?= $cat['name'] ?>
    </a>
    <?php endforeach; ?>
</div>

<?php if (isset($category)): ?>
    <div class="category-title">
        <h2><?= $category['icon'] ?? '' ?> <?= $category['name'] ?></h2>
        <p><?= $category['description'] ?? '' ?></p>
    </div>
<?php endif; ?>

<div class="product-grid">
    <?php if (!empty($products)): ?>
        <?php foreach ($products as $product): ?>
        <div class="product-card">
            <a href="<?= base_url('product/' . $product['id']) ?>" class="product-link">
                <div class="product-image"><?= $product['image'] ?? '🌸' ?></div>
                <h4><?= $product['name'] ?></h4>
                <p class="description"><?= substr($product['description'] ?? '', 0, 50) ?>...</p>
                <div class="price">$<?= number_format($product['price'], 2) ?></div>
                <div class="stock-info <?= $product['stock'] > 10 ? 'in-stock' : ($product['stock'] > 0 ? 'low-stock' : 'out-of-stock') ?>">
                    <?= $product['stock'] > 0 ? $product['stock'] . ' in stock' : 'Out of stock' ?>
                </div>
            </a>
            <?php if ($product['stock'] > 0): ?>
            <button class="btn-add add-to-cart" data-id="<?= $product['id'] ?>">
                <i class="fas fa-plus-circle"></i> Add to cart
            </button>
            <?php else: ?>
            <button class="btn-add" disabled style="opacity:0.5; cursor:not-allowed;">
                <i class="fas fa-times-circle"></i> Out of stock
            </button>
            <?php endif; ?>
        </div>
        <?php endforeach; ?>
    <?php else: ?>
        <div class="empty-state">
            <i class="fas fa-flower" style="font-size:3rem; color:#d4c4e0;"></i>
            <h3>No products found</h3>
            <p>Check back later for new arrivals!</p>
        </div>
    <?php endif; ?>
</div>
<?= $this->endSection() ?>