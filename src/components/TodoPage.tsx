import * as React from "react";
import {TodoList} from "./TodoList";
import {CreateTodo} from "../CreateTodo";
import {Container} from "@material-ui/core";
import {useTodosFetch} from "../hooks/useTodosFetch";
import {useDispatch} from "react-redux";
import {createTodo} from "../redux/actions/todoAction";

export const TodoPage: React.FC = () => {
  const {entities: todos} = useTodosFetch();
  const dispatch = useDispatch();

  const onRemove = (id: string): void => {

  };

  const onCheckCompleted = (id: string): void => {

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
