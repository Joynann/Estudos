export default class GeraSenha
{
    geraSenha(qtd = 0, chks)
    {
        if(!qtd || !chks.length) return 'Preencha os campos.';

        let senha = '';

        for(let x = 0; x < qtd; x++)
        {
            senha += GeraSenha[chks[GeraSenha.rand(0, chks.length)]]();
        }
        return senha;
    }

    static rand(min, max)
    {
        return Math.floor(Math.random() * (max - min) + min);
    }

    static maiusculas()
    {
        return String.fromCharCode(GeraSenha.rand(65, 91));
    }

    static minusculas()
    {
        return String.fromCharCode(GeraSenha.rand(97, 123));
    }

    static numeros()
    {
        return String.fromCharCode(GeraSenha.rand(48, 58));
    }

    static simbolos()
    {
        const simbolos = '"!@#$%&*()_-=[]{}^~?/;:.>,<|*-+';
        return simbolos[GeraSenha.rand(0, simbolos.length)];
    }
}