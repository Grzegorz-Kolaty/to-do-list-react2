import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding: 10px;
  border-bottom: 2px solid #eee;

  ${({ hidden }) => hidden && css`
    display: none;
  `}
`;

export const Content = styled.span`
  flex-grow: 1;

    ${({ done }) => done && css`
        text-decoration: line-through;
        text-decoration-thickness: 2px;
    `}
`;

export const Button = styled.button`
  background-color: green;
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  transition: 300ms;
  flex-shrink: 0;

  ${({ toggleDone }) => toggleDone && css`
    background-color: hsl(120, 61%, 34%);

    &:hover {
      background-color: hsl(120, 61%, 39%);
      }
    `}

    ${({ remove }) => remove && css`
      background-color: hsl(348, 83%, 47%);

      &:hover {
      background-color: hsl(348, 83%, 53%);
      }
    `}
`;