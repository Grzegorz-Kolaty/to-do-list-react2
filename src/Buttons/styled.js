import styled from "styled-components";

export const Button = styled.button`
  min-width: 200px;
  font-size: ${({ theme }) => theme.font.sizeNormal};
  color: ${({ theme }) => theme.background.colorTeal};
  border: ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.background.transparent};

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