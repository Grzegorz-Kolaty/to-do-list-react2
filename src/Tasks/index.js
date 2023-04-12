import "./style.css";

const Tasks = (props) => (
  <ul className="list">
    {props.tasks.map((task) => (
      <li
        key={task.id}
        className={`list__item${
          task.done && props.hideDoneTasks ? " list__item--hidden" : ""
        }`}
      >
        <button className="task__checkButton task__checkButton--true">
          {task.done ? "✔" : ""}
        </button>

        <span className={`task__item${task.done ? " list__item--done" : ""}`}>
          {task.content}
        </span>

        <button className="task__removeButton">🗑</button>
      </li>
    ))}
  </ul>
);

export default Tasks;
