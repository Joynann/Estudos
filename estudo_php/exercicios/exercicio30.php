<?php

$numeros = [];

for ($x = 0; $x < 20; $x++) {
    $numeros[$x] = $x + 1;
}

foreach ($numeros as $numero) {
    if ($numero % 2 === 0) {
        echo $numero . " é par. <br>";
    }
}
