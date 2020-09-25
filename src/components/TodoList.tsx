import * as React from "react";
import {useEffect, useState} from "react";
import List from "@material-ui/core/List";
import {TodoItem} from "./TodoItem";
import {useTodosFetch} from "../hooks/useTodosFetch";
import {LoaderComponent} from "./Loader";
import {Box} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {SnackbarComponent} from "./SnackbarComponent";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loaderBox: {
      height: 10
    },
  }),
);

export const TodoList: React.FC = (props): React.ReactElement => {
  const classes = useStyles();

  const {
    entities: todos,
    fetchRequest: {loading: fetchLoading, loaded, error: fetchError},
    createRequest: {loading: createLoading, error: createError},
    updateRequest: {loading: updateLoading, error: updateError},
    deleteRequest: {loading: deleteLoading, error: deleteError}
  } = useTodosFetch();

  const [open, setOpen] = useState<boolean>(false);

  const isLoading = fetchLoading || createLoading || updateLoading || deleteLoading;
  const error = fetchError || createError || updateError || deleteError;

  useEffect(() => {
    setOpen(!!error);
  }, [error]);

  return (
    <>
      <Box className={classes.loaderBox}>
        {isLoading && <LoaderComponent/>}
      </Box>
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
      {
        open && <SnackbarComponent message={error}
                                   severity={error ? "error" : "success"}
                                   open={open}
                                   setOpen={setOpen}/>
      }
    </>
  );
};
