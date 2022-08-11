import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
  return (
    <Container>
      <Title>
        Sign In
      </ Title>
      <Paragrafo>
        Sua conta foi desconectada.
      </Paragrafo>
    </ Container>
  );
}