import { Button, Wrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks } from "../../tasksSlice";

function ExampleTasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.tasks.isLoading);

  return (
    <Wrapper>
      <Button
        onClick={() => dispatch(fetchExampleTasks())}
        disabled={isLoading}
      >
        {isLoading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
      </Button>
    </Wrapper>
  )
};

export default ExampleTasks;
