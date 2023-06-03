import { Button, Loader, Wrapper } from "../../Buttons/styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectTasksState } from "../../tasksSlice";

function ExampleTasks() {
  const dispatch = useDispatch();
  const tasksState = useSelector(selectTasksState);
  const { isLoading, error } = tasksState;

  return (
    <Wrapper>
      {isLoading
        ? <Loader />
        : <Button
          onClick={() => dispatch(fetchExampleTasks())}
          disabled={isLoading}
        >
          {error ? `${error}` : "Pobierz przykładowe zadania"}
        </Button>
      }
    </Wrapper>
  )
}

export default ExampleTasks;