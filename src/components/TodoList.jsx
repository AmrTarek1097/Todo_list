import React from "react";
import TodoForm from "./TodoForm";
import TodoCard from "./TodoCard";
import { Typography } from "@mui/material";
import { setCheck } from "../rtk/features/TodoSlice";

import { useDispatch } from "react-redux";

export default function TodoList() {
  const dispatch = useDispatch();

  const completeTodo = (id) => {
    dispatch(setCheck(id));
  };

  return (
    <>
      <Typography style={{ color: "Purple", padding: 20 }} variant="h4">
        Your ToDo List
      </Typography>
      <TodoForm />
      <TodoCard completeTodo={completeTodo} />
    </>
  );
}
