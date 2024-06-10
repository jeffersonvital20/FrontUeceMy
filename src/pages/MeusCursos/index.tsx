import React, { useEffect, useState } from "react";
import { Container, GridContainer, GridItem, ItemDetail, ItemImg, ItemNomeProfessor } from "./styles";
import { Curso } from "../../types/Curso";
import cursosData from "../../meus-cursos.json";
import { useNavigate } from "react-router-dom";

const MeusCursos: React.FC = () => {
  const navigate = useNavigate();
  const [cursos, setCursos] = useState<Curso[]>([]);

  useEffect(() => {
    setCursos(cursosData.cursos);
  }, []);

  const handleCurso = (cursoId: number) => {
    navigate(`/cursos/detalhe/${cursoId}`);
  };

  return (
    <Container>
      <GridContainer>
          {cursos && cursos.map(curso => (
            <GridItem key={curso.id} onClick={() => handleCurso(curso.id)}>
              <ItemImg />
              <ItemDetail>{curso.nome}</ItemDetail>
              <ItemNomeProfessor>{curso.nomeProfessor}</ItemNomeProfessor>
              <ItemDetail>R$ {curso.valor}</ItemDetail>
            </GridItem>
          ))}
      </GridContainer>
    </Container>
  );
};

export default MeusCursos;