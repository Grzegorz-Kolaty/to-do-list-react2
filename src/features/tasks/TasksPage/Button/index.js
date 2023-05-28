import { Button, Wrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectTasksState } from "../../tasksSlice";

function ExampleTasks() {
  const dispatch = useDispatch();
  const tasksState = useSelector(selectTasksState);
  const { isLoading, error } = tasksState;

  return (
    <Wrapper>
      <Button
        onClick={() => dispatch(fetchExampleTasks())}
        disabled={isLoading}
      >
        {isLoading
          ? "Ładowanie..."
          : error
            ? "Błąd pobierania"
            : "Pobierz przykładowe dane"}
      </Button>
    </Wrapper>
  )
}

export default ExampleTasks;