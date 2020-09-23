import {Todo} from "../redux/types/todoTypes";

const baseUrl = "http://localhost:3030/todos";

export const api = {
  todos: {
    getAll: (): Promise<Todo[]> => fetch(baseUrl)
      .then(res => res.json()),
    create: (todo: any): Promise<Todo> => fetch(baseUrl, {
      method: "POST",
      body: todo,
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
  }
};
