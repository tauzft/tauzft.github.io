document.addEventListener('DOMContentLoaded', function() {
    const checkoutForm = document.querySelector('.checkout form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(e) {
            const requiredFields = this.querySelectorAll('[required]');
            let valid = true;
            requiredFields.forEach(function(field) {
                if (!field.value.trim()) {
                    valid = false;
                    field.style.borderColor = '#f44336';
                } else {
                    field.style.borderColor = '#ddd';
                }
            });
            if (!valid) {
                e.preventDefault();
                alert('Please fill in all required fields');
            }
        });
    }
});
