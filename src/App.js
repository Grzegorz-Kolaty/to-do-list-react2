import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import TasksPage from "./features/tasks/TasksPage/index";
import AuthorPage from "./features/author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage/index";

function App() {
  return (
    <BrowserRouter basename="/to-do-list-react2">
      <nav>
        <ul>
          <li>
            <Link to="/zadania">Zadania</Link>
          </li>
          <li>
            <Link to="/author">O autorze</Link>
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
