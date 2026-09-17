<?php

namespace App\Controllers;

class Messenger extends BaseController
{
    public function index()
    {
        $data = [
            'title' => 'Messages - Petalgram',
            'content' => 'orders/history'
        ];
        return view('layouts/main', $data);
    }

    public function send()
    {
        return redirect()->back()->with('success', 'Message sent');
    }

    public function conversation($id)
    {
        $data = [
            'title' => 'Conversation - Petalgram',
            'content' => 'orders/history'
        ];
        return view('layouts/main', $data);
    }
}
