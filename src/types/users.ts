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
