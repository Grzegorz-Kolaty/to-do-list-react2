import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import TasksPage from "./features/tasks/TasksPage/index";
import AuthorPage from "./features/author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage/index";
import { Nav, List, Item, StyledNavLink } from "./styled";

function App() {
  return (
    <BrowserRouter basename="/to-do-list-react2/">
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
      <Switch>
        <Route path="/zadania/:id">
          <TaskPage />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/author">
          <AuthorPage />
        </Route>
        <Route path="/">
          <Redirect to="/zadania" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
