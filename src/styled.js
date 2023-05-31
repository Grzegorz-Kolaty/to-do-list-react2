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
    &:hover {
        box-shadow: inset 0px 7px 73px -30px rgba(95, 212, 191, 100);  
    }
`;

export const StyledNavLink = styled(NavLink)`
    color: ${({ theme }) => theme.font.colorWhite};
    text-decoration: none;

    &.active {
        font-weight: bold;
    };
`;