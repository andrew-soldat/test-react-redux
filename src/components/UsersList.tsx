import React, {useEffect, useState} from 'react';
import {UseAppDispatch, UseAppSelector} from "../hooks/useRedux";
import {fetchUsers} from "../action-creators/users";
import {usersSlice} from "../redux/reducers/usersSlice";
import {User} from "../types/users";

const UserList: React.FC = () => {
    const [nameUser, setNameUser] = useState('')
    const {users, isLoading, error} = UseAppSelector(state => state.usersReducer)
    const dispatch = UseAppDispatch()
    const {addUser, deleteUser, changeUser} = usersSlice.actions

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    const addUserFunc = (user: string) => {
        if (nameUser) {
            dispatch(addUser(user))
            setNameUser('')
        }
    }

    const deleteUserFunc = (id: number) => {
        dispatch(deleteUser(id))
    }

    const changeUserFunc = (user: User) => {
        const name: string | null = prompt('', user.name);
        dispatch(changeUser({user, name}))
    }

    if (isLoading) return <div>Загрузка....</div>

    if (error) return <div>{error}</div>

    return (
        <div style={{marginTop: "30px"}}>
            <input value={nameUser} onChange={(e) => setNameUser(e.target.value)} type="text"/>
            <button onClick={() => addUserFunc(nameUser)}>Add User</button>
            <div>
                {users.length > 0
                    ?
                    <div>
                        {users.map(user => <div key={user.id}>
                                <div
                                    onClick={() => changeUserFunc(user)}
                                >{user.name}</div>
                                <div style={{marginLeft: '15px', fontSize: '12px'}}
                                     onClick={() => deleteUserFunc(user.id)}>delete
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
