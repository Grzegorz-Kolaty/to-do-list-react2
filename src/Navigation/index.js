import { Nav, List, Item, StyledNavLink } from "./styled";

export const Navigation = () => {
  return (
    <Nav>
      <List>
        <Item>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </Item>
        <Item>
          <StyledNavLink to="/author">O autorze</StyledNavLink>
        </Item>
      </List>
    </Nav>
  );
};