import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      if (!action.payload.text || /^\s*$/.test(action.payload.text)) {
        return;
      }
      state.todoList?.push(action.payload);
    },

    setCheck: (state, action) => {
      state.todoList.map((todo) => {
        if (todo.id === action.payload) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      });
    },

    removeTask: (state, action) => {
      state.todoList = action.payload;
    },

  },
});

// Action creators are generated for each case reducer function
export const { saveTodo, setCheck, removeTask, setEdit, setEditToNull } =
  todoSlice.actions;

export default todoSlice.reducer;
