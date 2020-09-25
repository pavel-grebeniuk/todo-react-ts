import * as React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import {Todo} from "../redux/types/todoTypes";
import {deleteTodo, updateTodo} from "../redux/actions/todoAction";
import {useDispatch} from "react-redux";
import {Box} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    todoCompleted: {
      textDecoration: "line-through",
      color: theme.palette.text.secondary
    }
  }),
);

export type TodoProps = {
  todo: Todo,
}

export const TodoItem: React.FC<TodoProps> = (
  {todo}): React.ReactElement => {

  const classes = useStyles();
  const {text, completed, id} = todo;
  const history = useHistory();

  const dispatch = useDispatch();

  const onRemove = (id: number): void => {
    dispatch(deleteTodo(id));
  };

  const onCheckCompleted = (todo: Todo): void => {
    const updatedTodo = {...todo, completed: !todo.completed};
    dispatch(updateTodo(updatedTodo));
  };

  const openEditPage = (): void => {
    history.push(`/edit/${todo.id}`);
  };

  return (
    <ListItem dense button>
      <ListItemIcon>
        <Checkbox
          checked={completed}
          edge="start"
          tabIndex={-1}
          disableRipple
          onChange={() => onCheckCompleted(todo)}
        />
      </ListItemIcon>
      <ListItemText>
        <Box className={todo.completed ? classes.todoCompleted : ""}>
          {text}
        </Box>
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton edge="end"
                    aria-label="edit"
                    size="small"
                    onClick={openEditPage}
                    disabled={todo.completed}
                    color="primary"
        >
          <EditIcon/>
        </IconButton>
        <IconButton edge="end"
                    aria-label="delete"
                    size="small"
                    onClick={() => onRemove(id)}
        >
          <DeleteIcon color='error'/>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
