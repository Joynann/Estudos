<?php

$dados = ['teste', 15, 78, '1.568', true, 31, 4.8936, '81'];

foreach ($dados as $dado) {
    if (is_int($dado)) {
        echo $dado . "\t => \t" . 'é um inteiro';
        echo "<br>";
    } else {
        echo $dado . "\t => \t" . 'não é um inteiro';
        echo "<br>";
    }
}
