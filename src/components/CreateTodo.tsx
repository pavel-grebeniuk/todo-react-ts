import * as React from "react";
import {useState} from "react";
import TextField from "@material-ui/core/TextField";
import {useDispatch} from "react-redux";
import {NewTodo} from "../redux/types/todoTypes";
import {createTodo} from "../redux/actions/todoAction";


export const CreateTodo: React.FC = (): React.ReactElement => {

  const [todoText, setTodoText] = useState<string>("");
  const dispatch = useDispatch();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTodoText(e.target.value);
  };

  const addTodoHandler = (e: React.KeyboardEvent): void => {
    if (e.key === "Enter") {
      const todo: NewTodo = {
        text: todoText,
        completed: false
      };
      dispatch(createTodo(todo));
      setTodoText("");
    }
  };

  return (
    <TextField
      id="standard-basic"
      label="Add new todo"
      value={todoText}
      onChange={inputHandler}
      onKeyPress={addTodoHandler}
    />
  );
};
