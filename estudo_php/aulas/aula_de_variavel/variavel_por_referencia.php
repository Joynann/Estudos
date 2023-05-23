<?php

$x = 1;
$y  = &$x;

echo 'Print das variaveis';
echo "<br>";
echo "$x";
echo "<br>";
echo "$y";
echo "<br> <br>";

$x = 2;
echo 'Print das variaveis após mudança em variavel principal';
echo "<br>";
echo "$x";
echo "<br>";
echo "$y";
echo "<br> <br>";

$y = 3;
echo 'Print das variaveis após mudança em variavel de referência';
echo "<br>";
echo "$x";
echo "<br>";
echo "$y";
