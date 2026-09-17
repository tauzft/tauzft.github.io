<div class="admin-customers">
    <div class="container">
        <h1>Manage Customers</h1>
        <table class="admin-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Joined</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($users as $user): ?>
                    <tr>
                        <td><?= $user->id ?></td>
                        <td><?= esc($user->name) ?></td>
                        <td><?= esc($user->email) ?></td>
                        <td><?= ucfirst($user->role) ?></td>
                        <td><?= date('M d, Y', strtotime($user->created_at)) ?></td>
                        <td><a href="/admin/customers/<?= $user->id ?>" class="btn btn-small">View</a></td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</div>
