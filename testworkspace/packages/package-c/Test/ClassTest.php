<?php

namespace NxPhp\PackageC;

use NxPhp\PackageC\DemoClass;
use PHPUnit\Framework\TestCase;

class ClassTest extends TestCase {
    public function testItWorks() {
        $classInstance = new DemoClass();
        $classInstance->foo();
        $this->assertEquals($classInstance ,$classInstance );
    }
}