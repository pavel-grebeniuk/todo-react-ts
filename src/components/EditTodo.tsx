import * as React from "react";
import {useEffect, useState} from "react";
import TextField from "@material-ui/core/TextField";
import {Button, Grid} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import {AppState} from "../redux/reducers/rootReducer";
import {Todo, TodosState} from "../redux/types/todoTypes";
import {updateTodo} from "../redux/actions/todoAction";

export const EditTodo: React.FC = () => {
    const {id} = useParams<{ id: string }>();
    const history = useHistory();
    const dispatch = useDispatch();

    const selectTodoById = (state: AppState, id: number): Todo => {
      return state.todo.entities.find(el => el.id === id) as Todo;
    };

    const todo = useSelector<AppState, Todo>(state => selectTodoById(state, +id));
    const {updateRequest: {loaded, error}} = useSelector<AppState, TodosState>(state => state.todo);
    const [todoText, setTodoText] = useState<string>(todo?.text);

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setTodoText(e.target.value);
    };

    const editHandler = (): void => {
      if (todo.text !== todoText) {
        const newTodo: Todo = {
          ...todo, text: todoText
        };
        dispatch(updateTodo(newTodo));
      }
    };

    useEffect(() => {
      if ((loaded && !error) || !todo) {
        history.push("/");
      }
    }, [loaded, error, todo, history]);

    return (
      <Grid container justify="space-between">
        <Grid item>
          <TextField
            id="edit"
            value={todoText}
            onChange={inputHandler}
          />
        </Grid>
        <Grid item>
          <Button
            disabled={todo ? todo.text === todoText : false}
            type='button'
            size="small"
            color="primary"
            variant="outlined"
            onClick={editHandler}
          >
            Save
          </Button>
          <Button
            type='button'
            size="small"
            color="secondary"
            variant="outlined"
            onClick={(): void => {
              history.push("/");
            }}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    );
  }
;
