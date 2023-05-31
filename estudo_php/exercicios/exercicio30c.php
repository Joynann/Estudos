<?php

$numeros = [];

for ($x = 10; $x <= 20; $x++) {
    array_push($numeros, $x);
}

foreach ($numeros as $numero) {
    if ($numero % 2 !== 0) {
        echo $numero . " é um número ímpar. <br>";
    }
}
