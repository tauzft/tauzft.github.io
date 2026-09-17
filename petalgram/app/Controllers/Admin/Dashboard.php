<?php

namespace App\Controllers\Admin;

use App\Controllers\BaseController;
use App\Models\ProductModel;
use App\Models\OrderModel;
use App\Models\CategoryModel;

class Dashboard extends BaseController
{
    public function index()
    {
        $productModel = new ProductModel();
        $orderModel = new OrderModel();
        $categoryModel = new CategoryModel();
        
        $data['total_products'] = $productModel->countAll();
        $data['total_orders'] = $orderModel->countAll();
        $data['total_categories'] = $categoryModel->countAll();
        $data['recent_orders'] = $orderModel->orderBy('id', 'DESC')->limit(5)->findAll();
        
        return view('admin/layouts/main', ['content' => view('admin/dashboard', $data)]);
    }
}