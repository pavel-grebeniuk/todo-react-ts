import * as React from "react";
import List from "@material-ui/core/List";
import {TodoItem} from "./TodoItem";
import {useTodosFetch} from "../hooks/useTodosFetch";
import {LoaderComponent} from "./Loader";
import {Box} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loaderBox: {
      height: 10
    },
  }),
);

export const TodoList: React.FC = (): React.ReactElement => {
  const {
    entities: todos,
    fetchRequest: {loading: fetchLoading, loaded},
    createRequest: {loading: createLoading},
    updateRequest: {loading: updateLoading},
    deleteRequest: {loading: deleteLoading}
  } = useTodosFetch();

  const classes = useStyles();

  const isLoading = fetchLoading || createLoading || updateLoading || deleteLoading;
  return (
    <>
      <Box className={classes.loaderBox}>
        {isLoading && <LoaderComponent/>}
      </Box>
      {
        !todos.length && loaded?
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
