<?php

$ranking = [
    [
        'nome' => 'Joynan',
        'pontuacao' => 100
    ],
    [
        'nome' => 'Jocelina',
        'pontuacao' => 74
    ],
    [
        'nome' => 'Jocimar',
        'pontuacao' => 48
    ],
    [
        'nome' => 'Rachel',
        'pontuacao' => 99
    ],
    [
        'nome' => 'Phillipe',
        'pontuacao' => 84
    ],
    [
        'nome' => 'Vinicius',
        'pontuacao' => 25
    ],
];

function compareByPoints($a, $b)
{
    return $b['pontuacao'] - $a['pontuacao'];
}

usort($ranking, 'compareByPoints');

?>

<html>
<h1>Ranking:</h1>
<ol>
    <?php foreach ($ranking as $pessoa) : ?>
        <?php extract($pessoa) ?>
        <li><?php echo $nome ?> -> <?php echo $pontuacao ?></li>
    <?php endforeach; ?>
</ol>

</html>