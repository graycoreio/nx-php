<?php

namespace NxPhp\PackageA;

use NxPhp\PackageA\DemoClass;
use PHPUnit\Framework\TestCase;

class ClassTest extends TestCase {
    public function testItWorks() {
        $classInstance = new DemoClass();
        $classInstance->foo();
        $this->assertEquals($classInstance ,$classInstance );
    }
}