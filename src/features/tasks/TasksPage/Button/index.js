import { Button, Wrapper } from "./styled";
import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../../tasksSlice";

function ExampleTasks() {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Button onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadania
      </Button>
    </Wrapper>
  )
};

export default ExampleTasks;
