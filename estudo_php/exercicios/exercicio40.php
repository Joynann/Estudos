<?php

$str = 'O rato roeu a roupa do rei de Roma.';
$count_a = 0;

for ($x = 0; $x < strlen($str); $x++) {
    if ($str[$x] == 'a') $count_a++;
}

echo $count_a;
