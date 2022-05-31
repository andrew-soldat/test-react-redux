
import {User, UsersAction, UsersActionType} from "../types/users";
import {Dispatch} from "react";
import axios from "axios";


export const fetchUsers = () => {
    return async (dispatch: Dispatch<UsersAction>) => {
        try {
            dispatch({type: UsersActionType.FETCH_USERS})
            const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
            console.log(response.data)
            dispatch({type: UsersActionType.FETCH_USERS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: UsersActionType.FETCH_USERS_ERROR, payload: "Произошла ошибка при загрузке пользователей"})
        }
    }
}