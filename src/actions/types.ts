import { FetchTodosAction, DeleteTodoAction } from "./todos";

export enum ActionTypes {
  fetchTodos,
  deleteTodo,
}

export type Action = FetchTodosAction | DeleteTodoAction;

// export enum ActionTypes {
//     fetchTodos = "FETCH_TODOS"
// }
/*
 * THE ABOVE IS A SHORT CUT WE DONT HAVE TO SPECIFY "FETCH_TODOS"
 * ALL IT NEEDS TO DO IS JUST BE UNIQUE
 * SO IF WE DONT SPECIFY THEN THE DEFUALT OS SET TO 0 THEN 1 THEN 2 ETC AND THAT IS UNIQUE
 */
