import { useState } from 'react';
import { Formular, Datafield } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTaskContentTrimmed = newTaskContent.trim();
    newTaskContentTrimmed !== "" && addNewTask(newTaskContentTrimmed);
    setNewTaskContent("");
  };

  return (
    <Formular onSubmit={onFormSubmit}>
      <Datafield as="input"
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
        placeholder="Co jest do zrobienia?"
      />
      <Datafield button as="button">Dodaj zadanie</Datafield>
    </Formular>
  )
};

export default Form;
