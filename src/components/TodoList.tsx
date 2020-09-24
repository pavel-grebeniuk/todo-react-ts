import * as React from "react";
import List from "@material-ui/core/List";
import {TodoItem} from "./TodoItem";
import {useTodosFetch} from "../hooks/useTodosFetch";


export const TodoList: React.FC = (): React.ReactElement => {
  const {entities: todos} = useTodosFetch();

  return (
    <List component="nav">
      {
        todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        ))
      }
    </List>
  );
};
