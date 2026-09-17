<?php

namespace App\Models;

use CodeIgniter\Model;

class PaymentModel extends Model
{
    protected $table = 'payments';
    protected $primaryKey = 'id';
    protected $useAutoIncrement = true;
    protected $returnType = 'object';
    protected $useSoftDeletes = false;
    protected $useTimestamps = true;
    protected $createdField = 'created_at';
    protected $allowedFields = ['order_id', 'amount', 'method', 'status'];

    public function getByOrderId($orderId)
    {
        return $this->where('order_id', $orderId)->first();
    }

    public function createPayment($data)
    {
        $this->insert($data);
        return $this->insertID();
    }

    public function updateStatus($id, $status)
    {
        return $this->update($id, ['status' => $status]);
    }
}
