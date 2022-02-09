function Calculadora()
{
    const display = document.querySelector('.display');

    this.btnNum = document.querySelectorAll('.btn-num');
    this.btnClear = document.querySelector('.btn-clear');
    this.btnDel = document.querySelector('.btn-del');
    this.btnEq = document.querySelector('.btn-eq');
    
    this.inserirNumero = (e) => display.value = display.value + e.target.innerText;

    this.limpar = () => display.value = '';

    this.deletar = () => display.value = display.value.slice(0, -1);
    
    this.calcular = () => 
    {
        try
        {
            calculo = eval(display.value);

            if(isNaN(calculo))
            {
                alert('Faça um calculo válido.');
                return;
            }

            display.value = calculo;
        }
        catch(erro)
        {
            alert('Faça um calculo válido.');
        }
    };

    this.validar = () =>
    {
        const regExp = /\d|\(|\)|\/|\*|\+|\-|\./g;
        const validador = display.value.replace(regExp, '');

        if(!validador) this.calcular();
        else alert('Faça um calculo válido.');
    }

    this.iniciar = () =>
    {
        this.btnEq.addEventListener('click', this.validar);
        window.addEventListener('keyup', (e) =>
        {
            if(e.key === 'Enter') this.validar();
        });

        this.btnNum.forEach(btn =>
        {
            btn.addEventListener('click', this.inserirNumero);
        });

        this.btnClear.addEventListener('click', this.limpar);

        this.btnDel.addEventListener('click', this.deletar);
    }
}

const calc = new Calculadora();
calc.iniciar();