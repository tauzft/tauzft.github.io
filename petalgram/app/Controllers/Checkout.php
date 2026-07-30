<?php

namespace App\Controllers;

use App\Models\OrderModel;
use App\Models\OrderItemModel;
use App\Models\ProductModel;

class Checkout extends BaseController
{
    public function index()
    {
        $cart = session()->get('cart') ?? [];
        if (empty($cart)) {
            return redirect()->to('/cart')->with('error', 'Your cart is empty');
        }
        
        $data['cart'] = $cart;
        $data['total'] = $this->calculateTotal($cart);
        $data['title'] = 'Checkout - Petalgram';
        
        return view('layouts/main', ['content' => view('checkout/index', $data)]);
    }
    
    public function process()
    {
        $cart = session()->get('cart') ?? [];
        if (empty($cart)) {
            return redirect()->to('/cart')->with('error', 'Your cart is empty');
        }
        
        $orderModel = new OrderModel();
        $orderItemModel = new OrderItemModel();
        $productModel = new ProductModel();
        
        // Validate stock before processing
        foreach ($cart as $item) {
            $product = $productModel->find($item['id']);
            if (!$product || $product['stock'] < $item['quantity']) {
                return redirect()->back()->with('error', 'Not enough stock for ' . $item['name']);
            }
        }
        
        // Prepare order data
        $orderData = [
            'order_number' => $orderModel->generateOrderNumber(),
            'customer_name' => $this->request->getPost('name'),
            'customer_email' => $this->request->getPost('email'),
            'customer_phone' => $this->request->getPost('phone'),
            'delivery_address' => $this->request->getPost('address'),
            'total_amount' => $this->calculateTotal($cart),
            'status' => 'pending',
            'payment_method' => 'messenger',
            'payment_status' => 'pending',
            'notes' => $this->request->getPost('notes') ?? ''
        ];
        
        // Save order
        $orderId = $orderModel->insert($orderData);
        
        // Save order items and update stock
        foreach ($cart as $item) {
            $orderItemModel->insert([
                'order_id' => $orderId,
                'product_id' => $item['id'],
                'product_name' => $item['name'],
                'quantity' => $item['quantity'],
                'price' => $item['price']
            ]);
            
            // Update stock
            $product = $productModel->find($item['id']);
            $productModel->update($item['id'], [
                'stock' => $product['stock'] - $item['quantity']
            ]);
        }
        
        // Clear cart
        session()->remove('cart');
        
        session()->setFlashdata('order_id', $orderId);
        return redirect()->to('/checkout/success');
    }
    
    public function success()
    {
        $orderId = session()->getFlashdata('order_id');
        if (!$orderId) {
            return redirect()->to('/');
        }
        
        $orderModel = new OrderModel();
        $data['order'] = $orderModel->find($orderId);
        $data['title'] = 'Order Success - Petalgram';
        
        return view('layouts/main', ['content' => view('checkout/success', $data)]);
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