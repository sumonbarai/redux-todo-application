import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    text: "this is simple task",
    completed: false,
  },
];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: state.length + 1,
        text: action.payload,
        completed: false,
      };
      // push a todo
      state.push(newTodo);
    },
    changeStatus: (state, action) => {
      const findTodo = state.find((todo) => todo.id == action.payload);
      if (findTodo) {
        findTodo.completed = !findTodo.completed;
      }
    },
  },
});

export const { addTodo, changeStatus } = todoSlice.actions;

export default todoSlice.reducer;
