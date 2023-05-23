<?php

$x = 'global 1';
echo "$x";
echo "<br>";

function teste()
{
    $x = 'global 2';
    echo "$x";
}
echo "$x";
echo "<br>";

teste();

if (true) {
    echo "<br> $x";
}
