<?php

$valores = [15, 'String 1', 4465.4847, true, 'String 2', 165, 'String 3', false, 785.14, 'String 4'];

$x = 0;

while ($x < count($valores)) {
    $valor = $valores[$x];

    // -- //
    if (is_string($valor)) {
        echo "'" . $valor . "' é uma string.";
    } else if (is_bool($valor)) {
        echo $valor ? "'True' é um valor Booleano." : "'False' é um valor Booleano.";
    } else {
        echo "'" . $valor . "' não é uma string.";
    }
    // -- //

    echo "<br>";
    $x++;
}
