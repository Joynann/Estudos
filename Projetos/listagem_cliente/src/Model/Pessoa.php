<?php

namespace ListagemCliente\Model;

use InvalidArgumentException;
use ListagemCliente\Enum\Sexo;

abstract class Pessoa
{
    private string $nomeCompleto;
    private string $telefone;
    private string $dataAniversario;

    public function __construct(
        public readonly int $id,
        string $nomeCompleto,
        public readonly Sexo $sexo,
        string $telefone,
        ?string $dataAniversario = NULL,
        private array $tags = [],
    ) {
        $this->definiNome($nomeCompleto);
        $this->definiTelefone($telefone);
        if (is_string($dataAniversario)) {
            $this->definiData($dataAniversario);
        }
    }

    // nome completo Getter/Setter
    public function mostraNome(): string
    {
        return $this->nomeCompleto;
    }

    public function definiNome(string $nomeCompleto): void
    {
        $validador = self::validaNomeCompleto($nomeCompleto);
        if (!$validador) {
            throw new InvalidArgumentException("Seu nome deve conter no minimo 5 caracteres e no máximo 50!");
        }
        $this->nomeCompleto = $nomeCompleto;
    }

    //Funções estáticas para auxiliar no desenvolvimento de Nome Completo
    private static function validaNomeCompleto(string $nomeCompleto): bool
    {
        $strNomeCompleto = strlen($nomeCompleto);
        return $strNomeCompleto >= 5 || $strNomeCompleto <= 50;
    }

    // Telefone Getter/Setter
    public function mostraTelefone(): string
    {
        return $this->telefone;
    }

    public function definiTelefone(string $telefone): void
    {
        $telefone = self::limpaTelefone($telefone);
        $validador = self::validaTelefone($telefone);
        if (!$validador) {
            throw new InvalidArgumentException('Telefone inválido, por favor tente novamente com um telefone válido!');
            return;
        }
        $telefone = self::formataTelefone($telefone);
        $this->telefone = $telefone;
    }

    //Funções estáticas para auxiliar a adicionar um novo telefone.

    private static function limpaTelefone(string $telefone): string
    {
        $telefone = preg_replace('/[^0-9]/', '', $telefone);
        return $telefone;
    }

    private static function validaTelefone(string $telefone): bool
    {
        $strLen = strlen($telefone);
        return $strLen == 9 || $strLen == 11 || $strLen == 13;
    }

    private static function formataTelefone(string $telefone): string
    {
        $strLen = strlen($telefone);
        switch ($strLen) {
            case 9:
                $substr1 = substr($telefone, 0, 5);
                $substr2 = substr($telefone, 5);
                $telefone = $substr1 . '-' . $substr2;
                break;
            case 11:
                $substr1 = substr($telefone, 0, 2);
                $substr2 = substr($telefone, 2, 5);
                $substr3 = substr($telefone, 7);
                $telefone = '(' . $substr1 . ') ' . $substr2 . '-' . $substr3;
                break;
            case 13:
                $substr1 = substr($telefone, 0, 2);
                $substr2 = substr($telefone, 2, 2);
                $substr3 = substr($telefone, 4, 5);
                $substr4 = substr($telefone, 9);
                $telefone = '+' . $substr1 . '(' . $substr2 . ') ' . $substr3 . '-' . $substr4;
                break;
            default:
                break;
        }

        return $telefone;
    }

    public static function retornaTelefoneParaPesquisa(string $telefone): string
    {
        $telefone = self::limpaTelefone($telefone);
        $validador = self::validaTelefone($telefone);
        if (!$validador) {
            throw new InvalidArgumentException('Telefone inválido, por favor tente novamente com um telefone válido!');
        }
        $telefone = self::formataTelefone($telefone);
        return $telefone;
    }

    // Data Aniversário Getter/Setter
    public function mostraData(): string
    {
        return $this->dataAniversario;
    }

    public function definiData(string $dataAniversario): void
    {
        $validador = self::validaDataAniversario($dataAniversario);
        if (!$validador) {
            throw new InvalidArgumentException("Data inválida, por favor tente novamente com uma data válida!");
        }
        $this->dataAniversario = $dataAniversario;
    }

    //Funções estáticas para auxiliar a adicionar ou modificar a data de aniversário.
    private static function validaDataAniversario(string $data): bool
    {
        $formato = 'd-m-Y';
        $data = \DateTime::createFromFormat($formato, $data);
        return $data && $data->format($formato);
    }

    // Tags Getter/Adiciona/Remove

    public function mostraTags(): array
    {
        return $this->tags;
    }

    public function adicionaTag(string $tag): void
    {
        $validador = self::validaTag($tag);
        if (!$validador) {
            throw new InvalidArgumentException('A tag não pode ser um valor vazio e não pode exceder 30 caracteres, tente novamente com uma tag válida');
            return;
        }
        $this->tags[] = $tag;
    }

    public function removerTag(string $tag): void
    {
        $tags = $this->tags;
        $indice = array_search($tag, $tags);
        if ($indice) {
            throw new InvalidArgumentException('Esta tag não existe, tente novamente com uma tag existente');
            return;
        }
        unset($tags[$indice]);
        $this->tags = $tags;
    }

    //Funções estáticas para auxiliar a adicionar uma nova tag.
    private static function validaTag(string $tag): bool
    {
        $taglen = strlen($tag);
        return $taglen > 0 || $taglen <= 30;
    }
}
