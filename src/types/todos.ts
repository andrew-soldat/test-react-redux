export type Todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export type TodosState = {
    todos: Array<Todo>,
    isLoading: boolean,
    error: null | string,
    limit: number,
    page: number
}

export enum TodosActionTypes {
    FETCH_TODOS = "FETCH_TODOS",
    FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
    FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
    SET_TODOS_PAGE = "SET_TODOS_PAGE"
}

export type FetchTodosAction = {
    type: TodosActionTypes.FETCH_TODOS
}

export type FetchTodosSuccessAction = {
    type: TodosActionTypes.FETCH_TODOS_SUCCESS,
    payload: Array<Todo>
}

export type FetchTodosErrorAction = {
    type: TodosActionTypes.FETCH_TODOS_ERROR,
    payload: string
}

export type SetTodosErrorAction = {
    type: TodosActionTypes.SET_TODOS_PAGE,
    payload: number
}

export type TodosAction = FetchTodosAction
    | FetchTodosSuccessAction
    | FetchTodosErrorAction
    | SetTodosErrorAction;