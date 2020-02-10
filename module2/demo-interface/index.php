<?php

abstract class Animal {
    protected $age = 1;

    public function getAge() 
    {
        return $this->age;
    }
}

interface Flyable {
    function fly();
}

interface Moable {
    function mo();
}

interface Homesafe {
    function giunha();
    function can();
}

interface NhapHocLopC12 {
    function nhaphoc();
}

class Bird extends Animal implements Flyable, Moable {

    public function fly()
    {
        return 'bay len troi';
    }

    public function mo()
    {
        return 'bay len troi';
    }
}

class Dog implements Homesafe{
    protected $name;

    public function __construct()
    {
        $this->name = 'Red';
    }

    public function giunha()
    {
        return 'Chống trộm';
    }

    public function can()
    {
        return 'Trom vao thi can';
    }
}

$bir = new Bird();
echo $bir->getAge();

?>


