<?= $this->extend('layouts/main') ?>

<?= $this->section('content') ?>
<div class="product-detail">
    <div class="product-detail-image">
        <div style="font-size:8rem; text-align:center; padding:40px;">
            <?= $product['image'] ?? '🌸' ?>
        </div>
    </div>
    <div class="product-detail-info">
        <h1><?= $product['name'] ?></h1>
        <div class="product-price">$<?= number_format($product['price'], 2) ?></div>
        <div class="product-category">
            <i class="fas fa-tag"></i> <?= $product['category_name'] ?? 'Uncategorized' ?>
        </div>
        <div class="product-description">
            <h4>Description</h4>
            <p><?= $product['description'] ?? 'No description available.' ?></p>
        </div>
        <div class="product-stock">
            <span class="stock-label <?= $product['stock'] > 10 ? 'in-stock' : ($product['stock'] > 0 ? 'low-stock' : 'out-of-stock') ?>">
                <i class="fas fa-circle"></i>
                <?= $product['stock'] > 0 ? 'In Stock (' . $product['stock'] . ' available)' : 'Out of Stock' ?>
            </span>
        </div>
        <?php if ($product['stock'] > 0): ?>
        <div class="product-actions">
            <div class="qty-selector">
                <button class="qty-btn" id="decreaseQty">−</button>
                <input type="number" id="qtyInput" value="1" min="1" max="<?= $product['stock'] ?>">
                <button class="qty-btn" id="increaseQty">+</button>
            </div>
            <button class="btn-primary add-to-cart" data-id="<?= $product['id'] ?>" style="flex:1;">
                <i class="fas fa-shopping-bag"></i> Add to Cart
            </button>
        </div>
        <?php endif; ?>
        
        <div class="messenger-note" style="margin-top:30px;">
            <i class="fab fa-facebook-messenger"></i>
            <div>
                <strong>💬 Payment via Messenger</strong>
                <p>Send payment or ask for payment method via our Facebook page: <strong>Petalgram Flowershop</strong></p>
            </div>
        </div>
    </div>
</div>
<?= $this->endSection() ?>

<?= $this->section('scripts') ?>
<script>
$(document).ready(function() {
    let qty = 1;
    const maxQty = <?= $product['stock'] ?>;
    
    $('#decreaseQty').click(function() {
        if (qty > 1) {
            qty--;
            $('#qtyInput').val(qty);
        }
    });
    
    $('#increaseQty').click(function() {
        if (qty < maxQty) {
            qty++;
            $('#qtyInput').val(qty);
        }
    });
    
    $('#qtyInput').change(function() {
        let val = parseInt($(this).val());
        if (isNaN(val) || val < 1) val = 1;
        if (val > maxQty) val = maxQty;
        qty = val;
        $(this).val(qty);
    });
    
    $('.add-to-cart').click(function() {
        const productId = $(this).data('id');
        const quantity = $('#qtyInput').val();
        
        $.ajax({
            url: '<?= base_url('cart/add') ?>',
            method: 'POST',
            data: { product_id: productId, quantity: quantity },
            dataType: 'json',
            success: function(response) {
                if (response.success) {
                    $('#cart-count').text(response.cart_count);
                    showToast('✅ ' + response.message);
                } else {
                    showToast('❌ ' + response.message);
                }
            }
        });
    });
});
</script>
<?= $this->endSection() ?>