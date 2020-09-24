import {Todo} from "../redux/types/todoTypes";


type ApiType = {
  todos: TodosApi
}

type TodosApi = {
  getAll: () => Promise<Todo[] | Error>,
  create: (todo: string) => Promise<Todo | Error>,
  delete: (id: number) => Promise<{} | Error>,
  update: (id: number, todo: string) => Promise<Todo | Error>,
}

type Error = {
  statusText: string,
}

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

  if (response.ok) {
    return response.json();
  } else {
    throw new Error(
      response.status === 404
        ? `${response.statusText}: ${generateErrorMsg(method)}`
        : `Server error: ${generateErrorMsg(method)}`
    );
  }
};

export const api: ApiType = {
  todos: {
    getAll: () => fetchApi<Todo[], Error>("todos/", HTTPMethod.Get, null),
    create: (todo) => fetchApi<Todo, Error>("todos/", HTTPMethod.Post, todo),
    delete: (id) => fetchApi<{}, Error>("todos/" + id, HTTPMethod.Delete, null),
    update: (id, todo) => fetchApi<Todo, Error>("todos/" + id, HTTPMethod.Put, todo),
  }
};
