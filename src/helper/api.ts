import {Todo} from "../redux/types/todoTypes";

enum HTTPMethod {
  Get = "GET",
  Post = "POST",
  Put = "PUT",
  Delete = "DELETE",
}

const generateErrorMsg = (method: HTTPMethod): string => {
  switch (method) {
    case HTTPMethod.Get:
      return `cannot get todos list`;
    case HTTPMethod.Post:
      return `cannot create new todo`;
    case HTTPMethod.Put:
      return `cannot update todo`;
    case HTTPMethod.Delete:
      return `cannot delete todo`;
  }
};

const fetchApi = async <T, E>(url: string, method: HTTPMethod, body: string | null): Promise<T | E> => {
  const baseUrl = "http://localhost:3030/";
  const response = await fetch(baseUrl + url, {
    method: method,
    body: body,
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (response.status === 200 || response.status === 201) {
    return response.json();
  } else {
    throw new Error(
      `${response.statusText}: ${generateErrorMsg(method)}`
    );
  }
};

export const api = {
  todos: {
    getAll: () => fetchApi<Todo[], Error>("todos/", HTTPMethod.Get, null),
    create: (todo: string) => fetchApi<Todo, Error>("todos/", HTTPMethod.Post, todo),
    delete: (id: number) => fetchApi<{}, Error>("todos/" + id, HTTPMethod.Delete, null),
    update: (id: number, todo: string) => fetchApi<Todo, Error>("todos/" + id, HTTPMethod.Put, todo),
  }
};
