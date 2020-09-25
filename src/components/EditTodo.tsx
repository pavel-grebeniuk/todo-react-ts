import * as React from "react";
import {useState} from "react";
import TextField from "@material-ui/core/TextField";
import {Button, Grid} from "@material-ui/core";
import {Todo} from "../redux/types/todoTypes";
import {useDispatch} from "react-redux";
import {updateTodo} from "../redux/actions/todoAction";

type EditTodoProps = {
  todo: Todo,
  setEditMode: (editMode: boolean) => void
}

export const EditTodo: React.FC<EditTodoProps> = (props): React.ReactElement => {
  const {todo, setEditMode} = props;
  const dispatch = useDispatch();

  const [todoText, setTodoText] = useState<string>(todo.text);
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTodoText(e.target.value);
  };
  const editHandler = () => {
    const newTodo: Todo = {
      ...todo, text: todoText
    };
    if (todoText !== todo.text) {
      dispatch(updateTodo(newTodo));
    }
    setEditMode(false);
  };

  return (
    <Grid container justify="space-between">
      <Grid item>
        <TextField
          id="edit"
          value={todoText}
          onChange={inputHandler}
        />
      </Grid>
      <Grid item>
        <Button
          type='button'
          size="small"
          color="primary"
          variant="outlined"
          onClick={editHandler}
        >
          Save</Button>
      </Grid>
    </Grid>
  );
};
