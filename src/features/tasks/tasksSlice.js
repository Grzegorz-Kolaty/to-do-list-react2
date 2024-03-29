import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
    name: `tasks`,
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
        isLoading: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks.splice(index, 1)
        },
        setAllDone: ({ tasks }) => {
            tasks.map(task => task.done = true);
        },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        },
        fetchExampleTasks: () => { },
        fetchExamplesState: (state, { payload: { isLoading, error } }) => {
            state.isLoading = isLoading;
            state.error = error;
        },
    },
});

export const {
    addTask,
    removeTask,
    setAllDone,
    toggleHideDone,
    toggleTaskDone,
    fetchExampleTasks,
    fetchExamplesState,
    setTasks
} = tasksSlice.actions;
export const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectTasksHideDone = state => selectTasks(state).filter(task => task.done === true).length;
export const selectTasksToDo = state => selectTasks(state).filter(task => task.done === false).length;

export const getTaskById = (state, taskId) => selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state);

    if (!query || query.trim() === "") {
        return tasks;
    }

    return tasks.filter(({ content }) =>
        content.toUpperCase().includes(query.trim().toUpperCase()));
};

export default tasksSlice.reducer;