<?php

abstract class Geometric {
    protected $type;

    public function __construct($type)
    {
        $this->type = $type;
    }

    public function getType() 
    {
        return $this->type . __CLASS__;
    }
    
    abstract function getColor();

    abstract function getArea();
    

}


abstract class Rectangle extends Geometric {


    // public function getColor()
    // {
    //     return 'red';
    // }

    public function getArea()
    {
        return 20;
    }

    abstract function getName();
}

class Cricle extends Geometric {
    protected $radius;


    public function getColor()
    {
        return 'green';
    }

    public function getArea()
    {
        return pi() * $this->radius * $this->radius;
    }

    public function setRadius($radius)
    {
        $this->radius = $radius;
        return $this;
    }
}


// $rec = new Rectangle('rec');
$cir = new Cricle('Cir');

echo $cir->setRadius(20)->getArea();
// echo $cir->getArea();


?>