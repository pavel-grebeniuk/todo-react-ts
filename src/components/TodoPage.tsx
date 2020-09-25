import * as React from "react";
import {TodoList} from "./TodoList";
import {CreateTodo} from "./CreateTodo";

export const TodoPage: React.FC = () => {
  return (
    <>
      <CreateTodo/>
      <TodoList/>
    </>
  );
};
