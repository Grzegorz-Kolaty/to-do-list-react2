import React, { useState } from 'react';
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTaskContentTrimmed = newTaskContent.trim();
    console.log(typeof newTaskContentTrimmed, `${newTaskContentTrimmed}`);
    newTaskContentTrimmed !== "" && addNewTask(newTaskContentTrimmed);
    setNewTaskContent("");
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
        placeholder="Co jest do zrobienia?"
        className="form__input"
        autoFocus
      />
      <button className="form__button">Dodaj zadanie</button>
    </form>
  )
};

export default Form;
