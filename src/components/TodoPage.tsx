import * as React from "react";
import {TodoList} from "./TodoList";
import {CreateTodo} from "../CreateTodo";
import {Container} from "@material-ui/core";

export const TodoPage: React.FC = () => {
  const todos = [
    {
      id: 1,
      text: "todo1",
      completed: false
    }
  ];
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
