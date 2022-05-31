import React, {useEffect, useState} from 'react';
import {UseTypedSelector} from "../hooks/useTypedSelector";
import {fetchUsers} from "../action-creators/users";
import {UseActions} from "../hooks/useActions";
import {useDispatch} from "react-redux";


const UserList: React.FC = () => {
    const users = UseTypedSelector(state => state.users.users)
    const [nameUser, setNameUser] = useState('')
    const dispatch = useDispatch()
    const {fetchUsers} = UseActions()

    useEffect(() => {
        fetchUsers()
    }, [])

    const addUser = (user: string) => {
        if (nameUser) {
            dispatch({type: 'ADD_USER', payload: user})
            setNameUser('')
        }
    }

    const deleteUser = (id: number) => {
        dispatch({type: 'DELETE_USER', payload: id})
    }

    const changeUser = (user: any) => {
        user.name = prompt('', user.name)
        dispatch({type: 'DELETE_USER', payload: user})
    }

    return (
        <div style={{marginTop: "30px"}}>
            <input value={nameUser} onChange={(e) => setNameUser(e.target.value)} type="text"/>
            <button onClick={() => addUser(nameUser)}>Add User</button>
            <div>
                {users.length > 0
                    ?
                    <div>
                        {users.map(user => <div key={user.id}>
                                <div onClick={() => changeUser(user)}>{user.name}</div>
                                <div style={{marginLeft: '15px', fontSize: '12px'}}
                                     onClick={() => deleteUser(user.id)}>delete
                                </div>
                            </div>
                        )}
                    </div>
                    :
                    <div>
                        Users no
                    </div>
                }
            </div>
        </div>
    );
}

export default UserList;
