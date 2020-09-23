import * as React from "react";
import {TodoList} from "./TodoList";
import {CreateTodo} from "../CreateTodo";
import {Container} from "@material-ui/core";
import {useTodosFetch} from "../hooks/useTodosFetch";

export const TodoPage: React.FC = () => {
  const {entities: todos} = useTodosFetch();

  const onRemove = () => {

  };
  const onCheckCompleted = () => {

  };

  return (
    <Container>
      <CreateTodo/>
      <TodoList {...{todos, onRemove, onCheckCompleted}}/>
    </Container>
  );
};
