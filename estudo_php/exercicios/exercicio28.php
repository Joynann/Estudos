<?php

$contador = 4;

while ($contador <= 30) {
    if ($contador == 24) {
        echo 'Contador com valor 24, parando código. <br>';
        break;
    }

    echo $contador . "<br>";
    $contador += 2;
}

echo "Fim do código.";
