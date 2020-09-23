import * as React from "react";
import {TodoList} from "./TodoList";
import {CreateTodo} from "../CreateTodo";
import {Container} from "@material-ui/core";
import {useTodosFetch} from "../hooks/useTodosFetch";
import {useDispatch} from "react-redux";
import {createTodo, deleteTodo, updateTodo} from "../redux/actions/todoAction";
import {Todo} from "../redux/types/todoTypes";

export const TodoPage: React.FC = () => {
  const {entities: todos} = useTodosFetch();
  const dispatch = useDispatch();

  const onRemove = (id: string): void => {
    dispatch(deleteTodo(id));
  };

  const onCheckCompleted = (todo: Todo): void => {
    const updatedTodo = {...todo, completed: !todo.completed};
    dispatch(updateTodo(updatedTodo));
  };

  const onAddTodo = (text: string): void => {
    dispatch(createTodo(text));
  };

  return (
    <Container>
      <CreateTodo {...{onAddTodo}}/>
      <TodoList {...{todos, onRemove, onCheckCompleted}}/>
    </Container>
  );
};
