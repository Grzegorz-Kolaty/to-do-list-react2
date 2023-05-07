import styled, { css } from "styled-components";

export const Formular = styled.form`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-gap:20px;

  @media (max-width: 767px) {
    grid-template-columns: auto;
  }
`;

export const Datafield = styled.div`
  ${({ theme }) => theme.spacingElements};
  min-height: 40px;

  ${({ button }) => button && css`
  color: ${({ theme }) => theme.font.colorWhite};
  background-color: ${({ theme }) => theme.background.colorTeal};
  ${({ theme }) => theme.border}
  transition: ${({ theme }) => theme.transition};

  &:hover {
    background-color: ${({ theme }) => theme.background.colorTealBrighter};
  }
  `}
`;