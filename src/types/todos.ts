

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
    users: Array<User>
}

export enum UsersActionType {
    FETCH_USERS = "FETCH_USERS",
    ADD_USER = "ADD_USER",
    DELETE_USER = "DELETE_USER",
    CHANGE_USER = "CHANGE_USER"
}

export type FetchUsersAction = {
    type: typeof UsersActionType.FETCH_USERS,
    payload: Array<User>
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

export type UsersAction = FetchUsersAction | AddUserAction | DeleteUserAction | ChangeUserAction
