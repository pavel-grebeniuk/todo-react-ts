import {Todo} from "../redux/types/todoTypes";

const baseUrl = "http://localhost:3030/";

export const api = {
  todos: {
    getAll: (): Promise<Todo[]> => fetch(baseUrl + "todos/")
      .then(res => res.json()),

    create: (todo: string): Promise<Todo> => fetch(baseUrl + "todos/", {
      method: "POST",
      body: todo,
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(res.statusText);
      }
    }),

    delete: (id: number): Promise<any> => fetch(baseUrl + "todos/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(res.statusText);
      }
    }),

    update: (id: number, todo: string): Promise<any> => fetch(baseUrl + "todos/" + id, {
      method: "PUT",
      body: todo,
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(res.statusText);
      }
    }),
  }
};
