<?php

namespace App\Controllers;

use App\Models\OrderModel;
use App\Models\OrderItemModel;

class Order extends BaseController
{
    protected $orderModel;
    protected $orderItemModel;

    public function __construct()
    {
        $this->orderModel = new OrderModel();
        $this->orderItemModel = new OrderItemModel();
    }

    public function history()
    {
        $userId = session()->get('user_id');
        $orders = $this->orderModel->getByUserId($userId);

        $data = [
            'title' => 'Order History - Petalgram',
            'orders' => $orders,
            'content' => 'orders/history'
        ];
        return view('layouts/main', $data);
    }

    public function view($id)
    {
        $order = $this->orderModel->getById($id);
        if (!$order) {
            return redirect()->to('/orders')->with('error', 'Order not found');
        }

        $items = $this->orderItemModel->getByOrderId($id);

        $data = [
            'title' => 'Order #' . $id . ' - Petalgram',
            'order' => $order,
            'items' => $items,
            'content' => 'orders/history'
        ];
        return view('layouts/main', $data);
    }

    public function track()
    {
        $orderId = $this->request->getGet('id');
        $order = null;
        $items = [];

        if ($orderId) {
            $order = $this->orderModel->getById($orderId);
            if ($order) {
                $items = $this->orderItemModel->getByOrderId($orderId);
            }
        }

        $data = [
            'title' => 'Track Order - Petalgram',
            'order' => $order,
            'items' => $items,
            'orderId' => $orderId,
            'content' => 'orders/tracking'
        ];
        return view('layouts/main', $data);
    }

    public function status($id)
    {
        $status = $this->request->getPost('status');
        if ($this->orderModel->updateStatus($id, $status)) {
            return $this->response->setJSON(['success' => true, 'status' => $status]);
        }
        return $this->response->setStatusCode(500)->setJSON(['error' => 'Failed to update status']);
    }
}
