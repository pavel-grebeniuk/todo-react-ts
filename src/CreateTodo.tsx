import * as React from "react";
import {useState} from "react";
import TextField from "@material-ui/core/TextField";


type createTodoProps = {
  onAddTodo: (text: string) => void,
}

export const CreateTodo: React.FC<createTodoProps> = (props: createTodoProps): React.ReactElement => {
  const {onAddTodo} = props;
  const [todoText, setTodoText] = useState<string>("");
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTodoText(e.target.value);
  };
  const addTodoHandler = (e: React.KeyboardEvent): void => {
    if (e.key === "Enter") {
      onAddTodo(todoText);
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
