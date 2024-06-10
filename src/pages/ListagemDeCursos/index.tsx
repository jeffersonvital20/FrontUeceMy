import React, { useEffect, useState } from 'react';
import cursosData from '../../cursos.json';
import { CustomInput, Detail, InfoDetails, InputContainer, ItemButtons, ItemContainer, ItemData, ItemImg, MainDetail } from './styles';
import Button from '../../shared/Components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Curso } from '../../types/Curso';

interface CursoCardProps {
  curso: Curso;
}

const CursoCard: React.FC<CursoCardProps> = ({ curso }) => {
  const navigate = useNavigate();

  const handleDetalheClick = () => {
    navigate(`/cursos/detalhe/${curso.id}`); // Redireciona para a página de detalhes do curso
  };

  return (
    <ItemContainer>
      <ItemData>
        <ItemImg />
        <InfoDetails>
          <MainDetail>{curso.nome}</MainDetail>
          <Detail>{curso.nomeProfessor} | {curso.duracao} {curso.duracao === 1 ? 'aula' : 'aulas'}</Detail>
          <Detail>{curso.descricao}</Detail>
          <MainDetail>R$ {curso.valor}</MainDetail>
        </InfoDetails>
      </ItemData>
      <ItemButtons>
        <Button primary={true}>Comprar</Button>
        <Button onClick={handleDetalheClick}>Detalhes</Button>
      </ItemButtons>
    </ItemContainer>
  );
};

const ListagemDeCursos: React.FC = () => {
  const [termoDeBusca, setTermoDeBusca] = useState<string>('');
  const [cursos, setCursos] = useState<Curso[]>([]);

  useEffect(() => {
    setCursos(cursosData.cursos);
  }, []);

  const handleTermoDeBuscaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTermoDeBusca(event.target.value);
  };

  const cursosFiltrados = cursos.filter((curso: Curso) =>
    curso.nome.toLowerCase().includes(termoDeBusca.toLowerCase())
  );

  return (
    <div>
      <h1>Buscar Cursos</h1>
      <InputContainer>
        <FontAwesomeIcon icon={faSearch} />
        <CustomInput
          type="text"
          placeholder="Busque pelo título ou palavras-chave do curso"
          value={termoDeBusca}
          onChange={handleTermoDeBuscaChange}
        />
      </InputContainer>

      {cursosFiltrados.map((curso: Curso) => (
        <CursoCard key={curso.id} curso={curso} />
      ))}
    </div>
  );
};

export default ListagemDeCursos;