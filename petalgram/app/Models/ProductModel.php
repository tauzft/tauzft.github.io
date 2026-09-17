<?php

namespace App\Models;

use CodeIgniter\Model;

class ProductModel extends Model
{
    protected $table = 'products';
    protected $primaryKey = 'id';
    protected $allowedFields = ['name', 'description', 'price', 'image', 'category_id', 'stock', 'status'];
    protected $useTimestamps = true;
    protected $createdField = 'created_at';
    protected $updatedField = 'updated_at';
    
    public function getProductsWithCategory()
    {
        return $this->select('products.*, categories.name as category_name, categories.icon as category_icon')
            ->join('categories', 'categories.id = products.category_id', 'left')
            ->orderBy('products.id', 'DESC')
            ->findAll();
    }
    
    public function updateStock($productId, $quantity)
    {
        $product = $this->find($productId);
        if ($product) {
            $newStock = $product['stock'] - $quantity;
            return $this->update($productId, ['stock' => $newStock]);
        }
        return false;
    }
}