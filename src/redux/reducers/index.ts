import {combineReducers} from "redux";
import cashReducer from "./cashSlice";
import usersReducer from "./usersSlice";
import {postApi} from "../../services/PostServices";

export const rootReducer = combineReducers({
    cashReducer,
    usersReducer,
    [postApi.reducerPath]: postApi.reducer
})

export type RootState = ReturnType<typeof rootReducer>
