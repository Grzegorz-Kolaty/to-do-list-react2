import { useHistory } from "react-router-dom/cjs/react-router-dom";
import Input from "../../Input"
import { Wrapper } from "./styled";
import searchQueryParamName from "../../searchQueryParamName";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function Search() {
  const location = useLocation(searchQueryParamName);
  const query =
    (new URLSearchParams(location.search)).get(searchQueryParamName);
  const history = useHistory();

  const onInputChange = ({ target }) => {
    const newQuery = new URLSearchParams(location.search);
    // .set na query ktory jest niemutowalny wymaga utworzenia nowego query

    if (target.value.trim() === "") {
      newQuery.delete(searchQueryParamName);
    } else {
      newQuery.set(searchQueryParamName, target.value);
    }

    history.push(`${location.pathname}?${newQuery.toString()}`);
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
