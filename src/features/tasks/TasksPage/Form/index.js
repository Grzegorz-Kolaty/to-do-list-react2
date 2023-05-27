import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { Formular, Input, Button } from "./styled";
import { addTask } from "../../tasksSlice";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTaskContentTrimmed = newTaskContent.trim();

    if (!newTaskContentTrimmed) {
      return;
    }

    dispatch(addTask({
      content: newTaskContentTrimmed,
      done: false,
      id: nanoid(),
    }));

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
