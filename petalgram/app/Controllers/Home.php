<?php

namespace App\Controllers;

use App\Models\ProductModel;
use App\Models\CategoryModel;

class Home extends BaseController
{
    public function index()
    {
        $productModel = new ProductModel();
        $categoryModel = new CategoryModel();
        
        $data['products'] = $productModel->getProductsWithCategory();
        $data['categories'] = $categoryModel->findAll();
        $data['title'] = 'Petalgram Flowershop';
        
        return view('layouts/main', ['content' => view('home/index', $data)]);
    }
}