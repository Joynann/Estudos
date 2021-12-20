export default function initFuncionamento()
{
    const funcionamento = document.querySelector('[data-horario]');
    if(funcionamento)
    {
        const semana = funcionamento.dataset.semana.split(',').map(Number);
        const horario = funcionamento.dataset.horario.split(',').map(Number);
        
        const dataHoje = new Date();
        const semanaHoje = dataHoje.getDay();
        const horaHoje = dataHoje.getHours();
        
        semana.indexOf(semanaHoje) !== -1 && horaHoje >= horario[0] && horaHoje < horario[1] ? funcionamento.classList.add('aberto'): funcionamento.classList.remove('aberto');
    }
}