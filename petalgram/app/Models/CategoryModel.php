<?php

namespace App\Models;

use CodeIgniter\Model;

class CategoryModel extends Model
{
    protected $table = 'categories';
    protected $primaryKey = 'id';
    protected $allowedFields = ['name', 'description', 'icon'];
    protected $useTimestamps = true;
    protected $createdField = 'created_at';
    protected $updatedField = 'updated_at';
    
    public function getProducts($categoryId)
    {
        return $this->db->table('products')
            ->where('category_id', $categoryId)
            ->where('status', 'active')
            ->get()
            ->getResultArray();
    }
}