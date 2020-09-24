import * as React from "react";
import {useState} from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import {Todo} from "../redux/types/todoTypes";
import {EditTodo} from "./EditTodo";
import {deleteTodo, updateTodo} from "../redux/actions/todoAction";
import {useDispatch} from "react-redux";

export type TodoProps = {
  todo: Todo,
}

export const TodoItem: React.FC<TodoProps> = (
  {todo}: TodoProps): React.ReactElement => {
  const {text, completed, id} = todo;
  const [editMode, setEditMode] = useState<boolean>(false);
  const dispatch = useDispatch();

  const onRemove = (id: number): void => {
    dispatch(deleteTodo(id));
  };

  const onCheckCompleted = (todo: Todo): void => {
    const updatedTodo = {...todo, completed: !todo.completed};
    dispatch(updateTodo(updatedTodo));
  };

  return (
    <ListItem dense button>
      {
        editMode
          ?
          <EditTodo {...{todo, setEditMode}}/>
          :
          <>
            <ListItemIcon>
              <Checkbox
                checked={completed}
                edge="start"
                tabIndex={-1}
                disableRipple
                onChange={() => onCheckCompleted(todo)}
              />
            </ListItemIcon>
            <ListItemText primary={text}/>
            <ListItemSecondaryAction>
              <IconButton edge="end"
                          aria-label="edit"
                          size="small"
                          onClick={() => setEditMode(true)}
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
          </>
      }
    </ListItem>
  );
};
