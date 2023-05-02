import styled from "styled-components";

export const Formular = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Input = styled.input`
  border: 2px solid #eee;
  padding: 10px;
  flex-basis: 80%;
  transition: 100ms;

  @media (max-width: 767px) {
    flex-basis: 100%;
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  background-color: teal;
  color: white;
  border: none;
  transition: 300ms;
  padding: 10px;

  @media (max-width: 767px) {
    flex-basis: 100%;
  }

  &:hover {
    background-color: hsl(180, 100%, 30%);
  }
`;