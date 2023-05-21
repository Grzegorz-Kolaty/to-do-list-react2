import { useState, useRef } from 'react';
import { Formular, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTaskContentTrimmed = newTaskContent.trim();
    newTaskContentTrimmed !== "" && addNewTask(newTaskContentTrimmed);
    setNewTaskContent("");
    inputRef.current.focus();
  };

  return (
    <Formular onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
        placeholder="Co jest do zrobienia?"
        ref={inputRef}
      />
      <Button>Dodaj zadanie</Button>
    </Formular>
  )
};

export default Form;
