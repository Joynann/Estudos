<?php

namespace ListagemCliente\Model;

use ListagemCliente\Enum\Sexo;

class Vendedor extends Pessoa
{
    public function __construct(
        int $id,
        string $nomeCompleto,
        Sexo $sexo,
        string $telefone,
        string $dataAniversario = NULL,
        array $tags = [],
    ) {
        parent::__construct(
            $id,
            $nomeCompleto,
            $sexo,
            $telefone,
            $dataAniversario,
            $tags,
        );
    }
}
