<footer class="footer">
    <div class="container">
        <div class="footer-content">
            <div class="footer-section">
                <h4><i class="fas fa-seedling"></i> Petalgram</h4>
                <p>Fresh flowers delivered with love 🌸</p>
                <div class="social-links">
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
            <div class="footer-section">
                <h4>Quick Links</h4>
                <a href="<?= base_url('shop') ?>">Shop</a>
                <a href="<?= base_url('orders') ?>">Orders</a>
                <a href="<?= base_url('cart') ?>">Cart</a>
            </div>
            <div class="footer-section">
                <h4>Contact</h4>
                <p><i class="fas fa-envelope"></i> hello@petalgram.com</p>
                <p><i class="fas fa-phone"></i> +1 (555) 123-4567</p>
                <p><i class="fab fa-facebook-messenger"></i> Petalgram Flowershop</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; <?= date('Y') ?> Petalgram Flowershop. All rights reserved.</p>
        </div>
    </div>
</footer>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="<?= base_url('js/main.js') ?>"></script>
<?= $this->renderSection('scripts') ?>
</body>
</html>