import { useEffect, useState } from 'react';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Title, PictureProfile, AlunoContainer, DivLink } from './styled';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('/alunos/');
      setAlunos(response.data);
    }

    getData();
  }, [])

  return (
    <Container>
      <Title>
        Alunos
      </ Title>

      <AlunoContainer>
        {alunos.map(aluno => (
          <div key={JSON.stringify(aluno.id)}>
            <PictureProfile>
              {!aluno.fotos.length ? (
                <FaUserCircle size={36} />
              ) : (
                <img src={aluno.fotos[0].url} alt="" />
              )}
            </PictureProfile>

            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>

            <DivLink>
              <Link to={`/aluno/${aluno.id}/edit`} ><FaEdit /></Link>
              <Link to={`/aluno/${aluno.id}/delete`} ><FaWindowClose /></Link>
            </DivLink>
          </div>
        ))}
      </AlunoContainer>
    </ Container>
  );
}
