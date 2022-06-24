import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../redux/reducers";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../redux/store";


export const UseAppDispatch = () => useDispatch<AppDispatch>()
export const UseAppSelector:  TypedUseSelectorHook<RootState> = useSelector;