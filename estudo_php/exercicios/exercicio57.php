<?php

class Dog
{
    public $nome;
    public $raca;
    public $porte;

    public function __construct($nome, $raca, $porte)
    {
        $this->nome = $nome;
        $this->raca = $raca;
        $this->porte = $porte;
    }

    public function apresentarDog()
    {
        echo "Este cachorro se chama $this->nome, sua raça é $this->raca e seu porte é $this->porte";
    }
}

$cachorro = new Dog('Brutus', 'PitBull', 'Grande');
$cachorro->apresentarDog();
