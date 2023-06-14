<?php

class Person
{
    public $name;
    public $age;

    public function __construct($name, $age)
    {
        $this->name = $name;
        $this->age = $age;
    }

    public function andar($m)
    {
        echo "$this->name de $this->age anos andou $m mestros.";
    }
}

$pessoa = new Person('Joynan', 24);

$pessoa->andar(20);
