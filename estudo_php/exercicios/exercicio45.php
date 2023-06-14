<?php

$numeros = range(10, 45);

foreach ($numeros as $num) {
    $num += 6;
    if ($num > 30) {
        echo "$num, valor muito alto <br>";
        continue;
    }
    echo "$num <br>";
}
