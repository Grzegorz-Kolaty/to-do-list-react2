import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: 30px auto 30px;
  grid-gap: 15px;
  align-items: center;
  ${({ theme }) => theme.spacingElements};
  border-bottom: 2px solid ${({ theme }) => theme.background.color};

  ${({ hidden }) => hidden && css`
    display: none;
  `}
`;

export const Content = styled.span`
  word-break: break-all;
  ${({ done }) => done && css`
    text-decoration: line-through;
    text-decoration-thickness: 2px;
  `}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.font.colorWhite};
  ${({ theme }) => theme.border};
  transition: ${({ theme }) => theme.transition};
  width: 30px;
  height: 30px;

  &:hover {
    filter: brightness(120%);
  }
`;

export const ToggleDoneButton = styled(Button)`
  background-color: ${({ theme }) => theme.background.colorGreen};
`;

export const RemoveTaskButton = styled(Button)`
  background-color: ${({ theme }) => theme.background.colorCrimson};
`;