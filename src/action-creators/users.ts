
import {UsersAction, UsersActionType} from "../types/users";
import {Dispatch} from "react";
import axios from "axios";


export const fetchUsers = () => {
    return async (dispatch: Dispatch<UsersAction>) => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log(response.data)
            dispatch({type: UsersActionType.FETCH_USERS, payload: response.data})
        } catch (e) {
            console.log(e)
        }


    }
}