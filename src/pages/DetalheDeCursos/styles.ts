import styled from "styled-components";

export const CursoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 50%;
  gap: 10px;
`;

export const MainDetail = styled.h1`
  margin: 0;
  padding: 0;
  font-family: serif;
`;

export const Detail = styled.p`
  margin: 3px 0;
  padding: 0;
  font-family: serif;
  font-size: 15px;
  text-align: justify;
`;

export const ItemImg = styled.div`
  width: 350px;
  height: 200px;
  background: #D3D3D3;
`;

export const CompraContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const Valor = styled.h2`
  margin: 0;
  padding: 0;
  font-family: serif;
`;

export const ListaAulasContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const ListaAulasTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-family: serif;
`;

export const ListaAulas = styled.div`
  border: 1px solid #000;
  background-color: #eee;
  padding: 10px;
`;

export const ItemAula = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const AulaData = styled.span`
  font-size: 15px;
  color: #000;
`;