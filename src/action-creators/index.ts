import * as UsersActionCreator from "../action-creators/users";
import * as TodosActionCreator from "../action-creators/todos";

export default {
    ...UsersActionCreator,
    ...TodosActionCreator
}