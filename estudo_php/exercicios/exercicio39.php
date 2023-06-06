<?php

function filtraPreco($itens = [])
{
    if (!is_array($itens)) return ['erro' => 'O parametro precisa ser obrigatóriamente um array.'];

    $newItens = [];

    foreach ($itens as $item => $value) {
        if ($value < 10) continue;
        $newItens[$item] = $value;
    }

    return $newItens;
}

print_r(filtraPreco([
    'carro' => 16000,
    'bicicleta' => 2500,
    'chiclete' => 0.5,
    'chocolate' => 6,
    'casa' => 340000
]));
