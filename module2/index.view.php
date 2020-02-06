<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        header {
            background: burlywood;
            text-align: center;
            padding: 2em;
        }

        .sec1 {
            background: pink;
        }

        .sec2 {
            background: gray;
            min-height: 400px;
            color: white
        }

        .icon {
            font-size: 50px;
        }
    </style>
</head>

<body>
    <header>
        <h1>
            <?= 'Hello ' . $name ?>
        </h1>
    </header>

    <section class="sec1">
        <ul>
            <?php
            foreach ($animals as $animal) {
                echo "<li><strong>$animal</strong></li>";
            }

            ?>

            <?php for ($i = 0; $i < count($animals); $i++) : ?>
                <li>
                    <strong><?= $animals[$i] ?></strong>

                </li>
            <?php endfor ?>
        </ul>
    </section>

    <section class="sec2">
        <ul>
            <?php
            foreach ($persons as $key => $person) {
                echo "<li><strong>" . ucwords($key) . "</strong> $person</li>";
            }

            ?>

            <li><strong>Họ và Tên: </strong> <?= $persons['name']?> </li>
            <li><strong>Tuổi: </strong> <?= $persons['age']?> </li>
            <li><strong>Skills:  </strong> <?= $persons['skill']?> </li>
            <li><strong>Giới Tính: </strong>  
                <?php if($persons['gender']) : ?>
                    <span class="icon">&#128104;</span>
                <?php else : ?>    
                    <span class="icon">&#128105;</span>
                <?php endif ?>   
            </li>
        </ul>
    </section>
</body>

</html>