import React from 'react';
import {useDispatch} from "react-redux";
import {UseTypedSelector} from "../hooks/useTypedSelector";

const Cash: React.FC = () => {
    const dispatch = useDispatch()
    const cash = UseTypedSelector(state => state.cash.cash)

    const addCash = (cash: number) => {
        dispatch({type: 'ADD_CASH', payload: cash})
    }

    const getCash = (cash: number) => {
        dispatch({type: 'GET_CASH', payload: cash})
    }

    return (
        <div className="">
            <div>{cash}</div>
            <button onClick={() => addCash(Number(prompt()))}>Add</button>
            <button onClick={() => getCash(Number(prompt()))}>Get</button>
        </div>
    );
}

export default Cash;
