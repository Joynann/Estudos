<?php

$nome = 'cachorro';
$raca = 'vira lata';
$qtd_membros = 4;
$cor = 'caramelo';
$habilidade = 'morder';
$função = 'correr atrás de motos';

$animal = compact("nome", "raca", "qtd_membros", "cor", "habilidade", "função");

print_r($animal);
