import React from "react";
import { Typography, Card } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTask } from "../rtk/features/TodoSlice";

export default function TodoCard({ completeTodo }) {
  const todoList = useSelector((state) => state.todos.todoList);

  const dispatch = useDispatch();

  const deleteNew = (id) => {
    const filteredArr = todoList.filter((item) => item.id !== id);
    dispatch(removeTask(filteredArr));
  };

  return todoList?.map((todo) => (
    <Card
      style={{ color: "Snow" }}
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={todo.id}
    >
      <CheckCircleOutlineRoundedIcon
        className="checkBox"
        color={todo.isComplete ? "success" : ""}
        onClick={() => completeTodo(todo.id)}
      />
      <Typography>{todo.text}</Typography>
      <div className="icons">
        {/* <EditIcon
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        /> */}
        <DeleteIcon
          onClick={() => {
            deleteNew(todo.id);
          }}
          className="delete-icon"
        />
      </div>
    </Card>
  ));
}
