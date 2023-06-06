<?php

$str = 'Cadê o meu queijo? Ele estava aqui em cima';

$firstOccurrence = strpos($str, 'queijo');
$word = substr($str, $firstOccurrence, 6);

echo $word;
