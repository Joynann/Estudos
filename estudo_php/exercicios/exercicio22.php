<?php

$idades = [18, 14, 26];

$maioridade = 18;
$msgMaioridade = ' anos já é maior de idade.';

foreach ($idades as $idade) {
    if ($idade >= $maioridade) {
        echo $idade . $msgMaioridade;
        echo "<br>";
    }
}
