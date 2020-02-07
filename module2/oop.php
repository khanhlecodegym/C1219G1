<?php
    class Person {
        public $name;
        private static $rank = 3;

        public function __construct(string $name = 'Tien')
        {
            $this->name = $name;

            echo __CLASS__ . ' khoi tao <br>';
        }

        public function getRank($name) {
            return  self::$rank . $name;
        }

        public function sayHello($text) {
            echo $this->name . ' ' . $text;
        }
    }

    class Student extends Person {
        protected $gender;
        protected $email;

        public function setGender($gender) {
            $this->gender = $gender;
            return $this;
        }

        public function getGender() {
           return  $this->gender;
        }

        public function setEmail($email) {
            $this->email = $email;
        }

        public function getEmail() {
           return  $this->email;
        }

        public function getRank($name)
        {
            return 4 . $name;
        }

        public function sayHello($text)
        {
            parent::sayHello($text);
            echo $this->getGender() ? 'nam' : 'nu';
        }
    }

    $stu1 = new Person();

    // $stu1->setGender(true)
    //      ->setEmail('nam@nu123');
    // echo $stu1->getEmail();
    // echo $stu1->getGender() ? 'nam' : 'nu';

    echo $stu1->sayHello('linh');
?>