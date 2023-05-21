import styled from "styled-components";

export const Button = styled.button`
  font-size: ${({ theme }) => theme.font.sizeNormal};
  color: ${({ theme }) => theme.background.colorTeal};
  border: ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.background.transparent};
  min-width: 180px;
  padding: 0px;

  &:hover {
    filter: brightness(120%)
  }

  &:disabled {
    color: ${({ theme }) => theme.font.colorDisabled};
  }

  @media (max-width: 767px) {
    ${({ theme }) => theme.spacingBoxes}
  }
`;