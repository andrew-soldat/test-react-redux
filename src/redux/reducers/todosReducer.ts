import {TodosAction, TodosActionTypes, TodosState} from "../../types/todos";

const initialState: TodosState = {
    todos: [],
    isLoading: false,
    error: null,
    limit: 10,
    page: 1
}

export const todosReducer = (state = initialState, action: TodosAction): TodosState => {
    switch (action.type) {
        case TodosActionTypes.FETCH_TODOS:
            return {...state, isLoading: true }

        case TodosActionTypes.FETCH_TODOS_SUCCESS:
            return {...state, isLoading: false, todos: action.payload}

        case TodosActionTypes.FETCH_TODOS_ERROR:
            return {...state, isLoading: true, error: action.payload }

        case TodosActionTypes.SET_TODOS_PAGE:
            return {...state, page: action.payload}

        default:
            return state
    }
}