<?php

namespace App\Controllers\Admin;

use App\Controllers\BaseController;
use App\Models\OrderModel;
use App\Models\ProductModel;
use App\Models\UserModel;

class Reports extends BaseController
{
    public function index()
    {
        if (session()->get('user_role') !== 'admin') {
            return redirect()->to('/login');
        }

        $orderModel = new OrderModel();
        $productModel = new ProductModel();
        $userModel = new UserModel();

        $orders = $orderModel->findAll();
        $totalRevenue = 0;
        foreach ($orders as $order) {
            $totalRevenue += $order->total;
        }

        $data = [
            'title' => 'Reports - Petalgram',
            'totalOrders' => count($orders),
            'totalRevenue' => $totalRevenue,
            'totalProducts' => $productModel->countAllResults(),
            'totalCustomers' => $userModel->countAllResults(),
            'content' => 'admin/reports'
        ];
        return view('layouts/main', $data);
    }
}
