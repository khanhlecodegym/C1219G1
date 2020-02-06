<?php
// if (isset($_GET['name'])) {
//     print_r($_GET);
//     $name = $_GET['name'];
//     echo $name;
// }
    
// if (isset($_POST['name'])) {
//     // print_r($_GET);
//     $name = htmlspecialchars($_POST['name']);
//     echo $name;
// }

if (isset($_REQUEST['name'])) {
    // print_r($_GET);
    $name = htmlspecialchars($_REQUEST['name']);
    // echo $name;
}

$myServer = [
    'Server Soft' => $_SERVER['SERVER_SOFTWARE'],
    'Current Page' => $_SERVER['PHP_SELF'],
];

$client = [
    'client ip' => $_SERVER['REMOTE_ADDR']
];

print_r($client);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    

    <form action="method.php" method="post">
        <div>
            <label for="">Name</label><br>
            <input type="text" name="name" id="">
        </div>
        <div>
            <label for="">Email</label><br>
            <input type="text" name="email" id="">
        </div>
        <input type="submit" value="Submit">
    </form>

    <ul>
        <li><a href="method.php?name=Nam">Nam</a></li>
        <li><a href="method.php?name=Tien">Tien</a></li>
    </ul>
</body>
</html>