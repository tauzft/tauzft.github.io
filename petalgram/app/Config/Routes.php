<?php

use CodeIgniter\Router\RouteCollection;

/** @var RouteCollection $routes */

$routes->get('/', 'Home::index');

$routes->get('shop', 'Shop::index');
$routes->get('product/(:num)', 'Shop::product/$1');
$routes->get('category/(:num)', 'Shop::category/$1');
$routes->get('search', 'Shop::search');

$routes->get('cart', 'Cart::index');
$routes->post('cart/add', 'Cart::add');
$routes->post('cart/update/(:num)', 'Cart::update/$1');
$routes->post('cart/remove/(:num)', 'Cart::remove/$1');
$routes->post('cart/empty', 'Cart::empty');

$routes->get('checkout', 'Checkout::index');
$routes->get('checkout/payment', 'Checkout::payment');
$routes->post('checkout/process', 'Checkout::process');
$routes->get('checkout/success/(:num)', 'Checkout::success/$1');

$routes->get('orders', 'Order::history');
$routes->get('order/(:num)', 'Order::view/$1');
$routes->get('order/track', 'Order::track');
$routes->get('api/order-status/(:num)', 'Order::status/$1');

$routes->get('login', 'Auth::login');
$routes->post('login', 'Auth::login');
$routes->get('register', 'Auth::register');
$routes->post('register', 'Auth::register');
$routes->get('logout', 'Auth::logout');

$routes->get('profile', 'Profile::index');
$routes->post('profile/update', 'Profile::update');

$routes->get('messages', 'Messenger::index');
$routes->post('messages/send', 'Messenger::send');
$routes->get('messages/(:num)', 'Messenger::conversation/$1');

$routes->get('admin', 'Admin\Dashboard::index');
$routes->get('admin/products', 'Admin\Products::index');
$routes->get('admin/products/add', 'Admin\Products::add');
$routes->get('admin/products/edit/(:num)', 'Admin\Products::edit/$1');
$routes->get('admin/products/delete/(:num)', 'Admin\Products::delete/$1');
$routes->post('admin/products/add', 'Admin\Products::add');
$routes->post('admin/products/edit/(:num)', 'Admin\Products::edit/$1');
$routes->get('admin/categories', 'Admin\Categories::index');
$routes->get('admin/categories/add', 'Admin\Categories::add');
$routes->get('admin/categories/edit/(:num)', 'Admin\Categories::edit/$1');
$routes->get('admin/categories/delete/(:num)', 'Admin\Categories::delete/$1');
$routes->post('admin/categories/add', 'Admin\Categories::add');
$routes->post('admin/categories/edit/(:num)', 'Admin\Categories::edit/$1');
$routes->get('admin/orders', 'Admin\Orders::index');
$routes->get('admin/orders/(:num)', 'Admin\Orders::view/$1');
$routes->post('admin/orders/update/(:num)', 'Admin\Orders::update/$1');
$routes->get('admin/customers', 'Admin\Customers::index');
$routes->get('admin/customers/(:num)', 'Admin\Customers::view/$1');
$routes->get('admin/reports', 'Admin\Reports::index');
