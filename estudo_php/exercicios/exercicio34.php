<?php

function verificarNumero($numero)
{
    if (is_int($numero)) {
        echo ($numero % 2 === 0) ?
            $numero . " é par. <br>" :
            $numero . " é ímpar. <br>";
    } else {
        echo "Por favor insira um número inteiro. <br>";
    }
}

verificarNumero(59);
verificarNumero(50);
verificarNumero(34.548);
verificarNumero(31);
verificarNumero('hbsoiudh');
