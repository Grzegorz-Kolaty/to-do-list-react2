import { useSelector } from "react-redux";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Container } from "../../common/Container/styled";
import { useTasks } from "../../useTasks";
import { selectTasks } from "./tasksSlice";

function Tasks() {
  const {
    // tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
    taskCount
  } = useTasks();

  useSelector(selectTasks);

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />} />
      <Section
        title={`Lista zadań (${taskCount})`}
        body={
          <TaskList
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />}
        extraHeaderContent={
          <Buttons
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
};

export default Tasks;
