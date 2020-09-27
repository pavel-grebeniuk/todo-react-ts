import * as React from "react";
import List from "@material-ui/core/List";
import {TodoItem} from "./TodoItem";
import Alert from "@material-ui/lab/Alert";
import {useSelector} from "react-redux";
import {AppState} from "../redux/reducers/rootReducer";
import {Todo, TodosState} from "../redux/types/todoTypes";
import {useTodosFetch} from "../hooks/useTodosFetch";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    emptyBox: {
      marginTop: theme.spacing(2),
    }
  }),
);

export const TodoList: React.FC = () => {
  useTodosFetch();
  const classes = useStyles();

  const selectCompleted = (todos: Todo[], flag: boolean): Todo[] => {
    return flag ? todos : todos.filter(el => el.completed);
  };
  const {fetchRequest: {loaded}} = useSelector<AppState, TodosState>(state => state.todo);
  const todos = useSelector<AppState, Todo[]>(state => selectCompleted(state.todo.entities, state.todo.showAll));

  return (
    <>
      {
        !todos.length && loaded ?
          <Alert severity="warning"
                 className={classes.emptyBox}
          >Todolist is empty!</Alert>
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
