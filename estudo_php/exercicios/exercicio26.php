<?php

$velocidades = [35, 26, 78, 40, 65, 12, 32];

foreach ($velocidades as $velocidade) {
    if ($velocidade < 40) {
        echo 'Velocidade correta.';
        echo "<br>";
    } elseif ($velocidade == 40) {
        echo 'Tome cuidado, velocidade limite.';
        echo "<br>";
    } else {
        echo 'Você recebeu uma multa por andar acima do limite permitido.';
        echo "<br>";
    }
}
