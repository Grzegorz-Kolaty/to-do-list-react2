import { List, Item, Content, ToggleDoneButton, RemoveTaskButton } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map(task => (
      <Item key={task.id} hidden={task.done && hideDone}>
        <ToggleDoneButton
          onClick={() => toggleTaskDone(task.id)}>
          {task.done ? "✔" : ""}
        </ToggleDoneButton>
        <Content done={task.done}>
          {task.id} - {task.content}
        </Content>
        <RemoveTaskButton onClick={() => removeTask(task.id)}>
          🗑
        </RemoveTaskButton>
      </Item>
    ))}
  </List>
);

export default Tasks;
