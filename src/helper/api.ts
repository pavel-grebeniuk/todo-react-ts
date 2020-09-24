import {Todo} from "../redux/types/todoTypes";

const baseUrl = "http://localhost:3030/";

type E = {
  statusText: string,
}

const fetchApi = async <T, E>(url: string, method: string, body: string | null): Promise<T | E> => {
  const response = await fetch(url, {
    method: method,
    body: body,
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(response.statusText);
  }
};

export const api = {
  todos: {
    getAll: () => fetchApi<Todo[], E>(baseUrl + "todos/", "GET", null),

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
