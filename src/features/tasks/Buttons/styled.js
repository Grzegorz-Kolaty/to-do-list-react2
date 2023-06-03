import styled from "styled-components";
import loading from "./loading.gif";

export const Wrapper = styled.div`
  padding: 0px;
  margin: 0px;
`;

export const Button = styled.button`
  font-size: ${({ theme }) => theme.font.sizeNormal};
  color: ${({ theme }) => theme.background.colorTeal};
  border: ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.background.transparent};

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

export const Loader = styled.div`
    height: 20px;
    width: 20px;
    background-image: url("${loading}");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;