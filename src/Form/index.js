import { useState } from 'react';
import { Formular, Input, Button } from "./styled";

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
      <Input
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
        placeholder="Co jest do zrobienia?" />
      <Button>Dodaj zadanie</Button>
    </Formular>
  )
};

export default Form;
