<?php

namespace ListagemCliente\Model;

use ListagemCliente\Enum\Sexo;

class Cliente extends Pessoa
{
    public function __construct(
        int $id,
        string $nomeCompleto,
        Sexo $sexo,
        string $telefone,
        string $dataAniversario,
        array $tags = [],
        private ?int $id_vendedor_masc = NULL,
        private ?int $id_vendedor_fem = NULL,
        private string $descricao = '',
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

    // Descrição getter/setter
    public function mostraDescricao(): string
    {
        return $this->descricao;
    }

    public function definiDescricao(string $descricao): void
    {
        $this->descricao = $descricao;
    }

    // id vendedores getter/setter
    public function mostraIdVendedorMasc(): ?int
    {
        return $this->id_vendedor_masc;
    }


    public function mostraIdVendedorFem(): ?int
    {
        return $this->id_vendedor_fem;
    }

    public function definiVendedorMasc(?int $id): void
    {
        if ($this->id_vendedor_masc !== NULL) {
            throw new \InvalidArgumentException("Este cliente já possui um vendedor atrelado");
        }
        $this->id_vendedor_masc = $id;
    }

    public function definiVendedorFem(?int $id): void
    {
        if ($this->id_vendedor_fem !== NULL) {
            throw new \InvalidArgumentException("Este cliente já possui um vendedor atrelado");
        }
        $this->id_vendedor_fem = $id;
    }
}
