<?php

$pesos = [85, 45, 72, 80, 69, 94, 82];

foreach ($pesos as $peso) {
    if ($peso > 80) {
        echo $peso . "Kg está pesado demais.";
        echo "<br>";
    } else {
        echo $peso . "Kg está dentro do limite.";
        echo "<br>";
    }
}
