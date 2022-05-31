import {Dispatch} from "react";
import axios from "axios";
import {TodosAction, TodosActionTypes} from "../types/todos";


export const fetchTodos = (limit = 10, page = 1) => {
    return async (dispatch: Dispatch<TodosAction>) => {
        try {
            dispatch({type: TodosActionTypes.FETCH_TODOS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/todo', {
                params: {
                    _limit: limit,
                    _page: page
                }
            })
            console.log(response.data)
            dispatch({type: TodosActionTypes.FETCH_TODOS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: TodosActionTypes.FETCH_TODOS_ERROR, payload: "Произошла ошибка при загрузке списка"})
        }
    }
}
