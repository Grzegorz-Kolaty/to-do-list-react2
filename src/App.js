import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import TasksPage from "./features/tasks/TasksPage/index";
import AuthorPage from "./features/author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage/index";
import { StyledNavLink } from "./styled";

function App() {
  return (
    <BrowserRouter basename="/to-do-list-react2">
      <nav>
        <ul>
          <li>
            <StyledNavLink to="/zadania">Zadania</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/author">O autorze</StyledNavLink>
          </li>
        </ul>
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
      </nav>
    </BrowserRouter>
  );
}

export default App;
