<?php

$matriz = [
    [1, 2, 3, 8],
    [9, 8, 7, 2],
    [5, 7, 1, 9]
];

$x = 1;
foreach ($matriz as $arr) {
    if (!is_array($arr)) continue;
    echo $x . "º array: <br>";
    foreach ($arr as $num) {
        if (!is_int($num)) continue;
        echo "$num \t";
    }
    echo "<br><br>";
    $x++;
}
