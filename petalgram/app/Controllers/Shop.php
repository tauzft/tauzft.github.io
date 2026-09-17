<?php

namespace App\Controllers;

use App\Models\ProductModel;
use App\Models\CategoryModel;

class Shop extends BaseController
{
    public function index()
    {
        $productModel = new ProductModel();
        $categoryModel = new CategoryModel();
        
        $data['products'] = $productModel->getProductsWithCategory();
        $data['categories'] = $categoryModel->findAll();
        $data['title'] = 'Shop - Petalgram';
        
        return view('layouts/main', ['content' => view('shop/index', $data)]);
    }
    
    public function category($categoryId)
    {
        $productModel = new ProductModel();
        $categoryModel = new CategoryModel();
        
        $data['products'] = $productModel->where('category_id', $categoryId)->where('status', 'active')->findAll();
        $data['categories'] = $categoryModel->findAll();
        $data['category'] = $categoryModel->find($categoryId);
        $data['title'] = 'Shop - ' . ($data['category']['name'] ?? 'Category');
        
        return view('layouts/main', ['content' => view('shop/index', $data)]);
    }
    
    public function detail($productId)
    {
        $productModel = new ProductModel();
        $product = $productModel->getProductsWithCategory();
        $product = array_filter($product, function($p) use ($productId) {
            return $p['id'] == $productId;
        });
        
        if (empty($product)) {
            return redirect()->to('/shop')->with('error', 'Product not found');
        }
        
        $data['product'] = reset($product);
        $data['title'] = $data['product']['name'] . ' - Petalgram';
        
        return view('layouts/main', ['content' => view('shop/detail', $data)]);
    }
}