<?php

class Humano
{
    public $nome;
    public $idade;

    public function __construct($nome, $idade)
    {
        $this->nome = $nome;
        $this->idade = $idade;
    }

    public function falar()
    {
        echo "Oi, eu sou o $this->nome <br>";
    }
}

class Professor extends Humano
{
    public $disciplina = 'Matemática';

    public function __construct($nome, $idade, $disciplina)
    {
        parent::__construct($nome, $idade);
        $this->disciplina = $disciplina;
    }

    public function lecionando()
    {
        echo "O professor $this->nome está dando aula de $this->disciplina <br>";
    }
}

$professor = new Professor('Jocelina', 49, 'Português');

$professor->falar();
$professor->lecionando();
