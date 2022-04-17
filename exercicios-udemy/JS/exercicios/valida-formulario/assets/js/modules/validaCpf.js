export default class CpfValidator
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
        if(this.cpfString === '') return false;
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