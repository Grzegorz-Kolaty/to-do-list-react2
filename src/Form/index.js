import { useState, useRef } from 'react';
import { Formular, Datafield } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);
  const focusInput = () => {
    inputRef.current.focus();
  };

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
        ref={inputRef}
      />
      <Datafield button as="button"
        onClick={focusInput}
      >Dodaj zadanie</Datafield>
    </Formular>
  )
};

export default Form;
