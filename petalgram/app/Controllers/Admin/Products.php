<?php

namespace App\Controllers\Admin;

use App\Controllers\BaseController;
use App\Models\ProductModel;
use App\Models\CategoryModel;

class Products extends BaseController
{
    public function index()
    {
        $productModel = new ProductModel();
        $data['products'] = $productModel->getProductsWithCategory();
        return view('admin/layouts/main', ['content' => view('admin/products/index', $data)]);
    }
    
    public function add()
    {
        $categoryModel = new CategoryModel();
        $data['categories'] = $categoryModel->findAll();
        $data['action'] = 'add';
        
        if ($this->request->getMethod() === 'post') {
            $productModel = new ProductModel();
            
            $rules = [
                'name' => 'required|min_length[3]',
                'price' => 'required|numeric',
                'stock' => 'required|numeric',
                'category_id' => 'required|numeric'
            ];
            
            if ($this->validate($rules)) {
                $productModel->save([
                    'name' => $this->request->getPost('name'),
                    'description' => $this->request->getPost('description'),
                    'price' => $this->request->getPost('price'),
                    'image' => $this->request->getPost('image') ?? '🌸',
                    'category_id' => $this->request->getPost('category_id'),
                    'stock' => $this->request->getPost('stock'),
                    'status' => $this->request->getPost('status') ?? 'active'
                ]);
                
                return redirect()->to('/admin/products')->with('success', 'Product added successfully');
            } else {
                $data['errors'] = $this->validator->getErrors();
            }
        }
        
        return view('admin/layouts/main', ['content' => view('admin/products/form', $data)]);
    }
    
    public function edit($id)
    {
        $productModel = new ProductModel();
        $categoryModel = new CategoryModel();
        
        $data['product'] = $productModel->find($id);
        $data['categories'] = $categoryModel->findAll();
        $data['action'] = 'edit';
        
        if (!$data['product']) {
            return redirect()->to('/admin/products')->with('error', 'Product not found');
        }
        
        if ($this->request->getMethod() === 'post') {
            $rules = [
                'name' => 'required|min_length[3]',
                'price' => 'required|numeric',
                'stock' => 'required|numeric',
                'category_id' => 'required|numeric'
            ];
            
            if ($this->validate($rules)) {
                $productModel->update($id, [
                    'name' => $this->request->getPost('name'),
                    'description' => $this->request->getPost('description'),
                    'price' => $this->request->getPost('price'),
                    'image' => $this->request->getPost('image') ?? '🌸',
                    'category_id' => $this->request->getPost('category_id'),
                    'stock' => $this->request->getPost('stock'),
                    'status' => $this->request->getPost('status') ?? 'active'
                ]);
                
                return redirect()->to('/admin/products')->with('success', 'Product updated successfully');
            } else {
                $data['errors'] = $this->validator->getErrors();
            }
        }
        
        return view('admin/layouts/main', ['content' => view('admin/products/form', $data)]);
    }
    
    public function delete($id)
    {
        $productModel = new ProductModel();
        $product = $productModel->find($id);
        
        if ($product) {
            $productModel->delete($id);
            return redirect()->to('/admin/products')->with('success', 'Product deleted successfully');
        }
        
        return redirect()->to('/admin/products')->with('error', 'Product not found');
    }
}