export type AddressType = {
    street: string,
    city: string
}

export type User = {
    id: number,
    name: string,
    username: null | string,
    address: null | Array<AddressType>
}

export type UserState = {
    users: Array<User>,
    isLoading: boolean,
    error: null | string
}

export enum UsersActionType {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
    ADD_USER = "ADD_USER",
    DELETE_USER = "DELETE_USER",
    CHANGE_USER = "CHANGE_USER"
}

export type FetchUsersAction = {
    type: typeof UsersActionType.FETCH_USERS
}

export type FetchUsersSuccessAction = {
    type: typeof UsersActionType.FETCH_USERS_SUCCESS,
    payload: Array<User>
}

export type FetchUsersErrorAction = {
    type: typeof UsersActionType.FETCH_USERS_ERROR,
    payload: string
}

export type AddUserAction = {
    type: typeof UsersActionType.ADD_USER,
    payload: string
}

export type DeleteUserAction = {
    type: typeof UsersActionType.DELETE_USER,
    payload: number
}

export type ChangeUserAction = {
    type: typeof UsersActionType.CHANGE_USER,
    payload: User
}

export type UsersAction = FetchUsersAction
    | FetchUsersSuccessAction
    | FetchUsersErrorAction
    | AddUserAction
    | DeleteUserAction
    | ChangeUserAction
