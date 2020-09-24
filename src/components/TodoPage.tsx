import * as React from "react";
import {TodoList} from "./TodoList";
import {CreateTodo} from "./CreateTodo";
import {Container} from "@material-ui/core";

export const TodoPage: React.FC = () => {
  console.log('page');
  return (
    <Container>
      <CreateTodo/>
      <TodoList/>
    </Container>
  );
};
