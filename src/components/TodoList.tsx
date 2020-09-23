import * as React from "react";
import List from "@material-ui/core/List";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {TodoItem} from "./TodoItem";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({}),
);

export const TodoList: React.FC = () => {
  const classes = useStyles();
  return (
    <List component="nav">
      <TodoItem/>
    </List>
  );
};
