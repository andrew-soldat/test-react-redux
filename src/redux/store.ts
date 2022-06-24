import {rootReducer} from "./reducers";
import {configureStore} from "@reduxjs/toolkit";
import {postApi} from "../services/PostServices";

export const setupStore = () => configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware => getDefaultMiddleware().concat(postApi.middleware))
})

export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']