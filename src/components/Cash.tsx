import React from 'react';
import {UseAppDispatch, UseAppSelector} from "../hooks/useRedux";
import {cashSlice} from "../redux/reducers/cashSlice"

const Cash: React.FC = () => {
    const dispatch = UseAppDispatch()
    const cash = UseAppSelector(state => state.cashReducer.cash)
    const {increment, decrement} = cashSlice.actions;

    const incrementF = (cash: number) => {
        dispatch(increment(cash))
    }

    const decrementF = (cash: number) => {
        dispatch(decrement(cash))
    }

    return (
        <div className="">
            <div>{cash}</div>
            <button onClick={() => incrementF(Number(prompt()))}>Increment</button>
            <button onClick={() => decrementF(Number(prompt()))}>Decrement</button>
        </div>
    );
}

export default Cash;
