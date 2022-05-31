import {Dispatch} from "react";
import axios from "axios";
import {Todo, TodosAction, TodosActionTypes} from "../types/todos";


export const fetchTodos = (limit = 10, page = 1) => {
    return async (dispatch: Dispatch<TodosAction>) => {
        try {
            dispatch({type: TodosActionTypes.FETCH_TODOS})
            const response = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
                params: {
                    _limit: limit,
                    _page: page
                }
            })
            dispatch({type: TodosActionTypes.FETCH_TODOS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: TodosActionTypes.FETCH_TODOS_ERROR, payload: "Произошла ошибка при загрузке списка"})
        }
    }
}

export const setTodosPage = (page: number) => {
    return {type: TodosActionTypes.SET_TODOS_PAGE, payload: page}
}
