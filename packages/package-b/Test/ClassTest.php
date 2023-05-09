<?php

namespace NxPhp\PackageB;

use NxPhp\PackageB\DemoClass;

use PHPUnit\Framework\TestCase;

class ClassTest extends TestCase
{
    public function testItWorks()
    {
        $classInstance = new DemoClass();
        $classInstance->foo();
        $this->assertEquals($classInstance, $classInstance);
    }
}
