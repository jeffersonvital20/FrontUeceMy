import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Curso } from "../../types/Curso";
import cursosData from '../../cursos.json';
import { ButtonsContainer, Container, CursoDetails, CursoNome, CursoPreco, Title } from "./styles";
import Button from "../../shared/Components/Button";

const ComprarCurso: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [curso, setCurso] = useState<Curso>();
  
  useEffect(() => {
    const cursos: Curso[] = cursosData.cursos;
    const curso: Curso | undefined = cursos.find(curso => curso.id === Number(id));
    setCurso(curso);
  }, []);

  const handlePagar = () => {
    console.log('pagando');
  };

  const handleCancelar = () => {
    navigate(`/cursos`);
  };

  return (
    <Container>
      <Title>Confirmação de compra</Title>
      {curso && (
        <CursoDetails>
          <CursoNome>{curso.nome}</CursoNome>
          <CursoPreco>R$ {curso.valor}</CursoPreco>
        </CursoDetails>
      )}
      <ButtonsContainer>
        <Button primary={true} onClick={handlePagar}>Pagar</Button>
        <Button onClick={handleCancelar}>Cancelar</Button>
      </ButtonsContainer>
    </Container>
  );
}

export default ComprarCurso;