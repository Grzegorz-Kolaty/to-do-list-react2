import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";
import { Button } from "./styled";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();
  const taskUnDoneCount = tasks.filter(task => task.done === false).length;
  const taskHideDoneCount = tasks.filter(task => task.done === true && hideDone === true).length;

  return (
    tasks.length > 0 && (
      <>
        <Button
          onClick={() => dispatch(toggleHideDone())}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
          {taskHideDoneCount > 0 ? ` (${taskHideDoneCount})` : ""}
        </Button>
        <Button
          onClick={() => dispatch(setAllDone())}
          disabled={tasks.every((task) => task.done)}>
          Ukończ wszystkie
          {taskUnDoneCount > 0 ? ` (${taskUnDoneCount})` : ""}
        </Button>
      </>
    )
  )
};

export default Buttons;
