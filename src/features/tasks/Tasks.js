import { useTasks } from "../../useTasks";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Container } from "../../common/Container/styled";

function Tasks() {
  const {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
    hideDone,
    toggleHideDone,
    taskCount
  } = useTasks();

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />} />
      <Section
        title={`Lista zadań (${taskCount})`}
        body={
          <TaskList
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />}
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />}
      />
    </Container>
  );
};

export default Tasks;
