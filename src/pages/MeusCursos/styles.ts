import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
`;

export const Title = styled.h1`
  color: #00F;
`;

export const ItemDetail = styled.span`
  font-weight: 700;
  font-size: 14px;
`;

export const ItemNomeProfessor = styled.span`
  font-size: 12px;
`;

export const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const GridItem = styled.div`
  width: calc(33.33% - 10px);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
    ${ItemDetail}, ${ItemNomeProfessor} {
      text-decoration: underline;
    }
  }
`;

export const ItemImg = styled.div`
  width: 230px;
  height: 140px;
  background-color: #D3D3D3;
`;
