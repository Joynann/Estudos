<?php

$pessoas = [
    [
        'nome' => 'Joynan',
        'idade' => 24
    ],
    [
        'nome' => 'Phillipe',
        'idade' => 24
    ],
    [
        'nome' => 'Vinicius',
        'idade' => 24
    ],
    [
        'nome' => 'Rachel',
        'idade' => 11
    ],
    [
        'nome' => 'Jocelina',
        'idade' => 49
    ],
    [
        'nome' => 'Jocimar',
        'idade' => 52
    ],
];

?>

<html>
<table>
    <tr>
        <th>Nome</th>
        <th>Idade</th>
    </tr>
    <?php foreach ($pessoas as $pessoa) : ?>
        <?php extract($pessoa); ?>

        <tr>
            <td><?php echo $nome; ?></td>
            <td><?php echo $idade; ?></td>
        </tr>

    <?php endforeach; ?>
</table>

</html>