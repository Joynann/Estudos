<?php

spl_autoload_register(function ($className) {
    $caminho = str_replace('ListagemCliente', 'src', $className);
    $caminho = str_replace('\\', DIRECTORY_SEPARATOR, $caminho);
    $caminhoFinal = __DIR__ . DIRECTORY_SEPARATOR . $caminho . '.php';
    if (file_exists($caminhoFinal)) {
        require_once($caminhoFinal);
    }
});
