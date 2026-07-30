<?php

namespace App\Controllers\Admin;

use App\Controllers\BaseController;
use App\Models\CategoryModel;

class Categories extends BaseController
{
    public function index()
    {
        $categoryModel = new CategoryModel();
        $data['categories'] = $categoryModel->findAll();
        return view('admin/layouts/main', ['content' => view('admin/categories/index', $data)]);
    }
    
    public function add()
    {
        if ($this->request->getMethod() === 'post') {
            $categoryModel = new CategoryModel();
            
            $rules = [
                'name' => 'required|min_length[2]|is_unique[categories.name]'
            ];
            
            if ($this->validate($rules)) {
                $categoryModel->save([
                    'name' => $this->request->getPost('name'),
                    'description' => $this->request->getPost('description'),
                    'icon' => $this->request->getPost('icon') ?? '🌸'
                ]);
                
                return redirect()->to('/admin/categories')->with('success', 'Category added successfully');
            } else {
                return redirect()->back()->with('errors', $this->validator->getErrors());
            }
        }
        
        return view('admin/layouts/main', ['content' => view('admin/categories/form')]);
    }
    
    public function edit($id)
    {
        $categoryModel = new CategoryModel();
        $data['category'] = $categoryModel->find($id);
        
        if (!$data['category']) {
            return redirect()->to('/admin/categories')->with('error', 'Category not found');
        }
        
        if ($this->request->getMethod() === 'post') {
            $rules = [
                'name' => 'required|min_length[2]|is_unique[categories.name,' . $id . ']'
            ];
            
            if ($this->validate($rules)) {
                $categoryModel->update($id, [
                    'name' => $this->request->getPost('name'),
                    'description' => $this->request->getPost('description'),
                    'icon' => $this->request->getPost('icon') ?? '🌸'
                ]);
                
                return redirect()->to('/admin/categories')->with('success', 'Category updated successfully');
            } else {
                $data['errors'] = $this->validator->getErrors();
            }
        }
        
        return view('admin/layouts/main', ['content' => view('admin/categories/form', $data)]);
    }
    
    public function delete($id)
    {
        $categoryModel = new CategoryModel();
        $category = $categoryModel->find($id);
        
        if ($category) {
            $categoryModel->delete($id);
            return redirect()->to('/admin/categories')->with('success', 'Category deleted successfully');
        }
        
        return redirect()->to('/admin/categories')->with('error', 'Category not found');
    }
}