<?php

$numArray = ['teste', 5.98, 589, 4.78, 87.214];

for ($x = 0; $x < count($numArray); $x++) {
    $arrayCount = $numArray[$x];
    if (is_float($arrayCount)) {
        echo "'$arrayCount' é um número flutuante. <br>";
    } else {
        echo "'$arrayCount' não é um número flutuante. <br>";
    }
}
