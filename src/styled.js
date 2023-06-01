import { NavLink } from "react-router-dom/cjs/react-router-dom"
import styled from "styled-components"

export const Nav = styled.nav`
    background-color: ${({ theme }) => theme.background.colorTeal};
    color: ${({ theme }) => theme.font.colorWhite};
`;

export const List = styled.ul`
    display: flex;
    flex-flow: row wrap-reverse;
    justify-content: center;
    list-style: none;
    margin: 0px;
`;

export const Item = styled.li`
    display: flex;
    justify-content: center;
`;

export const StyledNavLink = styled(NavLink)`
    color: ${({ theme }) => theme.font.colorWhite};
    ${({ theme }) => theme.spacingBoxes};

    text-decoration: none;

    &.active {
        border-bottom: 3px solid hsl(180, 100%, 35.1%);
    }
`;