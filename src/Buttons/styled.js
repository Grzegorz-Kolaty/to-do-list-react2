import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  align-content: center;
  font-size: ${({ theme }) => theme.font.sizeNormal};

  @media (max-width: 767px) {
    flex-direction: column;
    flex-basis: 100%;
    margin-top: 20px;
  }
`;

export const Button = styled.button`
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