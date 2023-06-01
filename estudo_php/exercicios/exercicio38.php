<?php

function listaSupermercado($lista = [])
{
    if (!is_array($lista)) return 'O parametro precisa ser obrigatóriamente um array.';

    $msg = "Você levou estes itens do mercado: " . implode(', ', $lista) . ".";

    return $msg;
}

echo listaSupermercado(['ovos', 'arroz', 'feijão', 'tomate', 'pepino']);
