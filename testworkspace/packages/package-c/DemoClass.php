<?php

namespace NxPhp\PackageC;

use NxPhp\PackageB\DemoClass as PackageBDemoClass;

class DemoClass
{

    public function foo()
    {
        $b = new PackageBDemoClass();
        $b->foo();

        echo "\n C Foo...";
    }
}
