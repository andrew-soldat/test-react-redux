import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../redux/reducers";


export const UseTypedSelector:  TypedUseSelectorHook<RootState> = useSelector