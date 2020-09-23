import * as React from "react";
import List from "@material-ui/core/List";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {TodoItem} from "./TodoItem";
import {Todo} from "../redux/types/todoTypes";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({}),
);

type TodoListProps = {
  todos: Todo[],
  onRemove: (id: string) => void,
  onCheckCompleted: (id: string) => void,
}

export const TodoList: React.FC<TodoListProps> = (props: TodoListProps): React.ReactElement => {
  const {todos, onRemove, onCheckCompleted} = props;
  const classes = useStyles();
  return (
    <List component="nav">
      {
        todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCheckCompleted={onCheckCompleted}
            onRemove={onRemove}
          />
        ))
      }
    </List>
  );
};
