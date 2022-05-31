import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import ActionCreator from "../action-creators/";


export const UseActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreator, dispatch)
}