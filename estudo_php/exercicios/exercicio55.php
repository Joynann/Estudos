<?php

class Car
{
    public $model;
    public $year;
    public $color;
    public $max_speed = 0;

    public function __construct($model, $year, $color)
    {
        $this->model = $model;
        $this->year = $year;
        $this->color = $color;
    }

    public function setMaxSpeed($speed)
    {
        $this->max_speed = $speed;
    }

    public function getMaxSpeed()
    {
        return $this->max_speed;
    }
}

$car = new Car('Corola', 2013, 'Prata');
$car->setMaxSpeed(80);

echo "A velocidade máxima permitida é de {$car->getMaxSpeed()} Km/H";
