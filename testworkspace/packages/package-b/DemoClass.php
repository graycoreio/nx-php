<?php

namespace NxPhp\PackageB;

use NxPhp\PackageA\DemoClass as PackageADemoClass;

class DemoClass {
    public function foo() {
        $a = new PackageADemoClass();
        $a->foo();
        echo "\n Sleeping for 3...";
        sleep(3);
        echo "\n B Foo...";
    }   
}