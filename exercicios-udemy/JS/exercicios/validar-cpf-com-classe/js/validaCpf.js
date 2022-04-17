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

// classe para validar cpf/ construtora: cpfIsValid, cleanCpf.

class CpfValidator
{
    constructor(cpfString)
    {
        Object.defineProperty(this, 'cpfString',
        {
            value: cpfString.replace(/\D+/g, ''),
            enumerable: false,
            writable: false,
            configurable: false,
        });
    }

    get cpfIsValid()
    {
        return CpfValidator.validatingCpf(this.cpfString);
    }
    
    get formattedCpf()
    {
        if(!this.cpfIsValid) return;
        const cpfString = this.cpfString.split('');
        cpfString.splice(3, 0, '.');
        cpfString.splice(7, 0, '.');
        cpfString.splice(11, 0, '-');
        const formattedCpf = cpfString.join('');
        return formattedCpf;
    }

    static validatingDigits(cleanCpf)
    {
        let digit = cleanCpf.reduce((ac, v, i, a) =>
        {
            return ac + v * (a.length + 1 - i);
        }, 0);

        digit = 11 - (digit % 11);
        return digit > 9 ? 0 : digit;
    }

    static validatingCpf(cpfString)
    {
        let cleanCpf = cpfString;
        const cpfIsSequence = cleanCpf[0].repeat(cleanCpf.length) === cleanCpf;
        if(cleanCpf.length !== 11 || cpfIsSequence) return false;

        cleanCpf = cleanCpf.split('');
        const digits = cleanCpf.splice(-2, 2);
        
        cleanCpf.push(CpfValidator.validatingDigits(cleanCpf));
        cleanCpf.push(CpfValidator.validatingDigits(cleanCpf));
        if(cleanCpf[cleanCpf.length-2] !== +digits[0]) return false;
        if(cleanCpf[cleanCpf.length-1] !== +digits[1]) return false;

        return true;
    }

}

const cpf = new CpfValidator('070.987.720-03');