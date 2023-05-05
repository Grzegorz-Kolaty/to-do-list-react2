import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  align-content: center;
  font-size: 15px;

  @media (max-width: 767px) {
    margin-top: 20px;
    flex-direction: column;
    flex-basis: 100%;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  color: teal;
  border: none;
  transition: 200ms;
  font-weight: 600;

  &:hover {
    color: hsl(180, 100%, 30%);
  }

  &:disabled {
    color: grey;
  }

  @media (max-width: 767px) {
    padding: 20px;
  }
`;