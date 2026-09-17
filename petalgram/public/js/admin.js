document.addEventListener('DOMContentLoaded', function() {
    const statusSelects = document.querySelectorAll('.status-form select');
    statusSelects.forEach(function(select) {
        select.addEventListener('change', function() {
            if (confirm('Update order status?')) {
                this.form.submit();
            }
        });
    });
});
