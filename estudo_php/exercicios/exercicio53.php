<?php

class Dog
{
    public $race;
    public $name;

    public function __construct($race, $name)
    {
        $this->race = $race;
        $this->name = $name;
    }

    public function latir()
    {
        echo "$this->name está latindo <br>";
    }

    public function andar()
    {
        echo "$this->name está andando <br>";
    }
}

$cachorro1 = new Dog('PitBull', 'Brutus');
$cachorro1->latir();
$cachorro1->andar();
