<?php

$numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
$x = 0;

while ($x < count($numeros)) {
    $numero = $numeros[$x];

    if ($numero === 30 || $numero === 40) {
        echo "Pulando código. <br>";
        $x++;
        continue;
    }

    echo $numero . "<br>";

    $x++;
}
