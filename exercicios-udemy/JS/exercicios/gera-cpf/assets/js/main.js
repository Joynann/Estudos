import geraCpf from './modules/geraCPF.js';

const novoCpf = new geraCpf();

const showCPF = document.querySelector('.cpf');
showCPF.innerText = novoCpf.getCpf;