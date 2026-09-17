<?php

namespace App\Controllers;

use App\Models\UserModel;

class Profile extends BaseController
{
    protected $userModel;

    public function __construct()
    {
        $this->userModel = new UserModel();
    }

    public function index()
    {
        $userId = session()->get('user_id');
        if (!$userId) {
            return redirect()->to('/login');
        }

        $user = $this->userModel->getById($userId);

        $data = [
            'title' => 'Profile - Petalgram',
            'user' => $user,
            'content' => 'profile/index'
        ];
        return view('layouts/main', $data);
    }

    public function update()
    {
        $userId = session()->get('user_id');
        $this->userModel->update($userId, [
            'name' => $this->request->getPost('name'),
            'email' => $this->request->getPost('email')
        ]);
        session()->set('user_name', $this->request->getPost('name'));
        return redirect()->to('/profile')->with('success', 'Profile updated');
    }
}
