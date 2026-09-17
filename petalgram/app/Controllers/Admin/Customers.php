<?php

namespace App\Controllers\Admin;

use App\Controllers\BaseController;
use App\Models\UserModel;
use App\Models\OrderModel;

class Customers extends BaseController
{
    protected $userModel;
    protected $orderModel;

    public function __construct()
    {
        $this->userModel = new UserModel();
        $this->orderModel = new OrderModel();
    }

    public function index()
    {
        if (session()->get('user_role') !== 'admin') {
            return redirect()->to('/login');
        }

        $data = [
            'title' => 'Manage Customers - Petalgram',
            'users' => $this->userModel->getAll(),
            'content' => 'admin/customers'
        ];
        return view('layouts/main', $data);
    }

    public function view($id)
    {
        if (session()->get('user_role') !== 'admin') {
            return redirect()->to('/login');
        }

        $user = $this->userModel->getById($id);
        $orders = $this->orderModel->getByUserId($id);

        $data = [
            'title' => 'Customer Details - Petalgram',
            'customer' => $user,
            'orders' => $orders,
            'content' => 'admin/customers'
        ];
        return view('layouts/main', $data);
    }
}
