import * as React from "react";
import {TodoList} from "./TodoList";
import {CreateTodo} from "./CreateTodo";
import {TodosFilter} from "./TodosFilter";

export const TodoPage: React.FC = () => {
  return (
    <>
      <CreateTodo/>
      <TodosFilter/>
      <TodoList/>
    </>
  );
};
