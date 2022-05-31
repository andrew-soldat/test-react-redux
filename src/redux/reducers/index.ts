import {combineReducers} from "redux";
import {cashReducer} from "./cashReducer";
import {usersReducer} from "./usersReducer";
import {todosReducer} from "./todosReducer";

export const rootReducer = combineReducers({
    cash: cashReducer,
    users: usersReducer,
    todos: todosReducer
})

export type RootState = ReturnType<typeof rootReducer>