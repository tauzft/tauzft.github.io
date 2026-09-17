<?php

namespace App\Controllers\Admin;

use App\Controllers\BaseController;
use App\Models\OrderModel;
use App\Models\OrderItemModel;

class Orders extends BaseController
{
    public function index()
    {
        $orderModel = new OrderModel();
        $data['orders'] = $orderModel->getOrdersWithItems();
        return view('admin/layouts/main', ['content' => view('admin/orders/index', $data)]);
    }
    
    public function view($id)
    {
        $orderModel = new OrderModel();
        $orderItemModel = new OrderItemModel();
        
        $data['order'] = $orderModel->find($id);
        $data['items'] = $orderItemModel->where('order_id', $id)->findAll();
        
        if (!$data['order']) {
            return redirect()->to('/admin/orders')->with('error', 'Order not found');
        }
        
        return view('admin/layouts/main', ['content' => view('admin/orders/view', $data)]);
    }
    
    public function update($id)
    {
        $orderModel = new OrderModel();
        $status = $this->request->getPost('status');
        $payment_status = $this->request->getPost('payment_status');
        
        $updateData = [];
        if ($status) $updateData['status'] = $status;
        if ($payment_status) $updateData['payment_status'] = $payment_status;
        
        if (!empty($updateData)) {
            $orderModel->update($id, $updateData);
            return redirect()->back()->with('success', 'Order updated successfully');
        }
        
        return redirect()->back()->with('error', 'No changes made');
    }
}