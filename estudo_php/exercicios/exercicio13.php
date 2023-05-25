<?php

$n1 = 14;
$n2 = 2;
$n3 = 5;

$resto1 = $n1 % $n2;
$resto2 = $n1 % $n3;

if ($resto1 == 0) {
    echo "$n1 / $n2 é uma divisão exata. <br>";
} else {
    echo "$n1 / $n2 não é uma divisão exata. <br>";
}

if ($resto2 == 0) {
    echo "$n1 / $n3 é uma divisão exata. <br>";
} else {
    echo "$n1 / $n3 não é uma divisão exata. <br>";
}
