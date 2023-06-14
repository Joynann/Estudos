<?php

$ingredientes = ['batata', 'maçã', 'pera', 'feijão', 'arroz'];

$newIngredientes = array_splice($ingredientes, 2, 2);

print_r($newIngredientes);
echo "<br>";
print_r($ingredientes);
