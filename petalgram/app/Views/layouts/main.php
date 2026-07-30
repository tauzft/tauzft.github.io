<?= $this->include('layouts/header') ?>
<?= $this->include('layouts/navbar') ?>

<main class="main-content">
    <div class="container">
        <?php if (session()->getFlashdata('success')): ?>
            <div class="alert alert-success"><?= session()->getFlashdata('success') ?></div>
        <?php endif; ?>
        
        <?php if (session()->getFlashdata('error')): ?>
            <div class="alert alert-error"><?= session()->getFlashdata('error') ?></div>
        <?php endif; ?>
        
        <?= $this->renderSection('content') ?>
    </div>
</main>

<?= $this->include('layouts/footer') ?>