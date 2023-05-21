import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addTask":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            content: action.payload
          },
        ]
      };
    default:
      return state;
  }
};

const addTask = content => ({
  type: "addTask",
  payload: content,
});

const selectTasks = ({ tasks }) => tasks;

const store = configureStore({ reducer: tasksReducer });
console.log(selectTasks(store.getState()));


store.dispatch(addTask("zadanie1"));
console.log(selectTasks(store.getState()));

store.dispatch(addTask("zadanie2"));
console.log(selectTasks(store.getState()));


const container = document.getElementById("root")
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
