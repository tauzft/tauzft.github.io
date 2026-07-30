<?php

namespace App\Controllers;

use CodeIgniter\Controller;

class BaseController extends Controller
{
    protected $session;

    public function __construct()
    {
        $this->session = session();
    }

    public function isLoggedIn()
    {
        return $this->session->get('logged_in') === true;
    }

    public function isAdmin()
    {
        return $this->session->get('user_role') === 'admin';
    }
}
