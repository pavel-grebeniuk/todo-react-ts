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

type TodoProps = {
  todo: Todo,
  onRemove: (id: string) => void,
  onCheckCompleted: (todo: Todo) => void,
}

export const TodoItem: React.FC<TodoProps> = (
  {todo, onRemove, onCheckCompleted}: TodoProps): React.ReactElement => {
  const {text, completed, id} = todo;

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
      <ListItemText primary={text}/>
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="edit" size="small">
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
