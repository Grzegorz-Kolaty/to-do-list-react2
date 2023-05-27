import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, ToggleDoneButton, RemoveTaskButton } from "./styled";
import { selectTasksState, toggleTaskDone, removeTask } from "../../tasksSlice";
import { Link } from "react-router-dom/cjs/react-router-dom";

const TaskList = () => {
  const { tasks, hideDone } = useSelector(selectTasksState);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map(task => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <ToggleDoneButton
            onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </ToggleDoneButton>
          <Content done={task.done}>
            <Link to={`/zadania/${task.id}`}>{task.content}</Link>
          </Content>
          <RemoveTaskButton onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </RemoveTaskButton>
        </Item>
      ))}
    </List>
  );
}

export default TaskList;
