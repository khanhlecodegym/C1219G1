<?php
    class Person {
        public $name;
        private static $rank = 3;

        public function __construct(string $name = 'Tien')
        {
            $this->name = $name;

            echo __CLASS__ . ' khoi tao <br>';
        }

        public function getRank() {
            return self::$rank;
        }
    }


    $person1 = new Person();

    // $person1->name = 'Sang';
    // echo Person::$rank;
    echo $person1->getRank();

?>