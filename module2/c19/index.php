<?php 
    $name = htmlspecialchars($_GET['name']) ;
    
    $animals = [
        'Nam',
        'Tien',
        'Sang',
        10
    ];

    $animals[30] = 'Thuât';
    $animals[] = 'Thuât';
    
    $persons = [
        'name' => 'Hoàng',
        'age' => 25,
        'skill' => 'Front End'
    ];

    $persons['gender'] = false;


    // if (! $persons['gender']) {
    //     echo 'Nam';
    // } else {
    //     echo 'Nữ';
    // }
    
    // echo $persons['gender'] ? 'Nam' : 'Nữ' ;

    // $arr = [];
    //     unset($animals[31]);
    // var_dump($animals);

    // echo count($arr);

    require 'index.view.php'
        
?>