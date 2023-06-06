<?php

$str = "este item está em promoção";
$str = ucfirst($str);

$arrStr = explode(' ', $str);

$lastWord = end($arrStr);
$upperLastWord = mb_strtoupper($lastWord, 'UTF-8');

$str = str_replace($lastWord, $upperLastWord, $str);

echo $str;
