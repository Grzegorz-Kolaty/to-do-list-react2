import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
  const taskDoneCount = tasks.filter(task => task.done === true).length;
  const taskHideDoneCount = tasks.filter(task => task.done === true && hideDone === true).length;

  return (
    <div className="buttons">
      {tasks.length > 0 && (
        <>
          <div className="buttons__hiding">
            <button
              onClick={toggleHideDone}
              className="buttons__button">
              {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </button>
            {taskHideDoneCount > 0 ? `Zadań ukrytych: ${taskHideDoneCount}` : ""}
          </div>
          <div className="buttons__done">
            <button
              onClick={setAllDone}
              className="buttons__button"
              disabled={tasks.every((task) => task.done)}>
              Ukończ wszystkie
            </button>
            {taskDoneCount === 0 ? "Brak ukończonych!" : `Ukończonych zadań: ${taskDoneCount}`}
          </div>
        </>
      )}
    </div>
  )
};

export default Buttons;
