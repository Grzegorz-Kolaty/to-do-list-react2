import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0px;
  margin: 0px;
`;

export const Button = styled.button`
  font-size: ${({ theme }) => theme.font.sizeNormal};
  color: ${({ theme }) => theme.background.colorTeal};
  border: ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.background.transparent};
  padding: 10px;

  &:not(:disabled):hover {
    filter: brightness(140%);
  }

  &:disabled {
    color: ${({ theme }) => theme.font.colorDisabled};
  }

  @media (max-width: 767px) {
    ${({ theme }) => theme.spacingBoxes}
  }
`;