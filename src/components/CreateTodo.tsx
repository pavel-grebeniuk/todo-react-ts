import * as React from "react";
import {useState} from "react";
import TextField from "@material-ui/core/TextField";
import {useDispatch, useSelector} from "react-redux";
import {NewTodo, TodosState} from "../redux/types/todoTypes";
import {createTodo} from "../redux/actions/todoAction";
import {AppState} from "../redux/reducers/rootReducer";


export const CreateTodo: React.FC = () => {

  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  const {
    fetchRequest: {error: fetchError},
    createRequest: {error: createError},
    updateRequest: {error: updateError},
    deleteRequest: {error: deleteError}
  } = useSelector<AppState, TodosState>(state => state.todo);

  const error = fetchError || createError || updateError || deleteError;

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTodoText(e.target.value);
  };

  const addTodoHandler = (e: React.KeyboardEvent): void => {
    if (e.key === "Enter" && todoText.trim()) {
      const todo: NewTodo = {
        text: todoText.trim(),
        completed: false,
        createdAt: +Date.now()
      };
      dispatch(createTodo(todo));
      setTodoText("");
    }
  };

  return (
    <TextField
      disabled={!!error}
      id="standard-basic"
      label="Add new todo"
      value={todoText}
      onInput={inputHandler}
      onKeyPress={addTodoHandler}
    />
  );
};
