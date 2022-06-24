import {CashState} from "../../types/cash";
import {createSlice} from "@reduxjs/toolkit";

const initialState: CashState = {
    cash: 0
}

export const cashSlice = createSlice({
    name: 'cash',
    initialState,
    reducers: {
        increment(state, action) {
            state.cash += action.payload
        },
        decrement(state, action) {
            state.cash -= action.payload
        }
    }
})

export default cashSlice.reducer