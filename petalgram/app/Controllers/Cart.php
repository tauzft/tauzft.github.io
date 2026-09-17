<?php

namespace App\Controllers;

use App\Models\ProductModel;

class Cart extends BaseController
{
    public function index()
    {
        $cart = session()->get('cart') ?? [];
        $data['cart'] = $cart;
        $data['total'] = $this->calculateTotal($cart);
        $data['title'] = 'Cart - Petalgram';
        
        return view('layouts/main', ['content' => view('cart/index', $data)]);
    }
    
    public function add()
    {
        $productId = $this->request->getPost('product_id');
        $quantity = $this->request->getPost('quantity') ?? 1;
        
        $productModel = new ProductModel();
        $product = $productModel->find($productId);
        
        if (!$product) {
            return $this->response->setJSON(['success' => false, 'message' => 'Product not found']);
        }
        
        if ($product['stock'] < $quantity) {
            return $this->response->setJSON(['success' => false, 'message' => 'Insufficient stock']);
        }
        
        $cart = session()->get('cart') ?? [];
        
        if (isset($cart[$productId])) {
            $newQuantity = $cart[$productId]['quantity'] + $quantity;
            if ($newQuantity > $product['stock']) {
                return $this->response->setJSON(['success' => false, 'message' => 'Not enough stock available']);
            }
            $cart[$productId]['quantity'] = $newQuantity;
        } else {
            $cart[$productId] = [
                'id' => $product['id'],
                'name' => $product['name'],
                'price' => $product['price'],
                'image' => $product['image'],
                'stock' => $product['stock'],
                'quantity' => $quantity
            ];
        }
        
        session()->set('cart', $cart);
        
        return $this->response->setJSON([
            'success' => true,
            'message' => 'Added to cart',
            'cart_count' => array_sum(array_column($cart, 'quantity'))
        ]);
    }
    
    public function update()
    {
        $productId = $this->request->getPost('product_id');
        $quantity = (int)$this->request->getPost('quantity');
        
        $cart = session()->get('cart') ?? [];
        
        if (!isset($cart[$productId])) {
            return $this->response->setJSON(['success' => false, 'message' => 'Product not in cart']);
        }
        
        $productModel = new ProductModel();
        $product = $productModel->find($productId);
        
        if ($quantity > $product['stock']) {
            return $this->response->setJSON(['success' => false, 'message' => 'Not enough stock']);
        }
        
        if ($quantity <= 0) {
            unset($cart[$productId]);
        } else {
            $cart[$productId]['quantity'] = $quantity;
        }
        
        session()->set('cart', $cart);
        
        return $this->response->setJSON([
            'success' => true,
            'cart_count' => array_sum(array_column($cart, 'quantity')),
            'total' => $this->calculateTotal($cart)
        ]);
    }
    
    public function remove()
    {
        $productId = $this->request->getPost('product_id');
        $cart = session()->get('cart') ?? [];
        unset($cart[$productId]);
        session()->set('cart', $cart);
        
        return $this->response->setJSON([
            'success' => true,
            'cart_count' => array_sum(array_column($cart, 'quantity'))
        ]);
    }
    
    public function clear()
    {
        session()->remove('cart');
        return $this->response->setJSON(['success' => true]);
    }
    
    private function calculateTotal($cart)
    {
        $total = 0;
        foreach ($cart as $item) {
            $total += $item['price'] * $item['quantity'];
        }
        return $total;
    }
}