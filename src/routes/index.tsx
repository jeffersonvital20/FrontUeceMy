import { Routes, Route, Navigate } from 'react-router-dom';

import { useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';
import DetalheDeCursos from '../pages/DetalheDeCursos';
import ListagemDeCursos from '../pages/ListagemDeCursos';
import ComprarCurso from '../pages/CompraCurso';
import MeusCursos from '../pages/MeusCursos';
import Dashboard from '../pages/Dashboard';

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        to: '/pagina-inicial',
        label: 'Página inicial',
      },
      {
        icon: 'book',
        to: '/cursos',
        label: 'Buscar Cursos',
      },
      {
        icon: 'star',
        to: '/meus-cursos',
        label: 'Meus Cursos',
      }
    ]);
  },[]);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashboard />} />
      <Route path="/cursos" element={<ListagemDeCursos />} />
      <Route path="/cursos/detalhe/:id" element={<DetalheDeCursos />} />
      <Route path="/cursos/comprar/:id" element={<ComprarCurso />} />
      <Route path="/meus-cursos" element={<MeusCursos />} />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};