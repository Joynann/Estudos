<?php

namespace ListagemCliente\Model;

use InvalidArgumentException;
use ListagemCliente\Enum\Sexo;

class ManipuladorJson
{
    private ?Cliente $cliente = NULL;
    private const CAMINHO_BASE_JSON = __DIR__ . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . 'json' . DIRECTORY_SEPARATOR;
    private const CAMINHO_VENDEDORES = self::CAMINHO_BASE_JSON . 'vendedores.json';
    private const CAMINHO_CLIENTES = self::CAMINHO_BASE_JSON . 'clientes.json';

    public function __construct(private Vendedor $vendedor) {}

    // Contador de vendedores e clientes
    public static function contaVendedor(): int
    {
        $vendedores = self::recuperaDadosVendedores();
        return count($vendedores);
    }

    public static function contaCliente(): int
    {
        $clientes = self::recuperaDadosClientes();
        return count($clientes);
    }

    // Adicionar vendedor no banco
    public static function pesquisaVendedor(int $id): bool|array
    {
        $vendedores = self::recuperaDadosVendedores();
        return array_key_exists($id, $vendedores) ? $vendedores[$id] : false;
    }

    public function adicionaDadosVendedor(): void
    {
        $vendedor = $this->dadosVendedor($this->vendedor);
        $vendedores = $this->recuperaDadosVendedores();
        $vendedores[$vendedor['id']] = $vendedor;
        $vendedoresJson = json_encode($vendedores);
        file_put_contents(self::CAMINHO_VENDEDORES, $vendedoresJson);
        echo 'Dados do vendedor salvos com sucesso';
    }

    private static function recuperaDadosVendedores(): array
    {
        $vendedores = file_get_contents(self::CAMINHO_VENDEDORES);
        $vendedores = json_decode($vendedores, true);
        return is_array($vendedores) ? $vendedores : [];
    }

    private static function dadosVendedor(Vendedor $vendedor): array
    {
        $arrayVendedor = [
            'id' => $vendedor->id,
            'nomeCompleto' => $vendedor->mostraNome(),
            'sexo' => $vendedor->sexo,
            'telefone' => $vendedor->mostraTelefone(),
            'dataAniversario' => $vendedor->mostraData(),
            'tags' => $vendedor->mostraTags(),
        ];
        return $arrayVendedor;
    }

    // Definindo cliente
    public function definiCliente(Cliente $cliente): void
    {
        $this->cliente = $cliente;
    }

    // Adicionar cliente no banco
    public function pesquisaCliente(string $telefone): bool|array
    {
        $clientes = self::recuperaDadosClientes();
        $telefone = Pessoa::retornaTelefoneParaPesquisa($telefone);
        foreach ($clientes as $cliente) {
            if (is_int(strpos($cliente['telefone'], $telefone))) {
                return $cliente;
            }
        }
        return false;
    }

    public function adicionaDadosCliente(): void
    {
        $this->verificaCliente();
        if ($this->vendedor->sexo == Sexo::Masculino && $this->cliente->mostraIdVendedorMasc() === NULL) {
            $this->cliente->definiVendedorMasc($this->vendedor->id);
        }
        if ($this->vendedor->sexo == Sexo::Feminino && $this->cliente->mostraIdVendedorFem() === NULL) {
            $this->cliente->definiVendedorFem($this->vendedor->id);
        }
        $cliente = $this->dadosCliente($this->cliente);
        $clientes = $this->recuperaDadosClientes();
        $clientes[$cliente['id']] = $cliente;
        $clientesJson = json_encode($clientes);
        file_put_contents(self::CAMINHO_CLIENTES, $clientesJson);
        echo 'Dados do cliente salvos com sucesso';
    }

    public function removeCliente(): void
    {
        $this->verificaCliente();
        if ($this->vendedor->sexo == Sexo::Masculino) {
            $this->cliente->definiVendedorMasc(NULL);
        } else {
            $this->cliente->definiVendedorFem(NULL);
        }
        $this->adicionaDadosCliente();
        echo 'Cliente removido com sucesso';
    }

    private function verificaCliente(): void
    {
        if (!$this->cliente) {
            throw new InvalidArgumentException("Cliente não definido, defina o cliente antes de executar está função!");
        }
    }

    private static function recuperaDadosClientes(): array
    {
        $clientes = file_get_contents(self::CAMINHO_CLIENTES);
        $clientes = json_decode($clientes, true);
        return is_array($clientes) ? $clientes : [];
    }

    private static function dadosCliente(Cliente $cliente): array
    {
        $arrayCliente = [
            'id' => $cliente->id,
            'nomeCompleto' => $cliente->mostraNome(),
            'sexo' => $cliente->sexo,
            'telefone' => $cliente->mostraTelefone(),
            'dataAniversario' => $cliente->mostraData(),
            'tags' => $cliente->mostraTags(),
            'id_vendedor_masc' => $cliente->mostraIdVendedorMasc(),
            'id_vendedor_fem' => $cliente->mostraIdVendedorFem(),
            'descricao' => $cliente->mostraDescricao(),
        ];
        return $arrayCliente;
    }
}
