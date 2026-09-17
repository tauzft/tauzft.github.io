<div class="shop">
    <div class="container">
        <h1>Category Products</h1>
        <div class="products-grid">
            <?php foreach ($products as $product): ?>
                <div class="product-card">
                    <a href="/product/<?= $product->id ?>">
                        <img src="/uploads/products/<?= esc($product->image) ?>" alt="<?= esc($product->name) ?>">
                    </a>
                    <div class="product-info">
                        <h3><a href="/product/<?= $product->id ?>"><?= esc($product->name) ?></a></h3>
                        <p class="product-price">$<?= number_format($product->price, 2) ?></p>
                        <form action="/cart/add" method="POST">
                            <input type="hidden" name="product_id" value="<?= $product->id ?>">
                            <button type="submit" class="btn btn-primary">Add to Cart</button>
                        </form>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</div>
