import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Input from "../../Input"
import useLocationTasks from "../TaskList/useLocationTasks"
import { Wrapper } from "./styled";
import searchQueryParamName from "../../searchQueryParamName";

function Search() {
  const { query, pathname, search } = useLocationTasks();
  const history = useHistory();

  const onInputChange = ({ target }) => {
    const newQuery = new URLSearchParams(search);
    // .set na query ktory jest niemutowalny wymaga utworzenia nowego query

    if (target.value.trim() === "") {
      newQuery.delete(searchQueryParamName);
    } else {
      newQuery.set(searchQueryParamName, target.value);
    }

    history.push(`${pathname}?${newQuery.toString()}`);
  }

  return (
    <Wrapper>
      <Input
        placeholder="filtruj zadania"
        value={query || ""}
        onChange={onInputChange}
      />
    </Wrapper>
  );
}

export default Search;
