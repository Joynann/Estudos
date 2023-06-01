<?php

function defineCorCarro($cor = 'Vermelho')
{
    if (!is_string($cor)) return 'O parametro precisa ser obrigatóriamente uma string.';

    return $cor;
}

echo defineCorCarro(45.54);
echo "<br>";
echo defineCorCarro();
echo "<br>";
echo defineCorCarro('Cinza');
