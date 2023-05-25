<?php

$n = "5" * 12;
$type = gettype($n);

if ($type == 'integer') {
    echo "$n é um inteiro";
} else {
    echo "Não é um inteiro.";
}
