import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container/styled";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector(state => getTaskById(state, id))

  if (!task) {
    return (
      <Container>
        <Header title="Szczegóły zadania" />
        <Section
          title="Nie znaleziono takiego zadania"
          body="Sprawdź poprawność ID zadania."
        />
      </Container>
    );
  };

  return (
    <Container>
      <Header title="Szczegóły zadania" />
      <Section
        title={task ? task.content : "nie znaleziono zadania"}
        body={
          <><strong>Ukończono: </strong> {task.done ? "tak" : "nie"}</>
        }
      />
    </Container>
  );
};

export default TaskPage;
