<div class="checkout">
    <div class="container">
        <h1>Payment</h1>
        <form action="/checkout/process" method="POST">
            <input type="hidden" name="name" value="<?= esc($this->request->getPost('name')) ?>">
            <input type="hidden" name="email" value="<?= esc($this->request->getPost('email')) ?>">
            <input type="hidden" name="phone" value="<?= esc($this->request->getPost('phone')) ?>">
            <input type="hidden" name="address" value="<?= esc($this->request->getPost('address')) ?>">
            <input type="hidden" name="city" value="<?= esc($this->request->getPost('city')) ?>">
            <input type="hidden" name="zip_code" value="<?= esc($this->request->getPost('zip_code')) ?>">

            <div class="checkout-section">
                <h2>Payment Method</h2>
                <div class="payment-methods">
                    <label><input type="radio" name="payment_method" value="credit_card" checked> Credit Card</label>
                    <label><input type="radio" name="payment_method" value="paypal"> PayPal</label>
                    <label><input type="radio" name="payment_method" value="cod"> Cash on Delivery</label>
                </div>
            </div>
            <div class="checkout-section">
                <h2>Order Summary</h2>
                <?php foreach ($cart as $item): ?>
                    <div class="summary-item">
                        <span><?= esc($item['name']) ?> x <?= $item['quantity'] ?></span>
                        <span>$<?= number_format($item['price'] * $item['quantity'], 2) ?></span>
                    </div>
                <?php endforeach; ?>
                <div class="summary-total">
                    <span>Total:</span>
                    <span>$<?= number_format($total, 2) ?></span>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Complete Payment</button>
        </form>
    </div>
</div>
