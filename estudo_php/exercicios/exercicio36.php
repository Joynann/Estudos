<?php

function filtrarNumeros($numeros = [])
{
    $config = [
        'erros' => [],
        'sucesso' => [],
        'warn' => []
    ];

    if (!is_array($numeros)) {
        array_push($config['erros'], 'Não foi inserido um array no parametro.');
        return $config;
    }

    $novosNumeros = [];

    foreach ($numeros as $numero) {
        if ($numero > 7 && is_numeric($numero)) {
            array_push($novosNumeros, $numero);
        }
    }

    return $novosNumeros;
}

echo print_r(filtrarNumeros('hgdthgregt'));
echo "<br>";
echo print_r(filtrarNumeros(['geiurhf', 45, 12, 6, 7, 1, 56.8978, '478', '354mhj6541', 31]));
