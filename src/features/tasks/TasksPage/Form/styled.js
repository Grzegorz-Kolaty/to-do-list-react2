import styled from "styled-components";

export const Formular = styled.form`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-gap: 20px;

  @media (max-width: 767px) {
    grid-template-columns: auto;
  }
`;

export const Button = styled.button`
  ${({ theme }) => theme.spacingElements};
  ${({ theme }) => theme.border}
  min-height: 40px;
  color: ${({ theme }) => theme.font.colorWhite};
  background-color: ${({ theme }) => theme.background.colorTeal};
  transition: ${({ theme }) => theme.transition};

  &:hover {
    filter: brightness(120%);
  }
`;