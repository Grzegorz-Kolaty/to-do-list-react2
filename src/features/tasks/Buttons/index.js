import { Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
  const taskUnDoneCount = tasks.filter(task => task.done === false).length;
  const taskHideDoneCount = tasks.filter(task => task.done === true && hideDone === true).length;

  return (
    tasks.length > 0 && (
      <>
        <Button
          onClick={toggleHideDone}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
          {taskHideDoneCount > 0 ? ` (${taskHideDoneCount})` : ""}
        </Button>
        <Button
          onClick={setAllDone}
          disabled={tasks.every((task) => task.done)}>
          Ukończ wszystkie
          {taskUnDoneCount > 0 ? ` (${taskUnDoneCount})` : ""}
        </Button>
      </>
    )
  )
};

export default Buttons;
