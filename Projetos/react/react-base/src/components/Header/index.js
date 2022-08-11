import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Nav } from './styled';

export default function Header() {
  const botaoClicado = useSelector(state => state.reducer.botaoClicado);

  return (
    <Nav>
      <Link to="/"><FaHome size={24} /></Link>
      <Link to="/login"><FaUserAlt size={24} /></Link>
      <Link to="/signin"><FaSignInAlt size={24} /></Link>
      <p>{botaoClicado ? 'Clicado' : 'Não clicado'}</p>
    </ Nav>
  );
}