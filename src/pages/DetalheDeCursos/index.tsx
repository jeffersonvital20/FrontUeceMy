import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Curso } from '../../types/Curso';
import cursosData from '../../cursos.json';
import { AulaData, CompraContainer, CursoContainer, Detail, Details, DetailsContainer, ItemAula, ItemImg, ListaAulas, ListaAulasContainer, ListaAulasTitle, MainDetail, Valor } from './styles';
import Button from '../../shared/Components/Button';

const DetalheDeCursos: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [curso, setCurso] = useState<Curso>();

  useEffect(() => {
    const cursos: Curso[] = cursosData.cursos;
    const curso: Curso | undefined = cursos.find(curso => curso.id === Number(id));
    setCurso(curso);
  }, []);

  const converteMinutosParaHorasEMinutos = (minutos: number) => {
    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;

    if (horas === 0) {
      return `${minutosRestantes}min`;
    } else if (minutosRestantes === 0) {
      return `${horas}h`;
    } else {
      return `${horas}h ${minutosRestantes}min`;
    }
  };

  return (
    <div>
      {curso && (
        <CursoContainer>
          <DetailsContainer>
            <Details>
              <MainDetail>{curso.nome}</MainDetail>
              <Detail>{curso.nomeProfessor} | {curso.duracao} {curso.duracao === 1 ? 'aula' : 'aulas'}</Detail>
              <Detail>{curso.descricao}</Detail>
            </Details>
            <Details>
              <ItemImg />
              <CompraContainer>
                <Valor>R$ {curso.valor}</Valor>
                <Button primary={true}>Comprar</Button>
              </CompraContainer>
            </Details>
          </DetailsContainer>

          <ListaAulasContainer>
            <ListaAulasTitle>Lista de aulas</ListaAulasTitle>
            <ListaAulas>
              {curso.programa && curso.programa.map((item, index) => (
                <ItemAula key={index}>
                  <AulaData>{item.titulo}</AulaData>
                  <AulaData>{converteMinutosParaHorasEMinutos(item.duracao)}</AulaData>
              </ItemAula>
              ))}
            </ListaAulas>
          </ListaAulasContainer>
        </CursoContainer>
      )}
    </div>
  );
};

export default DetalheDeCursos;