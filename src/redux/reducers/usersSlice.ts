import {User, UserState} from "../../types/users";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "../../action-creators/users";

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: null
}

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser(state, action: PayloadAction<string>) {
            let user = {
                id: Date.now(),
                name: action.payload,
                username: null,
                address: null
            }
            state.users.push(user)
        },
        deleteUser(state, action: PayloadAction<number>) {
            state.users = state.users.filter(u => u.id !== action.payload)
        },
        changeUser(state, action: PayloadAction<{user: User, name: string | null}>) {
            state.users = state.users.map(u => {
                if (u.id === action.payload.user.id && action.payload.name) u.name = action.payload.name
                return u
            })
        }
    },
    extraReducers: {
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction <User[]>) => {
            state.isLoading = false
            state.error = ''
            state.users = action.payload
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export default usersSlice.reducer
