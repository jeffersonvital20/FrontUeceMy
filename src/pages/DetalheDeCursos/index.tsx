import React from 'react';
import { useParams } from 'react-router-dom';

const DetalheDeCursos: React.FC = () => {
  const { id } = useParams<{ id: string }>();


  return (
    <div>
      <h1>Detalhe da conta { id }</h1>
      <p>Conteúdo da nova página aqui...</p>
    </div>
  );
};

export default DetalheDeCursos;