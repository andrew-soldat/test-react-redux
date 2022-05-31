import {FetchUsersAction, UsersAction, UsersActionType, UserState} from "../../types/users";

const initialState: UserState = {
    users: []
}

export const usersReducer = (state = initialState, action: UsersAction): UserState => {
    switch (action.type) {
        case UsersActionType.FETCH_USERS:
            return {...state, users: [...state.users, ...action.payload]}

        case UsersActionType.ADD_USER:
            let user = {
                id: Date.now(),
                name: action.payload,
                username: null,
                address: null
            }
            return {...state, users: [...state.users, user]}

        case UsersActionType.DELETE_USER:
            return {...state, users: state.users.filter(u => u.id !== action.payload)}

        case UsersActionType.CHANGE_USER:
            return {...state, users: state.users.map(u => {
                    if (u.id === action.payload.id) u.name = action.payload.name
                    return u
                })}

        default:
            return state
    }
}