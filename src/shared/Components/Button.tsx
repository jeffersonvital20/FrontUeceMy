import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean | string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const StyledButton = styled.button<ButtonProps>`
  background: #D3D3D3;
  border-radius: 3px;
  border: 2px solid #D3D3D3;
  color: #000;
  margin: 0 1em;
  padding: 1em 1.25em;
  cursor: pointer;

  &:active {
    transform: translateY(1px);
  }

  ${props =>
    props.primary &&
    css`
      background: #AF64FF;
      color: #FFF;
      border: 2px solid #AF64FF;
    `}
`;

const Button: React.FC<ButtonProps> = ({ children, primary=undefined, onClick }: ButtonProps) => (
  <StyledButton onClick={onClick} primary={primary?.toString()}>{children}</StyledButton>
);

export default Button;
