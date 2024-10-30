<?php
require 'autoload.php';

use ListagemCliente\Model\{
    Pessoa,
    Cliente,
    Vendedor,
    ManipuladorJson,
};

use ListagemCliente\Enum\{
    Sexo,
};

$vendedor = ManipuladorJson::pesquisaVendedor(0);
$vendedor = new Vendedor(
    $vendedor['id'],
    $vendedor['nomeCompleto'],
    $vendedor['sexo'] == 'Masculino' ? Sexo::Masculino : Sexo::Feminino,
    $vendedor['telefone'],
    $vendedor['dataAniversario'],
    $vendedor['tags'],
);

$cliente = new Cliente(0, 'Roberto da Silva', Sexo::Masculino, '27995213674', '30-05-1995');

$novaManipulacao = new ManipuladorJson($vendedor);

var_dump($novaManipulacao->pesquisaCliente('99521-3674'));
