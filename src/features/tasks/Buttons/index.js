import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";
import { Button } from "./styled";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    tasks.length > 0 && (
      <>
        <Button
          onClick={() => dispatch(toggleHideDone())}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </Button>
        <Button
          onClick={() => dispatch(setAllDone())}
          disabled={tasks.every((task) => task.done)}>
          Ukończ wszystkie
        </Button>
      </>
    )
  )
};

export default Buttons;
