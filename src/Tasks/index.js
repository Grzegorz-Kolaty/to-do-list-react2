import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask }) => {
  return (
    <ul className="list">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`list__item${task.done && hideDone ? " list__item--hidden" : ""
            }`}
        >
          <button
            className="task__checkButton task__checkButton--true"
          >
            {task.done ? "✔" : ""}
          </button>
          <span className={`task__item${task.done ? " list__item--done" : ""}`}>
            {task.content}
          </span>
          <button
            className="task__removeButton"
            onClick={() => removeTask(task.id)}
          >
            🗑</button>
        </li>
      ))}
    </ul>
  )
};

export default Tasks;
