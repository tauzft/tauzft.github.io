<div class="admin-reports">
    <div class="container">
        <h1>Reports</h1>
        <div class="reports-grid">
            <div class="report-card">
                <h3>Total Orders</h3>
                <p class="report-number"><?= $totalOrders ?></p>
            </div>
            <div class="report-card">
                <h3>Total Revenue</h3>
                <p class="report-number">$<?= number_format($totalRevenue, 2) ?></p>
            </div>
            <div class="report-card">
                <h3>Total Products</h3>
                <p class="report-number"><?= $totalProducts ?></p>
            </div>
            <div class="report-card">
                <h3>Total Customers</h3>
                <p class="report-number"><?= $totalCustomers ?></p>
            </div>
        </div>
    </div>
</div>
