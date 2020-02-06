<?php

function sayHello(string $name, $age = 10) {
    if ($age > 40) {
        throw new Exception("Ban qua lon tuoi");
    }
    echo 'Hello '. $name . $age;
}


?>