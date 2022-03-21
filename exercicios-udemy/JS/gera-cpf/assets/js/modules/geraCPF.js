import validadorCpf from './validaCpf.js';

export default class geraCpf
{
    constructor()
    {
        Object.defineProperty(this, 'getCpf',
        {
            value: this.cpfGenerator(),
            enumerable: true,
            writable: false,
            configurable: false,
        });
    }

    static rand(min, max)
    {
        return Math.floor(Math.random() * (max - min) + min);
    }

    cpfGenerator()
    {
        let cpf = '';
        for(let x = 0; x < 9; x++)
        {
            const rnd = String(geraCpf.rand(0, 10));
            cpf += rnd;
        }

        cpf = Array.from(cpf);
        cpf.push(String(validadorCpf.validatingDigits(cpf)));
        cpf.push(String(validadorCpf.validatingDigits(cpf)));
        cpf = cpf.join('');

        const validaCPF = new validadorCpf(cpf);
        cpf = validaCPF.formattedCpf;
        
        return cpf ? cpf : this.cpfGenerator();
    }
}