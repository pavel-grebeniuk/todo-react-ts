import * as React from "react";
import List from "@material-ui/core/List";
import {TodoItem} from "./TodoItem";
import Alert from "@material-ui/lab/Alert";
import {useSelector} from "react-redux";
import {AppState} from "../redux/reducers/rootReducer";
import {TodosState} from "../redux/types/todoTypes";
import {useTodosFetch} from "../hooks/useTodosFetch";


export const TodoList: React.FC = (): React.ReactElement => {
  useTodosFetch();
  const {
    entities: todos,
    fetchRequest: {loaded},
  } = useSelector<AppState, TodosState>(state => state.todo);

  return (
    <>
      {
        !todos.length && loaded ?
          <Alert severity="warning">Todolist is empty!</Alert>
          :
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
      }
    </>
  );
};
