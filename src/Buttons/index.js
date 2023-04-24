import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
  const taskUnDoneCount = tasks.filter(task => task.done === false).length;
  const taskHideDoneCount = tasks.filter(task => task.done === true && hideDone === true).length;

  return (
    <div className="buttons">
      {tasks.length > 0 && (
        <>
          <button
            onClick={toggleHideDone}
            className="buttons__button">
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
            {taskHideDoneCount > 0 ? ` (${taskHideDoneCount})` : ""}
          </button>

          <button
            onClick={setAllDone}
            className="buttons__button"
            disabled={tasks.every((task) => task.done)}>
            Ukończ wszystkie
            {taskUnDoneCount > 0 ? ` (${taskUnDoneCount})` : ""}
          </button>
        </>
      )}
    </div>
  )
};

export default Buttons;
