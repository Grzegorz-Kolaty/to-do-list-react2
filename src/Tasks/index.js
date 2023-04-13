import "./style.css";

const deleteTask = (name) => {
  console.log(`Nazwa zadania do usunięcia:  ${name}`)
}

const Tasks = ({ tasks, hideDone }) => {
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
            onClick={() => deleteTask(task.content)}
          >
            🗑</button>
        </li>
      ))}
    </ul>
  )
};

export default Tasks;
