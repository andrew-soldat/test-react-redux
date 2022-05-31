export enum CashActionType {
    ADD_CASH = "ADD_CASH",
    GET_CASH = "GET_CASH"
}

export type CashState = {
    cash: number
}

type AddCashActionType = {
    type: CashActionType.ADD_CASH,
    payload: number
}

type GetCashActionType = {
    type: CashActionType.GET_CASH,
    payload: number
}

export type CashAction = AddCashActionType | GetCashActionType
