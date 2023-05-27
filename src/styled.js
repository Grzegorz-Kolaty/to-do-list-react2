import { NavLink } from "react-router-dom/cjs/react-router-dom"
import styled from "styled-components"

export const Nav = styled.nav`
    background-color: ${({ theme }) => theme.background.colorTeal};
    color: ${({ theme }) => theme.font.colorWhite};
`;

export const List = styled.ul`
    ${({ theme }) => theme.spacingElements};
    display: flex;
    flex-flow: row wrap-reverse;
    justify-content: center;
    list-style: none;
`;

export const Item = styled.li`
    ${({ theme }) => theme.spacingBoxes};
`;

export const StyledNavLink = styled(NavLink)`
    color: ${({ theme }) => theme.font.colorWhite};
    text-decoration: none;

    &.active {
        font-weight: bold;
    }
`;