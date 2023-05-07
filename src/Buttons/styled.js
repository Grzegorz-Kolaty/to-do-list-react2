import styled from "styled-components";

export const Button = styled.button`
  font-size: ${({ theme }) => theme.font.sizeNormal};
  color: ${({ theme }) => theme.background.colorTeal};
  border: ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.background.transparent};
  min-width: 200px;
  padding: 0px;

  &:hover {
    color: ${({ theme }) => theme.background.colorTealBrighter};
  }

  &:disabled {
    color: ${({ theme }) => theme.font.colorDisabled};
  }

  @media (max-width: 767px) {
    ${({ theme }) => theme.spacingBoxes}
  }
`;