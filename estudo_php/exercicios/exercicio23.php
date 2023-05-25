<?php

$idades = [18, 14, 26];

$maioridade = 18;
$msgMaioridade = ' anos já é maior de idade.';
$msgMenoridade = ' anos ainda é menor de idade.';

foreach ($idades as $idade) {
    if ($idade >= $maioridade) {
        echo $idade . $msgMaioridade;
        echo "<br>";
    } else {
        echo $idade . $msgMenoridade;
        echo "<br>";
    }
}
