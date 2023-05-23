<?php

$pessoas = [
    [
        "Nome" => "Joynan",
        "Idade" => 24,
        "Tamanho" => 1.82
    ],
    [
        "Nome" => "Rachel",
        "Idade" => 11,
        "Tamanho" => 1.60
    ],
    [
        "Nome" => "Jocelina",
        "Idade" => 49,
        "Tamanho" => 1.70
    ]
];

for ($x = 0; $x < count($pessoas); $x++) {
    $nome = $pessoas[$x]["Nome"];
    $idade = $pessoas[$x]["Idade"];
    $tamanho = $pessoas[$x]["Tamanho"];

    if ($idade >= 18) {
        echo "$nome tem $tamanho metros de altura e possui $idade anos, portanto é maior de idade. <br>";
    } else {
        echo "$nome tem $tamanho metros de altura e possui $idade anos, portanto é menor de idade. <br>";
    }
}
