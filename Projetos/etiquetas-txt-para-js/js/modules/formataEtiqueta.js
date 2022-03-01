export default class FormataEtiqueta
{
    constructor(caminhoArquivo)
    {
        this.caminhoArquivo = caminhoArquivo;
    }
    
    etiquetas = (txt) =>
    {
        let arrayTxt = txt.split('\n');
        arrayTxt = arrayTxt.filter(valor => !(valor == '\r' || valor == '' || undefined || null));
        arrayTxt = arrayTxt.map(valor => valor.split(';'));
        
        const chaves = arrayTxt.shift();

        const arrayEtiquetas = [];
        arrayTxt.forEach(valorEtiqu =>
        {
            const obj = {};
            valorEtiqu.forEach((etiqu, i, a) =>
            {
                obj[chaves[i]] = etiqu;
            });
            arrayEtiquetas.push(obj);
        });

        return arrayEtiquetas;
    }

    contTerminal = (arrayEtiquetas) =>
    {
        const terminais =
        {
            terminal1: 0,
            terminal2: 0,
            terminal3: 0,
            terminal4: 0,
            produtosConferencia: 0,
            totalProdutos: 0,
        }

        terminais.produtosConferencia = arrayEtiquetas.filter(valor => valor.HORALEITURA === valor.HORACONFERENCIA);
        terminais.totalProdutos = [...arrayEtiquetas];
        terminais.terminal1 = terminais.produtosConferencia.filter(valor => valor.TERMINAL == 1);
        terminais.terminal2 = terminais.produtosConferencia.filter(valor => valor.TERMINAL == 2);
        terminais.terminal3 = terminais.produtosConferencia.filter(valor => valor.TERMINAL == 3);
        terminais.terminal4 = terminais.produtosConferencia.filter(valor => valor.TERMINAL == 4);

        return terminais;
    }

    tabelaValores = (valorTerminal) =>
    {
        const table = document.createElement('table');
        const linha1 = document.createElement('tr');
        const linha2 = document.createElement('tr');

        for(let valor in valorTerminal)
        {
            const cl1 = document.createElement('td');
            const cl2 = document.createElement('td');

            cl1.innerText = valor;
            cl2.innerText = valorTerminal[valor].length;

            linha1.appendChild(cl1);
            linha2.appendChild(cl2);
        }

        table.appendChild(linha1);
        table.appendChild(linha2);

        document.body.innerHTML = '';
        document.body.appendChild(table);
    }

    pegaEtiqueta = async () =>
    {
        document.body.innerText = 'Carregando';

        let response = await fetch(this.caminhoArquivo);
        response = await response.text();
        const arrayEtiquetas = this.etiquetas(response);
        const valorTerminal = this.contTerminal(arrayEtiquetas);

        this.tabelaValores(valorTerminal);
    }

}