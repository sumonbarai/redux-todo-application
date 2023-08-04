import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "this is simple task",
      completed: false,
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: state.todos.length + 1,
        text: action.payload,
        completed: false,
      };
      // push a todo
      state.todos.push(newTodo);
    },
    changeStatus: (state, action) => {
      const findTodo = state.todos.find((todo) => todo.id === action.payload);
      if (findTodo) {
        findTodo.completed = !findTodo.completed;
      }
    },

    removeTodo: (state, action) => {
      // payload must be an todo id
      const filterTodo = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      // set remaining todo is state
      state.todos = filterTodo;
    },
    updateTodo: (state, action) => {
      // payload must be an object that contain id and updated text
      const findTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      // update remaining todo
      findTodo.text = action.payload.text;
    },
  },
});

export const { addTodo, changeStatus, removeTodo, updateTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
