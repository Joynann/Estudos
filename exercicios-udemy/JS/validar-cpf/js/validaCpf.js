// 705.484.450-52 070.987.720-03
/*
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0 40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro digito)
Se o número digito for maior que 9, consideramos 0.

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
77 0  45 32 56 24 20 20 0 10 = 284

11 - (284 % 11) = 2 (Segundo digito)
Se o número for maior que 9, consideramos 0.
*/

function ValidadorCpf(strCpf)
{
    this.strCpf = strCpf;
    Object.defineProperty(this, 'cpfIsValid',
    {
        get()
        {
            return this.cpfValidade();
        },
        enumerable: true,
        configurable: false,
    });
}
ValidadorCpf.prototype.clearCpf = function() {return this.strCpf.replace(/\D+/g, '')};
ValidadorCpf.prototype.digitCalc = function(arrayCpf)
{
    let firstDigit = arrayCpf.reduce((ac, valor, index, ar) =>
    {
        return ac + (valor * (ar.length + 1 - index));
    }, 0);

    firstDigit = 11 - (firstDigit % 11);
    return firstDigit > 9 ? 0 : firstDigit;
}

ValidadorCpf.prototype.cpfValidade = function()
{
    let arrayCpf = this.clearCpf();
    const isSequence = arrayCpf[0].repeat(arrayCpf.length) === arrayCpf;
    arrayCpf = Array.from(arrayCpf);

    if(arrayCpf.length !== 11 || isSequence) return false;
    
    const validatingDigits = arrayCpf.splice(-2, 2);

    const firstDigit = this.digitCalc(arrayCpf).toString();
    if(validatingDigits[0] !== firstDigit) return false;
    
    arrayCpf.splice(arrayCpf.length, 0, firstDigit);

    const secondDigit = this.digitCalc(arrayCpf).toString();
    if(validatingDigits[1] !== secondDigit) return false;

    return true;
}

const cpf = new ValidadorCpf('070.987.720-03');
console.log(cpf.cpfIsValid);