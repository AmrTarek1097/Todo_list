import React from "react";
import {
  FormControl,
  Container,
  Button,
  TextField,
  Alert,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { saveTodo } from "../rtk/features/TodoSlice";
import { DevTool } from "@hookform/devtools";

export default function TodoForm() {
  const { handleSubmit, formState, register, control } = useForm();
  const { errors } = formState;
  const dispatch = useDispatch();

  const handleClick = (data) => {
    dispatch(
      saveTodo({
        id: uuidv4(),
        text: data.task,
        isComplete: false,
      })
    );
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit(handleClick)} className="todo-form">
        <FormControl fullWidth={true}>
          <>
            <TextField
              color="secondary"
              label="Add Task"
              variant="outlined"
              {...register("task", {
                required: {
                  value: true,
                  message: " Please write a task to submit.",
                },
              })}
            />

            {errors.task ? (
              <Alert
                style={{ marginTop: 10 }}
                variant="filled"
                severity="error"
              >
                {errors.task?.message}
              </Alert>
            ) : (
              ""
            )}
            <Button
              variant="contained"
              style={{ marginTop: 5 }}
              type="submit"
              className="todo-button"
            >
              <Add />
              Add
            </Button>
          </>
        </FormControl>
      </form>
      <DevTool control={control} />
    </Container>
  );
}
