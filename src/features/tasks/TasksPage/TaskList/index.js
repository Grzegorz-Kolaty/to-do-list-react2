import { useSelector, useDispatch } from "react-redux";
import { List, Item, Content, ToggleDoneButton, RemoveTaskButton, StyledLink } from "./styled";
import { selectTasksState, toggleTaskDone, removeTask, selectTasksByQuery } from "../../tasksSlice";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import searchQueryParamName from "../../searchQueryParamName";

const TaskList = () => {
  const location = useLocation();
  const query =
    (new URLSearchParams(location.search)).get(searchQueryParamName);
  const tasks = useSelector(state => selectTasksByQuery(state, query));

  const { hideDone } = useSelector(selectTasksState);
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
            <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
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
