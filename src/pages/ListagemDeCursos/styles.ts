import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #000;
  margin: 10px 0;
  padding: 5px;
`;

export const ItemImg = styled.div`
  width: 130px;
  height: 130px;
  background: #D3D3D3;
`;

export const ItemData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const InfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ItemButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const MainDetail = styled.h2`
  margin: 0;
  padding: 0;
  font-family: serif;
`;

export const Detail = styled.p`
  margin: 3px 0;
  padding: 0;
  font-family: serif;
  font-size: 15px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  width: 100%;
`;

export const CustomInput = styled.input`
  font-size: 15px;
  color: #000;
  width: 100%;
  height: 40px;
  border: 1px solid #000;
  border-radius: 50px;
  padding: 5px 15px;
`;