<?php

namespace NxPhp\PackageC;

use NxPhp\PackageB\DemoClass as PackageBDemoClass;

class DemoClass
{

    public function foo()
    {
        $b = new PackageBDemoClass();
        $b->foo();

        echo "\n Sleeping for 1...";
        sleep(1);

        echo "\n C Foo...";
    }
}
