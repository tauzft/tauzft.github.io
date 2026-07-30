<?php

namespace Config;

use CodeIgniter\Config\AutoloadConfig;

class Autoload extends AutoloadConfig
{
    public $psr4 = [
        APPPATH => APPPATH,
    ];

    public $classmap = [
        // App\Libraries\SomeLib => APPPATH . 'Libraries/SomeLib.php',
    ];

    public $files = [];

    public $helpers = [];
}
