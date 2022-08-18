import { useState } from 'react';
import { toast } from 'react-toastify';
import isEmail from 'validator/lib/isEmail';
import history from '../../services/history';
import { Title, Form } from './styled';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';

export default function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleClick(e) {
    e.preventDefault();
    let hasError = false;

    if (nome.length < 3 || nome.length > 50) {
      toast.error('Campo nome deve conter entre 3 a 50 caracteres')
      hasError = true;
    }

    if (!isEmail(email)) {
      toast.error('E-mail inválido')
      hasError = true;
    }

    if (password.length < 3 || password.length > 50) {
      toast.error('A senha precisa ter entre 3 a 50 caracteres')
      hasError = true;
    }

    if (hasError) return;

    try {
      await axios.post('/users/', { nome, email, password });
      toast.success('A sua conta foi criada');
      history.push('/login');
    } catch (err) {
      const errors = err.response.data.errors.length ? err.response.data.errors : [];
      errors.map(erro => toast.error(erro));
    }
  }

  return (
    <Container>
      <Title>
        Crie sua conta
      </ Title>

      <Form>
        <label htmlFor='nome'>
          Nome:
          <input type="text" placeholder="Seu nome" value={nome} onChange={(e) => { setNome(e.target.value) }} />
        </label>

        <label htmlFor='email'>
          E-mail:
          <input type="email" placeholder="Seu e-mail" value={email} onChange={(e) => { setEmail(e.target.value) }} />
        </label>

        <label htmlFor='password'>
          Senha:
          <input type="password" placeholder="Sua senha" value={password} onChange={(e) => { setPassword(e.target.value) }} />
        </label>

        <button type='submit' onClick={handleClick} >Criar minha conta</button>
      </Form>
    </ Container>
  );
}
