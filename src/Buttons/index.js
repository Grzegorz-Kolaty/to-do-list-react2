import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone, subtitle }) => (

  <div className="buttons">
    {tasks.length > 0 && (
      <>
        <button
          onClick={toggleHideDone}
          className="buttons__button">
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
          <br />
          {subtitle}
        </button>
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
