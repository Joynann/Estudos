<?php

$dados = ['asdiasf', '59', 12, 'frgahd', 59.12, 78, '48.86', 'ighjeo6515'];

foreach ($dados as $dado) {
    if (is_numeric($dado)) {
        $numMultiplicado = $dado * 2;
        if ($numMultiplicado > 100) {
            echo $numMultiplicado . ' é um número e é maior que 100.';
            echo "<br>";
        } else {
            echo $numMultiplicado . ' é um número mas não é maior que 100';
            echo "<br>";
        }
    } else {
        echo $dado . ' não é um número.';
        echo "<br>";
    }
}
