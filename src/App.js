import { useState, useEffect } from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

function App() {
  const [hideDone, setHideDone] = useState(
    JSON.parse(localStorage.getItem("hideDone")) || false);

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) !== null
      ? JSON.parse(localStorage.getItem("tasks"))
      : []);
  const [taskCount, setTaskCount] = useState(0);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("hideDone", JSON.stringify(hideDone))
  }, [tasks, hideDone]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
    setTaskCount(taskCount => taskCount - 1);
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task =>
    (task.id === id
      ? { ...task, done: !task.done }
      : task)
    ))
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true
    })));
  };

  const addNewTask = (content) => {
    setTasks(tasks => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      }
    ]);
    setTaskCount(taskCount => taskCount + 1);
  };

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />} />
      <Section
        title={`Lista zadań (${taskCount})`}
        body={
          <Tasks
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

export default App;
