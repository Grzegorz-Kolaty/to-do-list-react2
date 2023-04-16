import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone, subtitle }) => (

  <div className="buttons">
    {tasks.length > 0 && (
      <>
        <div className="buttons__hiding">
          <button
            onClick={toggleHideDone}
            className="buttons__button">
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </button>
          {subtitle}
        </div>
        <button
          onClick={setAllDone}
          className="buttons__button"
          disabled={tasks.every((task) => task.done)}
        >
          Ukończ wszystkie
        </button>

      </>
    )}
  </div >
);

export default Buttons;
