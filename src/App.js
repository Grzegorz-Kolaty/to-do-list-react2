import { BrowserRouter, Link, Switch, Route, Redirect, useParams } from "react-router-dom/cjs/react-router-dom.min";
import Tasks from "./features/tasks/Tasks";
import Author from "./features/author/Author";

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
          <Route path="/zadania">
            <Tasks />
          </Route>
          <Route path="/author">
            <Author />
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
