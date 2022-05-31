import {CashAction, CashActionType, CashState} from "../../types/cash";

const initialState: CashState = {
    cash: 0
}

export const cashReducer = (state = initialState, action: CashAction): CashState => {
    switch (action.type) {
        case CashActionType.ADD_CASH:
            return {...state, cash: state.cash + action.payload}

        case CashActionType.GET_CASH:
            return {...state, cash: state.cash - action.payload}

        default:
            return state
    }
}