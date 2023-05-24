import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: `tasks`,
    initialState: {
        tasks: [],
        hideDone: false,
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
        fetchExampleTasks: () => { },
    },
});

export const { addTask, removeTask, setAllDone, toggleHideDone, toggleTaskDone, fetchExampleTasks } = tasksSlice.actions;
export const selectTasksState = state => state.tasks;
export const selectTasks = state => selectTasksState(state).tasks;
export const selectTasksHideDone = state => selectTasks(state).filter(task => task.done === true).length
export const selectTasksToDo = state => selectTasks(state).filter(task => task.done === false).length;
export default tasksSlice.reducer;