<?php

namespace App\Controllers;

use App\Models\UserModel;

class Auth extends BaseController
{
    protected $userModel;

    public function __construct()
    {
        $this->userModel = new UserModel();
    }

    public function login()
    {
        if ($this->request->getMethod() === 'post') {
            $email = $this->request->getPost('email');
            $password = $this->request->getPost('password');

            $user = $this->userModel->findByEmail($email);

            if ($user && password_verify($password, $user->password)) {
                session()->set([
                    'user_id' => $user->id,
                    'user_name' => $user->name,
                    'user_email' => $user->email,
                    'user_role' => $user->role,
                    'logged_in' => true
                ]);

                if ($user->role === 'admin') {
                    return redirect()->to('/admin');
                }
                return redirect()->to('/')->with('success', 'Welcome back, ' . $user->name);
            }

            return redirect()->back()->with('error', 'Invalid email or password');
        }

        $data = [
            'title' => 'Login - Petalgram',
            'content' => 'auth/login'
        ];
        return view('layouts/main', $data);
    }

    public function register()
    {
        if ($this->request->getMethod() === 'post') {
            $name = $this->request->getPost('name');
            $email = $this->request->getPost('email');
            $password = $this->request->getPost('password');

            $existingUser = $this->userModel->findByEmail($email);
            if ($existingUser) {
                return redirect()->back()->with('error', 'Email already registered');
            }

            $userId = $this->userModel->createUser([
                'name' => $name,
                'email' => $email,
                'password' => $password
            ]);

            if ($userId) {
                session()->set([
                    'user_id' => $userId,
                    'user_name' => $name,
                    'user_email' => $email,
                    'user_role' => 'customer',
                    'logged_in' => true
                ]);
                return redirect()->to('/')->with('success', 'Account created successfully');
            }

            return redirect()->back()->with('error', 'Failed to create account');
        }

        $data = [
            'title' => 'Register - Petalgram',
            'content' => 'auth/register'
        ];
        return view('layouts/main', $data);
    }

    public function logout()
    {
        session()->destroy();
        return redirect()->to('/')->with('success', 'Logged out successfully');
    }
}
