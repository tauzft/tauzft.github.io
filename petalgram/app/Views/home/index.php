<?= $this->extend('layouts/main') ?>

<?= $this->section('content') ?>
<div class="hero-section">
    <h1>🌸 Welcome to Petalgram</h1>
    <p>Fresh flowers delivered with love</p>
    <a href="<?= base_url('shop') ?>" class="btn-primary">Explore Collection</a>
</div>

<div class="section-title">
    <i class="fas fa-spa"></i> Featured Collection
</div>

<div class="product-grid" id="productGrid">
    <?php foreach ($products as $product): ?>
    <div class="product-card" data-id="<?= $product['id'] ?>">
        <div class="product-image"><?= $product['image'] ?? '🌸' ?></div>
        <h4><?= $product['name'] ?></h4>
        <p class="description"><?= substr($product['description'] ?? '', 0, 60) ?>...</p>
        <div class="price">$<?= number_format($product['price'], 2) ?></div>
        <div class="stock-info <?= $product['stock'] > 10 ? 'in-stock' : ($product['stock'] > 0 ? 'low-stock' : 'out-of-stock') ?>">
            <?php if ($product['stock'] > 0): ?>
                <?= $product['stock'] ?> in stock
            <?php else: ?>
                Out of stock
            <?php endif; ?>
        </div>
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
</div>

<!-- Categories -->
<div class="section-title">
    <i class="fas fa-tags"></i> Shop by Category
</div>
<div class="category-grid">
    <?php foreach ($categories as $category): ?>
    <a href="<?= base_url('shop/category/' . $category['id']) ?>" class="category-card">
        <span class="category-icon"><?= $category['icon'] ?? '📂' ?></span>
        <h4><?= $category['name'] ?></h4>
        <p><?= $category['description'] ?? '' ?></p>
    </a>
    <?php endforeach; ?>
</div>

<!-- Messenger Note -->
<div class="messenger-note">
    <i class="fab fa-facebook-messenger"></i>
    <div>
        <strong>💬 Payment via Messenger</strong>
        <p>Send payment or ask for payment method via our Facebook page: <strong>Petalgram Flowershop</strong></p>
    </div>
</div>
<?= $this->endSection() ?>