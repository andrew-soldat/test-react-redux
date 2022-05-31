

type AddressType = {
    street: string,
    city: string
}

type User = {
    id: number,
    name: string,
    username: null | string,
    address: null | Array<AddressType>
}

type UserState = {
    users: Array<User>
}

const initialState: UserState = {
    users: []
}

enum UsersActionType {
    ADD_MANY_USERS = "ADD_MANY_USERS",
    ADD_USER = "ADD_USER",
    DELETE_USER = "DELETE_USER"
}

type AddManyUsersAction = {
    type: typeof UsersActionType.ADD_MANY_USERS,
    payload: Array<User>
}

type AddUserAction = {
    type: typeof UsersActionType.ADD_USER,
    payload: string
}

type DeleteUserAction = {
    type: typeof UsersActionType.DELETE_USER,
    payload: number
}

type UsersAction = AddManyUsersAction | AddUserAction | DeleteUserAction

export const usersReducer = (state = initialState, action: UsersAction): UserState => {
    switch (action.type) {
        case UsersActionType.ADD_MANY_USERS:
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

        default:
            return state
    }
}