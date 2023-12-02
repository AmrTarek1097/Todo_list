import { configureStore } from '@reduxjs/toolkit'
import TodoReducer from "./features/TodoSlice";

 const store = configureStore({
  reducer: {
    todos: TodoReducer,
  },
})

export default store;