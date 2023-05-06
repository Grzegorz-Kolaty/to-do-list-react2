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
  ${({theme}) => theme.spacingElements};
  border-bottom: 2px solid ${({theme}) => theme.background.color};

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
  background-color: ${({theme}) => theme.background.colorGreen};
  color: ${({theme}) => theme.font.colorWhite};
  ${({ theme }) => theme.border};
  ${({theme}) => theme.transition};
  width: 30px;
  height: 30px;
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