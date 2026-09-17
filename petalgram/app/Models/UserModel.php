<?php

namespace App\Models;

use CodeIgniter\Model;

class UserModel extends Model
{
    protected $table = 'users';
    protected $primaryKey = 'id';
    protected $useAutoIncrement = true;
    protected $returnType = 'object';
    protected $useSoftDeletes = false;
    protected $useTimestamps = true;
    protected $createdField = 'created_at';
    protected $updatedField = 'updated_at';
    protected $allowedFields = ['name', 'email', 'password', 'role'];

    public function findByEmail($email)
    {
        return $this->where('email', $email)->first();
    }

    public function getAll()
    {
        return $this->select('id, name, email, role, created_at')
            ->orderBy('created_at', 'DESC')
            ->findAll();
    }

    public function getById($id)
    {
        return $this->select('id, name, email, role, created_at')
            ->where('id', $id)
            ->first();
    }

    public function createUser($data)
    {
        $data['password'] = password_hash($data['password'], PASSWORD_DEFAULT);
        $data['role'] = $data['role'] ?? 'customer';
        $this->insert($data);
        return $this->insertID();
    }
}
