<?php

namespace App\Models;

use CodeIgniter\Model;

class OrderModel extends Model
{
    protected $table = 'orders';
    protected $primaryKey = 'id';
    protected $allowedFields = ['order_number', 'customer_name', 'customer_email', 'customer_phone', 'delivery_address', 'total_amount', 'status', 'payment_method', 'payment_status', 'notes'];
    protected $useTimestamps = true;
    protected $createdField = 'created_at';
    protected $updatedField = 'updated_at';
    
    public function generateOrderNumber()
    {
        return 'PG-' . date('Ymd') . '-' . rand(1000, 9999);
    }
    
    public function getOrdersWithItems()
    {
        return $this->select('orders.*, COUNT(order_items.id) as item_count')
            ->join('order_items', 'order_items.order_id = orders.id', 'left')
            ->groupBy('orders.id')
            ->orderBy('orders.id', 'DESC')
            ->findAll();
    }
}