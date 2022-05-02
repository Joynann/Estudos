import './assets/css/style.css';
import Login from './assets/modules/Login.js';
import Contato from './assets/modules/Contato.js';

const formLogin = new Login('.form-login');
const formCadastro = new Login('.form-cadastro');
const formContato = new Contato('.form-contato');

formLogin.init();
formCadastro.init();
formContato.init();