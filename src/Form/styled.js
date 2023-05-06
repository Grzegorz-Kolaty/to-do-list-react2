import styled from "styled-components";

export const Formular = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Input = styled.input`
  border: 2px solid ${({ theme }) => theme.background.color};
  padding: ${({theme}) => theme.spacingElements};
  flex-basis: 80%;
  transition: 100ms;

  @media (max-width: 767px) {
    flex-basis: 100%;
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  ${({ theme }) => theme.border};
  ${({theme}) => theme.spacingElements};
  background-color: ${({ theme }) => theme.background.colorTeal};
  color: ${({ theme }) => theme.background.colorWhite};
  transition: ${({ theme }) => theme.transition};

  @media (max-width: 767px) {
    flex-basis: 100%;
  }

  &:hover {
    background-color: ${({ theme }) => theme.background.colorTealBrighter};
  }
`;