document.addEventListener('DOMContentLoaded', function() {
    const removeBtns = document.querySelectorAll('.cart-item .btn-danger');
    removeBtns.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            if (!confirm('Are you sure you want to remove this item?')) {
                e.preventDefault();
            }
        });
    });
});
