import { useDispatch } from 'react-redux';
import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/GlobalStyles';
import * as actions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(actions.clicaBotao());
  }

  return (
    <Container>
      <Title>
        Login
      </ Title>
      <Paragrafo>
        Conecte-se aqui!
      </Paragrafo>
      <button type='submit' onClick={handleClick}>Enviar</button>
    </ Container>
  );
}
