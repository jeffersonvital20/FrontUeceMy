import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  width: 90%;
`;

export const Title = styled.p`
  font-size: 24px;
  font-family: serif;
`;

export const CursoDetails = styled.div`
  font-weight: 700;
  font-family: serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CursoNome = styled.span`
  font-size: 24px;
`;

export const CursoPreco = styled.span`
  font-size: 26px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;