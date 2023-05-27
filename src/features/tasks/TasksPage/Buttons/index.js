import { Button, Wrapper } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTasksState,
  toggleHideDone,
  setAllDone,
  selectTasksHideDone,
  selectTasksToDo,
} from "../../tasksSlice";

function Buttons() {
  const { tasks, hideDone } = useSelector(selectTasksState);
  const taskHideDoneCount = useSelector(selectTasksHideDone);
  const taskUnDoneCount = useSelector(selectTasksToDo);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      {tasks.length > 0 && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
            {hideDone && taskHideDoneCount > 0 && ` (${taskHideDoneCount})`}
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={tasks.every((task) => task.done)}>
            Ukończ wszystkie {taskUnDoneCount > 0 ? ` (${taskUnDoneCount})` : ""}
          </Button>
        </>
      )}
    </Wrapper>
  )
};

export default Buttons;
